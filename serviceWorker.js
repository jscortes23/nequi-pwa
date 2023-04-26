const staticNequiTaxisLibre = "dev-nequi-taxis-libres";
const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/main.js",
  "/registerServiceWorker.js",
  "/assets/imgs/car.gif",
  "/assets/imgs/map.png",
  "/assets/icons/airplane.svg",
  "/assets/icons/arrow-dark-right.svg",
  "/assets/icons/arrow-dark.svg",
  "/assets/icons/arrow-left-dark.svg",
  "/assets/icons/arrow-white.svg",
  "/assets/icons/back-car.svg",
  "/assets/icons/cancel-big.svg",
  "/assets/icons/car.svg",
  "/assets/icons/change.svg",
  "/assets/icons/check-big.svg",
  "/assets/icons/choronometer.svg",
  "/assets/icons/clock.svg",
  "/assets/icons/deny.svg",
  "/assets/icons/equis.svg",
  "/assets/icons/flag.svg",
  "/assets/icons/gift.svg",
  "/assets/icons/gps.svg",
  "/assets/icons/logo-tl.png",
  "/assets/icons/logo-tl.webp",
  "/assets/icons/mark.svg",
  "/assets/icons/menu.svg",
  "/assets/icons/messengar-and-call.svg",
  "/assets/icons/money.svg",
  "/assets/icons/nequi.svg",
  "/assets/icons/origin.svg",
  "/assets/icons/person-deny.svg",
  "/assets/icons/person-small.svg",
  "/assets/icons/person-talk.svg",
  "/assets/icons/person-talking.svg",
  "/assets/icons/point-blue.svg",
  "/assets/icons/pointer-dark.svg",
  "/assets/icons/pointer-gps.svg",
  "/assets/icons/pointer-green.svg",
  "/assets/icons/prohibited.svg",
  "/assets/icons/question.svg",
  "/assets/icons/search.svg",
  "/assets/icons/sequences-points.svg",
  "/assets/icons/share.svg",
  "/assets/icons/small-car.svg",
  "/assets/icons/smartphone.svg",
  "/assets/icons/star-green.svg",
  "/assets/icons/star-white.svg",
  "/assets/icons/state-approved.svg",
  "/assets/icons/warning.svg",
  "/assets/fonts/Montserrat-VariableFont_wght.ttf",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticNequiTaxisLibre).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})