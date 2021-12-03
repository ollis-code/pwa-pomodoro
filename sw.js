var cacheName = 'pwa-pomodoro';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/hello-icon-128.png',
  '/images/hello-icon-144.png',
  '/images/hello-icon-152.png',
  '/images/hello-icon-192.png',
  '/images/hello-icon-256.png',
  '/images/hello-icon-512.png',
  '/favicon.ico',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
