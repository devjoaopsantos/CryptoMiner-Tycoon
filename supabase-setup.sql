-- ============================================================================
-- CryptoMiner Tycoon · configuração do banco (Supabase)
-- Cole TUDO isto em: Supabase > SQL Editor > New query > Run
-- Pode rodar mais de uma vez sem problema.
-- ============================================================================

-- Uma linha de progresso por conta
create table if not exists public.saves (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb  not null,
  sv         bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint saves_tamanho check (octet_length(data::text) < 400000)
);

-- Cada pessoa só enxerga e altera a PRÓPRIA linha
alter table public.saves enable row level security;

drop policy if exists "saves_select_propria" on public.saves;
drop policy if exists "saves_insert_propria" on public.saves;
drop policy if exists "saves_update_propria" on public.saves;
drop policy if exists "saves_delete_propria" on public.saves;

create policy "saves_select_propria" on public.saves
  for select to authenticated using (auth.uid() = user_id);
create policy "saves_insert_propria" on public.saves
  for insert to authenticated with check (auth.uid() = user_id);
create policy "saves_update_propria" on public.saves
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "saves_delete_propria" on public.saves
  for delete to authenticated using (auth.uid() = user_id);

-- Permissões da API: só quem está logado, e as regras acima limitam a própria linha.
-- (Necessário se "Expor automaticamente novas tabelas" estiver desligado no projeto.)
revoke all on public.saves from anon;
grant select, insert, update, delete on public.saves to authenticated;

-- "Excluir minha conta e dados" (LGPD): apaga o usuário e, em cascata, o progresso
create or replace function public.delete_my_account()
returns void
language sql
security definer
set search_path = public, auth
as $$
  delete from auth.users where id = auth.uid();
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
