import{s as fe,i as ne,n as le,r as Ee,b as U,c as Ie,o as Oe,y as Xe,z as ke}from"../chunks/scheduler.DvlNEcs7.js";import{S as de,i as he,e as H,s as F,c as L,a as M,f as z,k as Ce,d as I,l as T,D as R,g as te,h as C,E as ae,m as V,F as qe,G as ge,w as ie,x as oe,y as re,u as Ue,q as Ye,n as $,o as ee,z as ue,H as He}from"../chunks/index.DfRyX0YP.js";import{e as be,u as Fe,o as ze,a as me,b as K,d as _e}from"../chunks/animate.CkGGxskC.js";import{b as ce,w as Ge}from"../chunks/paths._wzszcoS.js";function Je(s){let e,t,n,l,i,o=`<div class="close-icon svelte-ac7wvy" style="-webkit-mask: url(${ce}/images/svg/cancel.svg) no-repeat center / contain; mask: url(${ce}/images/svg/cancel.svg) no-repeat center / contain;"></div>`,_,m;return{c(){e=H("div"),t=H("button"),n=H("input"),l=F(),i=H("button"),i.innerHTML=o,this.h()},l(r){e=L(r,"DIV",{class:!0});var p=M(e);t=L(p,"BUTTON",{class:!0});var v=M(t);n=L(v,"INPUT",{autocorrect:!0,autocomplete:!0,spellcheck:!0,type:!0,class:!0}),l=z(v),i=L(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(i)!=="svelte-1m9e2o9"&&(i.innerHTML=o),v.forEach(I),p.forEach(I),this.h()},h(){T(n,"autocorrect","off"),T(n,"autocomplete","off"),T(n,"spellcheck","false"),T(n,"type","text"),T(n,"class","svelte-ac7wvy"),T(i,"class","close-button svelte-ac7wvy"),R(i,"preventHover",s[2]),T(t,"class","tab svelte-ac7wvy"),R(t,"active",s[1]),T(e,"class","container svelte-ac7wvy"),R(e,"preventHover",s[2])},m(r,p){te(r,e,p),C(e,t),C(t,n),s[7](n),ae(n,s[0]),C(t,l),C(t,i),_||(m=[V(n,"input",s[8]),V(i,"click",qe(function(){ne(s[3])&&s[3].apply(this,arguments)})),V(t,"dblclick",ge(s[9])),V(t,"click",function(){ne(s[4])&&s[4].apply(this,arguments)}),V(t,"mousedown",ge(function(){ne(s[5])&&s[5].apply(this,arguments)})),V(t,"touchstart",ge(function(){ne(s[5])&&s[5].apply(this,arguments)}))],_=!0)},p(r,[p]){s=r,p&1&&n.value!==s[0]&&ae(n,s[0]),p&4&&R(i,"preventHover",s[2]),p&2&&R(t,"active",s[1]),p&4&&R(e,"preventHover",s[2])},i:le,o:le,d(r){r&&I(e),s[7](null),_=!1,Ee(m)}}}function Ze(s,e,t){let{title:n=""}=e,{active:l=!1}=e,{preventHover:i=!1}=e,{onClose:o=()=>{}}=e,{onClick:_=()=>{}}=e,{onMousedown:m=b=>{}}=e,r;function p(b){U[b?"unshift":"push"](()=>{r=b,t(6,r)})}function v(){n=this.value,t(0,n)}const k=()=>r.select();return s.$$set=b=>{"title"in b&&t(0,n=b.title),"active"in b&&t(1,l=b.active),"preventHover"in b&&t(2,i=b.preventHover),"onClose"in b&&t(3,o=b.onClose),"onClick"in b&&t(4,_=b.onClick),"onMousedown"in b&&t(5,m=b.onMousedown)},[n,l,i,o,_,m,r,p,v,k]}class Le extends de{constructor(e){super(),he(this,e,Ze,Je,fe,{title:0,active:1,preventHover:2,onClose:3,onClick:4,onMousedown:5})}}let je=0;const O=Ge({tabs:[],activeIndex:0,placeholderIndex:-1}),B={newTab:s=>{const{data:e={id:je++,title:"Untitled",text:""},index:t=-1,callback:n=()=>{}}=s||{};O.update(l=>(l.tabs.some(i=>i.id==e.id)||(t<0?(l.tabs.push(e),l.activeIndex=l.tabs.length-1):(l.tabs.splice(t,0,e),l.activeIndex=t)),l)),n()},removeTab:s=>{O.update(e=>(s<0||s>=e.tabs.length||(e.placeholderIndex==s&&(e.placeholderIndex=-1),e.tabs.splice(s,1),s==e.activeIndex-1?e.activeIndex=Math.max(0,s):e.activeIndex=Math.min(e.activeIndex,e.tabs.length-1)),e))},setActiveIndex:s=>{O.update(e=>(s<0?e.activeIndex=0:s>e.tabs.length?e.activeIndex=e.tabs.length-1:e.activeIndex=s,e))},setPlaceholderIndex:s=>{O.update(e=>(e.placeholderIndex=s===void 0||s<0||s>=e.tabs.length?-1:s,e))},moveTab:(s,e,t=()=>{})=>{s!=e&&(O.update(n=>{if(s<0||s>=n.tabs.length||e<0||e>=n.tabs.length)return n;const l=n.tabs[s];return n.tabs.splice(s,1),n.tabs.splice(e,0,l),n.activeIndex==s&&(n.activeIndex=e),n.placeholderIndex==s&&(n.placeholderIndex=e),n}),t())}};function we(s,e,t){const n=s.slice();return n[39]=e[t],n[40]=e,n[41]=t,n}function Te(s,e){let t,n,l,i,o=e[41],_,m,r;function p(){return e[15](e[41])}function v(){return e[16](e[41])}function k(...y){return e[17](e[41],...y)}function b(y){e[18](y,e[41])}let A={active:e[8].activeIndex==e[41],preventHover:e[7],onClose:p,onClick:v,onMousedown:k};e[8].tabs[e[41]].title!==void 0&&(A.title=e[8].tabs[e[41]].title),n=new Le({props:A}),U.push(()=>He(n,"title",b));const D=()=>e[19](t,o),S=()=>e[19](null,o);return{key:s,first:null,c(){t=H("div"),ie(n.$$.fragment),i=F(),this.h()},l(y){t=L(y,"DIV",{class:!0,draggable:!0});var g=M(t);oe(n.$$.fragment,g),i=z(g),g.forEach(I),this.h()},h(){T(t,"class","tab-container svelte-er6w49"),T(t,"draggable","true"),R(t,"placeholder",e[8].placeholderIndex==e[41]),this.first=t},m(y,g){te(y,t,g),re(n,t,null),C(t,i),D(),_=!0,m||(r=[Xe(e[11].call(null,t)),V(t,"dragstart",e[13])],m=!0)},p(y,g){e=y;const d={};g[0]&256&&(d.active=e[8].activeIndex==e[41]),g[0]&128&&(d.preventHover=e[7]),g[0]&256&&(d.onClose=p),g[0]&256&&(d.onClick=v),g[0]&256&&(d.onMousedown=k),!l&&g[0]&256&&(l=!0,d.title=e[8].tabs[e[41]].title,ke(()=>l=!1)),n.$set(d),o!==e[41]&&(S(),o=e[41],D()),(!_||g[0]&256)&&R(t,"placeholder",e[8].placeholderIndex==e[41])},i(y){_||($(n.$$.fragment,y),_=!0)},o(y){ee(n.$$.fragment,y),_=!1},d(y){y&&I(t),ue(n),S(),m=!1,Ee(r)}}}function Ke(s){let e,t,n,l=[],i=new Map,o,_,m,r=`<div class="new-tab-icon svelte-er6w49" style="-webkit-mask: url(${ce}/images/svg/plus.svg) no-repeat center / contain; mask: url(${ce}/images/svg/plus.svg) no-repeat center / contain;"></div>`,p,v,k,b,A,D,S,y,g=be(s[8].tabs);const d=f=>f[39];for(let f=0;f<g.length;f+=1){let c=we(s,g,f),w=d(c);i.set(w,l[f]=Te(w,c))}return k=new Le({props:{title:s[3].title,active:!s[5],preventHover:!0}}),{c(){e=H("div"),t=H("div"),n=H("div");for(let f=0;f<l.length;f+=1)l[f].c();o=F(),_=H("div"),m=H("button"),m.innerHTML=r,p=F(),v=H("div"),ie(k.$$.fragment),b=F(),A=H("div"),this.h()},l(f){e=L(f,"DIV",{});var c=M(e);t=L(c,"DIV",{class:!0});var w=M(t);n=L(w,"DIV",{class:!0});var G=M(n);for(let q=0;q<l.length;q+=1)l[q].l(G);G.forEach(I),o=z(w),_=L(w,"DIV",{class:!0});var P=M(_);m=L(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(m)!=="svelte-1gl7v4r"&&(m.innerHTML=r),P.forEach(I),p=z(w),v=L(w,"DIV",{class:!0});var X=M(v);oe(k.$$.fragment,X),X.forEach(I),w.forEach(I),b=z(c),A=L(c,"DIV",{class:!0}),M(A).forEach(I),c.forEach(I),this.h()},h(){T(n,"class","tabs svelte-er6w49"),T(m,"class","new-tab-button svelte-er6w49"),T(_,"class","buttons svelte-er6w49"),T(v,"class","clone svelte-er6w49"),R(v,"dragging",s[0]),T(t,"class","toolbar svelte-er6w49"),T(A,"class","separator svelte-er6w49")},m(f,c){te(f,e,c),C(e,t),C(t,n);for(let w=0;w<l.length;w+=1)l[w]&&l[w].m(n,null);s[20](n),C(t,o),C(t,_),C(_,m),C(t,p),C(t,v),re(k,v,null),s[21](v),C(e,b),C(e,A),s[22](e),D=!0,S||(y=V(m,"click",s[10]),S=!0)},p(f,c){c[0]&29572&&(g=be(f[8].tabs),Ue(),l=Fe(l,c,d,1,f,g,i,n,ze,Te,null,we),Ye());const w={};c[0]&8&&(w.title=f[3].title),c[0]&32&&(w.active=!f[5]),k.$set(w),(!D||c[0]&1)&&R(v,"dragging",f[0])},i(f){if(!D){for(let c=0;c<g.length;c+=1)$(l[c]);$(k.$$.fragment,f),D=!0}},o(f){for(let c=0;c<l.length;c+=1)ee(l[c]);ee(k.$$.fragment,f),D=!1},d(f){f&&I(e);for(let c=0;c<l.length;c+=1)l[c].d();s[20](null),ue(k),s[21](null),s[22](null),S=!1,y()}}}const Qe=12,se=140,Q=70,x=200,xe=1600,ye=.3;function $e(s,e,t){let n;Ie(s,O,a=>t(8,n=a));let l,i=[],o=0;const _=(a,u=300)=>{let h;return(...E)=>{clearTimeout(h),h=setTimeout(()=>{a.apply(this,E)},u)}};function m(a){B.setActiveIndex(a),l.children[a].scrollIntoView({behavior:"smooth"})}function r(){B.newTab()}function p(a){if(!l)return;const u=a.getBoundingClientRect().width;me({duration:x,easing:K,onStep:(h,E)=>{n.tabs.length==1?t(1,l.style.gridTemplateColumns=`minmax(${h*Q}px, ${h*u}px)`,l):t(1,l.style.gridTemplateColumns=`repeat(${n.tabs.length-1}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${h*Q}px, ${h*u}px)`,l),t(1,l.scrollLeft=l.scrollWidth,l)},onEnd:()=>{t(1,l.style.gridTemplateColumns="",l)}})}const v=_(()=>{if(!l)return;l.style.setProperty("--tab-max-width",`${se}px`);const a=i[0].getBoundingClientRect().width;me({duration:x,easing:K,onStep:(u,h)=>{l.style.setProperty("--tab-max-width",`${o+u*(a-o)}px`)},onEnd:()=>{l.style.setProperty("--tab-max-width",`${se}px`)}})},xe),k=a=>{if(!i[a]){console.warn("Cannot close tab!");return}o=i[a].getBoundingClientRect().width,a<n.tabs.length-1&&o<se&&(l.style.setProperty("--tab-max-width",`${o}px`),v()),a==n.tabs.length-1?B.setActiveIndex(a-1):a==n.activeIndex&&B.setActiveIndex(a+1),me({duration:x,easing:K,onStep:(u,h)=>{a==0?t(1,l.style.gridTemplateColumns=`minmax(${h*Q}px, ${h*o}px)`,l):t(1,l.style.gridTemplateColumns=`repeat(${a}, minmax(var(--tab-min-width), var(--tab-max-width))) minmax(${h*Q}px, ${h*o}px)`,l)},onEnd:()=>{t(1,l.style.gridTemplateColumns="",l),B.removeTab(a)}})},b=(a,u)=>{const h=i[0].getBoundingClientRect().width;B.moveTab(a,u,()=>{if(a>u)for(let E=u;E<a;E++)_e(i[E],{duration:x,easing:K,css:(Z,N)=>`transform: translateX(-${N*h}px);`});if(a<u)for(let E=u;E>a;E--)_e(i[E],{duration:x,easing:K,css:(Z,N)=>`transform: translateX(${N*h}px);`})})};let A=null,D=-1,S={id:-1,title:"",text:""},y,g,d,f=!1,c=!1,w=0,G=0,P=0,X,q=!1;function Ae(a){!a.target||!a.dataTransfer||(a.dataTransfer.setData("text/plain",JSON.stringify(S)),a.dataTransfer.setDragImage(new Image,0,0),a.dataTransfer.dropEffect="move")}function De(a,u){if(a==0&&u==0){t(4,d.style.left="-1000px",d),t(4,d.style.top="-1000px",d);return}let h=X.getBoundingClientRect();if(a<h.left||a>h.right||u<h.top||u>h.bottom){c||(P=0),t(4,d.style.left=`${a+w}px`,d),t(4,d.style.top=`${u+G}px`,d),t(5,c=!0);return}t(4,d.style.left=`${a+w}px`,d),t(4,d.style.top=`${g.top}px`,d),c&&t(5,c=!1);const E=-l.scrollLeft,Z=i[0].getBoundingClientRect().width;let N=-1;if(a>E+n.tabs.length*Z)N=n.tabs.length-1;else for(let j=0;j<n.tabs.length;j++)if(a>E+j*Z&&a<E+(j+1)*Z){N=j;break}a<20?(P=-ye,requestAnimationFrame(pe)):a>l.clientWidth-10?(P=ye,requestAnimationFrame(pe)):P=0,!(N==-1||N==n.placeholderIndex)&&b(n.placeholderIndex,N)}let J=0;function pe(a){if(!f||P==0){J=0;return}J==0&&(J=a);const u=a-J;J=a,l.scrollBy({left:P*u}),requestAnimationFrame(pe)}function ve(a,u){if(!a.target)return;let h,E;a instanceof TouchEvent?(h=a.touches[0].clientX,E=a.touches[0].clientY):(h=a.clientX,E=a.clientY),window.addEventListener("touchmove",Y),window.addEventListener("touchend",W),window.addEventListener("mousemove",Y),window.addEventListener("mouseup",W),window.addEventListener("drag",Y),window.addEventListener("dragend",W),window.addEventListener("blur",W),B.setActiveIndex(u),y=a.target,g=y.getBoundingClientRect(),A=[h,E],w=g.left-h,G=g.top-E,t(4,d.style.width=`${g.width}px`,d),t(4,d.style.left=`${g.left}px`,d),t(4,d.style.top=`${g.top}px`,d),t(3,S={...n.tabs[u]}),D=u}function Y(a){let u,h;if(a instanceof TouchEvent?(u=a.touches[0].clientX,h=a.touches[0].clientY):(u=a.clientX,h=a.clientY),f){De(u,h);return}A===null||Math.hypot(A[0]-u,A[1]-h)<Qe||(t(0,f=!0),B.setPlaceholderIndex(D),B.setActiveIndex(D))}function W(){window.removeEventListener("touchmove",Y),window.removeEventListener("touchend",W),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",W),window.removeEventListener("drag",Y),window.removeEventListener("dragend",W),window.removeEventListener("blur",W),A=null,t(5,c=!1),D=-1,w=0,B.setPlaceholderIndex(),t(0,f=!1)}Oe(()=>{l.style.setProperty("--tab-max-width",`${se}px`),l.style.setProperty("--tab-min-width",`${Q}px`)});const Me=a=>k(a),Be=a=>m(a),Se=(a,u)=>ve(u,a);function Re(a,u){s.$$.not_equal(n.tabs[u].title,a)&&(n.tabs[u].title=a,O.set(n))}function Pe(a,u){U[a?"unshift":"push"](()=>{i[u]=a,t(2,i)})}function Ne(a){U[a?"unshift":"push"](()=>{l=a,t(1,l)})}function Ve(a){U[a?"unshift":"push"](()=>{d=a,t(4,d)})}function We(a){U[a?"unshift":"push"](()=>{X=a,t(6,X)})}return s.$$.update=()=>{s.$$.dirty[0]&1&&(f?t(7,q=!0):setTimeout(()=>t(7,q=!1),20))},[f,l,i,S,d,c,X,q,n,m,r,p,k,Ae,ve,Me,Be,Se,Re,Pe,Ne,Ve,We]}class et extends de{constructor(e){super(),he(this,e,$e,Ke,fe,{},null,[-1,-1])}}function tt(s){let e,t,n,l;return{c(){e=H("div"),t=H("textarea"),this.h()},l(i){e=L(i,"DIV",{id:!0,class:!0});var o=M(e);t=L(o,"TEXTAREA",{spellcheck:!0,name:!0,id:!0,class:!0}),M(t).forEach(I),o.forEach(I),this.h()},h(){T(t,"spellcheck","false"),T(t,"name","editor"),T(t,"id","text"),T(t,"class","svelte-7cpmmf"),T(e,"id","editor"),T(e,"class","svelte-7cpmmf")},m(i,o){te(i,e,o),C(e,t),ae(t,s[0]),n||(l=V(t,"input",s[1]),n=!0)},p(i,[o]){o&1&&ae(t,i[0])},i:le,o:le,d(i){i&&I(e),n=!1,l()}}}function nt(s,e,t){let{text:n}=e;function l(){n=this.value,t(0,n)}return s.$$set=i=>{"text"in i&&t(0,n=i.text)},[n,l]}class st extends de{constructor(e){super(),he(this,e,nt,tt,fe,{text:0})}}function lt(s){let e,t,n,l,i,o;t=new et({});function _(r){s[2](r)}let m={};return s[0].text!==void 0&&(m.text=s[0].text),l=new st({props:m}),U.push(()=>He(l,"text",_)),{c(){e=H("div"),ie(t.$$.fragment),n=F(),ie(l.$$.fragment),this.h()},l(r){e=L(r,"DIV",{class:!0});var p=M(e);oe(t.$$.fragment,p),n=z(p),oe(l.$$.fragment,p),p.forEach(I),this.h()},h(){T(e,"class","container svelte-16qa0xo")},m(r,p){te(r,e,p),re(t,e,null),C(e,n),re(l,e,null),o=!0},p(r,[p]){const v={};!i&&p&1&&(i=!0,v.text=r[0].text,ke(()=>i=!1)),l.$set(v)},i(r){o||($(t.$$.fragment,r),$(l.$$.fragment,r),o=!0)},o(r){ee(t.$$.fragment,r),ee(l.$$.fragment,r),o=!1},d(r){r&&I(e),ue(t),ue(l)}}}function at(s,e,t){let n,l;Ie(s,O,o=>t(1,l=o)),B.newTab({data:{id:-1,title:"Hello 👋",text:"Welcome to notep... not notepad. Something completely different (Microsoft, don't sue me). v0.19"}});function i(o){s.$$.not_equal(n.text,o)&&(n.text=o,t(0,n),t(1,l))}return s.$$.update=()=>{s.$$.dirty&2&&t(0,n=l.tabs.length>0?l.tabs[l.activeIndex]:{text:"Click the ➕ above to create a new tab."})},[n,l,i]}class ct extends de{constructor(e){super(),he(this,e,at,lt,fe,{})}}export{ct as component};
