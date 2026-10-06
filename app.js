/* ===== CONFIGURAÇÃO DE PUBLICAÇÃO (edite aqui) ===================================
   DEMO: mostra o aviso de "versão de teste". Deixe true enquanto saldos/saques forem simulados.
   PAGAMENTOS / SAQUES: só mude para true quando existir servidor que confirme pagamentos e pague saques.
   MODO_TESTE: botão de créditos grátis. Deixe false em produção.
   GOOGLE_CLIENT_ID: preencha quando criar o login Google de verdade (senão o botão fica oculto). */
const CONFIG={APP:'CryptoMiner',VERSAO:'1.0.0',DEMO:true,PAGAMENTOS:false,SAQUES:false,MODO_TESTE:false,
 EMAIL_SUPORTE:(window.SITE&&window.SITE.EMAIL_CONTATO)||'',GOOGLE_CLIENT_ID:''};
/* O e-mail de suporte e os dados do responsável ficam em config-site.js (um só lugar para todas as páginas). */
/* ▸▸▸ SEÇÃO: EQUIPAMENTOS: lista, cores e desenho (SVG) */
const IT=[
{id:'b',n:'Mini Rig USB',ic:'🔌',hp:5,c:8000,k:'usb',m:'U1'},
{id:'o',n:'Rig USB Duo',ic:'🔌',hp:10,c:15000,k:'usb',f:2,m:'U2'},
{id:'w',n:'Placa Starter GT',ic:'🟢',hp:20,c:32000,k:'gpu',f:1,m:'GT'},
{id:'n',n:'Notebook Gamer',ic:'💻',hp:40,c:60000,k:'lap',m:'NB'},
{id:'p',n:'Placa Dual Fan',ic:'🟢',hp:100,c:160000,k:'gpu',f:2,m:'D2'},
{id:'g',n:'Placa RTX',ic:'🎮',hp:250,c:400000,k:'gpu',f:3,m:'RTX'},
{id:'t',n:'RTX Turbo Quad',ic:'🌀',hp:600,c:1000000,k:'gpu',f:4,m:'Q4'},
{id:'u',n:'ASIC Nano',ic:'🖥️',hp:1200,c:2500000,k:'asic',f:2,m:'AN'},
{id:'a',n:'ASIC Antminer',ic:'🖥️',hp:3000,c:6500000,k:'asic',f:3,m:'AM'},
{id:'l',n:'Rack Líquido',ic:'🧊',hp:7000,c:16000000,k:'tow',m:'LQ'},
{id:'f',n:'Mega Fazenda',ic:'🏭',hp:15000,c:40000000,k:'farm',m:'MF'},
{id:'d',n:'Datacenter',ic:'🏢',hp:35000,c:100000000,k:'farm',m:'DC'},
{id:'q',n:'Núcleo Quântico',ic:'⚛️',hp:80000,c:260000000,k:'rea',f:1,m:'QN'},
{id:'m',n:'Anel de Plasma',ic:'💠',hp:180000,c:700000000,k:'rea',f:2,m:'PL'},
{id:'x',n:'Reator de Fusão',ic:'☀️',hp:400000,c:1800000000,k:'rea',f:3,m:'FU'},
{id:'z',n:'Singularidade',ic:'🌌',hp:1000000,c:6000000000,k:'rea',f:4,m:'SG'}];
const CL=['#8d9abb','#6ee7b7','#3ee0a0','#22d3ee','#4aa3ff','#6c7bff','#8b5cf6','#b46bff','#e879f9','#ff5fb0','#ff6b6b','#ff8a3d','#ffb020','#ffd24a','#7dfcff','#ffffff'];
const fan=(x,y,r,c)=>`<g transform="translate(${x} ${y})"><circle r="${r}" fill="#0a0f1e" stroke="${c}" stroke-width="1.5"/><g class="fan"><path d="M0 ${2-r}V${r-2}M${2-r} 0H${r-2}M${-r*.7} ${-r*.7}L${r*.7} ${r*.7}M${r*.7} ${-r*.7}L${-r*.7} ${r*.7}" stroke="${c}" stroke-width="1.2"/></g><circle r="1.6" fill="${c}"/></g>`;
function art(x){const i=IT.indexOf(x),c=CL[i],k=x.k,n=x.f||2;let b='';
if(k==='usb')b=(x.f===2?[6,26]:[16]).map(y=>`<rect x="10" y="${y}" width="38" height="16" rx="3" fill="#222b45" stroke="${c}" stroke-width="1.5"/><rect x="48" y="${y+4}" width="10" height="8" fill="#aab4d0"/><rect x="15" y="${y+4}" width="9" height="8" fill="${c}"/><circle cx="36" cy="${y+8}" r="2" fill="${c}"/>`).join('');
else if(k==='lap')b=`<path d="M14 7h36v24H14z" fill="#0a0f1e" stroke="${c}" stroke-width="2"/><path d="M7 35h50l-4 7H11z" fill="#222b45" stroke="${c}" stroke-width="1.5"/><path d="M19 26l8-9 6 5 9-10" stroke="${c}" fill="none" stroke-width="1.8"/>`;
else if(k==='gpu'){const r=n>3?6:n>2?7:9;b=`<rect x="3" y="8" width="58" height="28" rx="4" fill="#1b2340" stroke="${c}" stroke-width="1.8"/>`+Array.from({length:n},(_,j)=>fan(3+58*(j+.5)/n,22,r,c)).join('')+`<rect x="3" y="38" width="58" height="3" fill="${c}"/><rect x="9" y="42" width="30" height="3" fill="#caa44a"/>`}
else if(k==='asic')b=`<rect x="5" y="7" width="54" height="34" rx="3" fill="#1b2340" stroke="${c}" stroke-width="2"/>`+(n>2?fan(16,24,8,c)+fan(32,24,8,c)+fan(48,24,8,c):fan(22,24,10,c)+fan(42,24,10,c))+`<path d="M9 10h46M9 38h46" stroke="${c}" stroke-width="1"/><circle cx="54" cy="12" r="1.8" fill="${c}"/>`;
else if(k==='tow')b=`<rect x="18" y="2" width="28" height="44" rx="3" fill="#141b30" stroke="${c}" stroke-width="2"/>`+[0,1,2,3,4].map(j=>`<rect x="22" y="${7+j*8}" width="20" height="5" rx="1" fill="#0a0f1e" stroke="${c}"/><circle cx="38" cy="${9.5+j*8}" r="1.3" fill="${c}"/>`).join('')+`<path d="M12 8v32M52 8v32" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity=".6"/>`;
else if(k==='farm')b=[4,24,44].map((x0,j)=>`<rect x="${x0}" y="${8-j%2*3}" width="16" height="${38+j%2*3}" rx="2" fill="#141b30" stroke="${c}" stroke-width="1.6"/>`+[0,1,2,3].map(r=>`<rect x="${x0+3}" y="${12-j%2*3+r*8}" width="10" height="4" fill="${c}" opacity="${.45+.15*r}"/>`).join('')).join('');
else b=`<circle cx="32" cy="24" r="21" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3" class="fan"/>`+(n>1?`<circle cx="32" cy="24" r="15" fill="none" stroke="${c}" stroke-width="1.5"/>`:'')+(n>2?`<circle cx="32" cy="24" r="10" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="2 2" class="fan2"/>`:'')+(n>3?`<circle cx="32" cy="24" r="18" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="1 3" class="fan"/>`:'')+`<circle cx="32" cy="24" r="9" fill="${c}" opacity=".25"/><circle cx="32" cy="24" r="6" fill="${c}"/>`;
return `<svg viewBox="0 0 64 48" style="filter:drop-shadow(0 0 5px ${c}88)">${b}<text x="61" y="46" font-size="6" font-weight="700" text-anchor="end" fill="${c}" opacity=".8">${x.m||''}</text></svg>`}
/* ▸▸▸ SEÇÃO: ESTADO DO JOGO, ECONOMIA E MINERAÇÃO */
const RATE={TRX:0.0002,POL:0.00016},MIN={TRX:1000,POL:500},BOOST=10;
let S={cr:10000,TRX:0,POL:0,coin:'TRX',inv:{},slots:['b',null,null,null],boost:0,cd:0,ads:0,h:[],up:{},sold:0,mc:[],daily:0,streak:0,w:{},gb:{until:0,hp:0},gcd:{},en:600,pu:[],sp:50,tm:0,t0:Date.now(),last:Date.now()},wc='TRX',iv=null;
let SK=null,USR=null;try{const id=localStorage.getItem('cm_sess');if(id){USR=JSON.parse(localStorage.getItem('cm_u_'+id));if(USR)SK='cmu_'+id}}catch(e){}
try{let r=SK&&localStorage.getItem(SK);if(SK&&!r){const old=localStorage.getItem('cmt2');if(old){r=old;localStorage.setItem(SK,old);localStorage.removeItem('cmt2')}}if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
S.fx=S.fx||{};S.SHIB=S.SHIB||0;S.XRP=S.XRP||0;S.SOL=S.SOL||0;S.al=S.al||{TRX:100-(S.sp==null?50:S.sp),POL:S.sp==null?50:S.sp,SHIB:0};
const COINS=['TRX','POL','SHIB','XRP','SOL'],WN={POL:'MetaMask (Polygon)',TRX:'TronLink (Tron)',SHIB:'MetaMask (Ethereum)',XRP:'Crossmark (XRP Ledger)',SOL:'Phantom (Solana)'},
B58='[1-9A-HJ-NP-Za-km-z]',ADR={TRX:new RegExp('^T'+B58+'{33}$'),POL:/^0x[a-fA-F0-9]{40}$/,SHIB:/^0x[a-fA-F0-9]{40}$/,XRP:new RegExp('^r'+B58+'{24,34}$'),SOL:new RegExp('^'+B58+'{32,44}$')},
PH={TRX:'Endereço Tron (T…)',POL:'Endereço Polygon (0x…)',SHIB:'Endereço Ethereum (0x…)',XRP:'Endereço XRP (r…)',SOL:'Endereço Solana'};
COINS.forEach(c=>{if(S.al[c]==null)S.al[c]=0});
const fxa=()=>Object.values(S.fx).filter(e=>e.u>Date.now()),fxp=()=>fxa().reduce((m,e)=>m*(e.pm||1),1),fxe=()=>fxa().reduce((m,e)=>m*(e.em||1),1),fxc=()=>fxa().reduce((m,e)=>m*(e.cm||1),1);
const fxl=()=>fxp()!==1?` · 🧪 poder x${+fxp().toFixed(2)}`:'';
const $=i=>document.getElementById(i);
const f=(n,d=2)=>n>=1e9?(n/1e9).toFixed(2)+'B':n>=1e6?(n/1e6).toFixed(2)+'M':n.toLocaleString('pt-BR',{maximumFractionDigits:d});
var LIVE={live:false,t:0,src:'',p:{}};
var BRL={v:5.5,t:0,live:false,dir:0,src:''};try{const c=JSON.parse(localStorage.getItem('cm_brl')||'null');if(c&&c.v>0){BRL.v=c.v;BRL.t=c.t}}catch(e){}
var EV=null,nextEv=Date.now()+45000;
const REF={POL:0.25,TRX:0.3,SHIB:0.00002,XRP:0.6,SOL:150},BASE={TRX:0.3*25000,POL:0.25*25000,SHIB:0.00002*25000,XRP:0.6*25000,SOL:150*25000},VOL={TRX:.03,POL:.03,SHIB:.06,XRP:.04,SOL:.045},RG={TRX:.3,POL:.3,SHIB:.5,XRP:.35,SOL:.4};let P={...BASE},Pp={...BASE};
const POOL={POL:400,TRX:400,SHIB:400,XRP:400,SOL:400},NET0={POL:5e6,TRX:6e6,SHIB:5.5e6,XRP:6.5e6,SOL:4.8e6},MINUSD=5,FEEUSD={POL:0.1,TRX:1,SHIB:0.5,XRP:0.2,SOL:0.1};
const fr=c=>S.al[c]/100,usd=c=>REF[c]*P[c]/BASE[c],net=c=>NET0[c]*(1+(Date.now()-S.t0)/864e5*0.02),eps=(c,h)=>h>0?POOL[c]/86400*(h/(net(c)+h))/usd(c):0,wmin=c=>MINUSD/usd(c);
var SG='';
const fx=(n,d=n>=1e6?2:8)=>n.toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
const MAXU=10,mult=()=>(1+0.08*(S.up.cool||0)+0.05*(S.up.over||0))*fxp()*(EV&&EV.k==='turbo'?2:EV&&EV.k==='heat'?0.7:1),vip=()=>(1+0.03*(S.up.vip||0))*(EV&&EV.k==='bull'?1.5:1);
const base=()=>S.slots.reduce((s,id)=>s+(id?IT.find(z=>z.id===id).hp:0),0)*mult();
/* ▸▸▸ SEÇÃO: MISSÕES E MELHORIAS (dados) */
const MS=[
{n:'Assistir 3 anúncios',v:()=>S.ads,g:3,r:5000},
{n:'Preencher 4 slots',v:()=>S.slots.filter(Boolean).length,g:4,r:8000},
{n:'Vender 30.000 VLX em cripto',v:()=>S.sold,g:30000,r:15000},
{n:'Fazer um saque (demo)',v:()=>S.h.length,g:1,r:25000},
{n:'Ter 8 slots',v:()=>S.slots.length,g:8,r:40000},
{n:'Atingir 500 GH/s',v:()=>base()+bon(),g:500,r:50000}];
const UP=[
{id:'cool',n:'Refrigeração líquida',d:'+8% de poder por nível',c:200000,k:1.8},
{id:'over',n:'Overclock',d:'+5% de poder por nível',c:350000,k:1.9},
{id:'vip',n:'Corretora VIP',d:'+3% no preço de venda por nível',c:150000,k:1.7}];
const BOTS=[['SatoshiBR',2000000],['CryptoLuna',900000],['MineiroZ',350000],['HashQueen',120000],['NodeNinja',45000],['BitPaulo',15000],['TronFan',5000],['PolyMax',1200],['NovatoX',200]];
const bon=()=>(S.boost>Date.now()?BOOST:0)+(S.gb.until>Date.now()?S.gb.hp:0);
const owned=id=>(S.inv[id]||0)+S.slots.filter(x=>x===id).length;
const cost=x=>x.c;
const slotCost=()=>250000*Math.pow(2,S.slots.length-4);
function tick(sec,h){if(h<=0||S.en<=0)return;const cs=h*0.01*fxe();if(cs*sec>S.en)sec=S.en/cs;S.en=Math.max(0,S.en-cs*sec);for(const c of COINS){const e=eps(c,h*fr(c))*sec;S[c]+=e;S.tm+=e*usd(c)}S.cr+=h*0.2*sec*fxc()}
function save(){if(!SK)return;try{localStorage.setItem(SK,JSON.stringify(S))}catch(e){}}
var OFF=null;{const d=Math.min((Date.now()-S.last)/1000,28800);if(d>5){const c0=S.cr,m0=S.tm;tick(d*0.5,base());OFF={d,cr:S.cr-c0,m:S.tm-m0}}S.last=Date.now()}
/* ▸▸▸ SEÇÃO: SALA, LOJA DE EQUIPAMENTOS, JANELAS (MODAIS), ANÚNCIO E TELA DE SAQUE */
function rack(){$('slots').innerHTML=S.slots.map((id,i)=>{const x=id&&IT.find(z=>z.id===id);
return x?`<div class="sl on" style="--rc:${CL[IT.indexOf(x)]}" data-s="${i}"><div class="ic spin">${art(x)}</div><b>${x.n}</b><small>${x.hp} GH/s</small></div>`:`<div class="sl" data-s="${i}"><div class="ic">＋</div><small>Slot vazio</small></div>`}).join('')+(S.slots.length<16?`<div class="sl lk" data-new="1"><div class="ic">🔒</div><small>Novo slot</small><b>${f(slotCost(),0)} ${CI}</b></div>`:'')}
function shop(){$('sl').innerHTML=IT.map(x=>{const i=IT.indexOf(x),c=cost(x),inv=S.inv[x.id]||0;return `<div class="sc" style="--rc:${CL[i]}"><div class="im">${art(x)}</div><h3>${x.n}</h3><div style="margin:3px 0">${rb(rIT(x))}</div><div class="pw">⚡ ${f(x.hp,2)} GH/s</div><small style="display:block;color:var(--mu);font-size:11px;margin-bottom:8px">Você tem ${owned(x.id)}${inv?` · estoque ${inv}`:''}</small>${inv>=3&&i<IT.length-1?`<button data-mg="${x.id}" style="padding:6px;font-size:11px;margin-bottom:8px">🔀 Fundir 3→1</button>`:''}<div class="ft"><div><small>PREÇO (VLX)</small><div class="pr2">${f(c,0)}</div></div><button class="by" data-b="${x.id}" ${S.cr<c?'disabled':''}>COMPRAR</button></div></div>`}).join('')}
function modal(h){$('mb').innerHTML=h;$('md').classList.remove('hide')}
function close(){clearInterval(iv);$('md').classList.add('hide')}
function openSlot(i){const id=S.slots[i],sl=`<span style="color:var(--mu);font-size:11px">SLOT ${i+1}</span>`;
if(id){const x=IT.find(z=>z.id===id),c=CL[IT.indexOf(x)];modal(`<div style="text-align:center;background:radial-gradient(circle at 50% 35%,${c}30,transparent 70%);border-radius:18px;padding:6px 0 4px">${sl}<div class="th" style="width:130px;margin:6px auto">${art(x)}</div><b style="font-size:17px;color:${c}">${x.n}</b><div style="margin-top:4px">${rb(rIT(x))}</div><div style="color:var(--ac);font-weight:800;font-size:13px;margin:4px 0 2px">⚡ ${f(x.hp,0)} GH/s</div><div class="sub" style="margin:0 0 8px">Equipamento ligado e minerando</div></div><button class="pr" data-rm="${i}" style="width:100%;margin-top:10px">↩ Remover para o estoque</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>`);return}
const l=IT.filter(x=>S.inv[x.id]>0).sort((a,b)=>b.hp-a.hp),tot=l.reduce((a,x)=>a+S.inv[x.id],0);
modal(l.length?`<div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:17px">🎒 Escolha o equipamento</b>${sl}</div><div class="sub" style="margin:2px 0 8px">${tot} ${tot>1?'itens':'item'} no estoque · toque para instalar</div><div style="max-height:56vh;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:8px;padding:2px">`+l.map(x=>{const n=S.inv[x.id],c=CL[IT.indexOf(x)];return `<div data-pl="${x.id}:${i}" style="cursor:pointer;position:relative;background:linear-gradient(160deg,#171e33,#10162a);border:1px solid ${c}66;border-radius:16px;padding:8px;text-align:center;box-shadow:0 0 14px ${c}22"><span style="position:absolute;top:8px;right:8px;z-index:1;background:${c};color:#0a0f1e;border-radius:10px;padding:1px 7px;font-size:11px;font-weight:900">x${n}</span><div class="th" style="background:#0b1022;border-radius:12px;padding:6px 14px">${art(x)}</div><div style="font-size:12px;font-weight:800;margin-top:7px;line-height:1.2">${x.n}</div><div style="margin-top:3px">${rb(rIT(x))}</div><div style="color:${c};font-size:11px;font-weight:800;margin:2px 0 7px">⚡ ${f(x.hp,0)} GH/s</div><div style="background:linear-gradient(90deg,#ffb020,#ff8a1f);color:#1a1000;border-radius:10px;padding:6px;font-size:11px;font-weight:800;letter-spacing:.5px">INSTALAR</div>${n>=3&&IT.indexOf(x)<IT.length-1?'<div style="font-size:9.5px;color:var(--ok);margin-top:5px">🔀 pode fundir 3→1</div>':''}</div>`}).join('')+`</div><button data-x="1" style="width:100%;margin-top:12px">Fechar</button>`:`<div style="text-align:center;padding:10px 0"><div style="font-size:46px">🎒</div><b style="font-size:16px">Estoque vazio</b><p class="sub">Compre equipamentos na aba Loja ou abra uma caixa misteriosa para colocar aqui.</p></div><button data-x="1" style="width:100%">Ok</button>`)}
function ad(){if(S.cd>Date.now())return;let t=0;
modal(`<div style="text-align:center"><div class="ic">📺</div><b>Anúncio (simulado)</b><div class="bar"><i id="ab"></i></div><small id="at" class="sub">Aguarde 10s…</small><button class="pr" id="ac" disabled style="width:100%">Receber recompensa</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button></div>`);
iv=setInterval(()=>{t++;$('ab').style.width=t*10+'%';$('at').textContent=t<10?`Aguarde ${10-t}s…`:'Pronto!';if(t>=10){clearInterval(iv);$('ac').disabled=false}},1000)}
function wd(){const b=S[wc],m=wmin(wc),h0=base()+bon(),n0=net(wc);
$('wnet').innerHTML=`📡 <b>Rede ${wc}</b>: ${f(n0,0)} GH/s · pool US$ ${POOL[wc]}/dia<br>Sua parte: <b class="a">${(h0/(n0+h0)*100).toFixed(6)}%</b> ≈ US$ ${f(POOL[wc]*h0/(n0+h0),4)}/dia`;
$('wb').style.width=Math.min(100,b/m*100)+'%';$('wl').innerHTML=`${fx(b)} ${wc} ≈ <b>US$ ${f(b*usd(wc),2)}</b> <span style="color:var(--mu)">(R$ ${f(b*usd(wc)*BRL.v,2)})</span><br>Mínimo: US$ ${MINUSD} (≈ ${fx(m)} ${wc}) · taxa de rede: US$ ${f(FEEUSD[wc],2)}`;$('wbtn').disabled=b<m;
cls('wcs',wc);
if(S.h.length)$('hist').innerHTML=S.h.slice(-8).reverse().map(x=>`<div class="c hrow"><span class="ib" style="color:#2ee59d">💵</span><div><b>${fx(x.v)} ${x.c}</b><small>${x.d} · ≈ US$ ${f(x.u||0,2)} → ${x.a.slice(0,10)}…</small></div><span class="chip">simulado</span></div>`).join('')}
/* ▸▸▸ SEÇÃO: ATUALIZAÇÃO DA TELA (ui) E CLIQUES GERAIS */
function ui(){const h=base()+bon(),now=Date.now();
$('cr').textContent=f(S.cr,0);$('trx').textContent=fx(S.TRX);$('pol').textContent=fx(S.POL);$('shib').textContent=fx(S.SHIB);$('xrp').textContent=fx(S.XRP);$('sol').textContent=fx(S.SOL);
$('hp').textContent=f(h,0)+' GH/s';$('rate').textContent=h?`≈ US$ ${f(dayU(h),4)}/dia · equipamentos ${f(base(),0)}${bon()?' + boost '+bon():''}${fxl()}`:'Coloque equipamentos nos slots';
const bt=$('bt'),r=Math.max(S.boost,S.gb.until)-now;bt.classList.toggle('hide',r<=0);if(r>0)bt.textContent=`⚡ +${bon()} · ${Math.floor(r/60000)}:${String(Math.floor(r/1000)%60).padStart(2,'0')}`;
$('ai').textContent=`${S.ads} anúncios assistidos`+(r>0?` · boost ativo`:'');
const cd=Math.ceil((S.cd-now)/1000);$('adb').disabled=cd>0;$('adb').textContent=cd>0?`Aguarde ${cd}s`:'▶ Assistir anúncio';
alu();vis();heroUpd();$('trxu').textContent='≈ US$ '+f(S.TRX*usd('TRX'),2);$('polu').textContent='≈ US$ '+f(S.POL*usd('POL'),2);$('shibu').textContent='≈ US$ '+f(S.SHIB*usd('SHIB'),2);$('xrpu').textContent='≈ US$ '+f(S.XRP*usd('XRP'),2);$('solu').textContent='≈ US$ '+f(S.SOL*usd('SOL'),2);dsh();wd();exc();enUI();fxu()}
document.addEventListener('click',e=>{const d=e.target.closest('[data-s],[data-new],[data-b],[data-rm],[data-pl],[data-x],[data-mg],[data-bb],[data-bx],[data-bi],#ac');if(!d)return;const D=d.dataset;
if(d.id==='ac'){clearInterval(iv);S.boost=Math.min(Math.max(S.boost,Date.now())+180000,Date.now()+1800000);S.ads++;S.en+=200;S.cd=Date.now()+60000;sfx(1);close();ui();save();return}
if(D.x){close();return}
if(D.s!==undefined){openSlot(+D.s);return}
if(D.new){const c=slotCost();if(S.cr>=c){S.cr-=c;S.slots.push(null);rack();ui();save()}else modal(`<b>VLX insuficiente</b><p class="sub">Novo slot custa ${f(c,0)} ${CI}.</p><button data-x="1" style="width:100%">Ok</button>`);return}
if(D.bx){openBox(D.bx);return}
if(D.bi){showBox(D.bi);return}
if(D.bb){const b=BT.find(z=>z.id===D.bb);if(b&&S.cr>=b.c){S.cr-=b.c;S.en+=b.e;sfx();toast(`🔋 +${f(b.e,0)} de energia`);bat();ui();save()}return}
if(D.mg){const i=IT.findIndex(z=>z.id===D.mg),n=IT[i+1];if(n&&(S.inv[D.mg]||0)>=3){S.inv[D.mg]-=3;S.inv[n.id]=(S.inv[n.id]||0)+1;sfx(1);toast(`🔀 Fusão: ${n.ic} ${n.n}!`);shop();ui();save()}return}
if(D.b){const x=IT.find(z=>z.id===D.b),c=cost(x);if(S.cr>=c){S.cr-=c;S.inv[x.id]=(S.inv[x.id]||0)+1;{const e=S.slots.indexOf(null);if(e>=0){S.inv[x.id]--;S.slots[e]=x.id;rack();toast(`${x.ic} ${x.n} instalado no slot ${e+1}`)}else toast('Sem slot livre: foi para o estoque')}sfx();shop();ui();save()}return}
if(D.pl){const[id,i]=D.pl.split(':');if(S.inv[id]>0){S.inv[id]--;S.slots[+i]=id;close();rack();ui();save()}return}
if(D.rm!==undefined){const id=S.slots[+D.rm];S.slots[+D.rm]=null;S.inv[id]=(S.inv[id]||0)+1;close();rack();ui();save()}});
/* ▸▸▸ SEÇÃO: LOGOS DAS MOEDAS */
const LG={
TRX:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#ef0027"/><path d="M8 9.5l16 3-8.5 12.5z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 9.5l10 7.5M24 12.5l-6 4.5" stroke="#fff" stroke-width="1.4" fill="none"/></svg>',
POL:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#8247e5"/><path d="M13 7l5.2 3v6L13 19l-5.2-3v-6z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M19 13l5.2 3v6L19 25l-5.2-3v-6z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>'};
const lgi=c=>`<span class="lgo">${LG[c]}</span>`;
LG.VLX='<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#hsg)"/><circle cx="16" cy="16" r="12.5" fill="none" stroke="#a85b00" stroke-opacity=".55" stroke-width="1.5"/><path d="M18.5 6L9 18h6l-1.5 8L23 14h-6z" fill="#7a3f00" stroke="#7a3f00" stroke-width="1" stroke-linejoin="round"/></svg>';
LG.SHIB='<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#ffa409"/><path d="M6 14l2-10 7 6z" fill="#e42d04"/><path d="M26 14l-2-10-7 6z" fill="#e42d04"/><ellipse cx="16" cy="18" rx="9" ry="8" fill="#fff4e0"/><path d="M9 14q7-6 14 0q-7 3-14 0z" fill="#ffa409"/><circle cx="12.5" cy="17" r="1.3" fill="#222"/><circle cx="19.5" cy="17" r="1.3" fill="#222"/><path d="M14.3 21h3.4L16 23z" fill="#222"/><path d="M16 23q-2 2-3.5 1M16 23q2 2 3.5 1" stroke="#222" fill="none" stroke-width=".9" stroke-linecap="round"/></svg>';
LG.XRP='<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#23292f"/><path d="M8.5 9.5Q16 17 23.5 9.5M8.5 22.5Q16 15 23.5 22.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>';
LG.SOL='<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#111"/><path d="M10.5 8.5H24l-2.5 3.5H8zM8 14.2h13.5l2.5 3.5H10.5zM10.5 20H24l-2.5 3.5H8z" fill="url(#sog)"/></svg>';
const CI=`<span class="lgo">${LG.VLX}</span>`;
$('crl').innerHTML=CI+' VLX';
$('lt').innerHTML=lgi('TRX')+' TRX';$('lp').innerHTML=lgi('POL')+' POL';
$('ls').innerHTML=lgi('SHIB')+' SHIB';$('lxr').innerHTML=lgi('XRP')+' XRP';$('lsl').innerHTML=lgi('SOL')+' SOL';


/* ▸▸▸ SEÇÃO: CÂMBIO: cotações e venda de cripto por VLX */
let xc='TRX';
setInterval(()=>{if(LIVE.live&&Date.now()-LIVE.t>90000)LIVE.live=false;if(!LIVE.live)for(const c in P){Pp[c]=P[c];const B0=LIVE.p[c]?LIVE.p[c]*BASE[c]/REF[c]:BASE[c];P[c]=Math.min(B0*(1+RG[c]),Math.max(B0*(1-RG[c]),P[c]*(1+(Math.random()-.5)*VOL[c])))}ui()},3000);
const amt=()=>Math.min(S[xc],Math.max(0,parseFloat($('xa').value.replace(',','.'))||0));
function exc(){const p=P[xc],up=p>=Pp[xc],a=amt();
cls('xcs',xc);
$('xp').innerHTML=`1 ${lgi(xc)} ${xc} = <b class="a">${f(p*vip(),2)} ${CI}</b> <span class="${up?'ok':'t'}">${up?'▲':'▼'}</span>`;
$('xb').textContent=`Saldo: ${fx(S[xc])} ${xc}`;$('xr').innerHTML=`Você recebe: ${f(a*p*vip(),0)} ${CI}`;const bl=EV&&EV.k==='bull'?1.5:1;
$('qt').innerHTML=`<small><span class="live"></span>${LIVE.live?'Cotação AO VIVO · '+LIVE.src:'Cotação simulada (sem conexão)'} · ${new Date().toLocaleTimeString('pt-BR')}</small>`+COINS.map(c=>`<div class="rk"><span>${lgi(c)} ${c}</span><span><b class="a">${f(P[c]*bl,2)} ${CI}</b> <span style="color:var(--mu);font-size:11px">US$ ${f(usd(c),c==='SHIB'?8:4)}</span> <span class="${P[c]>=Pp[c]?'ok':'t'}">${P[c]>=Pp[c]?'▲':'▼'}</span></span></div>`).join('')+`<div class="rk"><span>Relação</span><span>1 TRX = ${fx(P.TRX/P.POL)} POL</span></div>`;
$('xs').disabled=a<=0;swp()}
coinRow('xcs',c=>{xc=c;exc()});$('xa').oninput=exc;
document.querySelectorAll('[data-pc]').forEach(b=>b.onclick=()=>{$('xa').value=(Math.floor(S[xc]*b.dataset.pc*1e8)/1e8).toString();exc()});
$('xs').onclick=()=>{const a=amt();if(a<=0)return;const g=a*P[xc]*vip();S[xc]-=a;S.cr+=g;S.sold+=g;sfx(1);$('xa').value='';ui();save();modal(`<b>✅ Venda concluída!</b><p class="sub">${fx(a)} ${xc} → ${f(g,0)} ${CI}</p><button data-x="1" style="width:100%">Ok</button>`)};
/* ▸▸▸ SEÇÃO: EXTRAS: bônus diário, missões, melhorias e ranking */
function xt(){const now=Date.now(),ok=now-S.daily>=72e6,nx=(S.streak>0&&now-S.daily<1728e5)?S.streak+1:1;
$('dl').textContent=`🔥 Sequência: ${S.streak} dia(s)`;
$('ds').innerHTML=ok?`Hoje: +${f(4000*Math.min(nx,7),0)} ${CI}`+(nx%7===0?' + 1 TRX':' · no 7º dia ganha 1 TRX'):`Volte em ${Math.ceil((72e6-(now-S.daily))/36e5)}h`;$('db').disabled=!ok;
$('ms').innerHTML=MS.map((m,i)=>{const v=Math.min(m.v(),m.g),d=S.mc.includes(i);return `<div class="c" style="margin-bottom:8px"><div class="row" style="margin:0"><div class="it"><span class="ib" style="color:${d?'#2ee59d':'#ff6fa8'}">${d?'✅':'🎯'}</span><div><b>${m.n}</b><small>${f(v,0)} / ${f(m.g,0)} · prêmio ${f(m.r,0)} ${CI}</small></div></div><button data-mc="${i}" ${(v<m.g||d)?'disabled':''}>${d?'✔':'Resgatar'}</button></div><div class="pg"><i style="width:${v/m.g*100}%"></i></div></div>`}).join('');
$('ups').innerHTML=UP.map(u=>{const l=S.up[u.id]||0,c=Math.ceil(u.c*Math.pow(u.k,l));return `<div class="c row"><div class="it"><span class="ib" style="color:#4fd8ff">🔧</span><div><b>${u.n} · nv ${l}/${MAXU}</b><small>${u.d}</small><div class="pg" style="width:100%"><i style="width:${l/MAXU*100}%"></i></div></div></div><button data-up="${u.id}" ${(l>=MAXU||S.cr<c)?'disabled':''}>${l>=MAXU?'MAX':f(c,0)+' '+CI}</button></div>`}).join('');
const gr=1+(now-S.t0)/864e5*0.1,L=BOTS.map(([n,h])=>({n,h:h*gr})).concat([{n:'Você',h:base()+bon(),me:1}]).sort((a,b)=>b.h-a.h);
$('rk').innerHTML=L.map((x,i)=>`<div class="rk ${x.me?'me':''}"><span><span class="mdl m${i<3?i:'x'}">${i+1}</span>${x.n}</span><span>${f(x.h,0)} GH/s</span></div>`).join('')}
$('xt').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const D=b.dataset,now=Date.now();
if(b.id==='db'){if(now-S.daily<72e6)return;const nx=(S.streak>0&&now-S.daily<1728e5)?S.streak+1:1;S.streak=nx;S.daily=now;S.cr+=4000*Math.min(nx,7);if(nx%7===0)S.TRX+=1}
if(D.mc!==undefined){const m=MS[+D.mc];if(m.v()>=m.g&&!S.mc.includes(+D.mc)){S.mc.push(+D.mc);S.cr+=m.r}}
if(D.up){const u=UP.find(z=>z.id===D.up),l=S.up[u.id]||0,c=Math.ceil(u.c*Math.pow(u.k,l));if(l<MAXU&&S.cr>=c){S.cr-=c;S.up[u.id]=l+1}}
sfx(1);xt();ui();save()};
/* ▸▸▸ SEÇÃO: SOM, AVISOS, EVENTOS ALEATÓRIOS E RESET */
let snd=true;try{snd=localStorage.getItem('cmts')!=='0'}catch(e){}
function sfx(k){if(!snd)return;try{const a=window.AC||(window.AC=new(window.AudioContext||window.webkitAudioContext)()),o=a.createOscillator(),g=a.createGain();o.type='triangle';o.frequency.value=k?880:520;g.gain.value=.06;o.connect(g);g.connect(a.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+.18);o.stop(a.currentTime+.2)}catch(e){}}
function toast(m){const t=document.createElement('div');t.className='ts';t.innerHTML=m;document.body.appendChild(t);setTimeout(()=>t.remove(),3500)}
$('snb').textContent=snd?'🔊':'🔇';
$('snb').onclick=()=>{snd=!snd;$('snb').textContent=snd?'🔊':'🔇';try{localStorage.setItem('cmts',snd?'1':'0')}catch(e){}sfx()};
const EVT={bull:'📈 Bull Run! Cotação x1,5',heat:'🔥 Superaquecimento! Poder -30%',turbo:'⚡ Turbo! Poder x2'};
function evt(){const now=Date.now();
if(EV&&EV.until<now){EV=null;$('evb').className='c hide';ui()}
if(!EV&&now>nextEv){const k=['bull','heat','turbo'][Math.floor(Math.random()*3)];nextEv=now+9e4+Math.random()*9e4;
EV={k,until:now+(k==='bull'?6e4:3e4)};toast(EVT[k]);sfx(1);ui()}
if(EV){$('evb').className='c';$('evb').textContent=`${EVT[EV.k]} · ${Math.ceil((EV.until-now)/1000)}s`}}
setInterval(evt,1000);
$('rst').onclick=()=>modal('<b>Resetar tudo?</b><p class="sub">Isso apaga todo o seu progresso.</p><button class="pr" id="rsok" style="width:100%">Sim, resetar</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>');
$('mb').onclick=e=>{if(e.target.id==='rsok'){save=()=>{};try{localStorage.removeItem(SK)}catch(x){}location.reload()}};
/* ▸▸▸ SEÇÃO: TROCA DE CRIPTO POR CRIPTO (swap) */
let sw='TRX',swt='POL';
const sv=()=>Math.min(S[sw],Math.max(0,parseFloat($('sa').value.replace(',','.'))||0));
function spk(){const k=sw+swt;if($('spk').dataset.k===k)return;$('spk').dataset.k=k;$('spk').innerHTML=[['De','swf',sw],['Para','swt',swt]].map(([t,a,cur])=>`<small>${t}</small><div style="display:flex;gap:6px;margin:3px 0 6px">`+COINS.map(c=>`<button data-${a}="${c}" class="${cur===c?'on':''}" style="flex:1;min-width:62px;padding:8px 4px;font-size:12px">${lgi(c)} ${c}</button>`).join('')+'</div>').join('')}
$('spk').onclick=e=>{const b=e.target.closest('[data-swf],[data-swt]');if(!b)return;if(b.dataset.swf){sw=b.dataset.swf;if(swt===sw)swt=COINS.find(z=>z!==sw)}else{swt=b.dataset.swt;if(sw===swt)sw=COINS.find(z=>z!==swt)}$('sa').value='';swp()};
function swp(){const to=swt,v=sv(),r=P[sw]/P[to];spk();
$('sd').innerHTML=`${lgi(sw)} ${sw} ➜ ${lgi(to)} ${to}`;
$('sq').innerHTML=`1 ${sw} = <b class="a">${fx(r)}</b> ${to}`;
$('sb').textContent=`Saldo: ${fx(S[sw])} ${sw}`;$('sr').textContent=`Você recebe: ${fx(v*r*0.99)} ${to}`;$('ss').disabled=v<=0}
$('sflip').onclick=()=>{[sw,swt]=[swt,sw];$('sa').value='';swp()};
$('sa').oninput=swp;
document.querySelectorAll('[data-sp]').forEach(b=>b.onclick=()=>{$('sa').value=(Math.floor(S[sw]*b.dataset.sp*1e8)/1e8).toString();swp()});
$('ss').onclick=()=>{const to=swt,v=sv();if(v<=0)return;const g=v*(P[sw]/P[to])*0.99;S[sw]-=v;S[to]+=g;$('sa').value='';sfx(1);ui();save();modal(`<b>✅ Troca concluída!</b><p class="sub">${fx(v)} ${sw} → ${fx(g)} ${to}</p><button data-x="1" style="width:100%">Ok</button>`)};
/* ▸▸▸ SEÇÃO: CARTEIRAS: conectar MetaMask, TronLink, Phantom e Crossmark */
function fa(){$('addr').value=S.w[wc]||'';$('addr').placeholder=PH[wc]}
function wal(){$('wc2').innerHTML=COINS.map(c=>S.w[c]?`<div class="rk"><span>${lgi(c)} ${c} · ${S.w[c].slice(0,6)}…${S.w[c].slice(-4)}</span><button data-dc="${c}" style="padding:3px 10px;font-size:12px">Sair</button></div>`:`<div class="rk"><span>${lgi(c)} ${c}</span><span class="sub" style="margin:0">não conectada</span></div>`).join('')}
function okW(c,ad){S.w[c]=ad;wc=c;save();wal();ui();fa();pq();sfx(1);modal(`<b>✅ Carteira conectada!</b><p class="sub">${lgi(c)} ${ad.slice(0,8)}…${ad.slice(-6)}</p><button data-x="1" style="width:100%">Ok</button>`)}
function noW(t,ti){modal(`<b>${ti||'Carteira não encontrada'}</b><p class="sub">${t}</p><p class="sub">Você também pode colar o endereço manualmente no campo do saque.</p><button data-x="1" style="width:100%">Ok</button>`)}
const EIP=[];addEventListener('eip6963:announceProvider',e=>{if(e.detail&&e.detail.provider)EIP.push(e.detail)});dispatchEvent(new Event('eip6963:requestProvider'));
function mmProv(){const m=EIP.find(x=>x.info&&x.info.rdns==='io.metamask');if(m)return m.provider;const e=window.ethereum;if(!e)return null;if(Array.isArray(e.providers)){const q=e.providers.find(x=>x.isMetaMask&&!x.isPhantom);if(q)return q}return e}
const CAN='A conexão foi recusada ou cancelada na carteira.',NC='Conexão não concluída',CC='Conexão cancelada';
$('cMM').onclick=async()=>{const e=mmProv();if(!e){noW('Instale a extensão MetaMask (ou outra carteira EVM) e abra o jogo no navegador com ela ativa.');return}
try{const a=await e.request({method:'eth_requestAccounts'});
try{await e.request({method:'wallet_switchEthereumChain',params:[{chainId:'0x89'}]})}catch(x){if(x&&x.code===4902){try{await e.request({method:'wallet_addEthereumChain',params:[{chainId:'0x89',chainName:'Polygon Mainnet',nativeCurrency:{name:'POL',symbol:'POL',decimals:18},rpcUrls:['https://polygon-rpc.com'],blockExplorerUrls:['https://polygonscan.com']}]})}catch(y){}}}
if(a&&a[0]&&ADR.POL.test(a[0])){S.w.SHIB=a[0];okW('POL',a[0])}else noW('Não recebemos nenhum endereço. Desbloqueie a MetaMask e tente de novo.',NC)}
catch(x){if(x&&x.code===-32002)noW('Já existe um pedido de conexão aberto na MetaMask. Abra a extensão e conclua ou cancele o pedido.',NC);else if(x&&(x.code===4001||/reject|denied|cancel/i.test(x.message||'')))noW(CAN,CC);else noW('Não foi possível conectar à MetaMask. Desbloqueie a carteira, recarregue a página e tente de novo.',NC)}};
$('cTL').onclick=async()=>{const tl=window.tronLink;if(!tl&&!window.tronWeb){noW('Instale a extensão TronLink e abra o jogo no navegador com ela ativa.');return}
try{if(tl&&tl.request){const r=await tl.request({method:'tron_requestAccounts'});if(r&&r.code===4001){noW(CAN,CC);return}}
const ad=window.tronWeb&&window.tronWeb.defaultAddress&&window.tronWeb.defaultAddress.base58;
if(ad&&ADR.TRX.test(ad))okW('TRX',ad);else noW('Desbloqueie a TronLink, selecione uma conta e tente de novo.',NC)}catch(x){noW(CAN,CC)}};
$('cPH').onclick=async()=>{const e=(window.phantom&&window.phantom.solana)||window.solana;if(!e||!e.connect){noW('Instale a extensão Phantom e abra o jogo no navegador com ela ativa.');return}
try{const r=await e.connect(),k=(r&&r.publicKey)||e.publicKey,ad=k&&k.toString();if(ad&&ADR.SOL.test(ad))okW('SOL',ad);else noW('Desbloqueie a Phantom e tente de novo.',NC)}catch(x){noW(CAN,CC)}};
$('cXR').onclick=async()=>{const cm=window.crossmark;if(!(window.xrpl&&window.xrpl.isCrossmark)&&!cm){noW('Instale a extensão Crossmark (carteira do XRP Ledger) e abra o jogo no navegador com ela ativa.');return}
try{const o=cm&&((cm.methods&&cm.methods.signInAndWait&&cm.methods)||(cm.async&&cm.async.signInAndWait&&cm.async));if(!o){noW('A Crossmark foi detectada, mas não respondeu ao pedido de conexão. Recarregue a página e tente de novo.',NC);return}
const r=await o.signInAndWait(),ad=r&&r.response&&r.response.data&&r.response.data.address;
if(ad&&ADR.XRP.test(ad))okW('XRP',ad);else noW('Desbloqueie a Crossmark, selecione uma conta e tente de novo.',NC)}catch(x){noW(CAN,CC)}};
$('wc2').onclick=e=>{const b=e.target.closest('[data-dc]');if(!b)return;delete S.w[b.dataset.dc];save();wal();fa();pq()};
wal();fa();
/* ▸▸▸ SEÇÃO: MINIJOGOS: estrutura comum, recompensa e jogos */
let GI=[],GCB=null;
function adThen(msg,cb){GCB=cb;let t=0;modal(`<div style="text-align:center"><div class="ic">📺</div><b>Anúncio (simulado)</b><p class="sub">${msg}</p><div class="bar"><i id="ab2"></i></div><small id="at2" class="sub">Aguarde 6s…</small><button class="pr" id="acg" disabled style="width:100%">Receber poder</button></div>`);
iv=setInterval(()=>{t++;$('ab2').style.width=t/6*100+'%';$('at2').textContent=t<6?`Aguarde ${6-t}s…`:'Pronto!';if(t>=6){clearInterval(iv);$('acg').disabled=false}},1000)}
$('mb').addEventListener('click',e=>{if(e.target.id==='acg'&&GCB){const f=GCB;GCB=null;close();f()}});
function reward(sc,name){const hp=Math.round((5+sc*.15)*(name==='def'?2:1)),now=Date.now(),on=S.gb.until>now;
S.gb={until:Math.max(on?S.gb.until:0,now+180000),hp:Math.max(on?S.gb.hp:0,hp)};S.gcd[name]=now+120000;S.en+=300;sfx(1);toast(`⚡ +${hp} GH/s por 3 min!`);ui();save()}
function fin(sc,name){GI.forEach(clearInterval);GI=[];$('gm').classList.add('hide');adThen(`Fim de jogo! Pontuação: <b>${sc}%</b>. Assista ao anúncio para receber <b>+${Math.round((5+sc*.15)*(name==='def'?2:1))} GH/s</b> por 3 minutos e <b>+300 🔋</b>.`,()=>reward(sc,name))}
function quit(){GI.forEach(clearInterval);GI=[];$('gm').classList.add('hide')}
const QB='<button id="gq" style="width:100%;margin-top:12px">Desistir</button>';
let GT=0;
function gframe(title,secs,body,onEnd){GI.forEach(clearInterval);GI=[];GT=secs;
$('gb').innerHTML=`<b>${title}</b><div class="sub"><span id="gt">${secs}</span>s restantes</div><div class="pg" style="margin-bottom:8px"><i id="gtb" style="width:100%"></i></div>${body}`+QB;$('gm').classList.remove('hide');$('gq').onclick=quit;
GI=[setInterval(()=>{GT--;$('gt').textContent=Math.max(0,GT);$('gtb').style.width=Math.max(0,GT)/secs*100+'%';if(GT<=5)$('gtb').style.background='#ff5a5f';if(GT<=0){GI.forEach(clearInterval);GI=[];onEnd()}},1000)]}
function gTap(){let pts=0,cb=0;const tg={},T=['🪙','🪙','🪙','🪙','🪙','🪙','🪙','💎','💎','💣','💣'];
gframe('🪙 Caça-Hash',25,`<div class="gg g4" id="gg">${[...Array(12)].map((_,i)=>`<div class="gc" data-i="${i}"></div>`).join('')}</div><div class="sub" style="margin-top:8px">Pontos <b id="gs">0</b> · Combo <b id="gc2" class="a">x1</b> · 💎 vale 3 · 💣 evite!</div>`,()=>fin(Math.min(100,Math.round(pts/50*100)),'tap'));
const cs=()=>$('gg').children,mul=()=>1+Math.min(2,Math.floor(cb/4));
function hud(){$('gs').textContent=Math.max(0,pts);$('gc2').textContent='x'+mul()}
function clr(i){const c=cs()[i];if(!c)return;c.className='gc';c.textContent='';delete tg[i]}
function spawn(){const free=[...Array(12).keys()].filter(i=>!tg[i]);if(!free.length)return;const i=free[Math.floor(Math.random()*free.length)],ty=T[Math.floor(Math.random()*T.length)],c=cs()[i];
c.textContent=ty;c.className='gc on'+(ty==='💣'?' bomb':ty==='💎'?' gem':'');tg[i]=ty;
setTimeout(()=>{if(tg[i]===ty&&cs()[i]){if(ty!=='💣'){cb=0;hud()}clr(i)}},Math.max(550,1000-(25-GT)*18))}
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c)return;const i=+c.dataset.i,ty=tg[i];
if(!ty){cb=0;pts=Math.max(0,pts-1);hud();return}
if(ty==='💣'){pts=Math.max(0,pts-3);cb=0;sfx()}else{cb++;pts+=(ty==='💎'?3:1)*mul();sfx(1)}clr(i);hud()};
GI.push(setInterval(spawn,520))}
function gMem(){const em=['⚡','🔌','🧊','🌀','⚛️','☀️'],d=[...em,...em].sort(()=>Math.random()-.5);let op=[],found=0,mv=0,lock=false;
gframe('🧠 Memória de Chips',60,`<div class="sub">Jogadas: <b id="gs">0</b></div><div class="gg mm" id="gg">${d.map((_,i)=>`<div class="gc" data-i="${i}"></div>`).join('')}</div>`,()=>fin(Math.round(found/6*50),'mem'));
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c||lock||c.classList.contains('up'))return;const i=+c.dataset.i;c.classList.add('up');c.textContent=d[i];op.push(i);
if(op.length===2){mv++;$('gs').textContent=mv;const[a,b]=op;if(d[a]===d[b]){found++;op=[];sfx(1);if(found===6)setTimeout(()=>fin(Math.max(20,Math.min(100,100-(mv-6)*8)),'mem'),500)}else{lock=true;setTimeout(()=>{[a,b].forEach(k=>{const x=$('gg').children[k];if(x){x.classList.remove('up');x.textContent=''}});op=[];lock=false},700)}}}}
function gSeq(){const col=['#ff5a5f','#3ee0a0','#4aa3ff','#ffb020'];let sq=[],i=0,lv=0,show=true;
gframe('🎹 Sequência Hash',45,`<div class="sub">Nível <b id="gs">1</b> · repita a sequência</div><div class="gg sq" id="gg">${col.map((c,k)=>`<div class="gc" data-i="${k}" style="background:${c}33;border-color:${c}"></div>`).join('')}</div>`,()=>fin(Math.min(100,lv*10),'seq'));
const cs=()=>$('gg').children;
function flash(k){const c=cs()[k];if(!c)return;c.style.background=col[k];sfx(k%2);setTimeout(()=>{if(cs()[k])c.style.background=col[k]+'33'},300)}
function play(){show=true;let j=0;const t=setInterval(()=>{if(j>=sq.length){clearInterval(t);show=false;i=0;return}flash(sq[j++])},600);GI.push(t)}
function next(){show=true;$('gs').textContent=sq.length+1;sq.push(Math.floor(Math.random()*4));setTimeout(play,500)}
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c||show)return;const k=+c.dataset.i;flash(k);
if(k===sq[i]){i++;if(i===sq.length){lv=sq.length;if(lv>=10)fin(100,'seq');else next()}}else{show=true;i=0;setTimeout(play,700)}};
next()}
function gMath(){let ok=0,q=0;
gframe('➕ Cálculo Hash',30,`<div id="gq2" style="font-size:30px;font-weight:800;text-align:center;margin:12px 0"></div><div class="gg sq" id="gg"></div><div class="sub" style="margin-top:8px">Acertos: <b id="gs">0</b> · erro tira 2s</div>`,()=>fin(Math.min(100,Math.round(ok/12*100)),'math'));
function nq(){let a=2+Math.floor(Math.random()*18),b=2+Math.floor(Math.random()*9);const o=['+','−','×'][Math.floor(Math.random()*3)];if(o==='×')a=2+Math.floor(Math.random()*9);if(o==='−'&&b>a)[a,b]=[b,a];
q=o==='+'?a+b:o==='−'?a-b:a*b;const op=new Set([q]);while(op.size<4)op.add(q+Math.floor(Math.random()*11)-5);
$('gq2').textContent=`${a} ${o} ${b} = ?`;$('gg').innerHTML=[...op].sort(()=>Math.random()-.5).map(v=>`<div class="gc" data-v="${v}" style="font-size:22px;aspect-ratio:2">${v}</div>`).join('')}
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c)return;if(+c.dataset.v===q){ok++;sfx(1)}else{sfx();GT=Math.max(1,GT-2)}$('gs').textContent=ok;nq()};nq()}
function gReact(){let n=0,sum=0,st=0,tm;const sc=()=>n?Math.max(0,Math.min(100,Math.round((700-sum/n)/450*100))):0;
gframe('⚡ Reflexo Hash',30,`<div id="gr" class="gc" style="width:100%;aspect-ratio:1.6;font-size:18px;font-weight:700;margin-top:6px"></div><div class="sub" style="margin-top:8px">Rodada <b id="gs">1</b>/5 · média <b id="gm2">—</b></div>`,()=>fin(sc(),'react'));
function round(){st=0;const g=$('gr');if(!g)return;g.style.background='#3a0f14';g.style.borderColor='#ff5a5f';g.textContent='Espere ficar verde…';tm=setTimeout(()=>{const g2=$('gr');if(!g2)return;g2.style.background='#0f3a24';g2.style.borderColor='#3ee0a0';g2.textContent='TOQUE!';st=Date.now()},1000+Math.random()*2000)}
$('gr').onclick=()=>{if(!st){clearTimeout(tm);$('gr').textContent='Cedo demais! Tente de novo';setTimeout(round,800);return}
const ms=Date.now()-st;st=0;sum+=ms;n++;$('gm2').textContent=Math.round(sum/n)+'ms';sfx(1);if(n>=5){fin(sc(),'react');return}$('gs').textContent=n+1;round()};round()}
function gDiff(){let ok=0,odd=0;const E=[['🌕','🌖'],['🟠','🟡'],['🔷','🔹'],['⭐','🌟'],['🔴','🟥'],['🕐','🕑']];
gframe('🔍 Ache o Diferente',30,`<div class="gg g5" id="gg"></div><div class="sub" style="margin-top:8px">Acertos: <b id="gs">0</b> · erro tira 2s</div>`,()=>fin(Math.min(100,Math.round(ok/12*100)),'diff'));
function nq(){const p=E[Math.floor(Math.random()*E.length)];odd=Math.floor(Math.random()*16);$('gg').innerHTML=[...Array(16)].map((_,i)=>`<div class="gc" data-i="${i}">${i===odd?p[1]:p[0]}</div>`).join('')}
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c)return;if(+c.dataset.i===odd){ok++;sfx(1)}else{sfx();GT=Math.max(1,GT-2)}$('gs').textContent=ok;nq()};nq()}
function gPrec(){let r=0,tot=0,pos=0,dir=1,ct=.5,sp=.012;const W=.16;
gframe('🎯 Barra de Precisão',30,`<div id="pb" style="position:relative;height:46px;background:#0a0f1e;border:2px solid var(--line);border-radius:12px;margin:14px 0;overflow:hidden"><div id="pz" style="position:absolute;top:0;bottom:0;background:#2ee59d44;border-left:2px solid #2ee59d;border-right:2px solid #2ee59d"></div><div id="pm" style="position:absolute;top:0;bottom:0;width:6px;background:var(--ac);box-shadow:0 0 10px var(--ac)"></div></div><button class="pr" id="pt" style="width:100%;padding:16px">TOCAR</button><div class="sub" style="margin-top:8px">Rodada <b id="gs">1</b>/8</div>`,()=>fin(Math.round(tot/8),'prec'));
function setz(){ct=.15+Math.random()*.7;$('pz').style.left=(ct-W/2)*100+'%';$('pz').style.width=W*100+'%'}setz();
GI.push(setInterval(()=>{pos+=dir*sp;if(pos>=1||pos<=0){dir=-dir;pos=Math.max(0,Math.min(1,pos))}$('pm').style.left=pos*97+'%'},16));
$('pt').onclick=()=>{const d=Math.abs(pos-ct);tot+=Math.max(0,100*(1-d/W));r++;sfx(d<W/2?1:0);if(r>=8){fin(Math.round(tot/8),'prec');return}$('gs').textContent=r+1;sp=Math.min(.02,sp+.0012);setz()}}
function gPar(){let ok=0,n=0;
gframe('🎲 Par ou Ímpar',25,`<div id="gq2" style="font-size:54px;font-weight:800;text-align:center;margin:14px 0"></div><div class="gg sq" id="gg"><div class="gc" data-p="0" style="font-size:18px;aspect-ratio:2">PAR</div><div class="gc" data-p="1" style="font-size:18px;aspect-ratio:2">ÍMPAR</div></div><div class="sub" style="margin-top:8px">Acertos: <b id="gs">0</b> · erro tira 2s</div>`,()=>fin(Math.min(100,Math.round(ok/18*100)),'par'));
const nq=()=>{n=1+Math.floor(Math.random()*99);$('gq2').textContent=n};
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c)return;if(+c.dataset.p===n%2){ok++;sfx(1)}else{sfx();GT=Math.max(1,GT-2)}$('gs').textContent=ok;nq()};nq()}
function gCor(){let ok=0,ink=0;const N=['VERMELHO','VERDE','AZUL','AMARELO'],C=['#ff5a5f','#3ee0a0','#4aa3ff','#ffb020'];
gframe('🎨 Cores Hash',30,`<div class="sub">Toque na cor da <b>tinta</b>, não na palavra!</div><div id="gq2" style="font-size:32px;font-weight:800;text-align:center;margin:12px 0"></div><div class="gg sq" id="gg">${C.map((c,k)=>`<div class="gc" data-i="${k}" style="background:${c}55;border-color:${c};aspect-ratio:2"></div>`).join('')}</div><div class="sub" style="margin-top:8px">Acertos: <b id="gs">0</b> · erro tira 2s</div>`,()=>fin(Math.min(100,Math.round(ok/14*100)),'cor'));
const nq=()=>{const w=Math.floor(Math.random()*4);ink=(w+1+Math.floor(Math.random()*3))%4;const q=$('gq2');q.textContent=N[w];q.style.color=C[ink]};
$('gg').onclick=e=>{const c=e.target.closest('.gc');if(!c)return;if(+c.dataset.i===ink){ok++;sfx(1)}else{sfx();GT=Math.max(1,GT-2)}$('gs').textContent=ok;nq()};nq()}
function gDef(){const W=300,H=360;let x=W/2,lives=3,pts=0,bl=[],en=[],t=0;const sc=()=>Math.min(100,Math.round(pts/80*100));
gframe('🛡️ Defesa da Rede',40,`<canvas id="cv" width="${W}" height="${H}" style="width:100%;border-radius:12px;background:#070b18;border:2px solid var(--line);touch-action:none"></canvas><div class="sub" style="margin-top:8px">Pontos <b id="gs">0</b> · Vidas <b id="gl3">❤️❤️❤️</b> · arraste para mover a nave</div>`,()=>fin(sc(),'def'));
const cv=$('cv'),g=cv.getContext('2d');
const mv=e=>{const r=cv.getBoundingClientRect(),p=e.touches?e.touches[0]:e;x=Math.max(14,Math.min(W-14,(p.clientX-r.left)/r.width*W));e.preventDefault()};
cv.addEventListener('pointermove',mv);cv.addEventListener('pointerdown',mv);cv.addEventListener('touchmove',mv,{passive:false});
function hit(){lives--;sfx();$('gl3').textContent='❤️'.repeat(Math.max(0,lives));if(lives<=0)fin(sc(),'def')}
GI.push(setInterval(()=>{t++;
if(t%6===0)bl.push({x,y:H-34});
const rate=Math.max(10,22-Math.floor(t/60));
if(t%rate===0){const r=Math.random(),ty=r<.15?2:r<.4?1:0;en.push({x:16+Math.random()*(W-32),y:-10,ty,hp:ty===2?3:1,v:ty===1?3.4:ty===2?1.2:1.9+t/1500})}
bl.forEach(b=>b.y-=7);bl=bl.filter(b=>b.y>-6);en.forEach(e=>e.y+=e.v);
bl.forEach(b=>en.forEach(e=>{if(!b.d&&!e.dead&&Math.abs(b.x-e.x)<12&&Math.abs(b.y-e.y)<12){b.d=1;e.hp--;if(e.hp<=0){e.dead=1;pts+=e.ty===2?4:e.ty===1?2:1;$('gs').textContent=pts;sfx(1)}}}));
bl=bl.filter(b=>!b.d);
en.forEach(e=>{if(!e.dead&&(e.y>H-12||(e.y>H-40&&Math.abs(e.x-x)<16))){e.dead=1;hit()}});
en=en.filter(e=>!e.dead);
g.clearRect(0,0,W,H);g.fillStyle='#ffb020';bl.forEach(b=>g.fillRect(b.x-1.5,b.y,3,8));
g.textAlign='center';g.font='20px serif';en.forEach(e=>g.fillText(e.ty===2?'👾':e.ty===1?'🐞':'🦠',e.x,e.y+8));
g.font='24px serif';g.fillText('🛡️',x,H-14)},30))}
/* ▸▸▸ SEÇÃO: COMPRA DE VLX (modo demonstração) */
const PKG=[[1,50000],[5,275000],[10,600000],[25,1625000],[50,3500000],[100,7500000]];let pk=1,pc='POL';const bn=u=>u>=100?.5:u>=50?.4:u>=25?.3:u>=10?.2:u>=5?.1:0;
function cur(){const v=parseFloat(($('pcu').value||'').replace(',','.'));if(v>=1&&v<=1000)return[v,Math.round(v*50000*(1+bn(v)))];return PKG[pk]}
function pq(){const[u,cr]=cur(),amt=u/usd(pc),cu=!!$('pcu').value;
$('pk').innerHTML=PKG.map(([u2,c2],i)=>`<button data-pk="${i}" class="${i===pk&&!cu?'on':''}" style="padding:8px 4px;font-size:13px">US$ ${u2}<small style="display:block;font-size:10px;color:var(--mu)">≈ R$ ${f(u2*BRL.v,2)}<br>${f(c2,0)} ${CI}</small></button>`).join('');
cls('pcs',pc);
$('phs').innerHTML=S.pu.length?'<b>Histórico de compras</b><br>'+S.pu.slice(-5).reverse().map(x=>`${x.d} · US$ ${f(x.usd,2)} → ${f(x.cr,0)} ${CI} (${x.coin}, demo)`).join('<br>'):'';
$('pqt').innerHTML=`Você paga ≈ <b>${fx(amt)}</b> ${pc} (US$ ${f(u,2)} ≈ R$ ${f(u*BRL.v,2)}) · recebe <b class="a">${f(cr,0)} ${CI}</b><br><small style="display:block;color:var(--mu)">${S.w[pc]?'Carteira: '+S.w[pc].slice(0,8)+'…'+S.w[pc].slice(-4):'Conecte uma carteira '+WN[pc]+' na aba Saque'} · cotação: 1 ${pc} = US$ ${usd(pc).toFixed(pc==='SHIB'?8:4)}</small>`}

