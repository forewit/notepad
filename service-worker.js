const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.BOtaM7uE.js",s+"/app/immutable/nodes/0.E6gNumnZ.js",s+"/app/immutable/assets/0.D-bGOCR1.css",s+"/app/immutable/nodes/1.C0bYEJ0R.js",s+"/app/immutable/nodes/2.BqjrStR-.js",s+"/app/immutable/assets/2.2tehFuoh.css",s+"/app/immutable/nodes/3.isYLr6FL.js",s+"/app/immutable/assets/3.C2hubh8Z.css",s+"/app/immutable/nodes/4.VJPGcZyL.js",s+"/app/immutable/assets/4.D9K7nQOp.css",s+"/app/immutable/assets/ProgressBar.Ce3J9Oz3.css",s+"/app/immutable/chunks/ProgressBar.Cvv4I-BN.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/entry.CKiyVhul.js",s+"/app/immutable/chunks/firebaseStore.A08GiRLR.js",s+"/app/immutable/chunks/index.QrZ2xExU.js",s+"/app/immutable/chunks/paths.rCTa6j6n.js",s+"/app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/app/immutable/chunks/scheduler.CE28Mlnp.js",s+"/app/immutable/chunks/themes.nR61GjUK.js",s+"/app/immutable/entry/start.BLd5kvq9.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],p=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.png",s+"/images/field_512.png",s+"/images/notepad_512.png",s+"/images/svg/cancel.svg",s+"/images/svg/double-checkmark.svg",s+"/images/svg/gear.svg",s+"/images/svg/highlighter.svg",s+"/images/svg/home.svg",s+"/images/svg/login.svg",s+"/images/svg/logout.svg",s+"/images/svg/maximize.svg",s+"/images/svg/minimize.svg",s+"/images/svg/notepad.svg",s+"/images/svg/pencil.svg",s+"/images/svg/plus.svg",s+"/images/svg/refresh.svg",s+"/images/svg/swap.svg",s+"/images/svg/trash.svg",s+"/images/svg/triangle-down.svg",s+"/images/svg/triangle-left.svg",s+"/images/svg/triangle-right.svg",s+"/images/svg/triangle-up.svg",s+"/images/svg/undo.svg",s+"/images/svg/user.svg",s+"/images/svg/xmark-small.svg",s+"/manifest.json"],o="1722266798755",m=`cache-${o}`,c=[...l,...p];self.addEventListener("install",e=>{async function i(){await(await caches.open(m)).addAll(c)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==m&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(m);if(c.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const g=await n.match(e.request);if(g)return g;throw a}}e.respondWith(i())});
