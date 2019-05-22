const staticCacheName = 'rest-review-static-v1';

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      if (res) return res;
      else {
        caches.open(staticCacheName).then(cache => {
          cache.add(evt.request).then(res => {
            console.log('request was added to cache')
          });
        });
        return fetch(evt.request);
      }
    })
  );
});