$('pk').onclick=e=>{const b=e.target.closest('[data-pk]');if(b){pk=+b.dataset.pk;$('pcu').value='';pq()}};$('pcu').oninput=pq;
coinRow('pcs',c=>{pc=c;pq()});
$('pbuy').onclick=()=>{if(!CONFIG.PAGAMENTOS)return;if(!S.w[pc]){noW(`Conecte uma carteira ${WN[pc]} na aba Saque para pagar com ${pc}.`);return}
const[u,cr]=cur();modal(`<b>Confirmar compra</b><p class="sub">US$ ${f(u,2)} (≈ R$ ${f(u*BRL.v,2)}) ≈ ${fx(u/usd(pc))} ${pc}<br>Carteira: ${S.w[pc].slice(0,8)}…${S.w[pc].slice(-4)}<br>Você recebe ${f(cr,0)} ${CI}</p><div class="warn">Modo demonstração: nenhuma transação real é enviada.</div><button class="pr" id="pok" style="width:100%">Confirmar pagamento (demo)</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>`)};
$('mb').addEventListener('click',e=>{if(e.target.id==='pok'&&CONFIG.PAGAMENTOS){const q=cur();S.cr+=q[1];S.pu.push({d:new Date().toLocaleDateString('pt-BR'),usd:q[0],coin:pc,cr:q[1]});save();close();sfx(1);toast(`${CI} +${f(q[1],0)} VLX (demo)`);ui();pq()}});
pq();
/* ▸▸▸ SEÇÃO: MINIJOGOS: arte e lista (Arena de Jogos) */
function gart(k,c){const r=(x,y,w,h,f,o)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2.5" fill="${f||'#0a0f1e'}" stroke="${c}" stroke-width="1.4" ${o||''}/>`,P=['#ff5a5f','#3ee0a0','#4aa3ff','#ffb020'];let b='';
if(k==='tap'){for(let i=0;i<9;i++)b+=r(9+(i%3)*16,4+Math.floor(i/3)*14,14,12);b+=`<circle cx="32" cy="24" r="4.5" fill="${c}"/><path d="M16 33l4 5-4 5-4-5z" fill="#22d3ee"/><circle cx="48" cy="10" r="4" fill="#ff5a5f"/>`}
else if(k==='mem'){for(let i=0;i<6;i++)b+=r(6+(i%3)*20,5+Math.floor(i/3)*21,16,18,i===1||i===4?c:'',i===1||i===4?'fill-opacity=".35"':'');b+=`<text x="34" y="19" font-size="10" text-anchor="middle">⚡</text><text x="34" y="40" font-size="10" text-anchor="middle">⚡</text><text x="14" y="19" font-size="9" text-anchor="middle" fill="${c}">?</text><text x="54" y="19" font-size="9" text-anchor="middle" fill="${c}">?</text><text x="14" y="40" font-size="9" text-anchor="middle" fill="${c}">?</text><text x="54" y="40" font-size="9" text-anchor="middle" fill="${c}">?</text>`}
else if(k==='seq'){[[8,4],[34,4],[8,26],[34,26]].forEach(([x,y],i)=>{b+=`<rect x="${x}" y="${y}" width="22" height="18" rx="4" fill="${P[i]}" fill-opacity="${i===1?1:.3}" stroke="${P[i]}" stroke-width="1.4"/>`})}
else if(k==='math')b=`<text x="32" y="29" font-size="19" font-weight="800" text-anchor="middle" fill="${c}">7×8</text><text x="32" y="43" font-size="9" font-weight="700" text-anchor="middle" fill="${c}" opacity=".7">= ?</text>`;
else if(k==='react')b=`<circle cx="32" cy="24" r="21" fill="#2ee59d22" stroke="${c}" stroke-width="1.6"/><path d="M36 6L20 27h10l-3 15 17-23H33z" fill="${c}"/>`;
else if(k==='diff'){for(let i=0;i<12;i++)b+=`<circle cx="${12+(i%4)*13.3}" cy="${11+Math.floor(i/4)*13}" r="4.5" fill="${i===6?c:'none'}" stroke="${c}" stroke-width="1.4"/>`}
else if(k==='prec')b=r(4,17,56,14)+`<rect x="30" y="17" width="14" height="14" fill="${c}" fill-opacity=".45"/><rect x="40" y="11" width="3.5" height="26" rx="1.5" fill="#fff"/>`;
else if(k==='def')b=`<path d="M32 29l10 4v7c0 4-4 7-10 9-6-2-10-5-10-9v-7z" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.6"/><rect x="31" y="16" width="2" height="7" fill="#ffb020"/><circle cx="14" cy="8" r="4" fill="#ff5a5f"/><circle cx="32" cy="6" r="4" fill="#3ee0a0"/><circle cx="50" cy="10" r="4" fill="#b46bff"/>`;
else if(k==='par')b=r(6,11,24,26)+r(34,11,24,26)+`<text x="18" y="29" font-size="9" font-weight="800" text-anchor="middle" fill="${c}">PAR</text><text x="46" y="29" font-size="8" font-weight="800" text-anchor="middle" fill="${c}">ÍMPAR</text>`;
else b=`<text x="32" y="25" font-size="14" font-weight="800" text-anchor="middle" fill="${P[0]}">AZUL</text>`+P.map((q,i)=>`<circle cx="${14+i*12}" cy="38" r="4.5" fill="${q}"/>`).join('');
return `<svg viewBox="0 0 64 48" style="filter:drop-shadow(0 0 5px ${c}88)">${b}</svg>`}
const GM=[
{id:'g1',k:'tap',fn:gTap,n:'Caça-Hash',t:25,d:'Moedas, 💎 e bombas, com combo',c:'#ffb020'},
{id:'g2',k:'mem',fn:gMem,n:'Memória de Chips',t:60,d:'Ache os 6 pares',c:'#b46bff'},
{id:'g3',k:'seq',fn:gSeq,n:'Sequência Hash',t:45,d:'Repita a sequência de cores',c:'#ff5fb0'},
{id:'g4',k:'math',fn:gMath,n:'Cálculo Hash',t:30,d:'Contas rápidas',c:'#4aa3ff'},
{id:'g5',k:'react',fn:gReact,n:'Reflexo Hash',t:30,d:'Toque quando ficar verde',c:'#3ee0a0'},
{id:'g6',k:'diff',fn:gDiff,n:'Ache o Diferente',t:30,d:'Encontre o símbolo diferente',c:'#22d3ee'},
{id:'g7',k:'prec',fn:gPrec,n:'Barra de Precisão',t:30,d:'Pare a barra na zona verde',c:'#ff8a3d'},
{id:'g8',k:'par',fn:gPar,n:'Par ou Ímpar',t:25,d:'Decida rápido',c:'#6c7bff'},
{id:'g9',k:'cor',fn:gCor,n:'Cores Hash',t:30,d:'Cor da tinta, não da palavra',c:'#e879f9'},
{id:'g10',k:'def',fn:gDef,n:'Defesa da Rede',t:40,d:'Arraste a nave, destrua os vírus. 3 vidas!',c:'#ff5a5f',rw:'+10~40 GH/s'}];
function renderGames(){$('gl2').innerHTML=GM.map(g=>`<div class="sc" style="--rc:${g.c}"><div class="im">${gart(g.k,g.c)}</div><h3>${g.n}</h3><div class="pw">⏱ ${g.t}s</div><small style="display:block;color:var(--mu);font-size:11px;margin-bottom:8px">${g.d}</small><div class="ft"><div><small>RECOMPENSA</small><div class="pr2">${g.rw||'+5~20 GH/s'}</div></div><button class="by" id="${g.id}">JOGAR</button></div></div>`).join('');GM.forEach(g=>$(g.id).onclick=()=>{if((S.gcd[g.k]||0)<=Date.now())g.fn()})}
renderGames();

