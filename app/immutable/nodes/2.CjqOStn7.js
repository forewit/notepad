const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/quill.Bk4jDS0q.js","../chunks/core.CG__ofcG.js"])))=>i.map(i=>d[i]);
import{s as ve,n as se,r as Je,e as de,z as Ze,d as K,c as re,o as Oe,A as xe,B as $e,a as Ee}from"../chunks/scheduler.CgGcoA3v.js";import{S as _e,i as we,e as A,s as X,c as H,d as B,v as me,h as U,g as L,w as D,A as V,j as Q,k as E,C as Ce,x as W,G as ge,I as Le,J as Ae,p as oe,q as ie,r as le,o as ke,n as De,a as q,t as F,u as ae,K as et,m as pe}from"../chunks/index.BSd0CfbD.js";import{e as be,u as Ne,o as qe}from"../chunks/each.qCoEctRN.js";import{b as Y}from"../chunks/entry.C8Z30L8i.js";import{m as Fe,t as J,i as N,s as tt,a as nt}from"../chunks/firebaseStore.Dz1ivsi6.js";import{_ as He}from"../chunks/preload-helper.D6kgxu3v.js";import{S as st}from"../chunks/Spinner.CDhgSeJA.js";function rt(r){let t,e,n="",o,u,s,l,c,f=`<span class="close-icon svelte-1k0gvuj" style="-webkit-mask: url(${Y}/images/svg/cancel.svg) no-repeat center / contain; mask: url(${Y}/images/svg/cancel.svg) no-repeat center / contain;"></span>`,d,m;return{c(){t=A("div"),e=A("button"),e.innerHTML=n,o=X(),u=A("div"),s=A("input"),l=X(),c=A("button"),c.innerHTML=f,this.h()},l(C){t=H(C,"DIV",{class:!0});var k=B(t);e=H(k,"BUTTON",{class:!0,draggable:!0,"data-svelte-h":!0}),me(e)!=="svelte-1m2idpq"&&(e.innerHTML=n),o=U(k),u=H(k,"DIV",{class:!0});var i=B(u);s=H(i,"INPUT",{autocorrect:!0,autocomplete:!0,spellcheck:!0,type:!0,class:!0}),l=U(i),c=H(i,"BUTTON",{class:!0,draggable:!0,"data-svelte-h":!0}),me(c)!=="svelte-achx3m"&&(c.innerHTML=f),i.forEach(L),k.forEach(L),this.h()},h(){D(e,"class","tab svelte-1k0gvuj"),D(e,"draggable","true"),V(e,"active",r[1]),D(s,"autocorrect","off"),D(s,"autocomplete","off"),D(s,"spellcheck","false"),D(s,"type","text"),D(s,"class","svelte-1k0gvuj"),D(c,"class","close-button svelte-1k0gvuj"),D(c,"draggable","true"),D(u,"class","tab-wrapper svelte-1k0gvuj"),D(t,"class","container svelte-1k0gvuj"),V(t,"preventHover",r[2])},m(C,k){Q(C,t,k),E(t,e),E(t,o),E(t,u),E(u,s),r[9](s),Ce(s,r[0]),E(u,l),E(u,c),d||(m=[W(e,"dblclick",ge(r[8])),W(e,"mousedown",ge(function(){de(r[4])&&r[4].apply(this,arguments)})),W(e,"touchstart",ge(function(){de(r[4])&&r[4].apply(this,arguments)})),W(e,"dragstart",ge(function(){de(r[5])&&r[5].apply(this,arguments)})),W(s,"input",r[10]),W(c,"click",Le(Ae(function(){de(r[3])&&r[3].apply(this,arguments)}))),W(c,"dragstart",Le(Ae(r[7])))],d=!0)},p(C,[k]){r=C,k&2&&V(e,"active",r[1]),k&1&&s.value!==r[0]&&Ce(s,r[0]),k&4&&V(t,"preventHover",r[2])},i:se,o:se,d(C){C&&L(t),r[9](null),d=!1,Je(m)}}}function ot(r,t,e){let{title:n=""}=t,{active:o=!1}=t,{preventHover:u=!1}=t,{onClose:s=()=>{}}=t,{onPointerdown:l=i=>{}}=t,{onDragstart:c=i=>{}}=t,f;function d(i){Ze.call(this,r,i)}const m=()=>f.select();function C(i){K[i?"unshift":"push"](()=>{f=i,e(6,f)})}function k(){n=this.value,e(0,n)}return r.$$set=i=>{"title"in i&&e(0,n=i.title),"active"in i&&e(1,o=i.active),"preventHover"in i&&e(2,u=i.preventHover),"onClose"in i&&e(3,s=i.onClose),"onPointerdown"in i&&e(4,l=i.onPointerdown),"onDragstart"in i&&e(5,c=i.onDragstart)},[n,o,u,s,l,c,f,d,m,C,k]}class je extends _e{constructor(t){super(),we(this,t,ot,rt,ve,{title:0,active:1,preventHover:2,onClose:3,onPointerdown:4,onDragstart:5})}}function G(r){return r<.5?4*r*r*r:.5*Math.pow(2*r-2,3)+1}const Se=(r,t)=>{const{duration:e=300,easing:n=G,onEnd:o=()=>{},onStep:u=()=>{},css:s}=t;let l;function c(f){if(!r){console.warn("Cannot find element to animate");return}l===void 0&&(l=f);const d=n((f-l)/e),m=1-d;d<1?(r.style.cssText=s(d,m),u(d,m),requestAnimationFrame(c)):(r.style.cssText="",o())}requestAnimationFrame(c)},Te=r=>{const{duration:t=300,easing:e=G,onEnd:n=()=>{},onStep:o=()=>{}}=r;let u;function s(l){u===void 0&&(u=l);const c=e((l-u)/t),f=1-c;c<1?(o(c,f),requestAnimationFrame(s)):n()}requestAnimationFrame(s)};function Pe(r,t,e){const n=r.slice();return n[40]=t[e],n[41]=t,n[42]=e,n}function Be(r,t){let e,n,o,u,s=t[42],l,c,f;function d(){return t[17](t[40])}function m(..._){return t[18](t[42],..._)}function C(_){t[19](_,t[40])}let k={active:t[9]==t[40],preventHover:t[8],onClose:d,onPointerdown:m,onDragstart:t[15]};t[11][t[40]].title!==void 0&&(k.title=t[11][t[40]].title),n=new je({props:k}),K.push(()=>et(n,"title",C));const i=()=>t[20](e,s),h=()=>t[20](null,s);return{key:r,first:null,c(){e=A("div"),oe(n.$$.fragment),u=X(),this.h()},l(_){e=H(_,"DIV",{class:!0});var p=B(e);ie(n.$$.fragment,p),u=U(p),p.forEach(L),this.h()},h(){D(e,"class","tab-container svelte-18it3bf"),V(e,"placeholder",t[10]==t[40]),this.first=e},m(_,p){Q(_,e,p),le(n,e,null),E(e,u),i(),l=!0,c||(f=xe(t[14].call(null,e)),c=!0)},p(_,p){t=_;const I={};p[0]&514&&(I.active=t[9]==t[40]),p[0]&256&&(I.preventHover=t[8]),p[0]&2&&(I.onClose=d),p[0]&2&&(I.onPointerdown=m),!o&&p[0]&2050&&(o=!0,I.title=t[11][t[40]].title,$e(()=>o=!1)),n.$set(I),s!==t[42]&&(h(),s=t[42],i()),(!l||p[0]&1026)&&V(e,"placeholder",t[10]==t[40])},i(_){l||(q(n.$$.fragment,_),l=!0)},o(_){F(n.$$.fragment,_),l=!1},d(_){_&&L(e),ae(n),h(),c=!1,f()}}}function it(r){let t,e,n,o=[],u=new Map,s,l,c,f=`<span class="button-icon svelte-18it3bf" style="-webkit-mask: url(${Y}/images/svg/plus.svg) no-repeat center / contain; mask: url(${Y}/images/svg/plus.svg) no-repeat center / contain;"></span>`,d,m,C=`<a class="button svelte-18it3bf" href="${Y}/settings"><span class="button-icon svelte-18it3bf" style="-webkit-mask: url(${Y}/images/svg/gear.svg) no-repeat center / contain; mask: url(${Y}/images/svg/gear.svg) no-repeat center / contain;"></span></a>`,k,i,h,_,p,I,R,P,S=be(r[1].order);const M=b=>b[40];for(let b=0;b<S.length;b+=1){let v=Pe(r,S,b),y=M(v);u.set(y,o[b]=Be(y,v))}return h=new je({props:{title:r[4],active:!r[6],preventHover:!0}}),{c(){t=A("div"),e=A("div"),n=A("div");for(let b=0;b<o.length;b+=1)o[b].c();s=X(),l=A("div"),c=A("button"),c.innerHTML=f,d=X(),m=A("div"),m.innerHTML=C,k=X(),i=A("div"),oe(h.$$.fragment),_=X(),p=A("div"),this.h()},l(b){t=H(b,"DIV",{class:!0});var v=B(t);e=H(v,"DIV",{class:!0});var y=B(e);n=H(y,"DIV",{class:!0});var ue=B(n);for(let Z=0;Z<o.length;Z+=1)o[Z].l(ue);ue.forEach(L),s=U(y),l=H(y,"DIV",{class:!0});var ce=B(l);c=H(ce,"BUTTON",{class:!0,"data-svelte-h":!0}),me(c)!=="svelte-g0ls06"&&(c.innerHTML=f),ce.forEach(L),d=U(y),m=H(y,"DIV",{class:!0,"data-svelte-h":!0}),me(m)!=="svelte-1vd66h7"&&(m.innerHTML=C),k=U(y),i=H(y,"DIV",{class:!0});var fe=B(i);ie(h.$$.fragment,fe),fe.forEach(L),y.forEach(L),_=U(v),p=H(v,"DIV",{class:!0}),B(p).forEach(L),v.forEach(L),this.h()},h(){D(n,"class","tabs svelte-18it3bf"),D(c,"class","button svelte-18it3bf"),D(l,"class","new-tab-container svelte-18it3bf"),D(m,"class","settings-container svelte-18it3bf"),D(i,"class","clone svelte-18it3bf"),V(i,"dragging",r[0]),D(e,"class","tabbar svelte-18it3bf"),D(p,"class","divider svelte-18it3bf"),D(t,"class","svelte-18it3bf")},m(b,v){Q(b,t,v),E(t,e),E(e,n);for(let y=0;y<o.length;y+=1)o[y]&&o[y].m(n,null);r[21](n),E(e,s),E(e,l),E(l,c),E(e,d),E(e,m),E(e,k),E(e,i),le(h,i,null),r[22](i),E(t,_),E(t,p),r[23](t),I=!0,R||(P=W(c,"click",r[12]),R=!0)},p(b,v){v[0]&110346&&(S=be(b[1].order),ke(),o=Ne(o,v,M,1,b,S,u,n,qe,Be,null,Pe),De());const y={};v[0]&16&&(y.title=b[4]),v[0]&64&&(y.active=!b[6]),h.$set(y),(!I||v[0]&1)&&V(i,"dragging",b[0])},i(b){if(!I){for(let v=0;v<S.length;v+=1)q(o[v]);q(h.$$.fragment,b),I=!0}},o(b){for(let v=0;v<o.length;v+=1)F(o[v]);F(h.$$.fragment,b),I=!1},d(b){b&&L(t);for(let v=0;v<o.length;v+=1)o[v].d();r[21](null),ae(h),r[22](null),r[23](null),R=!1,P()}}}const lt=12,he=140,te=70,ne=200,at=1600,Me=.3;function ut(r,t,e){let n,o,u,s;re(r,Fe,a=>e(1,u=a)),re(r,J,a=>e(11,s=a));let l,c=[],f=0,d=null,m=-1,C="",k,i,h,_=!1,p=!1,I=0,R=0,P=0,S,M=!1;const b=(a,g=300)=>{let w;return(...T)=>{clearTimeout(w),w=setTimeout(()=>{a.apply(this,T)},g)}};function v(){N.newTab()}const y=a=>{const g=u.order.findIndex(w=>w===a);if(g<0||!c[g]){console.warn("Cannot close tab!");return}f=c[g].getBoundingClientRect().width,g<u.order.length-1&&(l.style.setProperty("--tab-max-width",`${f}px`),ue()),g==u.activeIndex&&(g==u.order.length-1?N.setActiveIndex(g-1):N.setActiveIndex(g+1)),Te({duration:ne,easing:G,onStep:(w,T)=>{g==0?e(2,l.style.gridTemplateColumns=`minmax(${T*te}px, ${T*f}px)`,l):e(2,l.style.gridTemplateColumns=`repeat(${g}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${T*te}px, ${T*f}px)`,l)},onEnd:()=>{e(2,l.style.gridTemplateColumns="",l),N.removeTab(a)}})},ue=b(()=>{l&&(l.style.setProperty("--tab-max-width",`${he}px`),Te({duration:ne,easing:G,onStep:(a,g)=>{l.style.setProperty("--tab-max-width",`${f+a*(he-f)}px`)},onEnd:()=>{l.style.setProperty("--tab-max-width",`${he}px`)}}))},at);function ce(a){if(!l)return;const g=a.getBoundingClientRect().width;Te({duration:ne,easing:G,onStep:(w,T)=>{u.order.length==1?e(2,l.style.gridTemplateColumns=`minmax(${w*te}px, ${w*g}px)`,l):e(2,l.style.gridTemplateColumns=`repeat(${u.order.length-1}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${w*te}px, ${w*g}px)`,l),e(2,l.scrollLeft=l.scrollWidth,l)},onEnd:()=>{e(2,l.style.gridTemplateColumns="",l)}})}const fe=(a,g)=>{const w=c[0].getBoundingClientRect().width;N.moveTab(a,g,()=>{if(a>g)for(let T=g;T<a;T++)Se(c[T],{duration:ne,easing:G,css:($,O)=>`transform: translateX(-${O*w}px);`});if(a<g)for(let T=g;T>a;T--)Se(c[T],{duration:ne,easing:G,css:($,O)=>`transform: translateX(${O*w}px);`})})};function Z(a){!a.target||!a.dataTransfer||(a.dataTransfer.setData("text/plain",n),a.dataTransfer.setDragImage(new Image,0,0))}function We(a,g){if(a==0&&g==0){e(5,h.style.left="-1000px",h),e(5,h.style.top="-1000px",h);return}let w=S.getBoundingClientRect();if(a<w.left||a>w.right||g<w.top||g>w.bottom){p||(P=0),e(5,h.style.left=`${a+I}px`,h),e(5,h.style.top=`${g+R}px`,h),e(6,p=!0);return}p&&e(6,p=!1),e(5,h.style.left=`${a+I}px`,h),e(5,h.style.top=`${i.top}px`,h);const T=-l.scrollLeft,$=c[0].getBoundingClientRect().width;let O=-1;if(a>T+u.order.length*$)O=u.order.length-1;else for(let ee=0;ee<u.order.length;ee++)if(a>T+ee*$&&a<T+(ee+1)*$){O=ee;break}a<20?(P=-Me,requestAnimationFrame(ye)):a>l.clientWidth-10?(P=Me,requestAnimationFrame(ye)):P=0,!(O==-1||O==u.placeholderIndex)&&fe(u.placeholderIndex,O)}let x=0;function ye(a){if(!_||P==0){x=0;return}x==0&&(x=a);const g=a-x;x=a,l.scrollBy({left:P*g}),requestAnimationFrame(ye)}function Ie(a,g){if(!a.target)return;let w,T;a instanceof TouchEvent?(w=a.touches[0].clientX,T=a.touches[0].clientY):(w=a.clientX,T=a.clientY),window.addEventListener("touchmove",z,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("mousemove",z),window.addEventListener("mouseup",j),window.addEventListener("drag",z),window.addEventListener("dragend",j),window.addEventListener("blur",j),N.setActiveIndex(g),k=a.target,i=k.getBoundingClientRect(),d=[w,T],I=i.left-w,R=i.top-T,e(5,h.style.width=`${i.width}px`,h),e(5,h.style.left=`${i.left}px`,h),e(5,h.style.top=`${i.top}px`,h),m=g,e(4,C=s[u.order[g]].title)}function z(a){let g,w;if(a instanceof TouchEvent?(g=a.touches[0].clientX,w=a.touches[0].clientY,a.preventDefault()):(g=a.clientX,w=a.clientY),_){We(g,w);return}d===null||Math.hypot(d[0]-g,d[1]-w)<lt||(e(0,_=!0),N.setPlaceholderIndex(m),N.setActiveIndex(m))}function j(){window.removeEventListener("touchmove",z),window.removeEventListener("touchend",j),window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",j),window.removeEventListener("drag",z),window.removeEventListener("dragend",j),window.removeEventListener("blur",j),d=null,e(6,p=!1),m=-1,I=0,R=0,N.setPlaceholderIndex(),e(0,_=!1)}Oe(()=>{l.style.setProperty("--tab-max-width",`${he}px`),l.style.setProperty("--tab-min-width",`${te}px`)});const Xe=a=>y(a),Ue=(a,g)=>Ie(g,a);function Ye(a,g){r.$$.not_equal(s[g].title,a)&&(s[g].title=a,J.set(s))}function Ge(a,g){K[a?"unshift":"push"](()=>{c[g]=a,e(3,c)})}function Ke(a){K[a?"unshift":"push"](()=>{l=a,e(2,l)})}function Qe(a){K[a?"unshift":"push"](()=>{h=a,e(5,h)})}function ze(a){K[a?"unshift":"push"](()=>{S=a,e(7,S)})}return r.$$.update=()=>{r.$$.dirty[0]&2&&e(9,n=u.order[u.activeIndex]),r.$$.dirty[0]&2&&e(10,o=u.order[u.placeholderIndex]),r.$$.dirty[0]&1&&(_?e(8,M=!0):setTimeout(()=>e(8,M=!1),20))},[_,u,l,c,C,h,p,S,M,n,o,s,v,y,ce,Z,Ie,Xe,Ue,Ye,Ge,Ke,Qe,ze]}class ct extends _e{constructor(t){super(),we(this,t,ut,it,ve,{},null,[-1,-1])}}function ft(r){let t,e;return{c(){t=A("div"),e=A("div"),this.h()},l(n){t=H(n,"DIV",{class:!0});var o=B(t);e=H(o,"DIV",{class:!0}),B(e).forEach(L),o.forEach(L),this.h()},h(){D(e,"class","quill-editor svelte-dq5srf"),D(t,"class","quill-editor-wrapper svelte-dq5srf"),V(t,"disabled",r[0])},m(n,o){Q(n,t,o),E(t,e),r[4](e)},p(n,[o]){o&1&&V(t,"disabled",n[0])},i:se,o:se,d(n){n&&L(t),r[4](null)}}}function dt(r,t,e){let n;re(r,J,i=>e(5,n=i));let{tabID:o}=t,{disabled:u=!1}=t,s,l;tt.subscribe(i=>{s==null||s.root.setAttribute("spellcheck",i.spellCheck.toString())});async function c(i){var I,R,P,S;if(!s)return;const{Delta:h,Range:_}=await He(async()=>{const{Delta:M,Range:b}=await import("../chunks/core.CG__ofcG.js").then(v=>v.G);return{Delta:M,Range:b}},[],import.meta.url);if(i.undo.length>0)for(var p=0;p<i.undo.length;p++){const M=(I=i.undo[p].range)==null?void 0:I.index,b=(R=i.undo[p].range)==null?void 0:R.length,v={delta:new h(i.undo[p].delta.ops),range:M!==void 0&&b!==void 0?new _(M,b):null};s.history.stack.undo.push(v)}if(i.redo.length>0)for(var p=0;p<i.redo.length;p++){const b=(P=i.redo[p].range)==null?void 0:P.index,v=(S=i.redo[p].range)==null?void 0:S.length,y={delta:new h(i.redo[p].delta.ops),range:b!==void 0&&v!==void 0?new _(b,v):null};s.history.stack.redo.push(y)}}function f(){if(!s||!n[o])return;const i=n[o].ops;s.setContents(i);const h=n[o].history;c(h)}function d(){if(!s||!n[o])return;Ee(J,n[o].ops=s.getContents().ops,n);const i=structuredClone(s.history.stack);Ee(J,n[o].history=i,n)}function m(i,h,_){_==="user"&&d()}async function C(){const{default:i}=await He(async()=>{const{default:h}=await import("../chunks/quill.Bk4jDS0q.js");return{default:h}},__vite__mapDeps([0,1]),import.meta.url);e(3,s=new i(l,{formats:["bold","italic","underline","strike","code"],placeholder:"Enter text here"})),f(),s.on("text-change",m),s.keyboard.addBinding({key:"/",altKey:!0},()=>{s.format("code",!s.getFormat().code),console.log(s.history)}),s.keyboard.addBinding({key:"-",altKey:!0},()=>{s.format("strike",!s.getFormat().strike)})}Oe(()=>{console.log("hi"),C()});function k(i){K[i?"unshift":"push"](()=>{l=i,e(1,l)})}return r.$$set=i=>{"tabID"in i&&e(2,o=i.tabID),"disabled"in i&&e(0,u=i.disabled)},r.$$.update=()=>{r.$$.dirty&9&&(u?s==null||s.disable():s==null||s.enable())},[u,l,o,s,k]}class gt extends _e{constructor(t){super(),we(this,t,dt,ft,ve,{tabID:2,disabled:0})}}function Re(r,t,e){const n=r.slice();return n[3]=t[e],n}function ht(r){let t,e;return t=new st({}),{c(){oe(t.$$.fragment)},l(n){ie(t.$$.fragment,n)},m(n,o){le(t,n,o),e=!0},p:se,i(n){e||(q(t.$$.fragment,n),e=!0)},o(n){F(t.$$.fragment,n),e=!1},d(n){ae(t,n)}}}function mt(r){let t,e,n,o=[],u=new Map,s;e=new ct({});let l=be(Object.keys(r[2]));const c=f=>f[3];for(let f=0;f<l.length;f+=1){let d=Re(r,l,f),m=c(d);u.set(m,o[f]=Ve(m,d))}return{c(){t=A("div"),oe(e.$$.fragment),n=X();for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){t=H(f,"DIV",{class:!0});var d=B(t);ie(e.$$.fragment,d),n=U(d);for(let m=0;m<o.length;m+=1)o[m].l(d);d.forEach(L),this.h()},h(){D(t,"class","page-container svelte-1kno83k")},m(f,d){Q(f,t,d),le(e,t,null),E(t,n);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(t,null);s=!0},p(f,d){d&5&&(l=be(Object.keys(f[2])),ke(),o=Ne(o,d,c,1,f,l,u,t,qe,Ve,null,Re),De())},i(f){if(!s){q(e.$$.fragment,f);for(let d=0;d<l.length;d+=1)q(o[d]);s=!0}},o(f){F(e.$$.fragment,f);for(let d=0;d<o.length;d+=1)F(o[d]);s=!1},d(f){f&&L(t),ae(e);for(let d=0;d<o.length;d+=1)o[d].d()}}}function Ve(r,t){let e,n,o;return n=new gt({props:{disabled:t[3]!=t[0],tabID:t[3]}}),{key:r,first:null,c(){e=pe(),oe(n.$$.fragment),this.h()},l(u){e=pe(),ie(n.$$.fragment,u),this.h()},h(){this.first=e},m(u,s){Q(u,e,s),le(n,u,s),o=!0},p(u,s){t=u;const l={};s&5&&(l.disabled=t[3]!=t[0]),s&4&&(l.tabID=t[3]),n.$set(l)},i(u){o||(q(n.$$.fragment,u),o=!0)},o(u){F(n.$$.fragment,u),o=!1},d(u){u&&L(e),ae(n,u)}}}function pt(r){let t,e,n,o;const u=[mt,ht],s=[];function l(c,f){return c[1].currentUser&&!c[1].isLoading?0:1}return t=l(r),e=s[t]=u[t](r),{c(){e.c(),n=pe()},l(c){e.l(c),n=pe()},m(c,f){s[t].m(c,f),Q(c,n,f),o=!0},p(c,[f]){let d=t;t=l(c),t===d?s[t].p(c,f):(ke(),F(s[d],1,1,()=>{s[d]=null}),De(),e=s[t],e?e.p(c,f):(e=s[t]=u[t](c),e.c()),q(e,1),e.m(n.parentNode,n))},i(c){o||(q(e),o=!0)},o(c){F(e),o=!1},d(c){c&&L(n),s[t].d(c)}}}function bt(r,t,e){let n,o;re(r,nt,s=>e(1,n=s)),re(r,J,s=>e(2,o=s));let u="";return Fe.subscribe(s=>{e(0,u=s.order[s.activeIndex])}),[u,n,o]}class It extends _e{constructor(t){super(),we(this,t,bt,pt,ve,{})}}export{It as component};
