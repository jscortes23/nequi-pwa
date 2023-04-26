/* Registrando el Service Worker */
if ("serviveWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"), res)
            .catch(err => console.log("service worker no registrado", err))
    })
}
