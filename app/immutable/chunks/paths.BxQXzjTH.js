import{n as b,s as _}from"./scheduler.DvlNEcs7.js";const e=[];function g(o,l=b){let n;const i=new Set;function r(t){if(_(o,t)&&(o=t,n)){const f=!e.length;for(const s of i)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function p(t,f=b){const s=[t,f];return i.add(s),i.size===1&&(n=l(r,c)||b),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:p}}var u;const h=((u=globalThis.__sveltekit_fsipof)==null?void 0:u.base)??"/not-notepad";var a;const q=((a=globalThis.__sveltekit_fsipof)==null?void 0:a.assets)??h;export{q as a,h as b,g as w};
