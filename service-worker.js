const CACHE_NAME = "grit-motion-v1-5-2";
const APP_SHELL = [
  "/Grit-and-motion/",
  "/Grit-and-motion/index.html",
  "/Grit-and-motion/manifest.json",
  "/Grit-and-motion/app-icon-192.png",
  "/Grit-and-motion/app-icon-512.png",
  "/Grit-and-motion/favicon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL).catch(() => null))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("/Grit-and-motion/index.html")));
  }
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil((async () => {
    const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of allClients) {
      if ("focus" in client) return client.focus();
    }
    if (clients.openWindow) return clients.openWindow("/Grit-and-motion/?reminder=1");
  })());
});
