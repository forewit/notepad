const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.CyWMO0mC.js",s+"/app/immutable/nodes/0.BXYKaNwb.js",s+"/app/immutable/assets/0.x8NKOXIW.css",s+"/app/immutable/nodes/1.BBlFn_Vq.js",s+"/app/immutable/nodes/2.BQEqo-WA.js",s+"/app/immutable/assets/2.Bm9J1M-k.css",s+"/app/immutable/nodes/3.DB04eILa.js",s+"/app/immutable/assets/3.mphAjq1M.css",s+"/app/immutable/chunks/each.D6YF6ztN.js",s+"/app/immutable/chunks/entry.DFVW3Os6.js",s+"/app/immutable/chunks/index.B0sbfZXq.js",s+"/app/immutable/chunks/paths.CjtPBf65.js",s+"/app/immutable/chunks/scheduler.B3svg8oL.js",s+"/app/immutable/entry/start.D8SOnHyF.js"],m=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/plus.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],r="1716668030248",c=`cache-${r}`,o=[...l,...m];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(o)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(o.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
