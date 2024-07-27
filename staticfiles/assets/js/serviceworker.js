// ######################################## New ########################################

var staticCacheName = 'PWA-v1' ;

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log("caching sell")
            return cache.addAll([
                '',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
        if ((requestUrl.pathname === '/')) {
            // Bypass cache for HTML requests
            event.respondWith(fetch(event.request));
            return;
        }
    }
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
