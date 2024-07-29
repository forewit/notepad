import{s as L,v as J,w as K,x as Q,y as X,c as S,o as I,n as w,a as D}from"../chunks/scheduler.CE28Mlnp.js";import{S as C,i as A,H as Y,s as E,D as Z,f as k,g as v,n as d,l as h,d as m,e as g,c as _,v as ee,w as p,A as $,k as O,y as te,t as se,a as T,b as ae,h as b,j as ne,p as j,E as re,q as F,r as V,u as q,o as oe,m as le}from"../chunks/index.QrZ2xExU.js";import{s as x,a as y,t as ie,f as H,c as ce,b as R}from"../chunks/firebaseStore.C6q-SW88.js";import{g as ue}from"../chunks/entry.Cd-9jaIH.js";import{b as P}from"../chunks/paths.BJMXpAt6.js";import{t as U,e as N}from"../chunks/themes.nR61GjUK.js";const fe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,me=!0,pe="always",Me=Object.freeze(Object.defineProperty({__proto__:null,prerender:me,trailingSlash:pe},Symbol.toStringTag,{value:"Module"}));function de(o){let e,n,t;const s=o[3].default,r=J(s,o,o[2],null);return{c(){e=new Y(!1),n=E(),r&&r.c(),this.h()},l(a){e=Z(a,!1),n=k(a),r&&r.l(a),this.h()},h(){e.a=n},m(a,u){e.m(o[0],a,u),v(a,n,u),r&&r.m(a,u),t=!0},p(a,[u]){(!t||u&1)&&e.p(a[0]),r&&r.p&&(!t||u&4)&&K(r,s,a,a[2],t?X(s,a[2],u,null):Q(a[2]),null)},i(a){t||(d(r,a),t=!0)},o(a){h(r,a),t=!1},d(a){a&&(e.d(),m(n)),r&&r.d(a)}}}function he(o,e,n){let t,s;S(o,x,i=>n(1,s=i));let{$$slots:r={},$$scope:a}=e;function u(i){const c=U.find(f=>f.name===i);return c?`<style>
    :root {
    --bg: ${c.bg};
    --bg-alt: ${c.bgAlt};
    --main: ${c.main};
    --caret: ${c.caret};
    --error: ${c.error};
    --sub: ${c.sub};
    --text: ${c.text};
    }
    </style>`:""}function l(){var c;const i=U.find(f=>f.name===s.theme);i&&((c=document.querySelector('meta[name="theme-color"]'))==null||c.setAttribute("content",i.bg))}return I(()=>{u(s.theme),x.subscribe(l)}),o.$$set=i=>{"$$scope"in i&&n(2,a=i.$$scope)},o.$$.update=()=>{o.$$.dirty&2&&n(0,t=u(s.theme))},[t,s,a,r]}class ge extends C{constructor(e){super(),A(this,e,he,de,L,{})}}function _e(o){let e,n=`<span class="status-icon svelte-1mx6eh7" style="-webkit-mask: url(${P}/images/svg/double-checkmark.svg) no-repeat center / contain; mask: url(${P}/images/svg/double-checkmark.svg) no-repeat center / contain;"></span>`;return{c(){e=g("div"),e.innerHTML=n,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-jbp3id"&&(e.innerHTML=n),this.h()},h(){p(e,"class","status svelte-1mx6eh7"),$(e,"saving",o[0].savingStatus==="saving"),$(e,"saved",o[0].savingStatus==="saved"),$(e,"error",o[0].savingStatus==="error")},m(t,s){v(t,e,s)},p(t,[s]){s&1&&$(e,"saving",t[0].savingStatus==="saving"),s&1&&$(e,"saved",t[0].savingStatus==="saved"),s&1&&$(e,"error",t[0].savingStatus==="error")},i:w,o:w,d(t){t&&m(e)}}}function ve(o,e,n){let t;return S(o,y,s=>n(0,t=s)),[t]}class $e extends C{constructor(e){super(),A(this,e,ve,_e,L,{})}}function W(o,e,n){const t=o.slice();return t[1]=e[n],t}function B(o){let e,n=o[1]+"",t;return{c(){e=g("p"),t=se(n),this.h()},l(s){e=_(s,"P",{class:!0});var r=T(e);t=ae(r,n),r.forEach(m),this.h()},h(){p(e,"class","svelte-xvmupr")},m(s,r){v(s,e,r),b(e,t)},p(s,r){r&1&&n!==(n=s[1]+"")&&ne(t,n)},d(s){s&&m(e)}}}function be(o){let e,n=N(o[0]),t=[];for(let s=0;s<n.length;s+=1)t[s]=B(W(o,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=O()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=O()},m(s,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,r);v(s,e,r)},p(s,[r]){if(r&1){n=N(s[0]);let a;for(a=0;a<n.length;a+=1){const u=W(s,n,a);t[a]?t[a].p(u,r):(t[a]=B(u),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:w,o:w,d(s){s&&m(e),te(t,s)}}}function ye(o,e,n){let t=[];return I(()=>{const s=console.log;console.log=function(r){s.apply(console,[].slice.call(arguments)),t.push(r),setTimeout(()=>{n(0,t=t.slice(1))},5e3),n(0,t)}}),[t]}class Se extends C{constructor(e){super(),A(this,e,ye,be,L,{})}}const{document:M}=fe;function G(o){let e,n,t;return n=new $e({}),{c(){e=g("div"),j(n.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var r=T(e);F(n.$$.fragment,r),r.forEach(m),this.h()},h(){p(e,"class","sync-status svelte-5pe8me")},m(s,r){v(s,e,r),V(n,e,null),t=!0},i(s){t||(d(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&m(e),q(n)}}}function we(o){let e,n,t,s,r,a;const u=o[1].default,l=J(u,o,o[2],null);let i=!o[0].isLoading&&G();return r=new Se({}),{c(){e=g("div"),l&&l.c(),n=E(),i&&i.c(),t=E(),s=g("div"),j(r.$$.fragment),this.h()},l(c){e=_(c,"DIV",{class:!0});var f=T(e);l&&l.l(f),n=k(f),i&&i.l(f),t=k(f),s=_(f,"DIV",{class:!0});var z=T(s);F(r.$$.fragment,z),z.forEach(m),f.forEach(m),this.h()},h(){p(s,"class","logs svelte-5pe8me"),p(e,"class","layout-container svelte-5pe8me")},m(c,f){v(c,e,f),l&&l.m(e,null),b(e,n),i&&i.m(e,null),b(e,t),b(e,s),V(r,s,null),a=!0},p(c,f){l&&l.p&&(!a||f&4)&&K(l,u,c,c[2],a?X(u,c[2],f,null):Q(c[2]),null),c[0].isLoading?i&&(oe(),h(i,1,1,()=>{i=null}),le()):i?f&1&&d(i,1):(i=G(),i.c(),d(i,1),i.m(e,t))},i(c){a||(d(l,c),d(i),d(r.$$.fragment,c),a=!0)},o(c){h(l,c),h(i),h(r.$$.fragment,c),a=!1},d(c){c&&m(e),l&&l.d(c),i&&i.d(),q(r)}}}function Ee(o){let e,n,t,s,r;return s=new ge({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),{c(){e=g("meta"),n=g("meta"),t=E(),j(s.$$.fragment),this.h()},l(a){const u=re("svelte-17tnzz8",M.head);e=_(u,"META",{name:!0,content:!0}),n=_(u,"META",{name:!0,content:!0}),u.forEach(m),t=k(a),F(s.$$.fragment,a),this.h()},h(){p(e,"name","viewport"),p(e,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),p(n,"name","theme-color"),p(n,"content","var(--bg)")},m(a,u){b(M.head,e),b(M.head,n),v(a,t,u),V(s,a,u),r=!0},p(a,[u]){const l={};u&5&&(l.$$scope={dirty:u,ctx:a}),s.$set(l)},i(a){r||(d(s.$$.fragment,a),r=!0)},o(a){h(s.$$.fragment,a),r=!1},d(a){a&&m(t),m(e),m(n),q(s,a)}}}function ke(){switch(screen.orientation.type){case"portrait-primary":document.documentElement.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),document.documentElement.style.setProperty("--safe-area-left","0px"),document.documentElement.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":document.documentElement.style.setProperty("--safe-area-top","0px"),document.documentElement.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),document.documentElement.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":document.documentElement.style.setProperty("--safe-area-top","0px"),document.documentElement.style.setProperty("--safe-area-left","0px"),document.documentElement.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}}function Te(o,e,n){let t,s;S(o,y,l=>n(0,t=l)),S(o,R,l=>n(3,s=l));let{$$slots:r={},$$scope:a}=e;function u(l){t.savingStatus==="saving"&&l.preventDefault()}return I(()=>{window.addEventListener("beforeunload",u),screen.orientation.addEventListener("change",ke),ie.subscribe(H.publishToFirestore),x.subscribe(H.publishToFirestore),ce.onAuthStateChanged(async l=>{if(!l){D(y,t.currentUser=l,t),D(R,s=window.location.pathname.slice(P.length),s),ue(P+"/login");return}D(y,t.currentUser=l,t);try{H.loadFromFirestore()}catch(i){console.error(i)}})}),o.$$set=l=>{"$$scope"in l&&n(2,a=l.$$scope)},[t,r,a]}class xe extends C{constructor(e){super(),A(this,e,Te,Ee,L,{})}}export{xe as component,Me as universal};
