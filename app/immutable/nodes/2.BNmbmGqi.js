import{s as fe,i as ne,n as ae,r as Ee,b as q,c as Ie,o as ze,y as Oe,z as ke}from"../chunks/scheduler.DvlNEcs7.js";import{S as de,i as he,e as H,s as Y,c as L,a as M,f as F,k as Ce,d as I,l as T,D as R,g as te,h as C,E as le,m as V,F as Xe,G as ge,w as ie,x as oe,y as re,u as qe,q as Ue,n as $,o as ee,z as ue,H as He}from"../chunks/index.DfRyX0YP.js";import{e as be,u as Ye,o as Fe,a as me,b as K,d as _e}from"../chunks/animate.CkGGxskC.js";import{b as ce,w as Ge}from"../chunks/paths.BxQXzjTH.js";function Je(s){let e,t,n,a,i,o=`<div class="close-icon svelte-ac7wvy" style="-webkit-mask: url(${ce}/images/svg/cancel.svg) no-repeat center / contain; mask: url(${ce}/images/svg/cancel.svg) no-repeat center / contain;"></div>`,_,m;return{c(){e=H("div"),t=H("button"),n=H("input"),a=Y(),i=H("button"),i.innerHTML=o,this.h()},l(r){e=L(r,"DIV",{class:!0});var p=M(e);t=L(p,"BUTTON",{class:!0});var v=M(t);n=L(v,"INPUT",{autocorrect:!0,autocomplete:!0,spellcheck:!0,type:!0,class:!0}),a=F(v),i=L(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(i)!=="svelte-1m9e2o9"&&(i.innerHTML=o),v.forEach(I),p.forEach(I),this.h()},h(){T(n,"autocorrect","off"),T(n,"autocomplete","off"),T(n,"spellcheck","false"),T(n,"type","text"),T(n,"class","svelte-ac7wvy"),T(i,"class","close-button svelte-ac7wvy"),R(i,"preventHover",s[2]),T(t,"class","tab svelte-ac7wvy"),R(t,"active",s[1]),T(e,"class","container svelte-ac7wvy"),R(e,"preventHover",s[2])},m(r,p){te(r,e,p),C(e,t),C(t,n),s[7](n),le(n,s[0]),C(t,a),C(t,i),_||(m=[V(n,"input",s[8]),V(i,"click",Xe(function(){ne(s[3])&&s[3].apply(this,arguments)})),V(t,"dblclick",ge(s[9])),V(t,"click",function(){ne(s[4])&&s[4].apply(this,arguments)}),V(t,"mousedown",ge(function(){ne(s[5])&&s[5].apply(this,arguments)})),V(t,"touchstart",ge(function(){ne(s[5])&&s[5].apply(this,arguments)}))],_=!0)},p(r,[p]){s=r,p&1&&n.value!==s[0]&&le(n,s[0]),p&4&&R(i,"preventHover",s[2]),p&2&&R(t,"active",s[1]),p&4&&R(e,"preventHover",s[2])},i:ae,o:ae,d(r){r&&I(e),s[7](null),_=!1,Ee(m)}}}function Ze(s,e,t){let{title:n=""}=e,{active:a=!1}=e,{preventHover:i=!1}=e,{onClose:o=()=>{}}=e,{onClick:_=()=>{}}=e,{onMousedown:m=b=>{}}=e,r;function p(b){q[b?"unshift":"push"](()=>{r=b,t(6,r)})}function v(){n=this.value,t(0,n)}const k=()=>r.select();return s.$$set=b=>{"title"in b&&t(0,n=b.title),"active"in b&&t(1,a=b.active),"preventHover"in b&&t(2,i=b.preventHover),"onClose"in b&&t(3,o=b.onClose),"onClick"in b&&t(4,_=b.onClick),"onMousedown"in b&&t(5,m=b.onMousedown)},[n,a,i,o,_,m,r,p,v,k]}class Le extends de{constructor(e){super(),he(this,e,Ze,Je,fe,{title:0,active:1,preventHover:2,onClose:3,onClick:4,onMousedown:5})}}let je=0;const z=Ge({tabs:[],activeIndex:0,placeholderIndex:-1}),B={newTab:s=>{const{data:e={id:je++,title:"Untitled",text:""},index:t=-1,callback:n=()=>{}}=s||{};z.update(a=>(a.tabs.some(i=>i.id==e.id)||(t<0?(a.tabs.push(e),a.activeIndex=a.tabs.length-1):(a.tabs.splice(t,0,e),a.activeIndex=t)),a)),n()},removeTab:s=>{z.update(e=>(s<0||s>=e.tabs.length||(e.placeholderIndex==s&&(e.placeholderIndex=-1),e.tabs.splice(s,1),s==e.activeIndex-1?e.activeIndex=Math.max(0,s):e.activeIndex=Math.min(e.activeIndex,e.tabs.length-1)),e))},setActiveIndex:s=>{z.update(e=>(s<0?e.activeIndex=0:s>e.tabs.length?e.activeIndex=e.tabs.length-1:e.activeIndex=s,e))},setPlaceholderIndex:s=>{z.update(e=>(e.placeholderIndex=s===void 0||s<0||s>=e.tabs.length?-1:s,e))},moveTab:(s,e,t=()=>{})=>{s!=e&&(z.update(n=>{if(s<0||s>=n.tabs.length||e<0||e>=n.tabs.length)return n;const a=n.tabs[s];return n.tabs.splice(s,1),n.tabs.splice(e,0,a),n.activeIndex==s&&(n.activeIndex=e),n.placeholderIndex==s&&(n.placeholderIndex=e),n}),t())}};function we(s,e,t){const n=s.slice();return n[39]=e[t],n[40]=e,n[41]=t,n}function Te(s,e){let t,n,a,i,o=e[41],_,m,r;function p(){return e[15](e[41])}function v(){return e[16](e[41])}function k(...y){return e[17](e[41],...y)}function b(y){e[18](y,e[41])}let A={active:e[8].activeIndex==e[41],preventHover:e[7],onClose:p,onClick:v,onMousedown:k};e[8].tabs[e[41]].title!==void 0&&(A.title=e[8].tabs[e[41]].title),n=new Le({props:A}),q.push(()=>He(n,"title",b));const D=()=>e[19](t,o),S=()=>e[19](null,o);return{key:s,first:null,c(){t=H("div"),ie(n.$$.fragment),i=Y(),this.h()},l(y){t=L(y,"DIV",{class:!0,draggable:!0});var g=M(t);oe(n.$$.fragment,g),i=F(g),g.forEach(I),this.h()},h(){T(t,"class","tab-container svelte-1fb1zau"),T(t,"draggable","true"),R(t,"placeholder",e[8].placeholderIndex==e[41]),this.first=t},m(y,g){te(y,t,g),re(n,t,null),C(t,i),D(),_=!0,m||(r=[Oe(e[11].call(null,t)),V(t,"dragstart",e[13])],m=!0)},p(y,g){e=y;const d={};g[0]&256&&(d.active=e[8].activeIndex==e[41]),g[0]&128&&(d.preventHover=e[7]),g[0]&256&&(d.onClose=p),g[0]&256&&(d.onClick=v),g[0]&256&&(d.onMousedown=k),!a&&g[0]&256&&(a=!0,d.title=e[8].tabs[e[41]].title,ke(()=>a=!1)),n.$set(d),o!==e[41]&&(S(),o=e[41],D()),(!_||g[0]&256)&&R(t,"placeholder",e[8].placeholderIndex==e[41])},i(y){_||($(n.$$.fragment,y),_=!0)},o(y){ee(n.$$.fragment,y),_=!1},d(y){y&&I(t),ue(n),S(),m=!1,Ee(r)}}}function Ke(s){let e,t,n,a=[],i=new Map,o,_,m,r=`<div class="new-tab-icon svelte-1fb1zau" style="-webkit-mask: url(${ce}/images/svg/plus.svg) no-repeat center / contain; mask: url(${ce}/images/svg/plus.svg) no-repeat center / contain;"></div>`,p,v,k,b,A,D,S,y,g=be(s[8].tabs);const d=f=>f[39];for(let f=0;f<g.length;f+=1){let c=we(s,g,f),w=d(c);i.set(w,a[f]=Te(w,c))}return k=new Le({props:{title:s[3].title,active:!s[5],preventHover:!0}}),{c(){e=H("div"),t=H("div"),n=H("div");for(let f=0;f<a.length;f+=1)a[f].c();o=Y(),_=H("div"),m=H("button"),m.innerHTML=r,p=Y(),v=H("div"),ie(k.$$.fragment),b=Y(),A=H("div"),this.h()},l(f){e=L(f,"DIV",{});var c=M(e);t=L(c,"DIV",{class:!0});var w=M(t);n=L(w,"DIV",{class:!0});var G=M(n);for(let X=0;X<a.length;X+=1)a[X].l(G);G.forEach(I),o=F(w),_=L(w,"DIV",{class:!0});var P=M(_);m=L(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(m)!=="svelte-1gl7v4r"&&(m.innerHTML=r),P.forEach(I),p=F(w),v=L(w,"DIV",{class:!0});var O=M(v);oe(k.$$.fragment,O),O.forEach(I),w.forEach(I),b=F(c),A=L(c,"DIV",{class:!0}),M(A).forEach(I),c.forEach(I),this.h()},h(){T(n,"class","tabs svelte-1fb1zau"),T(m,"class","new-tab-button svelte-1fb1zau"),T(_,"class","buttons svelte-1fb1zau"),T(v,"class","clone svelte-1fb1zau"),R(v,"dragging",s[0]),T(t,"class","toolbar svelte-1fb1zau"),T(A,"class","separator svelte-1fb1zau")},m(f,c){te(f,e,c),C(e,t),C(t,n);for(let w=0;w<a.length;w+=1)a[w]&&a[w].m(n,null);s[20](n),C(t,o),C(t,_),C(_,m),C(t,p),C(t,v),re(k,v,null),s[21](v),C(e,b),C(e,A),s[22](e),D=!0,S||(y=V(m,"click",s[10]),S=!0)},p(f,c){c[0]&29572&&(g=be(f[8].tabs),qe(),a=Ye(a,c,d,1,f,g,i,n,Fe,Te,null,we),Ue());const w={};c[0]&8&&(w.title=f[3].title),c[0]&32&&(w.active=!f[5]),k.$set(w),(!D||c[0]&1)&&R(v,"dragging",f[0])},i(f){if(!D){for(let c=0;c<g.length;c+=1)$(a[c]);$(k.$$.fragment,f),D=!0}},o(f){for(let c=0;c<a.length;c+=1)ee(a[c]);ee(k.$$.fragment,f),D=!1},d(f){f&&I(e);for(let c=0;c<a.length;c+=1)a[c].d();s[20](null),ue(k),s[21](null),s[22](null),S=!1,y()}}}const Qe=12,se=140,Q=70,x=200,xe=1600,ye=.3;function $e(s,e,t){let n;Ie(s,z,l=>t(8,n=l));let a,i=[],o=0;ze(()=>{a.style.setProperty("--tab-max-width",`${se}px`),a.style.setProperty("--tab-min-width",`${Q}px`)});const _=(l,u=300)=>{let h;return(...E)=>{clearTimeout(h),h=setTimeout(()=>{l.apply(this,E)},u)}};function m(l){B.setActiveIndex(l),a.children[l].scrollIntoView({behavior:"smooth"})}function r(){B.newTab()}function p(l){if(!a)return;const u=l.getBoundingClientRect().width;me({duration:x,easing:K,onStep:(h,E)=>{n.tabs.length==1?t(1,a.style.gridTemplateColumns=`minmax(${h*Q}px, ${h*u}px)`,a):t(1,a.style.gridTemplateColumns=`repeat(${n.tabs.length-1}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${h*Q}px, ${h*u}px)`,a),t(1,a.scrollLeft=a.scrollWidth,a)},onEnd:()=>{t(1,a.style.gridTemplateColumns="",a)}})}const v=_(()=>{if(!a)return;a.style.setProperty("--tab-max-width",`${se}px`);const l=i[0].getBoundingClientRect().width;me({duration:x,easing:K,onStep:(u,h)=>{a.style.setProperty("--tab-max-width",`${o+u*(l-o)}px`)},onEnd:()=>{a.style.setProperty("--tab-max-width",`${se}px`)}})},xe),k=l=>{if(!i[l]){console.warn("Cannot close tab!");return}o=i[l].getBoundingClientRect().width,l<n.tabs.length-1&&o<se&&(a.style.setProperty("--tab-max-width",`${o}px`),v()),l==n.tabs.length-1?B.setActiveIndex(l-1):l==n.activeIndex&&B.setActiveIndex(l+1),me({duration:x,easing:K,onStep:(u,h)=>{l==0?t(1,a.style.gridTemplateColumns=`minmax(${h*Q}px, ${h*o}px)`,a):t(1,a.style.gridTemplateColumns=`repeat(${l}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${h*Q}px, ${h*o}px)`,a)},onEnd:()=>{t(1,a.style.gridTemplateColumns="",a),B.removeTab(l)}})},b=(l,u)=>{const h=i[0].getBoundingClientRect().width;B.moveTab(l,u,()=>{if(l>u)for(let E=u;E<l;E++)_e(i[E],{duration:x,easing:K,css:(Z,N)=>`transform: translateX(-${N*h}px);`});if(l<u)for(let E=u;E>l;E--)_e(i[E],{duration:x,easing:K,css:(Z,N)=>`transform: translateX(${N*h}px);`})})};let A=null,D=-1,S={id:-1,title:"",text:""},y,g,d,f=!1,c=!1,w=0,G=0,P=0,O,X=!1;function Ae(l){!l.target||!l.dataTransfer||(l.dataTransfer.setData("text/plain",JSON.stringify(S)),l.dataTransfer.setDragImage(new Image,0,0),l.dataTransfer.dropEffect="move")}function De(l,u){if(l==0&&u==0){t(4,d.style.left="-1000px",d),t(4,d.style.top="-1000px",d);return}let h=O.getBoundingClientRect();if(l<h.left||l>h.right||u<h.top||u>h.bottom){c||(P=0),t(4,d.style.left=`${l+w}px`,d),t(4,d.style.top=`${u+G}px`,d),t(5,c=!0);return}t(4,d.style.left=`${l+w}px`,d),t(4,d.style.top=`${g.top}px`,d),c&&t(5,c=!1);const E=-a.scrollLeft,Z=i[0].getBoundingClientRect().width;let N=-1;if(l>E+n.tabs.length*Z)N=n.tabs.length-1;else for(let j=0;j<n.tabs.length;j++)if(l>E+j*Z&&l<E+(j+1)*Z){N=j;break}l<20?(P=-ye,requestAnimationFrame(pe)):l>a.clientWidth-10?(P=ye,requestAnimationFrame(pe)):P=0,!(N==-1||N==n.placeholderIndex)&&b(n.placeholderIndex,N)}let J=0;function pe(l){if(!f||P==0){J=0;return}J==0&&(J=l);const u=l-J;J=l,a.scrollBy({left:P*u}),requestAnimationFrame(pe)}function ve(l,u){if(!l.target)return;let h,E;l instanceof TouchEvent?(h=l.touches[0].clientX,E=l.touches[0].clientY):(h=l.clientX,E=l.clientY),window.addEventListener("touchmove",U),window.addEventListener("touchend",W),window.addEventListener("mousemove",U),window.addEventListener("mouseup",W),window.addEventListener("drag",U),window.addEventListener("dragend",W),window.addEventListener("blur",W),B.setActiveIndex(u),y=l.target,g=y.getBoundingClientRect(),A=[h,E],w=g.left-h,G=g.top-E,t(4,d.style.width=`${g.width}px`,d),t(4,d.style.left=`${g.left}px`,d),t(4,d.style.top=`${g.top}px`,d),t(3,S={...n.tabs[u]}),D=u}function U(l){let u,h;if(l instanceof TouchEvent?(u=l.touches[0].clientX,h=l.touches[0].clientY):(u=l.clientX,h=l.clientY),f){De(u,h);return}A===null||Math.hypot(A[0]-u,A[1]-h)<Qe||(t(0,f=!0),B.setPlaceholderIndex(D),B.setActiveIndex(D))}function W(){window.removeEventListener("touchmove",U),window.removeEventListener("touchend",W),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",W),window.removeEventListener("drag",U),window.removeEventListener("dragend",W),window.removeEventListener("blur",W),A=null,t(5,c=!1),D=-1,w=0,B.setPlaceholderIndex(),t(0,f=!1)}const Me=l=>k(l),Be=l=>m(l),Se=(l,u)=>ve(u,l);function Re(l,u){s.$$.not_equal(n.tabs[u].title,l)&&(n.tabs[u].title=l,z.set(n))}function Pe(l,u){q[l?"unshift":"push"](()=>{i[u]=l,t(2,i)})}function Ne(l){q[l?"unshift":"push"](()=>{a=l,t(1,a)})}function Ve(l){q[l?"unshift":"push"](()=>{d=l,t(4,d)})}function We(l){q[l?"unshift":"push"](()=>{O=l,t(6,O)})}return s.$$.update=()=>{s.$$.dirty[0]&1&&(f?t(7,X=!0):setTimeout(()=>t(7,X=!1),20))},[f,a,i,S,d,c,O,X,n,m,r,p,k,Ae,ve,Me,Be,Se,Re,Pe,Ne,Ve,We]}class et extends de{constructor(e){super(),he(this,e,$e,Ke,fe,{},null,[-1,-1])}}function tt(s){let e,t,n,a;return{c(){e=H("div"),t=H("textarea"),this.h()},l(i){e=L(i,"DIV",{id:!0,class:!0});var o=M(e);t=L(o,"TEXTAREA",{spellcheck:!0,name:!0,id:!0,class:!0}),M(t).forEach(I),o.forEach(I),this.h()},h(){T(t,"spellcheck","false"),T(t,"name","editor"),T(t,"id","text"),T(t,"class","svelte-7cpmmf"),T(e,"id","editor"),T(e,"class","svelte-7cpmmf")},m(i,o){te(i,e,o),C(e,t),le(t,s[0]),n||(a=V(t,"input",s[1]),n=!0)},p(i,[o]){o&1&&le(t,i[0])},i:ae,o:ae,d(i){i&&I(e),n=!1,a()}}}function nt(s,e,t){let{text:n}=e;function a(){n=this.value,t(0,n)}return s.$$set=i=>{"text"in i&&t(0,n=i.text)},[n,a]}class st extends de{constructor(e){super(),he(this,e,nt,tt,fe,{text:0})}}function at(s){let e,t,n,a,i,o;t=new et({});function _(r){s[2](r)}let m={};return s[0].text!==void 0&&(m.text=s[0].text),a=new st({props:m}),q.push(()=>He(a,"text",_)),{c(){e=H("div"),ie(t.$$.fragment),n=Y(),ie(a.$$.fragment),this.h()},l(r){e=L(r,"DIV",{class:!0});var p=M(e);oe(t.$$.fragment,p),n=F(p),oe(a.$$.fragment,p),p.forEach(I),this.h()},h(){T(e,"class","container svelte-16qa0xo")},m(r,p){te(r,e,p),re(t,e,null),C(e,n),re(a,e,null),o=!0},p(r,[p]){const v={};!i&&p&1&&(i=!0,v.text=r[0].text,ke(()=>i=!1)),a.$set(v)},i(r){o||($(t.$$.fragment,r),$(a.$$.fragment,r),o=!0)},o(r){ee(t.$$.fragment,r),ee(a.$$.fragment,r),o=!1},d(r){r&&I(e),ue(t),ue(a)}}}function lt(s,e,t){let n,a;Ie(s,z,o=>t(1,a=o)),B.newTab({data:{id:-1,title:"Hello 👋",text:"Welcome to notep... not notepad. Something completely different (Microsoft, don't sue me). v0.19"}});function i(o){s.$$.not_equal(n.text,o)&&(n.text=o,t(0,n),t(1,a))}return s.$$.update=()=>{s.$$.dirty&2&&t(0,n=a.tabs.length>0?a.tabs[a.activeIndex]:{text:"Click the ➕ above to create a new tab."})},[n,a,i]}class ct extends de{constructor(e){super(),he(this,e,lt,at,fe,{})}}export{ct as component};
