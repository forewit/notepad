const e=location.pathname.split("/").slice(0,-1).join("/"),p=[e+"/app/immutable/entry/app.ClWnGdS1.js",e+"/app/immutable/nodes/0.Cm8dISdb.js",e+"/app/immutable/assets/0.CwgjanyS.css",e+"/app/immutable/nodes/1.WYLGIGC4.js",e+"/app/immutable/nodes/2.D83uaKw4.js",e+"/app/immutable/assets/2.DTlR0Po2.css",e+"/app/immutable/chunks/entry.C9Vudcip.js",e+"/app/immutable/chunks/index.HXHA9SiQ.js",e+"/app/immutable/chunks/scheduler.CtbWrGNo.js",e+"/app/immutable/entry/start.Bqpdb3wd.js"],l=[e+"/images/favicon.png",e+"/images/field_512.png",e+"/manifest.json"],u="1716476311540",i=`cache-${u}`,r=[...p,...l];self.addEventListener("install",s=>{async function n(){await(await caches.open(i)).addAll(r)}s.waitUntil(n())});self.addEventListener("activate",s=>{async function n(){for(const t of await caches.keys())t!==i&&await caches.delete(t)}s.waitUntil(n())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function n(){const t=new URL(s.request.url),c=await caches.open(i);if(r.includes(t.pathname)){const a=await c.match(t.pathname);if(a)return a}try{const a=await fetch(s.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&c.put(s.request,a.clone()),a}catch(a){const o=await c.match(s.request);if(o)return o;throw a}}s.respondWith(n())});
