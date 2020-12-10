importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')



workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/src/css/style.css', revision: '1' },
    { url: '/manifest.json', revision: '1' }
])

workbox.routing.registerRoute(
    new RegExp('/js/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js'
    })
)

workbox.routing.registerRoute(
    new RegExp('/css/'),
    workbox.strategies.cacheFirst({
        cacheName: 'style'
    })
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
)

workbox.routing.registerRoute(
    /^https:\/\/stackpath\.bootstrapcdn\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'bootstrap',
    })
)

workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'popper',
    })
)

workbox.routing.registerRoute(
    /^https:\/\/unpkg\.com\/aos@next/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'aos',
    })
)

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
        ],
    }),
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
)

workbox.routing.registerRoute(
    /^https:\/\/stackpath\.bootstrapcdn\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'bootstrap',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
)

workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'popper',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
)

workbox.routing.registerRoute(
    /^https:\/\/.unpkg\.com\/aos@next/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'aos',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
)