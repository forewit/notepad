import{n as a,s as p}from"./scheduler.CNrmCPBX.js";const e=[];function d(o,l=a){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,b=a){const s=[t,b];return i.add(s),i.size===1&&(n=l(r,c)||a),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_paxa8t)==null?void 0:f.base)??"/notebook";var u;const k=((u=globalThis.__sveltekit_paxa8t)==null?void 0:u.assets)??h;export{k as a,h as b,d as w};
