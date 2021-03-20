const { response } = require("express");

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/manifest.webmanifest",
    "/index.js",
    "/db.js"
]

const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (evt) => {
  const currentCaches = [PRECACHE, RUNTIME];
  evt.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
//fetch
self.addEventListener("fetch", function(evt) {

  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(RUNTIME).then(cache => {
        return fetch(evt.request)
        .then(response => {

          if (response === 200) {
            cache.put(evt.request.url, response.clone());
          }

          return response;
        })
        .catch(err => {
          //If requests fails, try to get it from cache.
          return cache.match(evt.request);
        });
      }).catch(err => console(err))
    );

    return;
  }

  //Function for offline work
  evt.respondWith(
    caches.open(PRECACHE).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});


  

