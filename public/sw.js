// Service Worker — Examen Civique PWA
// Strategy: Cache-first for static assets, network-first for navigation

const CACHE_NAME = 'examen-civique-v1'
const STATIC_CACHE = 'examen-civique-static-v1'

// Assets to pre-cache on install
const PRE_CACHE_URLS = [
    '/',
    '/manifest.webmanifest',
]

// Install: pre-cache essential files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(PRE_CACHE_URLS)
        })
    )
    self.skipWaiting()
})

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE)
                    .map((name) => caches.delete(name))
            )
        })
    )
    self.clients.claim()
})

// Fetch: stale-while-revalidate for same-origin requests
self.addEventListener('fetch', (event) => {
    const { request } = event
    const url = new URL(request.url)

    // Only handle GET requests for same-origin or CDN assets
    if (request.method !== 'GET') return
    if (!url.origin.startsWith('http')) return

    // Navigation requests: network-first with cache fallback
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clone = response.clone()
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
                    return response
                })
                .catch(() => caches.match('/') || caches.match(request))
        )
        return
    }

    // Static assets (JS, CSS, fonts, images): cache-first
    if (
        url.pathname.match(/\.(js|css|woff2?|png|jpg|svg|ico|webp)$/) ||
        url.pathname.startsWith('/assets/')
    ) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached
                return fetch(request).then((response) => {
                    const clone = response.clone()
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
                    return response
                })
            })
        )
        return
    }
})