function gui(){const now=Date.now();GM.map(g=>[g.id,g.k]).forEach(([id,k])=>{const c=Math.ceil(((S.gcd[k]||0)-now)/1000);$(id).disabled=c>0;$(id).textContent=c>0?`${c}s`:'JOGAR'});
const r=S.gb.until-now;$('gst').textContent=r>0?`⚡ Poder de jogo ativo: +${S.gb.hp} GH/s · ${Math.floor(r/60000)}:${String(Math.floor(r/1000)%60).padStart(2,'0')}`:'Ao terminar um mini jogo você assiste a um anúncio e recebe de +5 a +20 GH/s por 3 minutos, conforme sua pontuação.'}
setInterval(gui,1000);gui();
/* ▸▸▸ SEÇÃO: LOJA: BATERIAS */
const BT=[
{id:'e1',n:'Pilha AA',e:500,c:2500,m:'AA'},
{id:'e2',n:'Bateria 9V',e:1500,c:8000,m:'9V'},
{id:'e3',n:'Bateria de Celular',e:5000,c:27000,m:'CL'},
{id:'e4',n:'Power Bank',e:15000,c:85000,m:'PB'},
{id:'e5',n:'Bateria de Notebook',e:50000,c:290000,m:'NB'},
{id:'e6',n:'Bateria de Moto',e:150000,c:900000,m:'MT'},
{id:'e7',n:'Bateria Automotiva',e:500000,c:3200000,m:'AU'},
{id:'e8',n:'Bateria Estacionária',e:1500000,c:10000000,m:'ES'},
{id:'e9',n:'Banco de Baterias',e:5000000,c:36000000,m:'BB'},
{id:'e10',n:'Célula de Lítio Industrial',e:15000000,c:110000000,m:'LI'},
{id:'e11',n:'Mega Bateria',e:50000000,c:400000000,m:'MG'},
{id:'e12',n:'Reator Solar',e:150000000,c:1300000000,m:'SO'},
{id:'e13',n:'Núcleo de Energia Infinita',e:500000000,c:4500000000,m:'∞'}];
let sh='e';
const dur=t=>t<60?Math.round(t)+'s':t<3600?Math.round(t/60)+' min':t<86400?(t/3600).toFixed(1)+' h':(t/86400).toFixed(1)+' dias';
function bart(b,i){const c=CL[Math.min(15,i+3)],n=Math.min(5,1+Math.floor(i/3));
return `<svg viewBox="0 0 64 48" style="filter:drop-shadow(0 0 5px ${c}88)"><rect x="6" y="11" width="46" height="26" rx="4" fill="#141b30" stroke="${c}" stroke-width="2"/><rect x="52" y="19" width="5" height="10" rx="1.5" fill="${c}"/>`+Array.from({length:n},(_,j)=>`<rect x="${9+j*40/n}" y="14" width="${40/n-2}" height="20" rx="1.5" fill="${c}" opacity="${.5+.5*(j+1)/n}"/>`).join('')+`<path d="M31 17l-6 8h4l-2 7 7-9h-4z" fill="#0a0f1e"/><text x="61" y="46" font-size="6" font-weight="700" text-anchor="end" fill="${c}" opacity=".8">${b.m}</text></svg>`}
function bat(){const h=base()+bon();$('sb2').innerHTML=BT.map((b,i)=>`<div class="sc" style="--rc:${CL[Math.min(15,i+3)]}"><div class="im">${bart(b,i)}</div><h3>${b.n}</h3><div style="margin:3px 0">${rb(rBT(b))}</div><div class="pw">🔋 +${f(b.e,0)} energia</div><small style="display:block;color:var(--mu);font-size:11px;margin-bottom:8px">${h>0?'≈ '+dur(b.e/(h*0.01))+' no seu poder atual':'Ligue equipamentos para minerar'}</small><div class="ft"><div><small>PREÇO (VLX)</small><div class="pr2">${f(b.c,0)}</div></div><button class="by" data-bb="${b.id}" ${S.cr<b.c?'disabled':''}>COMPRAR</button></div></div>`).join('')}
function shv(){$('sl').classList.toggle('hide',sh!=='e');$('sb2').classList.toggle('hide',sh!=='b');$('sx').classList.toggle('hide',sh!=='x');$('tabE').className=sh==='e'?'on':'';$('tabB').className=sh==='b'?'on':'';$('tabX').className=sh==='x'?'on':'';if(sh==='e')shop();else if(sh==='b')bat();else spc()}
$('tabX').onclick=()=>{sh='x';shv()};

