const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.PbfLjlNF.js",s+"/app/immutable/nodes/0.Dz_s6MI0.js",s+"/app/immutable/assets/0.BMHDB2Rx.css",s+"/app/immutable/nodes/1.BcQba2KD.js",s+"/app/immutable/nodes/2.B9HTeZEJ.js",s+"/app/immutable/assets/2.BjRY943w.css",s+"/app/immutable/nodes/3.qt5G11IF.js",s+"/app/immutable/assets/3.CAQF70sP.css",s+"/app/immutable/nodes/4.B7WtJWMq.js",s+"/app/immutable/assets/4.aioj5ZVm.css",s+"/app/immutable/chunks/animate.TZy15qSi.js",s+"/app/immutable/assets/authStore.BqhJFLYd.css",s+"/app/immutable/chunks/authStore.DRAcwAPE.js",s+"/app/immutable/chunks/core.De2dwgut.js",s+"/app/immutable/chunks/entry.C3NsnbGg.js",s+"/app/immutable/chunks/index.DjYgQ-sS.js",s+"/app/immutable/chunks/index.NmCZx5Gl.js",s+"/app/immutable/chunks/paths.UiQtrz6K.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.aSSXveB9.js",s+"/app/immutable/entry/start.BBb_J0IC.js",s+"/app/immutable/chunks/quill.C7n-oZnE.js"],u=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/plus.svg",s+"/images/svg/swap.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],o="1719865311580",c=`cache-${o}`,m=[...l,...u];self.addEventListener("install",e=>{async function i(){await(await caches.open(c)).addAll(m)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(c);if(m.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const p=await n.match(e.request);if(p)return p;throw a}}e.respondWith(i())});
