import{s as L,n as q,r as B,c as C}from"../chunks/scheduler.cfeIpFhx.js";import{S as N,i as E,e as b,s as w,c as g,d as P,h as S,g as v,w as c,j as z,k as _,C as $,x,v as D,m as U,t as y,n as F,a as k,o as H,p as T,q as R,r as j,u as A}from"../chunks/index.BC2r3XlJ.js";import{f as M,a as O}from"../chunks/firebaseStore.DR79Bndj.js";import{S as V}from"../chunks/Spinner.mMaK95Dt.js";import{s as W}from"../chunks/settingsStore.BtUX-9Ks.js";import{g as G,b as J}from"../chunks/entry.BKhZzjmI.js";function I(o){let t,r="Wrong password!";return{c(){t=b("b"),t.textContent=r,this.h()},l(e){t=g(e,"B",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1rh5isq"&&(t.textContent=r),this.h()},h(){c(t,"class","error svelte-dzxb86")},m(e,n){z(e,t,n)},d(e){e&&v(t)}}}function K(o){let t,r,e,n,a,i,f,s,p,h,l=o[2]&&I();return{c(){t=b("div"),r=b("form"),e=b("input"),n=w(),a=b("input"),i=w(),l&&l.c(),f=w(),s=b("input"),this.h()},l(u){t=g(u,"DIV",{class:!0});var d=P(t);r=g(d,"FORM",{class:!0});var m=P(r);e=g(m,"INPUT",{class:!0,type:!0,placeholder:!0}),n=S(m),a=g(m,"INPUT",{class:!0,type:!0,placeholder:!0}),i=S(m),l&&l.l(m),f=S(m),s=g(m,"INPUT",{type:!0,class:!0}),m.forEach(v),d.forEach(v),this.h()},h(){c(e,"class","email svelte-dzxb86"),c(e,"type","email"),c(e,"placeholder","Email"),e.required=!0,c(a,"class","password svelte-dzxb86"),c(a,"type","password"),c(a,"placeholder","Password"),a.required=!0,c(s,"type","submit"),s.value="Login",c(s,"class","btn svelte-dzxb86"),c(r,"class","form svelte-dzxb86"),c(t,"class","form-container svelte-dzxb86")},m(u,d){z(u,t,d),_(t,r),_(r,e),$(e,o[0]),_(r,n),_(r,a),$(a,o[1]),_(r,i),l&&l.m(r,null),_(r,f),_(r,s),p||(h=[x(e,"input",o[4]),x(a,"input",o[5]),x(r,"submit",o[3])],p=!0)},p(u,[d]){d&1&&e.value!==u[0]&&$(e,u[0]),d&2&&a.value!==u[1]&&$(a,u[1]),u[2]?l||(l=I(),l.c(),l.m(r,f)):l&&(l.d(1),l=null)},i:q,o:q,d(u){u&&v(t),l&&l.d(),p=!1,B(h)}}}function Q(o,t,r){let e="",n="",a=!1;async function i(){try{r(2,a=!1),await M.login(e,n)}catch{console.log("Login failed!"),r(2,a=!0)}}function f(){e=this.value,r(0,e)}function s(){n=this.value,r(1,n)}return[e,n,a,i,f,s]}class X extends N{constructor(t){super(),E(this,t,Q,K,L,{})}}function Y(o){let t,r;return t=new X({}),{c(){T(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){j(t,e,n),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function Z(o){let t,r;return t=new V({}),{c(){T(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){j(t,e,n),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function ee(o){let t,r,e,n;const a=[Z,Y],i=[];function f(s,p){return s[0].currentUser||s[0].isLoading?0:1}return t=f(o),r=i[t]=a[t](o),{c(){r.c(),e=U()},l(s){r.l(s),e=U()},m(s,p){i[t].m(s,p),z(s,e,p),n=!0},p(s,[p]){let h=t;t=f(s),t!==h&&(H(),y(i[h],1,1,()=>{i[h]=null}),F(),r=i[t],r||(r=i[t]=a[t](s),r.c()),k(r,1),r.m(e.parentNode,e))},i(s){n||(k(r),n=!0)},o(s){y(r),n=!1},d(s){s&&v(e),i[t].d(s)}}}function te(o,t,r){let e,n;return C(o,W,a=>r(1,e=a)),C(o,O,a=>r(0,n=a)),o.$$.update=()=>{o.$$.dirty&3&&n.currentUser&&G(J+e.authRedirect)},[n,e]}class ie extends N{constructor(t){super(),E(this,t,te,ee,L,{})}}export{ie as component};
