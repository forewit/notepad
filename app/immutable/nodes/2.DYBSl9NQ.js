const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/quill.Bk4jDS0q.js","../chunks/core.CG__ofcG.js"])))=>i.map(i=>d[i]);
import{s as ve,n as oe,r as Je,e as fe,z as Ze,d as K,c as x,o as Oe,A as xe,B as $e,a as Ee}from"../chunks/scheduler.CgGcoA3v.js";import{S as _e,i as we,e as A,s as X,c as S,d as B,v as me,h as U,g as L,w as I,A as R,j as Q,k as E,C as Ce,x as W,G as ge,I as Le,J as Ae,p as ie,q as le,r as ae,o as ke,n as De,a as q,t as F,u as ue,K as et,m as pe}from"../chunks/index.BSd0CfbD.js";import{e as be,u as Ne,o as qe}from"../chunks/each.qCoEctRN.js";import{b as Y}from"../chunks/entry.ZN7hB10X.js";import{m as Fe,t as Z,i as N,s as tt,a as nt}from"../chunks/firebaseStore.BrbUmzsi.js";import{_ as Se}from"../chunks/preload-helper.D6kgxu3v.js";import{S as rt}from"../chunks/Spinner.wdsbRmLv.js";function st(s){let t,e,r="",o,i,u,n,a,d=`<span class="close-icon svelte-1k0gvuj" style="-webkit-mask: url(${Y}/images/svg/cancel.svg) no-repeat center / contain; mask: url(${Y}/images/svg/cancel.svg) no-repeat center / contain;"></span>`,f,m;return{c(){t=A("div"),e=A("button"),e.innerHTML=r,o=X(),i=A("div"),u=A("input"),n=X(),a=A("button"),a.innerHTML=d,this.h()},l(C){t=S(C,"DIV",{class:!0});var D=B(t);e=S(D,"BUTTON",{class:!0,draggable:!0,"data-svelte-h":!0}),me(e)!=="svelte-1m2idpq"&&(e.innerHTML=r),o=U(D),i=S(D,"DIV",{class:!0});var g=B(i);u=S(g,"INPUT",{autocorrect:!0,autocomplete:!0,spellcheck:!0,type:!0,class:!0}),n=U(g),a=S(g,"BUTTON",{class:!0,draggable:!0,"data-svelte-h":!0}),me(a)!=="svelte-achx3m"&&(a.innerHTML=d),g.forEach(L),D.forEach(L),this.h()},h(){I(e,"class","tab svelte-1k0gvuj"),I(e,"draggable","true"),R(e,"active",s[1]),I(u,"autocorrect","off"),I(u,"autocomplete","off"),I(u,"spellcheck","false"),I(u,"type","text"),I(u,"class","svelte-1k0gvuj"),I(a,"class","close-button svelte-1k0gvuj"),I(a,"draggable","true"),I(i,"class","tab-wrapper svelte-1k0gvuj"),I(t,"class","container svelte-1k0gvuj"),R(t,"preventHover",s[2])},m(C,D){Q(C,t,D),E(t,e),E(t,o),E(t,i),E(i,u),s[9](u),Ce(u,s[0]),E(i,n),E(i,a),f||(m=[W(e,"dblclick",ge(s[8])),W(e,"mousedown",ge(function(){fe(s[4])&&s[4].apply(this,arguments)})),W(e,"touchstart",ge(function(){fe(s[4])&&s[4].apply(this,arguments)})),W(e,"dragstart",ge(function(){fe(s[5])&&s[5].apply(this,arguments)})),W(u,"input",s[10]),W(a,"click",Le(Ae(function(){fe(s[3])&&s[3].apply(this,arguments)}))),W(a,"dragstart",Le(Ae(s[7])))],f=!0)},p(C,[D]){s=C,D&2&&R(e,"active",s[1]),D&1&&u.value!==s[0]&&Ce(u,s[0]),D&4&&R(t,"preventHover",s[2])},i:oe,o:oe,d(C){C&&L(t),s[9](null),f=!1,Je(m)}}}function ot(s,t,e){let{title:r=""}=t,{active:o=!1}=t,{preventHover:i=!1}=t,{onClose:u=()=>{}}=t,{onPointerdown:n=g=>{}}=t,{onDragstart:a=g=>{}}=t,d;function f(g){Ze.call(this,s,g)}const m=()=>d.select();function C(g){K[g?"unshift":"push"](()=>{d=g,e(6,d)})}function D(){r=this.value,e(0,r)}return s.$$set=g=>{"title"in g&&e(0,r=g.title),"active"in g&&e(1,o=g.active),"preventHover"in g&&e(2,i=g.preventHover),"onClose"in g&&e(3,u=g.onClose),"onPointerdown"in g&&e(4,n=g.onPointerdown),"onDragstart"in g&&e(5,a=g.onDragstart)},[r,o,i,u,n,a,d,f,m,C,D]}class je extends _e{constructor(t){super(),we(this,t,ot,st,ve,{title:0,active:1,preventHover:2,onClose:3,onPointerdown:4,onDragstart:5})}}function G(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}const He=(s,t)=>{const{duration:e=300,easing:r=G,onEnd:o=()=>{},onStep:i=()=>{},css:u}=t;let n;function a(d){if(!s){console.warn("Cannot find element to animate");return}n===void 0&&(n=d);const f=r((d-n)/e),m=1-f;f<1?(s.style.cssText=u(f,m),i(f,m),requestAnimationFrame(a)):(s.style.cssText="",o())}requestAnimationFrame(a)},Te=s=>{const{duration:t=300,easing:e=G,onEnd:r=()=>{},onStep:o=()=>{}}=s;let i;function u(n){i===void 0&&(i=n);const a=e((n-i)/t),d=1-a;a<1?(o(a,d),requestAnimationFrame(u)):r()}requestAnimationFrame(u)};function Pe(s,t,e){const r=s.slice();return r[40]=t[e],r[41]=t,r[42]=e,r}function Be(s,t){let e,r,o,i,u=t[42],n,a,d;function f(){return t[17](t[40])}function m(...b){return t[18](t[42],...b)}function C(b){t[19](b,t[40])}let D={active:t[9]==t[40],preventHover:t[8],onClose:f,onPointerdown:m,onDragstart:t[15]};t[11][t[40]].title!==void 0&&(D.title=t[11][t[40]].title),r=new je({props:D}),K.push(()=>et(r,"title",C));const g=()=>t[20](e,u),c=()=>t[20](null,u);return{key:s,first:null,c(){e=A("div"),ie(r.$$.fragment),i=X(),this.h()},l(b){e=S(b,"DIV",{class:!0});var _=B(e);le(r.$$.fragment,_),i=U(_),_.forEach(L),this.h()},h(){I(e,"class","tab-container svelte-18it3bf"),R(e,"placeholder",t[10]==t[40]),this.first=e},m(b,_){Q(b,e,_),ae(r,e,null),E(e,i),g(),n=!0,a||(d=xe(t[14].call(null,e)),a=!0)},p(b,_){t=b;const y={};_[0]&514&&(y.active=t[9]==t[40]),_[0]&256&&(y.preventHover=t[8]),_[0]&2&&(y.onClose=f),_[0]&2&&(y.onPointerdown=m),!o&&_[0]&2050&&(o=!0,y.title=t[11][t[40]].title,$e(()=>o=!1)),r.$set(y),u!==t[42]&&(c(),u=t[42],g()),(!n||_[0]&1026)&&R(e,"placeholder",t[10]==t[40])},i(b){n||(q(r.$$.fragment,b),n=!0)},o(b){F(r.$$.fragment,b),n=!1},d(b){b&&L(e),ue(r),c(),a=!1,d()}}}function it(s){let t,e,r,o=[],i=new Map,u,n,a,d=`<span class="button-icon svelte-18it3bf" style="-webkit-mask: url(${Y}/images/svg/plus.svg) no-repeat center / contain; mask: url(${Y}/images/svg/plus.svg) no-repeat center / contain;"></span>`,f,m,C=`<a class="button svelte-18it3bf" href="${Y}/settings"><span class="button-icon svelte-18it3bf" style="-webkit-mask: url(${Y}/images/svg/gear.svg) no-repeat center / contain; mask: url(${Y}/images/svg/gear.svg) no-repeat center / contain;"></span></a>`,D,g,c,b,_,y,M,P,H=be(s[1].order);const V=v=>v[40];for(let v=0;v<H.length;v+=1){let p=Pe(s,H,v),w=V(p);i.set(w,o[v]=Be(w,p))}return c=new je({props:{title:s[4],active:!s[6],preventHover:!0}}),{c(){t=A("div"),e=A("div"),r=A("div");for(let v=0;v<o.length;v+=1)o[v].c();u=X(),n=A("div"),a=A("button"),a.innerHTML=d,f=X(),m=A("div"),m.innerHTML=C,D=X(),g=A("div"),ie(c.$$.fragment),b=X(),_=A("div"),this.h()},l(v){t=S(v,"DIV",{class:!0});var p=B(t);e=S(p,"DIV",{class:!0});var w=B(e);r=S(w,"DIV",{class:!0});var z=B(r);for(let $=0;$<o.length;$+=1)o[$].l(z);z.forEach(L),u=U(w),n=S(w,"DIV",{class:!0});var ce=B(n);a=S(ce,"BUTTON",{class:!0,"data-svelte-h":!0}),me(a)!=="svelte-g0ls06"&&(a.innerHTML=d),ce.forEach(L),f=U(w),m=S(w,"DIV",{class:!0,"data-svelte-h":!0}),me(m)!=="svelte-1vd66h7"&&(m.innerHTML=C),D=U(w),g=S(w,"DIV",{class:!0});var de=B(g);le(c.$$.fragment,de),de.forEach(L),w.forEach(L),b=U(p),_=S(p,"DIV",{class:!0}),B(_).forEach(L),p.forEach(L),this.h()},h(){I(r,"class","tabs svelte-18it3bf"),I(a,"class","button svelte-18it3bf"),I(n,"class","new-tab-container svelte-18it3bf"),I(m,"class","settings-container svelte-18it3bf"),I(g,"class","clone svelte-18it3bf"),R(g,"dragging",s[0]),I(e,"class","tabbar svelte-18it3bf"),I(_,"class","divider svelte-18it3bf"),I(t,"class","svelte-18it3bf")},m(v,p){Q(v,t,p),E(t,e),E(e,r);for(let w=0;w<o.length;w+=1)o[w]&&o[w].m(r,null);s[21](r),E(e,u),E(e,n),E(n,a),E(e,f),E(e,m),E(e,D),E(e,g),ae(c,g,null),s[22](g),E(t,b),E(t,_),s[23](t),y=!0,M||(P=W(a,"click",s[12]),M=!0)},p(v,p){p[0]&110346&&(H=be(v[1].order),ke(),o=Ne(o,p,V,1,v,H,i,r,qe,Be,null,Pe),De());const w={};p[0]&16&&(w.title=v[4]),p[0]&64&&(w.active=!v[6]),c.$set(w),(!y||p[0]&1)&&R(g,"dragging",v[0])},i(v){if(!y){for(let p=0;p<H.length;p+=1)q(o[p]);q(c.$$.fragment,v),y=!0}},o(v){for(let p=0;p<o.length;p+=1)F(o[p]);F(c.$$.fragment,v),y=!1},d(v){v&&L(t);for(let p=0;p<o.length;p+=1)o[p].d();s[21](null),ue(c),s[22](null),s[23](null),M=!1,P()}}}const lt=12,he=140,re=70,se=200,at=1600,Me=.3;function ut(s,t,e){let r,o,i,u;x(s,Fe,l=>e(1,i=l)),x(s,Z,l=>e(11,u=l));let n,a=[],d=0,f=null,m=-1,C="",D,g,c,b=!1,_=!1,y=0,M=0,P=0,H,V=!1;const v=(l,h=300)=>{let T;return(...k)=>{clearTimeout(T),T=setTimeout(()=>{l.apply(this,k)},h)}};function p(){N.newTab()}const w=l=>{const h=i.order.findIndex(T=>T===l);if(h<0||!a[h]){console.warn("Cannot close tab!");return}d=a[h].getBoundingClientRect().width,h<i.order.length-1&&(n.style.setProperty("--tab-max-width",`${d}px`),z()),h==i.activeIndex&&(h==i.order.length-1?N.setActiveIndex(h-1):N.setActiveIndex(h+1)),Te({duration:se,easing:G,onStep:(T,k)=>{h==0?e(2,n.style.gridTemplateColumns=`minmax(${k*re}px, ${k*d}px)`,n):e(2,n.style.gridTemplateColumns=`repeat(${h}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${k*re}px, ${k*d}px)`,n)},onEnd:()=>{e(2,n.style.gridTemplateColumns="",n),N.removeTab(l)}})},z=v(()=>{n&&(n.style.setProperty("--tab-max-width",`${he}px`),Te({duration:se,easing:G,onStep:(l,h)=>{n.style.setProperty("--tab-max-width",`${d+l*(he-d)}px`)},onEnd:()=>{n.style.setProperty("--tab-max-width",`${he}px`)}}))},at);function ce(l){if(!n)return;const h=l.getBoundingClientRect().width;Te({duration:se,easing:G,onStep:(T,k)=>{i.order.length==1?e(2,n.style.gridTemplateColumns=`minmax(${T*re}px, ${T*h}px)`,n):e(2,n.style.gridTemplateColumns=`repeat(${i.order.length-1}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${T*re}px, ${T*h}px)`,n),e(2,n.scrollLeft=n.scrollWidth,n)},onEnd:()=>{e(2,n.style.gridTemplateColumns="",n)}})}const de=(l,h)=>{const T=a[0].getBoundingClientRect().width;N.moveTab(l,h,()=>{if(l>h)for(let k=h;k<l;k++)He(a[k],{duration:se,easing:G,css:(te,O)=>`transform: translateX(-${O*T}px);`});if(l<h)for(let k=h;k>l;k--)He(a[k],{duration:se,easing:G,css:(te,O)=>`transform: translateX(${O*T}px);`})})};function $(l){!l.target||!l.dataTransfer||(l.dataTransfer.setData("text/plain",r),l.dataTransfer.setDragImage(new Image,0,0))}function We(l,h){if(l==0&&h==0){e(5,c.style.left="-1000px",c),e(5,c.style.top="-1000px",c);return}let T=H.getBoundingClientRect();if(l<T.left||l>T.right||h<T.top||h>T.bottom){_||(P=0),e(5,c.style.left=`${l+y}px`,c),e(5,c.style.top=`${h+M}px`,c),e(6,_=!0);return}_&&e(6,_=!1),e(5,c.style.left=`${l+y}px`,c),e(5,c.style.top=`${g.top}px`,c);const k=-n.scrollLeft,te=a[0].getBoundingClientRect().width;let O=-1;if(l>k+i.order.length*te)O=i.order.length-1;else for(let ne=0;ne<i.order.length;ne++)if(l>k+ne*te&&l<k+(ne+1)*te){O=ne;break}l<20?(P=-Me,requestAnimationFrame(ye)):l>n.clientWidth-10?(P=Me,requestAnimationFrame(ye)):P=0,!(O==-1||O==i.placeholderIndex)&&de(i.placeholderIndex,O)}let ee=0;function ye(l){if(!b||P==0){ee=0;return}ee==0&&(ee=l);const h=l-ee;ee=l,n.scrollBy({left:P*h}),requestAnimationFrame(ye)}function Ie(l,h){if(!l.target)return;let T,k;l instanceof TouchEvent?(T=l.touches[0].clientX,k=l.touches[0].clientY):(T=l.clientX,k=l.clientY),window.addEventListener("touchmove",J,{passive:!1}),window.addEventListener("touchend",j),window.addEventListener("mousemove",J),window.addEventListener("mouseup",j),window.addEventListener("drag",J),window.addEventListener("dragend",j),window.addEventListener("blur",j),N.setActiveIndex(h),D=l.target,g=D.getBoundingClientRect(),f=[T,k],y=g.left-T,M=g.top-k,e(5,c.style.width=`${g.width}px`,c),e(5,c.style.left=`${g.left}px`,c),e(5,c.style.top=`${g.top}px`,c),m=h,e(4,C=u[i.order[h]].title)}function J(l){let h,T;if(l instanceof TouchEvent?(h=l.touches[0].clientX,T=l.touches[0].clientY,l.preventDefault()):(h=l.clientX,T=l.clientY),b){We(h,T);return}f===null||Math.hypot(f[0]-h,f[1]-T)<lt||(e(0,b=!0),N.setPlaceholderIndex(m),N.setActiveIndex(m))}function j(){window.removeEventListener("touchmove",J),window.removeEventListener("touchend",j),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",j),window.removeEventListener("drag",J),window.removeEventListener("dragend",j),window.removeEventListener("blur",j),f=null,e(6,_=!1),m=-1,y=0,M=0,N.setPlaceholderIndex(),e(0,b=!1)}Oe(()=>{n.style.setProperty("--tab-max-width",`${he}px`),n.style.setProperty("--tab-min-width",`${re}px`)});const Xe=l=>w(l),Ue=(l,h)=>Ie(h,l);function Ye(l,h){s.$$.not_equal(u[h].title,l)&&(u[h].title=l,Z.set(u))}function Ge(l,h){K[l?"unshift":"push"](()=>{a[h]=l,e(3,a)})}function Ke(l){K[l?"unshift":"push"](()=>{n=l,e(2,n)})}function Qe(l){K[l?"unshift":"push"](()=>{c=l,e(5,c)})}function ze(l){K[l?"unshift":"push"](()=>{H=l,e(7,H)})}return s.$$.update=()=>{s.$$.dirty[0]&2&&e(9,r=i.order[i.activeIndex]),s.$$.dirty[0]&2&&e(10,o=i.order[i.placeholderIndex]),s.$$.dirty[0]&1&&(b?e(8,V=!0):setTimeout(()=>e(8,V=!1),20))},[b,i,n,a,C,c,_,H,V,r,o,u,p,w,ce,$,Ie,Xe,Ue,Ye,Ge,Ke,Qe,ze]}class ct extends _e{constructor(t){super(),we(this,t,ut,it,ve,{},null,[-1,-1])}}function dt(s){let t,e;return{c(){t=A("div"),e=A("div"),this.h()},l(r){t=S(r,"DIV",{class:!0});var o=B(t);e=S(o,"DIV",{class:!0}),B(e).forEach(L),o.forEach(L),this.h()},h(){I(e,"class","quill-editor svelte-dq5srf"),I(t,"class","quill-editor-wrapper svelte-dq5srf"),R(t,"disabled",s[0])},m(r,o){Q(r,t,o),E(t,e),s[5](e)},p(r,[o]){o&1&&R(t,"disabled",r[0])},i:oe,o:oe,d(r){r&&L(t),s[5](null)}}}function ft(s,t,e){let r,o;x(s,Z,c=>e(6,r=c)),x(s,tt,c=>e(4,o=c));let{tabID:i}=t,{disabled:u=!1}=t,n,a;async function d(c){var M,P,H,V;if(!n)return;const{Delta:b,Range:_}=await Se(async()=>{const{Delta:v,Range:p}=await import("../chunks/core.CG__ofcG.js").then(w=>w.G);return{Delta:v,Range:p}},[],import.meta.url);if(c.undo.length>0)for(var y=0;y<c.undo.length;y++){const v=(M=c.undo[y].range)==null?void 0:M.index,p=(P=c.undo[y].range)==null?void 0:P.length,w={delta:new b(c.undo[y].delta.ops),range:v!==void 0&&p!==void 0?new _(v,p):null};n.history.stack.undo.push(w)}if(c.redo.length>0)for(var y=0;y<c.redo.length;y++){const p=(H=c.redo[y].range)==null?void 0:H.index,w=(V=c.redo[y].range)==null?void 0:V.length,z={delta:new b(c.redo[y].delta.ops),range:p!==void 0&&w!==void 0?new _(p,w):null};n.history.stack.redo.push(z)}}function f(){if(!n||!r[i])return;const c=r[i].ops;n.setContents(c);const b=r[i].history;d(b)}function m(){if(!n||!r[i])return;Ee(Z,r[i].ops=n.getContents().ops,r);const c=structuredClone(n.history.stack);Ee(Z,r[i].history=c,r)}function C(c,b,_){_==="user"&&m()}async function D(){const{default:c}=await Se(async()=>{const{default:b}=await import("../chunks/quill.Bk4jDS0q.js");return{default:b}},__vite__mapDeps([0,1]),import.meta.url);e(3,n=new c(a,{formats:["bold","italic","underline","strike","code"],placeholder:"Enter text here"})),f(),n.on("text-change",C),n.keyboard.addBinding({key:"/",altKey:!0},()=>{n.format("code",!n.getFormat().code),console.log(n.history)}),n.keyboard.addBinding({key:"-",altKey:!0},()=>{n.format("strike",!n.getFormat().strike)})}Oe(()=>{D()});function g(c){K[c?"unshift":"push"](()=>{a=c,e(1,a)})}return s.$$set=c=>{"tabID"in c&&e(2,i=c.tabID),"disabled"in c&&e(0,u=c.disabled)},s.$$.update=()=>{s.$$.dirty&9&&(u?n==null||n.disable():n==null||n.enable()),s.$$.dirty&24&&(n==null||n.root.setAttribute("spellcheck",o.spellCheck.toString()))},[u,a,i,n,o,g]}class gt extends _e{constructor(t){super(),we(this,t,ft,dt,ve,{tabID:2,disabled:0})}}function Re(s,t,e){const r=s.slice();return r[3]=t[e],r}function ht(s){let t,e;return t=new rt({}),{c(){ie(t.$$.fragment)},l(r){le(t.$$.fragment,r)},m(r,o){ae(t,r,o),e=!0},p:oe,i(r){e||(q(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){ue(t,r)}}}function mt(s){let t,e,r,o=[],i=new Map,u;e=new ct({});let n=be(Object.keys(s[2]));const a=d=>d[3];for(let d=0;d<n.length;d+=1){let f=Re(s,n,d),m=a(f);i.set(m,o[d]=Ve(m,f))}return{c(){t=A("div"),ie(e.$$.fragment),r=X();for(let d=0;d<o.length;d+=1)o[d].c();this.h()},l(d){t=S(d,"DIV",{class:!0});var f=B(t);le(e.$$.fragment,f),r=U(f);for(let m=0;m<o.length;m+=1)o[m].l(f);f.forEach(L),this.h()},h(){I(t,"class","page-container svelte-1kno83k")},m(d,f){Q(d,t,f),ae(e,t,null),E(t,r);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(t,null);u=!0},p(d,f){f&5&&(n=be(Object.keys(d[2])),ke(),o=Ne(o,f,a,1,d,n,i,t,qe,Ve,null,Re),De())},i(d){if(!u){q(e.$$.fragment,d);for(let f=0;f<n.length;f+=1)q(o[f]);u=!0}},o(d){F(e.$$.fragment,d);for(let f=0;f<o.length;f+=1)F(o[f]);u=!1},d(d){d&&L(t),ue(e);for(let f=0;f<o.length;f+=1)o[f].d()}}}function Ve(s,t){let e,r,o;return r=new gt({props:{disabled:t[3]!==t[0],tabID:t[3]}}),{key:s,first:null,c(){e=pe(),ie(r.$$.fragment),this.h()},l(i){e=pe(),le(r.$$.fragment,i),this.h()},h(){this.first=e},m(i,u){Q(i,e,u),ae(r,i,u),o=!0},p(i,u){t=i;const n={};u&5&&(n.disabled=t[3]!==t[0]),u&4&&(n.tabID=t[3]),r.$set(n)},i(i){o||(q(r.$$.fragment,i),o=!0)},o(i){F(r.$$.fragment,i),o=!1},d(i){i&&L(e),ue(r,i)}}}function pt(s){let t,e,r,o;const i=[mt,ht],u=[];function n(a,d){return a[1].currentUser&&!a[1].isLoading?0:1}return t=n(s),e=u[t]=i[t](s),{c(){e.c(),r=pe()},l(a){e.l(a),r=pe()},m(a,d){u[t].m(a,d),Q(a,r,d),o=!0},p(a,[d]){let f=t;t=n(a),t===f?u[t].p(a,d):(ke(),F(u[f],1,1,()=>{u[f]=null}),De(),e=u[t],e?e.p(a,d):(e=u[t]=i[t](a),e.c()),q(e,1),e.m(r.parentNode,r))},i(a){o||(q(e),o=!0)},o(a){F(e),o=!1},d(a){a&&L(r),u[t].d(a)}}}function bt(s,t,e){let r,o;x(s,nt,u=>e(1,r=u)),x(s,Z,u=>e(2,o=u));let i;return Fe.subscribe(u=>{e(0,i=u.order[u.activeIndex])}),[i,r,o]}class It extends _e{constructor(t){super(),we(this,t,bt,pt,ve,{})}}export{It as component};
