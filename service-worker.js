const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.DvxFtLcT.js",s+"/app/immutable/nodes/0.eeQvXhmV.js",s+"/app/immutable/assets/0.BMJJ3nCK.css",s+"/app/immutable/nodes/1.m1oJnTd0.js",s+"/app/immutable/nodes/2.DwPplWMB.js",s+"/app/immutable/assets/2.dp3IOYq5.css",s+"/app/immutable/nodes/3.BVFcjqSw.js",s+"/app/immutable/assets/3.C2hubh8Z.css",s+"/app/immutable/nodes/4.CYPy8A3v.js",s+"/app/immutable/assets/4.D2IngzkG.css",s+"/app/immutable/assets/Spinner.DVk0brZ3.css",s+"/app/immutable/chunks/Spinner.B2bImnwe.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/each.Bry6Y3SC.js",s+"/app/immutable/chunks/entry.bRFLxMah.js",s+"/app/immutable/chunks/firebaseStore.kPGYAf92.js",s+"/app/immutable/chunks/index.Dl2TOe6M.js",s+"/app/immutable/chunks/paths.CwlrweYe.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.CIGC0wka.js",s+"/app/immutable/chunks/tabsStore.zzPbFVlR.js",s+"/app/immutable/chunks/themes.BTx5Q4mv.js",s+"/app/immutable/entry/start.VTaHsRqv.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/double-checkmark.svg",s+"/images/svg/gear.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/plus.svg",s+"/images/svg/swap.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],r="1720624001171",c=`cache-${r}`,m=[...l,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(m)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
