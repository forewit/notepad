const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.ko6BmtVO.js",s+"/app/immutable/nodes/0.DEo4Q002.js",s+"/app/immutable/assets/0.BfNptTrY.css",s+"/app/immutable/nodes/1.BD_Xmzfp.js",s+"/app/immutable/nodes/2.YPE7FJJc.js",s+"/app/immutable/assets/2.Ck_1hQUu.css",s+"/app/immutable/nodes/3.BKpg5Q4I.js",s+"/app/immutable/assets/3.C2hubh8Z.css",s+"/app/immutable/nodes/4.CcElFr8n.js",s+"/app/immutable/assets/4.D2IngzkG.css",s+"/app/immutable/assets/Spinner.DVk0brZ3.css",s+"/app/immutable/chunks/Spinner.B2bImnwe.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/each.Bry6Y3SC.js",s+"/app/immutable/chunks/entry.CiYmD63i.js",s+"/app/immutable/chunks/firebaseStore.DflwW1xJ.js",s+"/app/immutable/chunks/index.Dl2TOe6M.js",s+"/app/immutable/chunks/paths.DMi7W92V.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.CIGC0wka.js",s+"/app/immutable/chunks/tabsStore.CeezCEDL.js",s+"/app/immutable/chunks/themes.BTx5Q4mv.js",s+"/app/immutable/entry/start.5m7oZREV.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/double-checkmark.svg",s+"/images/svg/gear.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/plus.svg",s+"/images/svg/swap.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/manifest.json"],o="1720636482162",c=`cache-${o}`,p=[...l,...u];self.addEventListener("install",e=>{async function i(){await(await caches.open(c)).addAll(p)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(c);if(p.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const m=await n.match(e.request);if(m)return m;throw a}}e.respondWith(i())});
