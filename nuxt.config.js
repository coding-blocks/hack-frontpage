export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Hackerblocks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://unpkg.com/@coding-blocks/web-components@0.0.8/dist/index.js' },
      { src: 'https://code.jivosite.com/widget.js', 'data-jv-id': 'ASYGLZQ6UC' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '@coding-blocks/motley/dist/hb/app.min.css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {}
}
