const CACHE_NAME = "grit-motion-v1-5-1";
const APP_SHELL = ["./", "./index.html", "./app-icon-192.png", "./app-icon-512.png", "./manifest.json"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL).catch(() => null))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", event => { if(event.request.mode === "navigate") { event.respondWith(fetch(event.request).catch(() => caches.match("./index.html"))); } });
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil((async () => {
    const allClients = await clients.matchAll({type:"window", includeUncontrolled:true});
    for (const client of allClients) { if("focus" in client) return client.focus(); }
    if(clients.openWindow) return clients.openWindow("./index.html?reminder=1");
  })());
});
