const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css"
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

self.addEventListener('fetch', function(evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.match(evt.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then((cache) => {
          return fetch(evt.request).then((response) => {
            return cache.put(evt.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
