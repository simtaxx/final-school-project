self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerRoute(
//   new RegExp(''),
//   new workbox.strategies.CacheFirst({
//     cacheName: '',
//     method: 'GET',
//     cacheableResponse: { statuse: [0, 200] },
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30
//       })
//     ]
//   })
// )

//- For image caching, we check the request destination type
// workbox.routing.registerRoute(
//   ({request}) => request.destination === 'image',
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     method: 'GET',
//     cacheableResponse: { statuse: [0, 200] },
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30
//       })
//     ]
//   })
// )

self.addEventListener("push", event => {
  let pushMsg = event.data.text();

  const options = {
    body: pushMsg,
    icon: "./img/favicon-16x16.png",
    image: "...",
    vibrate: [200, 100, 200, 100],
    tag: "vibration-sample"
  };

  event.waitUntil(self.registration.showNotification(pushMsg, options));
});

self.addEventListener("notificationclick", event => {
  console.log("aaa" + event);
  event.notification.close();
  const promiseChain = clients.openWindow("url de larticle");
  event.waitUntil(promiseChain);
});
