const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.CILSuchJ.js",s+"/app/immutable/nodes/0.D79-AO0Q.js",s+"/app/immutable/assets/0.BMHDB2Rx.css",s+"/app/immutable/assets/theme.B8bePinD.css",s+"/app/immutable/nodes/1.ClRQIP-0.js",s+"/app/immutable/nodes/2.DjzHd3ut.js",s+"/app/immutable/assets/2.DYoGylQ4.css",s+"/app/immutable/nodes/3.49BhFTKD.js",s+"/app/immutable/assets/3.CAQF70sP.css",s+"/app/immutable/nodes/4.BzWCyqW5.js",s+"/app/immutable/assets/4.aioj5ZVm.css",s+"/app/immutable/chunks/animate.C9o6I5aN.js",s+"/app/immutable/chunks/entry.BnWeVbmc.js",s+"/app/immutable/chunks/index.BanqFhYS.js",s+"/app/immutable/chunks/paths.C-gRqcSc.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.DVqiRabw.js",s+"/app/immutable/entry/start.Cd1M2EfL.js",s+"/app/immutable/chunks/quill.BqYzQad1.js"],o=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/plus.svg",s+"/images/svg/swap.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],u="1719520591716",c=`cache-${u}`,m=[...l,...o];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(m)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
