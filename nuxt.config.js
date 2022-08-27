import config from './config'
import path from 'path';

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
      { name: 'og:title', content: 'Hackerblocks' },
      { name: 'og:description', content: 'Home to 30K+ Talented Developers. Practice coding, prepare for interviews, and get prizes.' },
      { name: 'og:image', content: 'https://codingblocks.com/assets/images/cb/cb_tshirt_logo.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://unpkg.com/@coding-blocks/web-components@0.1.1/dist/index.js' },
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
    { src: '@coding-blocks/motley/dist/hb/app.min.css' },
    { src: '~/assets/css/app.css'}
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/ga.js', mode: 'client' },
    { src: './plugins/axios.js' },
    { src: './plugins/jsonapi-datastore.js' }
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
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: config.axios,
  /*
  ** Middlewares
  **
  */
  router: {
    middleware: ['auth']
  },
}
