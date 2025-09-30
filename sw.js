self.addEventListener("install", e => {
  console.log("Service Worker: install");
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  console.log("Service Worker: activate");
});

self.addEventListener("fetch", e => {
  // Na razie tylko przepuszczamy żądania bez cache
  return fetch(e.request);
});