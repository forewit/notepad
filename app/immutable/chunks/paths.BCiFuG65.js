import{n as c,s as d}from"./scheduler.BOxWOvYx.js";const e=[];function g(n,l=c){let i;const o=new Set;function r(t){if(d(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1fidetb)==null?void 0:u.base)??"/not-notepad";var a;const q=((a=globalThis.__sveltekit_1fidetb)==null?void 0:a.assets)??p;export{q as a,p as b,g as w};
