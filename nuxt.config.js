export default defineNuxtConfig({
    // 禁用服务端渲染
    ssr: false,

    // 开发模式的端口配置
    devServer: {
        port: 3000
    },

    // 运行时配置
    runtimeConfig: {
        public: {
            apiBase: ''
        }
    },
    nitro: {
        preset: 'cloudflare_pages',
    },

    // 应用级配置
    app: {
        head: {
            title: 'QQ1000图床',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'QQ1000图床 -全球加速打造的简单好用的个人图片托管解决方案' },
                { name: 'keywords', content: 'QQ1000图床,图片托管,图片上传,免费图床' },
                { name: 'author', content: 'QQ1000.COM' },
                { property: 'og:title', content: 'QQ1000图床 -全球加速打造的简单好用的个人图片托管解决方案' },
                { property: 'og:description', content: '全球加速打造的简单好用的个人图片托管解决方案' },
                { property: 'og:type', content: 'website' },
                { name: 'robots', content: 'index,follow' }
            ],
        }
    },
    css: [
        '@/assets/css/main.css'
    ],
}) 
