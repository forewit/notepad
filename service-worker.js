const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.Dil0HASB.js",s+"/app/immutable/nodes/0.TSo-JMzp.js",s+"/app/immutable/assets/0.Cg0c7RFY.css",s+"/app/immutable/nodes/1.BkN75IVc.js",s+"/app/immutable/nodes/2.C1WqJbPY.js",s+"/app/immutable/assets/2.mZaC0MmX.css",s+"/app/immutable/nodes/3.DwOywYuZ.js",s+"/app/immutable/assets/3.C2hubh8Z.css",s+"/app/immutable/nodes/4.CIdWgOVz.js",s+"/app/immutable/assets/4.CqPeJKmu.css",s+"/app/immutable/assets/Spinner.DVk0brZ3.css",s+"/app/immutable/chunks/Spinner.Bl_mDj3z.js",s+"/app/immutable/chunks/each.Cibs-FDw.js",s+"/app/immutable/chunks/entry.3XbTT2o4.js",s+"/app/immutable/chunks/firebaseStore.KdC7LZ6t.js",s+"/app/immutable/chunks/index.D2coaRY5.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.cfeIpFhx.js",s+"/app/immutable/chunks/settingsStore.C4O6D5K7.js",s+"/app/immutable/chunks/tabsStore.DQfgBwSl.js",s+"/app/immutable/chunks/themes.CDbnN2Vk.js",s+"/app/immutable/entry/start.uyYdVLLg.js",s+"/app/immutable/chunks/quill.k3P2vbB8.js"],u=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/double-checkmark.svg",s+"/images/svg/gear.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/plus.svg",s+"/images/svg/swap.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],o="1720529710298",c=`cache-${o}`,p=[...l,...u];self.addEventListener("install",e=>{async function i(){await(await caches.open(c)).addAll(p)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(c);if(p.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const m=await n.match(e.request);if(m)return m;throw a}}e.respondWith(i())});
