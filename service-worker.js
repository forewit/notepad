const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.BbFgm4mz.js",s+"/app/immutable/nodes/0.CGDWBZbs.js",s+"/app/immutable/assets/0.BiMF4S1a.css",s+"/app/immutable/nodes/1.DbLmcnXM.js",s+"/app/immutable/nodes/2.Dhs0DWFE.js",s+"/app/immutable/assets/2.DKzDB5Fe.css",s+"/app/immutable/nodes/3.9grchVf5.js",s+"/app/immutable/assets/3.C2hubh8Z.css",s+"/app/immutable/nodes/4.B_qZ8hR5.js",s+"/app/immutable/assets/4.D9K7nQOp.css",s+"/app/immutable/assets/Spinner.nORNYfl0.css",s+"/app/immutable/chunks/Spinner.DeVkdUsa.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/each.Ug6gzH50.js",s+"/app/immutable/chunks/entry.sArMXwil.js",s+"/app/immutable/chunks/firebaseStore.DrSCcZnV.js",s+"/app/immutable/chunks/index.SQS7u6L1.js",s+"/app/immutable/chunks/paths.BmZKR5As.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.CNrmCPBX.js",s+"/app/immutable/chunks/themes.BTx5Q4mv.js",s+"/app/immutable/entry/start.DkFAjzk8.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],g=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/notebook_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/double-checkmark.svg",s+"/images/svg/gear.svg",s+"/images/svg/home.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/pencil.svg",s+"/images/svg/plus.svg",s+"/images/svg/refresh.svg",s+"/images/svg/swap.svg",s+"/images/svg/trash.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],r="1721679280801",m=`cache-${r}`,p=[...l,...g];self.addEventListener("install",e=>{async function i(){await(await caches.open(m)).addAll(p)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==m&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(m);if(p.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const c=await n.match(e.request);if(c)return c;throw a}}e.respondWith(i())});
