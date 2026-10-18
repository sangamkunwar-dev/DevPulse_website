import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    tanstackStart: {
        server: { entry: "server"},
    },
    vite: {
        plugins: [
            VitePWA({
                registerType: "autoUpdate",
                injectRegister: null,
                filename: "sw,js",
                devOptions: { enabled: false},
                includeAssets: ["favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png"],
                manifest: false,
                workbox: {
                    globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff,woff2}"],
                    navigateFallback: "/",
                    navigateFallbackDenylist: [/^\/~oauth/, /^\/api\//, /^\/sitemap\.xml/],
                    runtimeCaching: [
                        {
                            urlPattern: ({ request, url }) =>
                                request.mode === "navigate" && !url.pathname.startsWith("/~oauth") && !url.pathname.startsWith("/api/"),
                            handler: "NetworkFirst",
                            options: {
                                cacheName: "html-pages",
                                networkTimeoutSeconds: 4,
                                expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 7},
                            },
                        },
                        {
                            urlPattern: ({ url, sameOrigin }) => sameOrigin &&/\.(?:js|css|woff2)$/.test(url.pathname),
                            handler: "CacheFirst",
                            options: {
                                cacheName: "static-assets",
                                expiration: { maxEntries: 60 * 60 * 24 * 30},

                            },
                        },
                        {
                            urlPattern: ({url, sameOrigin }) => sameOrigin &&/\.(?:png|jpg|jpeg|svg|webp|ico)$/.test(url.pathname),
                            handler: "CacheFirst",
                            options: {
                                cacheName: "images",
                                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },

                            },
                        },
                    ],
                },
            }),
        ],
    },
});