/* ===== NUVEM (Supabase): contas e progresso salvos no servidor =====================
   Só fica ativa se SUPABASE_URL e SUPABASE_ANON_KEY estiverem preenchidos em config-site.js.
   Sem isso, nada é carregado e o jogo continua no modo local (dados só no navegador).
   Passo a passo para ativar: veja LEIA-ME-NUVEM.txt e rode supabase-setup.sql no Supabase. */
(function(){
var S=window.SITE||{},URL=(S.SUPABASE_URL||'').trim().replace(/\/+$/,''),KEY=(S.SUPABASE_ANON_KEY||'').trim();
var C=window.CLOUD={on:false};
if(!/^https:\/\/[\w-]+\.supabase\.co$/.test(URL)||KEY.length<20)return;
C.on=true;
/* a biblioteca só é baixada quando a nuvem está configurada (versão fixa) */
document.write('<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"><\/script>');

var cl=null,dirty=null,timer=null,busy=false,lastWarn=0;C.onConflict=null;C.key='';
/* "base" = versão do servidor que este aparelho já conhece (guardada no navegador) */
function gb(){try{return Number(localStorage.getItem(C.key))||0}catch(e){return 0}}
function sb(v){try{if(C.key)localStorage.setItem(C.key,String(v))}catch(e){}}
C.getBase=gb;C.setBase=sb;
C.client=function(){
 if(cl)return cl;
 if(!window.supabase||!window.supabase.createClient)return null;
 cl=window.supabase.createClient(URL,KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
 return cl};
function msg(e){
 var m=String(e&&(e.message||e.error_description||e)||'');
 if(/invalid login credentials/i.test(m))return'E-mail ou senha incorretos.';
 if(/already registered|already been registered/i.test(m))return'Já existe uma conta com esse e-mail. Use Entrar.';
 if(/email not confirmed/i.test(m))return'Confirme seu e-mail antes de entrar (veja sua caixa de entrada e o spam).';
 if(/rate limit|too many|security purposes|over_.*_rate/i.test(m))return'Muitas tentativas. Aguarde alguns minutos e tente de novo.';
 if(/password should be|at least \d+ char|weak/i.test(m))return'A senha precisa ter pelo menos 6 caracteres.';
 if(/failed to fetch|network|load failed|timeout/i.test(m))return'Sem conexão com o servidor. Verifique sua internet e tente de novo.';
 if(/same password|different from the old/i.test(m))return'Escolha uma senha diferente da anterior.';
 return'Não foi possível concluir. Tente novamente em instantes.'}
var OFFLINE={error:'Não foi possível falar com o servidor agora. Verifique sua internet e recarregue a página.'};
C.msg=msg;

C.signUp=async function(email,pw,name){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.auth.signUp({email:email,password:pw,options:{data:{name:name,adult:true,terms_at:new Date().toISOString()},emailRedirectTo:location.origin+location.pathname}});
  if(r.error)return{error:msg(r.error)};
  if(r.data&&r.data.user&&Array.isArray(r.data.user.identities)&&!r.data.user.identities.length)return{error:'Já existe uma conta com esse e-mail. Use Entrar.'};
  if(!r.data.session)return{confirm:true};
  return{user:r.data.user}}catch(e){return{error:msg(e)}}};
C.signIn=async function(email,pw){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.auth.signInWithPassword({email:email,password:pw});
  if(r.error)return{error:msg(r.error)};
  return{user:r.data.user}}catch(e){return{error:msg(e)}}};
C.session=async function(){
 var c=C.client();if(!c)return null;
 try{var r=await c.auth.getSession();return r&&r.data&&r.data.session||null}catch(e){return null}};
C.signOut=async function(){var c=C.client();if(!c)return;try{await c.auth.signOut({scope:'local'})}catch(e){}};
C.reset=async function(email){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});
  if(r.error)return{error:msg(r.error)};return{ok:true}}catch(e){return{error:msg(e)}}};
C.setPassword=async function(pw){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.auth.updateUser({password:pw});
  if(r.error)return{error:msg(r.error)};return{user:r.data.user}}catch(e){return{error:msg(e)}}};
C.onRecovery=function(fn){var c=C.client();if(c)c.auth.onAuthStateChange(function(ev){if(ev==='PASSWORD_RECOVERY')fn()})};

/* progresso: uma linha por conta (tabela saves, protegida por RLS) */
C.pull=async function(){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.from('saves').select('data,sv').maybeSingle();
  if(r.error)return{error:msg(r.error)};return{row:r.data||null}}catch(e){return{error:msg(e)}}};
C.push=async function(state){
 var c=C.client();if(!c)return OFFLINE;
 try{var s=await c.auth.getSession(),u=s&&s.data&&s.data.session&&s.data.session.user;if(!u)return{error:'sem sessão'};
  /* proteção: se outro aparelho salvou algo mais novo, não sobrescreve */
  var q=await c.from('saves').select('sv').maybeSingle();
  if(q.error)return{error:msg(q.error)};
  if(q.data&&(Number(q.data.sv)||0)>gb())return{conflict:true};
  var sv=Number(state.sv)||Date.now();
  var r=await c.from('saves').upsert({user_id:u.id,data:state,sv:sv,updated_at:new Date().toISOString()});
  if(r.error)return{error:msg(r.error)};sb(sv);return{ok:true}}catch(e){return{error:msg(e)}}};
async function run(){
 if(busy||!dirty)return true;busy=true;var st=dirty;dirty=null;
 var r=await C.push(st);busy=false;
 if(r.conflict){dirty=null;if(C.onConflict)C.onConflict();return false}
 if(r.error){dirty=dirty||st;if(Date.now()-lastWarn>300000){lastWarn=Date.now();if(typeof toast==='function')toast('☁️ Não foi possível salvar na nuvem agora. Seu progresso continua salvo neste navegador.')}return false}
 return true}
/* queue: chamado a cada save() do jogo; envia no máximo a cada 20 s */
C.queue=function(state){dirty=state;if(timer)return;timer=setTimeout(function(){timer=null;run()},20000)};
C.flush=async function(){if(timer){clearTimeout(timer);timer=null}if(!dirty)return true;return run()};
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')C.flush()});
addEventListener('pagehide',function(){C.flush()});
addEventListener('online',function(){if(dirty)C.flush()});

C.deleteAccount=async function(){
 var c=C.client();if(!c)return OFFLINE;
 try{var r=await c.rpc('delete_my_account');if(r.error)return{error:msg(r.error)};await C.signOut();return{ok:true}}catch(e){return{error:msg(e)}}};
})();
