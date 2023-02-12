// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'TSKS'
        }
    },
    build: {
        transpile: ['trpc-nuxt']
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/devtools',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@formkit/nuxt'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    }
})
