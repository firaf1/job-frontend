export default {
  
  loading: {
    color: '#0027a3',
    height: '3px'
  },
  layoutTransition: {
 
    mode: 'out-in'
  },
 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
 
  

    script: [
     
      {type: 'text/javascript',
        src: '/assets/js/jquery-3.3.1.min.js' },
      { src: '/assets/js/jquery-migrate-3.0.0.min.js' },
      { src: '/assets/js/mmenu.min.js' },
      { src: '/assets/js/tippy.all.min.js' },
      { src: '/assets/js/simplebar.min.js' },
      { src: '/assets/js/bootstrap-slider.min.js' },
      { src: '/assets/js/bootstrap-select.min.js' },
      { src: '/assets/js/snackbar.js' },
      { src: '/assets/js/clipboard.min.js' },
      { src: '/assets/js/counterup.min.js' },
      { src: '/assets/js/magnific-popup.min.js' },
      { src: '/assets/js/slick.min.js' },
      { 
        type: 'text/javascript',
        src: '/assets/js/typed.js' },
      { src: '/assets/js/custom_jquery.js' },
  ],
  },



  
 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/bootstrap-grid.css', '~/assets/css/style.css', '~/assets/css/icons.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   
  
    // plugins: ['~assets/js/typed.js',],
 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next'

  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
    
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'login-request', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: 'auth/user', method: 'get' }
        }
      }
    },
    
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://job.habeshawimart.com/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
