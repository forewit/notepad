import{l as B,n as C}from"./index.QrZ2xExU.js";import{r as P}from"./scheduler.CE28Mlnp.js";function N(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function O(t,i){B(t,1,1,()=>{i.delete(t.key)})}function j(t,i,p,R,D,h,d,k,w,v,m,M){let f=t.length,c=h.length,s=f;const o={};for(;s--;)o[t[s].key]=s;const b=[],l=new Map,g=new Map,x=[];for(s=c;s--;){const e=M(D,h,s),n=p(e);let a=d.get(n);a?x.push(()=>a.p(e,i)):(a=v(n,e),a.c()),l.set(n,b[s]=a),n in o&&g.set(n,Math.abs(s-o[n]))}const A=new Set,y=new Set;function u(e){C(e,1),e.m(k,m),d.set(e.key,e),m=e.first,c--}for(;f&&c;){const e=b[c-1],n=t[f-1],a=e.key,r=n.key;e===n?(m=e.first,f--,c--):l.has(r)?!d.has(a)||A.has(a)?u(e):y.has(r)?f--:g.get(a)>g.get(r)?(y.add(a),u(e)):(A.add(r),f--):(w(n,d),f--)}for(;f--;){const e=t[f];l.has(e.key)||w(e,d)}for(;c;)u(b[c-1]);return P(x),b}const q=[{name:"Canvas",bg:"#ffffff",bgAlt:"#eeeeee",main:"#a1a1a1",caret:"#5599aa",error:"#551111",sub:"#cccccc",text:"#222222"},{name:"Paper",bg:"#eeeeee",bgAlt:"#dddddd",main:"#444444",caret:"#444444",error:"#d70000",sub:"#b2b2b2",text:"#444444"},{name:"Rose Pine Dawn",bg:"#fffaf3",bgAlt:"#f0e9df",main:"#56949f",caret:"#ea9d34",error:"#b4637a",sub:"#c4a7e7",text:"#286983"},{name:"Blueberry Light",bg:"#dae0f5",bgAlt:"#c1c7df",main:"#506477",caret:"#df4576",error:"#df4576",sub:"#92a4be",text:"#678198"},{name:"Repose Dark",bg:"#2f3338",bgAlt:"#3a3c3d",main:"#d6d2bc",caret:"#d6d2bc",error:"#ff4a59",sub:"#8f8e84",text:"#d6d2bc"},{name:"Carbon",bg:"#313131",bgAlt:"#2b2b2b",main:"#f66e0d",caret:"#f66e0d",error:"#e72d2d",sub:"#616161",text:"#f5e6c8"},{name:"Blueberry Dark",bg:"#212b42",bgAlt:"#1b2334",main:"#add7ff",caret:"#962f7e",error:"#df4576",sub:"#5c7da5",text:"#91b4d5"},{name:"One Dark",bg:"#2f343f",bgAlt:"#262b34",main:"#61afef",caret:"#61afef",error:"#e06c75",sub:"#eceff4",text:"#98c379"},{name:"Dark Note",bg:"#1f1f1f",bgAlt:"#141414",main:"#f2c17b",caret:"#e3dce0",error:"#ff0000",sub:"#768f95",text:"#d2dff4"},{name:"Dark",bg:"#111111",bgAlt:"#191919",main:"#eeeeee",caret:"#eeeeee",error:"#da3333",sub:"#444444",text:"#eeeeee"}];export{N as e,O as o,q as t,j as u};
