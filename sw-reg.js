if ('serviceWorker' in navigator) {
    serviceWorkerRegister()
} else {
    console.log('serviceWorker Belum didukung browser ini.')
}

function serviceWorkerRegister() {
    return navigator.serviceWorker
        .register('/serviceworker.js')
        .then((registration) => {
            console.log('Pendaftaran ServiceWorker berhasil')
            return registration
        })
        .catch(() => {
            console.log('pendaftaran serviceWorker gagal')
        })
}


function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; i++) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}