/* ▸▸▸ SEÇÃO: LOJA: POÇÕES */
const POT=[
{id:'p1',n:'Poção Overclock',c:'#ff5a5f',d:'Poder de mineração x2',t:120,pm:2,min:5000,k:40},
{id:'p2',n:'Poção Turbo',c:'#ffb020',d:'Poder de mineração x1,5',t:240,pm:1.5,min:4000,k:35},
{id:'p3',n:'Poção Eco',c:'#2ee59d',d:'Gasto de energia −75%',t:300,em:.25,min:3000,k:15},
{id:'p4',n:'Elixir do Lucro',c:'#ffd24a',d:'Voltrix (VLX) x2',t:180,cm:2,min:3000,k:20},
{id:'p5',n:'Poção Superaquecimento',c:'#ff8a3d',d:'Poder x3, mas energia x5',t:90,pm:3,em:5,min:6000,k:30,r:'⚠️ Arriscada'},
{id:'p6',n:'Poção Instável',c:'#a478ff',d:'50%: poder x3 · 50%: poder x0,5',t:120,min:4000,k:25,r:'🎲 Sorte',roll:[{pm:3,l:'poder x3 🎉'},{pm:.5,l:'poder x0,5 💀'}]},
{id:'p7',n:'Poção Misteriosa',c:'#e879f9',d:'Efeito sorteado: bom ou ruim',t:150,min:2500,k:12,r:'🎲 Sorte',roll:[{pm:2,l:'poder x2 🎉'},{pm:1.3,cm:1.5,l:'poder x1,3 + VLX x1,5 🎉'},{cm:3,l:'VLX x3 🎉'},{em:.3,l:'energia −70% 🎉'},{pm:.6,l:'poder x0,6 💀'},{em:3,l:'energia x3 💀'},{pm:.8,em:2,l:'poder x0,8 + energia x2 💀'}]}];
const rawp=()=>S.slots.reduce((a,id)=>a+(id?IT.find(z=>z.id===id).hp:0),0),ppot=p=>Math.round(Math.max(p.min,rawp()*p.k)/100)*100;
function usePot(p,q){let o={pm:p.pm,em:p.em,cm:p.cm},l=p.d;if(p.roll){const r=p.roll[Math.random()*p.roll.length|0];o={pm:r.pm,em:r.em,cm:r.cm};l=r.l}
const now=Date.now(),c=S.fx[p.id];if(!p.roll&&c&&c.u>now){c.u+=p.t*1000;c.d=c.u-now}else S.fx[p.id]={...o,u:now+p.t*1000,d:p.t*1000,n:p.n,l};if(!q)toast(`🧪 ${p.n}: ${l}`)}
function potart(c){return `<svg viewBox="0 0 64 48" style="filter:drop-shadow(0 0 6px ${c}99)"><path d="M26 5h12v5h-2v10l11 19q2 5-3 5H20q-5 0-3-5l11-19V10h-2z" fill="#0b1022" stroke="${c}" stroke-width="2"/><path d="M21 33h22l4 6q2 5-3 5H20q-5 0-3-5z" fill="${c}" opacity=".75"/><circle cx="29" cy="38" r="2" fill="#fff" opacity=".6"/><circle cx="36" cy="35" r="1.5" fill="#fff" opacity=".6"/></svg>`}
const boxart=`<svg viewBox="0 0 64 48" style="filter:drop-shadow(0 0 6px #ffb02099)"><path d="M8 18l24-10 24 10v22L32 46 8 40z" fill="#141b30" stroke="#ffb020" stroke-width="2"/><path d="M8 18l24 10 24-10M32 28v18" stroke="#ffb020" stroke-width="2" fill="none"/><text x="32" y="22" font-size="10" font-weight="800" text-anchor="middle" fill="#ffb020">?</text></svg>`;
const mmss=ms=>Math.floor(ms/60000)+':'+String(Math.floor(ms/1000)%60).padStart(2,'0');
function fxu(){const now=Date.now();for(const k in S.fx)if(S.fx[k].u<=now)delete S.fx[k];const a=fxa(),bar=$('fxbar');
if(bar){bar.classList.toggle('hide',!a.length);bar.innerHTML=a.map(x=>{const r=x.u-now,d=x.d||r,w=Math.max(0,Math.min(100,r/d*100)),pm=x.pm||1,em=x.em||1,cm=x.cm||1,k=pm>=1&&em<=1&&cm>=1?'#2ee59d':pm<=1&&em>=1&&cm<=1?'#ff5a5f':'#ffb020';return `<div class="fxc" style="--k:${k}"><div><b>🧪 ${x.n}</b><br><span style="color:var(--mu)">${x.l}</span></div><b class="fxt">${mmss(r)}</b><i style="width:${w}%"></i></div>`}).join('')}
const e=$('fxs');if(!e)return;e.innerHTML=a.length?'<b>🧪 Efeitos ativos</b><br>'+a.map(x=>`${x.n} · ${x.l} · ${mmss(x.u-now)}`).join('<br>'):'🧪 Nenhuma poção ativa.'}
/* ▸▸▸ SEÇÃO: LOJA: CAIXAS MISTERIOSAS */
const BOX=[
{id:'x1',n:'Caixa Misteriosa',c:60000,col:'#ffb020',d:'Placas fracas/médias e baterias',loot:[['i','b',20],['i','o',16],['i','w',12],['i','n',8],['i','p',6],['i','g',2],['i','u',.3],['e','e1',14],['e','e2',10],['e','e3',6],['e','e4',3],['e','e5',1.5],['e','e6',.5]]},
{id:'x2',n:'Caixa de Poções',c:20000,dyn:120,col:'#e879f9',d:'1 poção sorteada, já ativada',loot:[['p','p1',10],['p','p2',15],['p','p3',18],['p','p4',15],['p','p5',10],['p','p6',16],['p','p7',16]]},
{id:'x3',n:'Caixa Lendária',c:600000,col:'#b46bff',d:'Placas fortes, baterias grandes e poções',loot:[['i','p',14],['i','g',14],['i','t',8],['i','u',3],['i','a',1],['i','l',.15],['e','e4',10],['e','e5',8],['e','e6',5],['e','e7',1.2],['e','e8',.15],['p','p1',3],['p','p2',3],['p','p3',3],['p','p4',3],['p','p5',3],['p','p6',3],['p','p7',3]]}];
const bp=b=>b.dyn?Math.round(Math.max(b.c,rawp()*b.dyn)/100)*100:b.c;
const lo=z=>z[0]==='i'?{t:'i',x:IT.find(q=>q.id===z[1])}:z[0]==='e'?{t:'e',x:BT.find(q=>q.id===z[1])}:{t:'p',x:POT.find(q=>q.id===z[1])};
const lart=o=>o.t==='i'?art(o.x):o.t==='e'?bart(o.x,BT.indexOf(o.x)):potart(o.x.c);
const tmx=t=>t>=60?t/60+' min':t+'s';
function boxart2(b){const c=b.col,i=b.id,F=`filter:drop-shadow(0 0 7px ${c}99)`,
G=`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity=".12"/></linearGradient><radialGradient id="r${i}"><stop offset="0" stop-color="${c}" stop-opacity=".6"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs><ellipse cx="32" cy="45" rx="22" ry="2.5" fill="#000" opacity=".45"/>`;
if(i==='x2'){const bt=(x,k)=>`<rect x="${x-3}" y="8" width="6" height="3" rx="1" fill="${k}"/><rect x="${x-2}" y="11" width="4" height="8" fill="#0b1022" stroke="${k}"/><circle cx="${x}" cy="25" r="7.5" fill="#0b1022" stroke="${k}" stroke-width="2"/><path d="M${x-7} 25a7 7 0 0 0 14 0z" fill="${k}" opacity=".8"/><circle cx="${x-3}" cy="22" r="1.5" fill="#fff" opacity=".6"/>`;
return `<svg viewBox="0 0 64 48" style="${F}">${G}${bt(17,'#ff5a5f')}${bt(32,'#2ee59d')}${bt(47,c)}<rect x="8" y="31" width="48" height="13" rx="3" fill="#141b30" stroke="${c}" stroke-width="2"/><rect x="8" y="31" width="48" height="13" rx="3" fill="url(#g${i})"/><rect x="21" y="34" width="22" height="7" rx="2" fill="${c}"/><text x="32" y="39.4" font-size="5" font-weight="800" text-anchor="middle" fill="#0a0f1e">POÇÕES</text><text x="6" y="9" font-size="7" fill="#fff" opacity=".8">✦</text><text x="54" y="13" font-size="6" fill="#fff" opacity=".7">✦</text></svg>`}
const L=i==='x3',t=L?'#ffd24a':c,lid='M9 25v-7q0-9 23-9t23 9v7z';
return `<svg viewBox="0 0 64 48" style="${F}">${G}${L?`<circle cx="32" cy="24" r="27" fill="url(#r${i})"/>`:''}<rect x="9" y="24" width="46" height="20" rx="3" fill="#141b30" stroke="${t}" stroke-width="2"/><rect x="9" y="24" width="46" height="20" rx="3" fill="url(#g${i})"/><path d="${lid}" fill="#1b2340" stroke="${t}" stroke-width="2"/><path d="${lid}" fill="url(#g${i})"/>${L?'':'<path d="M12 31h40M12 37h40" stroke="'+c+'" stroke-opacity=".3"/>'}<rect x="16" y="12" width="5" height="32" fill="${t}" opacity=".55"/><rect x="43" y="12" width="5" height="32" fill="${t}" opacity=".55"/><path d="M14 17q4-5 11-6" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" fill="none" stroke-linecap="round"/>${L?`<path d="M32 15l7 7-7 9-7-9z" fill="#7dfcff" stroke="#fff" stroke-width="1.2"/><path d="M25 22h14" stroke="#fff" stroke-opacity=".7"/><text x="8" y="10" font-size="7" fill="#fff">✦</text><text x="54" y="14" font-size="6" fill="#ffd24a">✦</text><text x="52" y="42" font-size="5" fill="#fff" opacity=".8">✦</text>`:`<rect x="27" y="23" width="10" height="11" rx="2" fill="${t}"/><circle cx="32" cy="28" r="2" fill="#0a0f1e"/><rect x="31" y="28" width="2" height="4" fill="#0a0f1e"/>`}</svg>`}
let opening=false;
function openBox(id){if(opening)return;const b=BOX.find(z=>z.id===id),c=bp(b);if(!b||S.cr<c)return;opening=true;S.cr-=c;S.bx=(S.bx||0)+1;
const z=(()=>{let r=Math.random()*b.loot.reduce((a,q)=>a+q[2],0);return b.loot.find(q=>(r-=q[2])<0)||b.loot[0]})(),o=lo(z);
S.pend=z;ui();save();spc();sfx();
modal(`<div id="bxa" class="bxs" style="width:150px;margin:8px auto">${boxart2(b)}</div><b id="bxn">Abrindo...</b><p class="sub" id="bxs">${b.n} balançando, sorteando o prêmio...</p>`);
let n=0;const iv2=setInterval(()=>{const e=$('bxn');if(!e){clearInterval(iv2);return}e.textContent='🎲 '+lo(b.loot[Math.random()*b.loot.length|0]).x.n;if(++n%4===0)sfx()},90);
setTimeout(()=>{clearInterval(iv2);opening=false;S.pend=null;applyO(o);const fxl2=o.t==='p'&&S.fx[o.x.id]?S.fx[o.x.id].l:'';ui();save();spc();const e=$('bxn');if(!e)return;sfx(1);
$('bxa').className='bxr';$('bxa').innerHTML=lart(o);
const rr=rar(o);e.innerHTML=`<span style="color:${RAR[rr][1]}">${o.x.n}</span><div style="margin-top:4px">${rb(rr)}</div>`;
$('bxs').innerHTML=o.t==='i'?`⚡ ${f(o.x.hp,0)} GH/s · enviada para o estoque.`:o.t==='e'?`🔋 +${f(o.x.e,0)} de energia adicionada na hora!`:`🧪 ${o.x.d} (${tmx(o.x.t)}) · já ativada!<br>${fxl2}`;
$('mb').insertAdjacentHTML('beforeend','<button class="pr" data-x="1" style="width:100%;margin-top:10px">Ok</button>')},2300)}
function applyO(o){if(o.t==='i')S.inv[o.x.id]=(S.inv[o.x.id]||0)+1;else if(o.t==='e')S.en+=o.x.e;else usePot(o.x,1)}
if(S.pend){try{applyO(lo(S.pend))}catch(e){}S.pend=null}
/* ▸▸▸ SEÇÃO: RARIDADES E LISTA DE CAIXAS */
const RAR=[['COMUM','#8d9abb'],['INCOMUM','#3ee0a0'],['RARO','#4aa3ff'],['ÉPICO','#b46bff'],['LENDÁRIO','#ffb020'],['MÍTICO','#ff5a8a']],
rIT=x=>Math.min(5,Math.floor(IT.indexOf(x)/3)),rBT=b=>[0,0,1,1,2,2,2,3,3,3,4,4,5][BT.indexOf(b)],rPO={p3:0,p2:1,p4:1,p6:2,p7:2,p5:3,p1:3},rBX={x1:1,x2:2,x3:4},
rar=o=>o.t==='i'?rIT(o.x):o.t==='e'?rBT(o.x):rPO[o.x.id],
rb=r=>`<span style="display:inline-block;font-size:9px;font-weight:800;letter-spacing:.6px;color:${RAR[r][1]};background:${RAR[r][1]}18;border:1px solid ${RAR[r][1]}77;border-radius:8px;padding:1px 6px;line-height:1.5">${RAR[r][0]}</span>`;
const TIERS=[[10,'COMUM','#8d9abb'],[3,'INCOMUM','#3ee0a0'],[1,'RARO','#4aa3ff'],[.5,'ÉPICO','#b46bff'],[0,'LENDÁRIO','#ffb020']];
function showBox(id){const b=BOX.find(z=>z.id===id),T=b.loot.reduce((a,q)=>a+q[2],0),mx=Math.max(...b.loot.map(q=>q[2]/T*100)),cnt={i:0,e:0,p:0};
const rows=[...b.loot].sort((x,y)=>x[2]-y[2]).map(q=>{cnt[q[0]]++;const o=lo(q),p=q[2]/T*100,[,tn,rc]=[0,RAR[rar(o)][0],RAR[rar(o)][1]],ps=p.toFixed(p<1?2:1).replace('.',',');
const nm=o.x.n,sub=o.t==='i'?`⚡ ${f(o.x.hp,0)} GH/s`:o.t==='e'?`🔋 +${f(o.x.e,0)} energia`:`${o.x.d} · ${tmx(o.x.t)}`;
return `<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(90deg,${rc}18,#0b1022 60%);border:1px solid ${rc}44;border-left:3px solid ${rc};border-radius:12px;padding:7px 10px;margin-top:6px"><div class="th" style="width:46px;flex:none">${lart(o)}</div><div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:800">${nm}</div><div style="font-size:11px;color:var(--mu)">${sub}</div><div style="height:4px;background:#1c2440;border-radius:4px;margin-top:5px;overflow:hidden"><i style="display:block;height:100%;width:${Math.max(4,p/mx*100)}%;background:${rc};border-radius:4px"></i></div></div><div style="text-align:right;flex:none"><b style="font-size:14px;color:${rc}">${ps}%</b><div style="font-size:8.5px;letter-spacing:.8px;font-weight:800;color:${rc}">${tn}</div></div></div>`}).join('');
modal(`<div style="text-align:center;background:radial-gradient(circle at 50% 40%,${b.col}30,transparent 70%);border-radius:18px;padding:4px 0 8px"><div class="th" style="width:120px;margin:0 auto">${boxart2(b)}</div><b style="font-size:18px;color:${b.col}">${b.n}</b><div class="sub" style="margin:2px 0 8px">${b.d}</div><span style="display:inline-block;background:#ffb02022;border:1px solid #ffb02066;color:var(--ac);border-radius:20px;padding:4px 12px;font-weight:800;font-size:13px">${CI} ${f(bp(b),0)}</span></div><div style="font-size:11px;color:var(--mu);text-align:center;margin:8px 0 2px">${cnt.i?'🖥️ '+cnt.i+' placas · ':''}${cnt.e?'🔋 '+cnt.e+' baterias · ':''}${cnt.p?'🧪 '+cnt.p+' poções · ':''}os mais raros aparecem primeiro</div><div style="max-height:46vh;overflow-y:auto;padding-right:2px">${rows}</div><button data-x="1" style="width:100%;margin-top:12px">Fechar</button>`)}
function spc(){const g='grid-column:1/-1;margin:6px 0 0';
$('sx').innerHTML=`<div class="warn" id="fxs" style="${g}"></div><h2 style="${g}">📦 Caixas misteriosas</h2>`+BOX.map(b=>{const c=bp(b);return `<div class="sc" style="--rc:${b.col}"><div class="im" style="background:radial-gradient(circle at 50% 65%,${b.col}38,#0b1022 72%)">${boxart2(b)}</div><h3>${b.n}</h3><div style="margin:3px 0">${rb(rBX[b.id])}</div><div class="pw">🎲 ${b.d}</div><button data-bi="${b.id}" style="padding:6px;font-size:11px;margin-bottom:8px">📋 Ver conteúdo</button><div class="ft"><div><small>PREÇO (VLX)</small><div class="pr2">${f(c,0)}</div></div><button class="by" data-bx="${b.id}" ${S.cr<c?'disabled':''}>ABRIR</button></div></div>`}).join('');fxu()}
$('tabE').onclick=()=>{sh='e';shv()};$('tabB').onclick=()=>{sh='b';shv()};
/* ▸▸▸ SEÇÃO: ENERGIA (bateria) */
function enUI(){const h=base()+bon(),t=h>0?S.en/(h*0.01*fxe()):Infinity;
$('enb').textContent=` ${f(S.en,0)} energia`;
$('ent').textContent=S.en<=0?'🪫 Sem bateria! Seus equipamentos pararam. Compre baterias na Loja ou assista a um anúncio.':h<=0?'Nenhum equipamento ligado.':`Dura ≈ ${dur(t)} · consumo ${f(h*0.01*fxe(),2)}/s`;
$('enf').style.width=Math.min(100,isFinite(t)?t/86400*100:100)+'%';$('enf').style.background=t<600?'#ff5a5f':'';
if(S.en<=0&&h>0)$('rate').textContent='🪫 Sem bateria: mineração parada'}
/* ▸▸▸ SEÇÃO: LOGIN E CONTA */
const GCID=CONFIG.GOOGLE_CLIENT_ID;
let amode='in';
async function hpw(p,salt){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+p));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=5381;for(const ch of salt+p)h=((h<<5)+h+ch.charCodeAt(0))>>>0;return'x'+h}}
function start(em){try{localStorage.setItem('cm_sess',em)}catch(e){}location.reload()}
function amd(m){amode=m;$('aTw').classList.toggle('hide',m!=='up');$('aE').className=m==='in'?'on':'';$('aC').className=m==='up'?'on':'';$('aNw').classList.toggle('hide',m!=='up');$('ago').textContent=m==='in'?'Entrar':'Criar conta';$('apw').autocomplete=m==='in'?'current-password':'new-password';$('aer').textContent=''}
$('aE').onclick=()=>amd('in');$('aC').onclick=()=>amd('up');
[$('aem'),$('apw'),$('anm')].forEach(i=>i.addEventListener('keydown',e=>{if(e.key==='Enter')$('ago').click()}));
$('ago').onclick=async()=>{const em=$('aem').value.trim().toLowerCase(),pw=$('apw').value,nm=$('anm').value.trim(),er=$('aer');er.textContent='';
if(!/^\S+@\S+\.\S+$/.test(em)){er.textContent='Informe um e-mail válido.';return}
if(pw.length<6){er.textContent='A senha precisa ter pelo menos 6 caracteres.';return}
let u=null;try{u=JSON.parse(localStorage.getItem('cm_u_'+em))}catch(e){}
if(amode==='up'){if(nm.length<2){er.textContent='Informe seu nome.';return}if(!$('atm').checked){er.textContent='Para criar a conta, confirme que tem 18 anos ou mais e aceita os termos.';return}if(u){er.textContent='Já existe uma conta com esse e-mail. Use Entrar.';return}
const salt=Math.random().toString(36).slice(2);u={email:em,name:nm,salt,ph:await hpw(pw,salt),t:Date.now()};
try{localStorage.setItem('cm_u_'+em,JSON.stringify(u))}catch(e){er.textContent='Não foi possível salvar a conta neste navegador.';return}}
else{if(!u){er.textContent='Conta não encontrada. Toque em Criar conta.';return}if(!u.ph){er.textContent='Esta conta usa o Google. Toque em Entrar com Google.';return}if(u.ph!==await hpw(pw,u.salt)){er.textContent='Senha incorreta.';return}}
start(em)};
function gLogin(em,nm){em=em.toLowerCase();let u=null;try{u=JSON.parse(localStorage.getItem('cm_u_'+em))}catch(e){}if(!u){u={email:em,name:nm||em.split('@')[0],g:1,t:Date.now()};try{localStorage.setItem('cm_u_'+em,JSON.stringify(u))}catch(e){}}start(em)}
$('agg').onclick=()=>{if(!GCID){modal(`<b>Entrar com Google (demo)</b><p class="sub">O login real do Google precisa de um Client ID configurado no jogo e de um site próprio. Para testar, informe seu e-mail Google e seu nome:</p><input id="gem" placeholder="seu@gmail.com"><input id="gnm" placeholder="Seu nome"><button class="pr" id="gok" style="width:100%;margin-top:6px">Continuar (demo)</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>`);return}
const sc=document.createElement('script');sc.src='https://accounts.google.com/gsi/client';sc.onload=()=>{google.accounts.id.initialize({client_id:GCID,callback:r=>{try{const p=JSON.parse(decodeURIComponent(escape(atob(r.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')))));gLogin(p.email,p.name)}catch(e){}}});google.accounts.id.prompt()};document.head.appendChild(sc)};
$('mb').addEventListener('click',e=>{if(e.target.id==='gok'){const em=$('gem').value.trim();if(/^\S+@\S+\.\S+$/.test(em))gLogin(em,$('gnm').value.trim())}});
if(!USR)$('au').classList.remove('hide');
else{$('lgo').className='';$('lgo').textContent='👤 '+USR.name.split(' ')[0];$('lgo').onclick=()=>document.querySelector('[data-t="pf"]').click();$('pfo').onclick=()=>{try{localStorage.removeItem('cm_sess')}catch(e){}location.reload()};setTimeout(()=>toast('Bem-vindo ao CryptoMiner, '+USR.name.split(' ')[0]+'! ⛏️'),500)}
/* ▸▸▸ SEÇÃO: PERFIL */
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const RANKS=[['Recruta',0,'#8d9abb'],['Minerador',50,'#3ee0a0'],['Operador',500,'#4aa3ff'],['Engenheiro',5000,'#b46bff'],['Mestre Hash',50000,'#ffb020'],['Lenda Voltrix',500000,'#ff5a8a']];
function pfu(){const u=USR||{name:'Convidado',email:''},tot=S.pu.reduce((a,x)=>a+x.usd,0),rp=rawp(),ri=RANKS.reduce((a,r,n)=>rp>=r[1]?n:a,0),r=RANKS[ri],nx=RANKS[ri+1],pg=nx?Math.min(100,(rp-r[1])/(nx[1]-r[1])*100):100,
eq=S.slots.filter(Boolean).length,cn=COINS.filter(c=>S[c]>0).length,since=new Date(u.t||Date.now()).toLocaleDateString('pt-BR'),
B=[['🖥️','Primeiro Rig',eq>0,'#9fb4ff'],['🔗','Multi-cripto',cn>=3,'#4fd8ff'],['💵','Investidor',tot>0,'#2ee59d'],['📦','Caçador de caixas',(S.bx||0)>0,'#ffb020'],['🏆','Primeiro saque',S.h.length>0,'#ffb020'],['🔥','Sequência 3 dias',S.streak>=3,'#ff7a3d']],
T=[['⚡','Poder total',f(base()+bon(),0)+' GH/s','#ffb020'],['🖥️','Equipamentos',eq+' / '+S.slots.length,'#9fb4ff'],['🪙','Saldo VLX',f(S.cr,0),'#ffb020'],['🔗','Moedas com saldo',cn+' / '+COINS.length,'#4fd8ff'],['📺','Anúncios',S.ads,'#ff8a3d'],['💵','Comprado','US$ '+f(tot,2),'#2ee59d']];
$('pfi').style.cssText='padding:0;background:none;border:0';
$('pfi').innerHTML=`<div class="pfh" style="--rc:${r[2]}"><svg class="pfw" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>
<div style="display:flex;align-items:center;gap:14px"><div class="pfa"><svg viewBox="0 0 100 100"><defs><linearGradient id="pfg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${r[2]}"/><stop offset="1" stop-color="#ff5a8a"/></linearGradient></defs><polygon points="50,4 90,27 90,73 50,96 10,73 10,27" fill="#0b1024" stroke="url(#pfg)" stroke-width="4"/><polygon points="50,14 81,32 81,68 50,86 19,68 19,32" fill="url(#pfg)" fill-opacity=".16"/><text x="50" y="62" text-anchor="middle" font-size="40" font-weight="900" fill="#fff" font-family="system-ui,sans-serif">${esc((u.name||'?')[0].toUpperCase())}</text></svg><span class="pfl">Nv ${ri+1}</span></div>
<div style="min-width:0"><b style="font-size:19px;display:block;overflow:hidden;text-overflow:ellipsis">${esc(u.name)}</b><small style="display:block;margin:1px 0 7px;overflow:hidden;text-overflow:ellipsis">${esc(u.email||'Sem e-mail')}</small>
<span class="pfp" style="color:${r[2]};border-color:${r[2]}77;background:${r[2]}18">🏆 ${r[0]}</span> <span class="pfp" style="color:#8d9abb;border-color:#ffffff22">${u.g?'✅ Conta Google':'👤 Conta local'}</span></div></div>
<div style="margin-top:14px;font-size:11px;color:var(--mu);display:flex;justify-content:space-between"><span>${nx?'Próximo rank: <b style="color:'+nx[2]+'">'+nx[0]+'</b>':'Rank máximo!'}</span><span>${nx?f(rp,0)+' / '+f(nx[1],0)+' GH/s':'⚡ '+f(rp,0)+' GH/s'}</span></div><div class="pfb"><i style="width:${pg}%"></i></div>
<div style="margin-top:10px;font-size:11px;color:var(--mu)">Minerando desde ${since}</div></div>
<div class="pfg">${T.map(t=>`<div class="pst"><span class="ib" style="color:${t[3]};background:${t[3]}1c">${t[0]}</span><div><small>${t[1]}</small><b>${t[2]}</b></div></div>`).join('')}</div>
<h2 style="margin:16px 0 0">🏆 Conquistas <small style="display:inline;color:var(--mu);font-weight:600">${B.filter(b=>b[2]).length}/${B.length}</small></h2>
<div class="pfg bd">${B.map(b=>`<div class="bdg${b[2]?'':' off'}" style="${b[2]?'border-color:'+b[3]+'66;background:linear-gradient(160deg,'+b[3]+'1c,#0b1022)':''}"><span class="ib" style="color:${b[3]}">${b[2]?b[0]:'🔒'}</span>${b[1]}</div>`).join('')}</div>`}
$('crc').onclick=()=>{document.querySelector('[data-t="pf"]').click();setTimeout(()=>$('pk').scrollIntoView({behavior:'smooth',block:'center'}),150)};
/* ▸▸▸ SEÇÃO: GANHOS (dashboard) E "COMO FUNCIONA" */
const dayU=h=>COINS.reduce((a,c)=>{const x=h*fr(c);return a+POOL[c]*x/(net(c)+x)},0);
function dsh(){const h=base()+bon(),d=dayU(h),best=Math.max(...COINS.map(c=>S[c]*usd(c))),pc=Math.min(100,best/MINUSD*100),sh=c=>{const x=h*fr(c);return(x/(net(c)+x)*100).toFixed(6)+'%'};
$('dst').innerHTML=`<div class="g2"><div class="c"><small>Ganho por dia</small><b class="ok">US$ ${f(d,4)}</b><small>≈ R$ ${f(d*BRL.v,2)}</small></div><div class="c"><small>Ganho por mês</small><b>US$ ${f(d*30,2)}</b><small>≈ R$ ${f(d*30*BRL.v,2)}</small></div><div class="c"><small>Total minerado</small><b class="a">US$ ${f(S.tm,4)}</b><small>≈ R$ ${f(S.tm*BRL.v,2)}</small></div><div class="c"><small>Sua parte da rede</small><b style="font-size:12px">POL ${sh('POL')}<br>TRX ${sh('TRX')}<br>SHIB ${sh('SHIB')}<br>XRP ${sh('XRP')}<br>SOL ${sh('SOL')}</b></div></div><div class="c" style="margin-top:8px"><small>Progresso para o 1º saque (mín. US$ ${MINUSD})</small><div class="bar"><i style="width:${pc}%"></i></div><small>US$ ${f(best,4)} de US$ ${MINUSD}</small></div>`}
$('inf').onclick=()=>{const h=base()+bon();modal(`<b>📖 Como funcionam os ganhos</b><div class="sub" style="line-height:1.55;margin-top:8px"><b>1. Poder de mineração (GH/s)</b><br>Vem dos equipamentos nos slots, mais os boosts temporários de anúncios e mini jogos.<br><br><b>2. Energia 🔋</b><br>Seus equipamentos só mineram com bateria. Cada GH/s gasta 0,01 de energia por segundo. Sem energia, tudo para.<br><br><b>3. Rede e pool diário</b><br>Cada moeda (POL e TRX) tem um pool de US$ ${POOL.POL} por dia, dividido entre os mineradores. Sua parte é:<br><b>seu poder ÷ (poder da rede + seu poder)</b><br>A rede tem hoje ${f(net('POL'),0)} GH/s (POL) e ${f(net('TRX'),0)} GH/s (TRX) e cresce 2% ao dia, então sua parte diminui se você não aumentar seu poder.<br><br><b>4. Seu exemplo agora</b><br>${f(h,0)} GH/s rendem ≈ US$ ${f(dayU(h),4)} por dia, divididos entre POL ${S.sp}% e TRX ${100-S.sp}%.<br><br><b>5. Valor em dólar</b><br>Os ganhos são calculados em dólar e pagos na moeda pela cotação do momento. Se a moeda sobe, você recebe menos moedas, mas o mesmo valor em US$.<br><br><b>6. Saque</b><br>Mínimo de US$ ${MINUSD} por saque, com taxa de rede de US$ ${FEEUSD.POL} (POL), US$ ${FEEUSD.TRX} (TRX), US$ ${FEEUSD.SHIB} (SHIB), US$ ${FEEUSD.XRP} (XRP) ou US$ ${FEEUSD.SOL} (SOL).<br><br><b>7. Voltrix (VLX) ${CI}</b><br>São a moeda do jogo e servem para comprar equipamentos, baterias e slots. Você ganha VLX minerando, jogando, vendo anúncios, fazendo missões ou comprando em dólar no Perfil. Vender cripto por VLX paga metade do valor da compra.<br><br><i>Modo demonstração: saques e pagamentos ainda são simulados.</i></div><button class="pr" data-x="1" style="width:100%;margin-top:10px">Entendi</button>`)};
/* ===== LANÇAMENTO ===== */
function flags(){const pb=$('pbuy'),wb=$('wbtn');
 if(pb){if(!pb.dataset.t0)pb.dataset.t0=pb.textContent;pb.disabled=!CONFIG.PAGAMENTOS?true:pb.disabled;pb.textContent=CONFIG.PAGAMENTOS?pb.dataset.t0:'Pagamentos em breve'}
 if(wb){if(!wb.dataset.t0)wb.dataset.t0=wb.textContent;if(!CONFIG.SAQUES)wb.disabled=true;wb.textContent=CONFIG.SAQUES?wb.dataset.t0:'Saques em breve'}}
setInterval(flags,500);flags();
if(!CONFIG.DEMO)$('demob').remove();
if(CONFIG.MODO_TESTE)$('boost').classList.remove('hide');
if(!CONFIG.GOOGLE_CLIENT_ID){$('aor').classList.add('hide');$('agg').classList.add('hide')}
$('ftv').textContent=CONFIG.APP+' v'+CONFIG.VERSAO;
if(CONFIG.EMAIL_SUPORTE)$('ftsp').classList.remove('hide');
$('fts').href='mailto:'+CONFIG.EMAIL_SUPORTE;
$('ftr').href='mailto:'+CONFIG.EMAIL_SUPORTE+'?subject='+encodeURIComponent('Problema no '+CONFIG.APP+' v'+CONFIG.VERSAO)+'&body='+encodeURIComponent('Descreva o problema:\n\n\n---\nVersão: '+CONFIG.VERSAO+'\nNavegador: '+navigator.userAgent);
try{if(!localStorage.getItem('cm_ck'))$('ckb').classList.remove('hide')}catch(e){}
$('ckok').onclick=()=>{try{localStorage.setItem('cm_ck','1')}catch(e){}$('ckb').classList.add('hide')};
/* ▸▸▸ SEÇÃO: STATUS DO SITE E AVISO DE ERROS */
async function stt(){try{const r=await fetch('status.json',{cache:'no-store'});if(!r.ok)return;const j=await r.json();
 $('mnt').classList.toggle('hide',!j.manutencao);if(j.manutencao)$('mnm').textContent=j.mensagem||'Voltamos em instantes.';
 const a=$('avs');a.classList.toggle('hide',!j.aviso);a.textContent=j.aviso||''}catch(e){}}
stt();setInterval(stt,60000);
let lastErr=0;const onErr=()=>{if(Date.now()-lastErr>15000){lastErr=Date.now();try{toast('⚠️ Algo deu errado. Se persistir, recarregue ou use "Reportar problema".')}catch(e){}}};
addEventListener('error',onErr);addEventListener('unhandledrejection',onErr);
/* ▸▸▸ SEÇÃO: BACKUP: exportar, importar e excluir conta */
$('pfx').onclick=()=>{const b=new Blob([JSON.stringify({app:CONFIG.APP,v:CONFIG.VERSAO,t:Date.now(),estado:S},null,1)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='cryptominer-progresso.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
$('pfm').onclick=()=>$('pff').click();
$('pff').onchange=e=>{const f=e.target.files[0];e.target.value='';if(!f)return;const r=new FileReader();
 r.onload=()=>{try{const j=JSON.parse(r.result);if(!j.estado||typeof j.estado.cr!=='number')throw new Error('x');window.__imp=j.estado;
  modal('<b>Importar progresso?</b><p class="sub">Isso substitui o progresso atual desta conta.</p><button class="pr" id="imok" style="width:100%">Importar</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>')}
 catch(x){modal('<b>Arquivo inválido</b><p class="sub">Escolha um arquivo exportado pelo próprio jogo.</p><button data-x="1" style="width:100%">Ok</button>')}};r.readAsText(f)};
$('pfd').onclick=()=>modal('<b>Excluir minha conta e dados?</b><p class="sub">Isso apaga <b>definitivamente</b> a conta, o progresso e as carteiras salvas <b>neste navegador</b>. Não dá para desfazer.</p><button class="pr" id="dlok" style="width:100%;background:#ff5a5f;color:#fff">Sim, excluir tudo</button><button data-x="1" style="width:100%;margin-top:8px">Cancelar</button>');
$('mb').addEventListener('click',e=>{
 if(e.target.id==='imok'&&window.__imp){S=Object.assign(S,window.__imp);save();location.reload()}
 if(e.target.id==='dlok'){save=()=>{};try{if(USR){localStorage.removeItem('cm_u_'+USR.email);localStorage.removeItem('cmu_'+USR.email)}localStorage.removeItem('cm_sess')}catch(x){}location.reload()}});
/* ▸▸▸ SEÇÃO: COTAÇÃO DO DÓLAR (USD/BRL) */
async function ftj(u){const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),6000);try{const r=await fetch(u,{cache:'no-store',signal:ac.signal});if(!r.ok)throw new Error('http');return await r.json()}finally{clearTimeout(tm)}}
async function dolar(){let v=0,src='';
try{const j=await ftj('https://economia.awesomeapi.com.br/json/last/USD-BRL');v=parseFloat(j.USDBRL.bid);src='AwesomeAPI'}catch(e){}
if(!(v>0)){try{const j=await ftj('https://open.er-api.com/v6/latest/USD');v=+j.rates.BRL;src='ExchangeRate-API'}catch(e){}}
if(v>0){BRL.dir=v>BRL.v?1:v<BRL.v?-1:BRL.dir;BRL.v=v;BRL.t=Date.now();BRL.live=true;BRL.src=src;try{localStorage.setItem('cm_brl',JSON.stringify({v:v,t:BRL.t}))}catch(e){}}
else BRL.live=false;
dolarUi()}
function dolarUi(){const el=$('brlv');if(!el)return;
el.textContent='R$ '+BRL.v.toLocaleString('pt-BR',{minimumFractionDigits:4,maximumFractionDigits:4});
$('brlc').innerHTML=BRL.dir>0?'<span class="ok">▲</span>':BRL.dir<0?'<span class="t">▼</span>':'';
const st=$('brls');st.textContent=BRL.live?'● AO VIVO':'○ OFFLINE';st.style.background=BRL.live?'':'#ffb02033';st.style.color=BRL.live?'':'var(--ac)';
$('brlt').textContent=BRL.live?'atualizado '+new Date(BRL.t).toLocaleTimeString('pt-BR')+' · '+BRL.src:(BRL.t?'sem conexão · último valor de '+new Date(BRL.t).toLocaleTimeString('pt-BR'):'sem conexão · valor de referência');
try{pq()}catch(e){}}
dolar();setInterval(dolar,30000);
/* ▸▸▸ SEÇÃO: COTAÇÃO AO VIVO DAS CRIPTOMOEDAS (US$) — Binance, com CoinGecko de reserva; sem internet usa simulação */
const MK={TRX:'TRXUSDT',POL:'POLUSDT',SHIB:'SHIBUSDT',XRP:'XRPUSDT',SOL:'SOLUSDT'},CG={TRX:'tron',POL:'polygon-ecosystem-token',SHIB:'shiba-inu',XRP:'ripple',SOL:'solana'};
try{const c=JSON.parse(localStorage.getItem('cm_mkt')||'null');if(c&&c.p&&Date.now()-c.t<216e5)COINS.forEach(k=>{if(c.p[k]>0){LIVE.p[k]=c.p[k];P[k]=c.p[k]*BASE[k]/REF[k]}})}catch(e){}
function mkApply(p,src){let ok=0;COINS.forEach(c=>{const v=+p[c];if(v>0){LIVE.p[c]=v;Pp[c]=P[c];P[c]=v*BASE[c]/REF[c];ok++}});
if(ok===COINS.length){LIVE.live=true;LIVE.t=Date.now();LIVE.src=src;try{localStorage.setItem('cm_mkt',JSON.stringify({p:LIVE.p,t:LIVE.t}))}catch(e){}}}
async function mercado(){let p=null,src='';
try{const j=await ftj('https://api.binance.com/api/v3/ticker/price?symbols='+encodeURIComponent(JSON.stringify(COINS.map(c=>MK[c]))));p={};j.forEach(x=>{const c=COINS.find(z=>MK[z]===x.symbol);if(c)p[c]=+x.price});src='Binance'}catch(e){p=null}
if(!p||COINS.some(c=>!(p[c]>0))){try{const j=await ftj('https://api.coingecko.com/api/v3/simple/price?ids='+COINS.map(c=>CG[c]).join(',')+'&vs_currencies=usd');p={};COINS.forEach(c=>p[c]=j[CG[c]]&&j[CG[c]].usd);src='CoinGecko'}catch(e){p=null}}
if(p)mkApply(p,src);if(LIVE.live&&Date.now()-LIVE.t>90000)LIVE.live=false;ui();if(!$('pf').classList.contains('hide')){try{pq()}catch(e){}}}
mercado();setInterval(mercado,10000);
$('adb').onclick=ad;
/* ▸▸▸ SEÇÃO: ALOCAÇÃO DE MINERAÇÃO, FILTRO DE MOEDAS E SAQUE */
function coinRow(id,fn){$(id).innerHTML=COINS.map(c=>`<button data-c="${c}" style="flex:1;min-width:64px">${lgi(c)} ${c}</button>`).join('');$(id).onclick=e=>{const b=e.target.closest('[data-c]');if(b)fn(b.dataset.c)}}
function cls(id,v){document.querySelectorAll('#'+id+' button').forEach(b=>b.className=b.dataset.c===v?'on':'')}
function alb(){$('alw').innerHTML=COINS.map(c=>`<div data-ar="${c}"><div style="margin:8px 0 2px;display:flex;justify-content:space-between;font-weight:700"><span>${lgi(c)} ${c}</span><span id="av${c}"></span></div><input type="range" data-al="${c}" min="0" max="100" step="5"></div>`).join('')+'<div id="alt" style="margin-top:10px;font-size:12px;font-weight:700"></div><div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">'+COINS.map(c=>`<button data-a100="${c}" style="flex:1;min-width:90px;font-size:12px">${lgi(c)} 100%</button>`).join('')+'<button data-aeq="1" style="flex:1;min-width:90px;font-size:12px">⚖️ Igual</button></div>'}
function heroUpd(){const set=(i,h)=>{const e=$(i);if(e&&e.innerHTML!==h)e.innerHTML=h},best=Math.max(...COINS.map(c=>S[c]*usd(c)));
set('hb_shop',`${CI} ${f(S.cr,0)} VLX`);set('hb_ads',bon()>0?`⚡ +${f(bon(),0)} GH/s ativo`:'⚡ Sem boost');set('hb_ex',LIVE.live?'<span class="live"></span>Ao vivo · '+LIVE.src:'Simulado');set('hb_xt',`🔥 ${S.streak||0} dia(s)`);set('hb_wd',`💵 US$ ${f(best,2)}`)}
function vis(){const run=base()>0&&S.en>0;let n=0,na=0;
COINS.forEach(c=>{const e=$(c.toLowerCase()),k=e&&e.closest('.c'),on=S[c]>0||(S.al[c]>0&&run);if(on)n++;if(S.al[c]>0)na++;if(k)k.style.display=(S.vc||on)?'':'none'});
[['tgC',S.vc,n],['tgA',S.va,na]].forEach(([id,on,k])=>{const b=$(id),h=on?'▼ Todas as moedas':`▲ Só minerando (${k}/${COINS.length})`;if(b&&b.innerHTML!==h)b.innerHTML=h})}
$('tgC').onclick=()=>{S.vc=!S.vc;ui();save()};$('tgA').onclick=()=>{S.va=!S.va;ui();save()};
function alu(){const t=COINS.reduce((a,z)=>a+S.al[z],0),e=$('alt');if(e){e.style.color=t===100?'var(--ok,#2ee59d)':'#ffb020';e.textContent=t===100?'✅ Total distribuído: 100%':`⚠️ Distribuído: ${t}% · ${100-t}% do poder está parado`}COINS.forEach(c=>{const i=document.querySelector(`[data-al="${c}"]`);if(i&&document.activeElement!==i)i.value=S.al[c];const r=document.querySelector(`[data-ar="${c}"]`);if(r)r.style.display=(S.va||S.al[c]>0||document.activeElement===i)?'':'none';const v=$('av'+c);if(v)v.textContent=S.al[c]+'%'})}
function alset(c,v){const o=COINS.reduce((a,z)=>z===c?a:a+S.al[z],0);S.al[c]=Math.max(0,Math.min(Math.round(v),100-o))}
alb();
$('alw').addEventListener('input',e=>{const i=e.target.closest('[data-al]');if(i){alset(i.dataset.al,+i.value);i.value=S.al[i.dataset.al];ui();save()}});
$('alw').addEventListener('click',e=>{const b=e.target.closest('[data-a100],[data-aeq]');if(!b)return;if(b.dataset.a100)COINS.forEach(c=>S.al[c]=c===b.dataset.a100?100:0);else{const n=COINS.length;COINS.forEach((c,i)=>S.al[c]=Math.floor(100/n)+(i<100%n?1:0))}ui();save()});
coinRow('wcs',c=>{wc=c;ui();fa()});
$('boost').onclick=()=>{if(!CONFIG.MODO_TESTE)return;S.cr+=3000000;S.TRX+=300000;S.POL+=300000;S.SHIB+=50000000;S.XRP+=100000;S.SOL+=500;S.en+=50000;ui();save()};
$('wbtn').onclick=()=>{if(!CONFIG.SAQUES||S[wc]<wmin(wc))return;const a=$('addr').value.trim();if(!ADR[wc].test(a)){modal(`<b>Carteira inválida</b><p class="sub">Informe um endereço válido de ${wc} (${PH[wc]}), ou conecte uma carteira.</p><button data-x="1" style="width:100%">Ok</button>`);return}
const fee=FEEUSD[wc]/usd(wc),gross=S[wc],paid=Math.max(0,gross-fee),uv=paid*usd(wc);
S.h.push({d:new Date().toLocaleDateString('pt-BR'),v:paid,u:uv,c:wc,a});S[wc]=0;$('addr').value='';ui();save();modal(`<b>✅ Saque simulado registrado!</b><p class="sub">Saldo: ${fx(gross)} ${wc}<br>Taxa de rede: ${fx(fee)} ${wc} (US$ ${f(FEEUSD[wc],2)})<br>Você recebe: <b>${fx(paid)} ${wc}</b> ≈ US$ ${f(uv,2)} (R$ ${f(uv*BRL.v,2)})</p><button data-x="1" style="width:100%;margin-top:10px">Ok</button>`)};
/* ▸▸▸ SEÇÃO: NAVEGAÇÃO ENTRE ABAS E LOOP PRINCIPAL */
$('nav').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('.nav button').forEach(z=>z.className='');b.className='on';
['mine','shop','ads','ex','xt','wd','pf'].forEach(s=>$(s).classList.toggle('hide',s!==b.dataset.t));$('tgC').classList.toggle('hide',b.dataset.t!=='mine');if(b.dataset.t==='shop')shv();if(b.dataset.t==='xt')xt();if(b.dataset.t==='pf'){pfu();pq()}ui()};
setInterval(()=>{tick(1,base()+bon());S.last=Date.now();ui();if(!$('shop').classList.contains('hide')){const g=IT.map(x=>S.cr>=cost(x)?1:0).join('')+BT.map(b=>S.cr>=b.c?1:0).join('')+JSON.stringify(S.inv)+Math.round(base()+bon())+sh+BOX.map(b=>S.cr>=bp(b)?1:0).join('')+fxa().length;if(g!==SG){SG=g;shv()}}save()},1000);
rack();ui();
if(OFF&&OFF.d>60)modal(`<b>👋 Bem-vindo de volta!</b><p class="sub">Enquanto você esteve fora (${Math.floor(OFF.d/60)} min), seus equipamentos geraram:</p><b class="a">+${f(OFF.cr,0)} ${CI}</b><br><b>≈ US$ ${f(OFF.m,4)} em cripto</b><button class="pr" data-x="1" style="width:100%;margin-top:12px">Coletar</button>`);

/* ▸▸▸ SEÇÃO: ÍCONES: troca de emojis por SVG */
const ICO={
'🛍':['#ffb020','<path class="f" d="M5 8h14l-1 12H6z"/><path d="M9 8V6.500a3 3 0 0 1 6 0V8M9.500 12.500c.5 1 1.300 1.500 2.500 1.500s2-.5 2.500-1.500"/>'],
'🎯':['#ff6fa8','<circle class="f" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.200"/>'],
'🔧':['#4fd8ff','<path class="f" d="M14.700 6.300a4 4 0 0 0-5.200 5.200L3.500 17.500a2 2 0 0 0 3 3l6-6a4 4 0 0 0 5.200-5.200l-2.500 2.500-2.100-.5-.5-2.100z"/>'],
'📡':['#4fd8ff','<path d="M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0M12 14v7"/><circle class="f" cx="12" cy="12" r="1.500"/>'],
'⚡':['#ffb020','<path class="f" d="M13 2L4 14h6l-1 8 9-12h-6z"/>'],
'🔋':['#2ee59d','<rect class="f" x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10.5v3M7 10v4M11 10v4"/>'],
'🪫':['#ff5a5f','<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10.5v3M7 10v4"/>'],
'🪙':['#ffb020','<circle class="f" cx="12" cy="12" r="9"/><path d="M12.8 6.5L8.5 12.8h3l-.6 4.7 4.6-6.4h-3.1z"/>'],
'🧪':['#c26bff','<path class="f" d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/>'],
'💎':['#4fd8ff','<path class="f" d="M6 4h12l4 5-10 12L2 9z"/><path d="M2 9h20M9 4l-2 5 5 12 5-12-2-5"/>'],
'🎲':['#8aa4ff','<rect class="f" x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01" stroke-width="2.6"/>'],
'🔀':['#6ee7b7','<path d="M3 7h3.5c2 0 3 1 4 3l2 4c1 2 2 3 4 3H21M3 17h3.5c1.3 0 2.2-.4 3-1.2M14 8.5c.8-1 1.7-1.5 3-1.5H21M18 4l3 3-3 3M18 14l3 3-3 3"/>'],
'🖥':['#9fb4ff','<rect class="f" x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'],
'📺':['#ff8a3d','<rect class="f" x="3" y="6" width="18" height="12" rx="2"/><path d="M8 3l4 3 4-3"/>'],
'🔊':['#9fb4ff','<path class="f" d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.500 8.500a5 5 0 0 1 0 7M19 6a8.500 8.500 0 0 1 0 12"/>'],
'🔇':['#8d9abb','<path class="f" d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9.500l4 5M21 9.500l-4 5"/>'],
'🎁':['#ff6fa8','<rect class="f" x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9v12M12 9c-1-4-5-4-5-1.500S10 9 12 9zm0 0c1-4 5-4 5-1.500S14 9 12 9z"/>'],
'🔌':['#ffd24a','<path d="M9 3v4M15 3v4M12 17v4"/><path class="f" d="M6 7h12v4a6 6 0 0 1-12 0z"/>'],
'🎮':['#8aa4ff','<path class="f" d="M7 7h10a4 4 0 0 1 4 4.200l-.7 4.600a2.400 2.400 0 0 1-4.200 1.200L14.500 15h-5l-1.600 2a2.400 2.400 0 0 1-4.200-1.200L3 11.200A4 4 0 0 1 7 7z"/><path d="M8 10v3M6.500 11.500h3M15.500 10.500h.01M17.500 12.500h.01"/>'],
'👤':['#9fb4ff','<circle class="f" cx="12" cy="8" r="4"/><path d="M4 21c1-4.500 4-6.500 8-6.500s7 2 8 6.500"/>'],
'🏆':['#ffb020','<path class="f" d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M12 13v4M8.500 20h7M9.500 17h5"/>'],
'📊':['#6ee7b7','<path d="M4 20V4M4 20h16"/><path class="f" d="M8 20v-7h3v7zM13 20V8h3v12zM18 20v-5h2v5z"/>'],
'⚙':['#9fb4ff','<circle cx="12" cy="12" r="3"/><path class="f" d="M12 3l1.800 2.200 2.800-.4.900 2.700 2.600 1.100-.5 2.800L21 12l-1.400 2.600.5 2.800-2.600 1.100-.9 2.700-2.800-.4L12 21l-1.800-2.200-2.800.4-.9-2.700-2.600-1.100.5-2.800L3 12l1.400-2.600-.5-2.800 2.600-1.100.9-2.700 2.800.4z"/>'],
'🔗':['#4fd8ff','<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>'],
'🗑':['#ff5a5f','<path class="f" d="M6 7h12l-1 13H7z"/><path d="M4 7h16M9 7V4h6v3M10 11v6M14 11v6"/>'],
'📦':['#ffb020','<path class="f" d="M3 7.500L12 3l9 4.500v9L12 21l-9-4.500z"/><path d="M3 7.500l9 4.500 9-4.500M12 12v9"/>'],
'🛡':['#2ee59d','<path class="f" d="M12 3l8 3v5c0 5-3.500 8.500-8 10-4.500-1.500-8-5-8-10V6z"/><path d="M8.500 12l2.500 2.500L15.500 10"/>'],
'⚠':['#ffb020','<path class="f" d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>'],
'📈':['#2ee59d','<path d="M3 17l6-6 4 4 8-9M15 6h6v6"/>'],
'⚖':['#ffb020','<path d="M12 4v16M6 20h12M5 7h14"/><path class="f" d="M5 7l-3 7a3.500 3.500 0 0 0 6 0zM19 7l-3 7a3.500 3.500 0 0 0 6 0z"/>'],
'🎒':['#ff8a3d','<path class="f" d="M7 8a5 5 0 0 1 10 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M9 13h6M10 21v-4h4v4M9.500 4.500V3.500h5v1"/>'],
'🔥':['#ff7a3d','<path class="f" d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-6 1 1 1.500 2 2 2 .5-2 0-5 1-8z"/>'],
'💵':['#2ee59d','<rect class="f" x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.500"/><path d="M6 12h.01M18 12h.01"/>'],
'🔒':['#9fb4ff','<rect class="f" x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'],
'✅':['#2ee59d','<circle class="f" cx="12" cy="12" r="9"/><path d="M8 12.500l3 3 5-6"/>'],
'🔄':['#4fd8ff','<path d="M20 11a8 8 0 0 0-14-4M4 5v4h4M4 13a8 8 0 0 0 14 4M20 19v-4h-4"/>'],
'💻':['#9fb4ff','<rect class="f" x="5" y="5" width="14" height="10" rx="1.500"/><path d="M2 19h20l-2-4H4z"/>']
};
const EMK=Object.keys(ICO),EMG=new RegExp('('+EMK.join('|')+')\\uFE0F?','g'),EMT=new RegExp('('+EMK.join('|')+')');
function emo(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),ns=[];let n;while(n=w.nextNode()){if(EMT.test(n.nodeValue)&&n.parentNode&&!n.parentNode.closest('svg,script,style,textarea,option,title'))ns.push(n)}
ns.forEach(n=>{const t=n.nodeValue,fr=document.createDocumentFragment();let l=0;t.replace(EMG,(m,k,i)=>{fr.append(t.slice(l,i));const sp=document.createElement('span');sp.className='ei';sp.style.color=ICO[k][0];sp.innerHTML='<svg viewBox="0 0 24 24">'+ICO[k][1]+'</svg>';fr.append(sp);l=i+m.length;return m});fr.append(t.slice(l));n.replaceWith(fr)})}
{let q=0;const ob=new MutationObserver(()=>{if(q)return;q=requestAnimationFrame(()=>{q=0;ob.disconnect();emo(document.body);ob.observe(document.body,{childList:true,subtree:true,characterData:true})})});emo(document.body);ob.observe(document.body,{childList:true,subtree:true,characterData:true})}
