import{s as Ie,c as Ce,a as Ne,n as ue,r as Be}from"../chunks/scheduler.uUNFeN3d.js";import{S as Oe,i as Ue,m as we,j as me,t as he,n as Ae,a as fe,g as p,o as He,p as Pe,q as je,r as De,u as Re,e as h,s as b,b as q,c as f,d as E,v as j,h as k,f as L,w as m,k as s,x as _e,l as Ee,y as Ve,z as B,A as Se}from"../chunks/index.Bn23-NmW.js";import{e as xe}from"../chunks/each.COQoO-Ld.js";import{S as qe}from"../chunks/Spinner.C3JSi9wk.js";import{s as ie,f as Le,a as ze}from"../chunks/firebaseStore.DiSg5b0b.js";import{t as ye}from"../chunks/themes.BTx5Q4mv.js";import{b as Fe}from"../chunks/paths.MHd6NlvK.js";/* empty css                                                         */function Te(r,e,t){const l=r.slice();return l[5]=e[t],l}function Me(r){let e,t;return e=new qe({}),{c(){Pe(e.$$.fragment)},l(l){je(e.$$.fragment,l)},m(l,a){De(e,l,a),t=!0},p:ue,i(l){t||(fe(e.$$.fragment,l),t=!0)},o(l){he(e.$$.fragment,l),t=!1},d(l){Re(e,l)}}}function Ge(r){let e,t,l,a="Back",d,u,x="Settings",n,c,v,S,G,I,pe="Spellcheck",J,g,O,de="Theme",K,U,Q,D=r[1].theme+"",z,W,X,Y,N,Z,C,A,ve="Account",ee,H,te,R=r[0].currentUser.email+"",F,le,ne,se,y,be="Sign out",re,ke,P=xe(ye),_=[];for(let i=0;i<P.length;i+=1)_[i]=$e(Te(r,P,i));return{c(){e=h("div"),t=h("form"),l=h("a"),l.textContent=a,d=b(),u=h("h1"),u.textContent=x,n=b(),c=h("section"),v=h("div"),S=h("input"),G=b(),I=h("label"),I.textContent=pe,J=b(),g=h("section"),O=h("h2"),O.textContent=de,K=b(),U=h("p"),Q=q("Current theme: "),z=q(D),W=b(),X=h("br"),Y=b(),N=h("div");for(let i=0;i<_.length;i+=1)_[i].c();Z=b(),C=h("section"),A=h("h2"),A.textContent=ve,ee=b(),H=h("p"),te=q("Email: "),F=q(R),le=b(),ne=h("br"),se=b(),y=h("button"),y.textContent=be,this.h()},l(i){e=f(i,"DIV",{class:!0});var w=E(e);t=f(w,"FORM",{action:!0,class:!0});var o=E(t);l=f(o,"A",{href:!0,class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1f9jrw9"&&(l.textContent=a),d=k(o),u=f(o,"H1",{"data-svelte-h":!0}),j(u)!=="svelte-171lafx"&&(u.textContent=x),n=k(o),c=f(o,"SECTION",{});var V=E(c);v=f(V,"DIV",{class:!0});var M=E(v);S=f(M,"INPUT",{class:!0,type:!0,name:!0}),G=k(M),I=f(M,"LABEL",{for:!0,"data-svelte-h":!0}),j(I)!=="svelte-139lkv9"&&(I.textContent=pe),M.forEach(p),V.forEach(p),J=k(o),g=f(o,"SECTION",{});var T=E(g);O=f(T,"H2",{"data-svelte-h":!0}),j(O)!=="svelte-1f06jx9"&&(O.textContent=de),K=k(T),U=f(T,"P",{});var oe=E(U);Q=L(oe,"Current theme: "),z=L(oe,D),oe.forEach(p),W=k(T),X=f(T,"BR",{}),Y=k(T),N=f(T,"DIV",{class:!0});var ge=E(N);for(let ce=0;ce<_.length;ce+=1)_[ce].l(ge);ge.forEach(p),T.forEach(p),Z=k(o),C=f(o,"SECTION",{});var $=E(C);A=f($,"H2",{"data-svelte-h":!0}),j(A)!=="svelte-gyarc3"&&(A.textContent=ve),ee=k($),H=f($,"P",{});var ae=E(H);te=L(ae,"Email: "),F=L(ae,R),ae.forEach(p),le=k($),ne=f($,"BR",{}),se=k($),y=f($,"BUTTON",{class:!0,"data-svelte-h":!0}),j(y)!=="svelte-1phhefi"&&(y.textContent=be),$.forEach(p),o.forEach(p),w.forEach(p),this.h()},h(){m(l,"href",Fe+"/"),m(l,"class","svelte-1ww5cro"),m(S,"class","themed-checkbox"),m(S,"type","checkbox"),m(S,"name","spell-check"),m(I,"for","spell-check"),m(v,"class","checkbox svelte-1ww5cro"),m(N,"class","custom-themes svelte-1ww5cro"),m(y,"class","sign-out-button themed-btn error svelte-1ww5cro"),m(t,"action",""),m(t,"class","svelte-1ww5cro"),m(e,"class","form-container svelte-1ww5cro")},m(i,w){me(i,e,w),s(e,t),s(t,l),s(t,d),s(t,u),s(t,n),s(t,c),s(c,v),s(v,S),S.checked=r[1].spellCheck,s(v,G),s(v,I),s(t,J),s(t,g),s(g,O),s(g,K),s(g,U),s(U,Q),s(U,z),s(g,W),s(g,X),s(g,Y),s(g,N);for(let o=0;o<_.length;o+=1)_[o]&&_[o].m(N,null);s(t,Z),s(t,C),s(C,A),s(C,ee),s(C,H),s(H,te),s(H,F),s(C,le),s(C,ne),s(C,se),s(C,y),re||(ke=[_e(S,"change",r[2]),_e(y,"click",r[4])],re=!0)},p(i,w){if(w&2&&(S.checked=i[1].spellCheck),w&2&&D!==(D=i[1].theme+"")&&Ee(z,D),w&2){P=xe(ye);let o;for(o=0;o<P.length;o+=1){const V=Te(i,P,o);_[o]?_[o].p(V,w):(_[o]=$e(V),_[o].c(),_[o].m(N,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=P.length}w&1&&R!==(R=i[0].currentUser.email+"")&&Ee(F,R)},i:ue,o:ue,d(i){i&&p(e),Ve(_,i),re=!1,Be(ke)}}}function $e(r){let e,t=r[5].name+"",l,a,d,u;function x(){return r[3](r[5])}return{c(){e=h("button"),l=q(t),a=b(),this.h()},l(n){e=f(n,"BUTTON",{class:!0,style:!0});var c=E(e);l=L(c,t),a=k(c),c.forEach(p),this.h()},h(){m(e,"class","theme-button themed-btn svelte-1ww5cro"),B(e,"--bg",r[5].bg),B(e,"--bg-alt",r[5].bgAlt),B(e,"--main",r[5].main),B(e,"--caret",r[5].caret),B(e,"--error",r[5].error),B(e,"--sub",r[5].sub),B(e,"--text",r[5].text),Se(e,"chosen",r[1].theme===r[5].name)},m(n,c){me(n,e,c),s(e,l),s(e,a),d||(u=_e(e,"click",x),d=!0)},p(n,c){r=n,c&2&&Se(e,"chosen",r[1].theme===r[5].name)},d(n){n&&p(e),d=!1,u()}}}function Je(r){let e,t,l,a;const d=[Ge,Me],u=[];function x(n,c){return n[0].currentUser?0:1}return e=x(r),t=u[e]=d[e](r),{c(){t.c(),l=we()},l(n){t.l(n),l=we()},m(n,c){u[e].m(n,c),me(n,l,c),a=!0},p(n,[c]){let v=e;e=x(n),e===v?u[e].p(n,c):(He(),he(u[v],1,1,()=>{u[v]=null}),Ae(),t=u[e],t?t.p(n,c):(t=u[e]=d[e](n),t.c()),fe(t,1),t.m(l.parentNode,l))},i(n){a||(fe(t),a=!0)},o(n){he(t),a=!1},d(n){n&&p(l),u[e].d(n)}}}function Ke(r,e,t){let l,a;Ce(r,ze,n=>t(0,l=n)),Ce(r,ie,n=>t(1,a=n));function d(){a.spellCheck=this.checked,ie.set(a)}return[l,a,d,n=>Ne(ie,a.theme=n.name,a),()=>Le.logout()]}class nt extends Oe{constructor(e){super(),Ue(this,e,Ke,Je,Ie,{})}}export{nt as component};
