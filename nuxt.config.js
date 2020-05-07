
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adams Abdulhakeem (GeekyAdams) | Software Developer | Web Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Adams Abdulhakeem (GeekyAdams) Web Portfolio' },
      {name: 'theme-color', content: '#F0C4F9'},
      {name: 'author', content: 'Adams Abdulhakeem'},
      {name: 'copyright', content: 'Adams Abdulhakeem'},
      {name: 'keywords', content: 'Programmer, Web Developer, Mobile Developer, UI Designer, Web Portfolio, Awaaards, Beautiful Portfolio Design, Adams Abdulhakeem, Geeky Adams, Abdulhakeem Adams'},
      {name: 'twitter:ADAMS ABDULHAKEEM', content: 'I am Geeky Adams. Building the next $billion DODO inspired solutions.'},
      {'http-equiv': 'expires', content: '43200'}
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Satisfy&display=swap'},
      { rel: 'stylesheet', href: '//db.onlinewebfonts.com/c/480e3d39ed40d6543721946a2d36ccff?family=RZ'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css'},
      { rel: 'stylesheet', href: '/css/pace-theme-flash.css'},
      { rel: 'stylesheet', href: '/css/animate.css'}
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-165820608-1' },
      { src: '/modules/gtag.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/modules/smoothScroll.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js' },
      { src: '/modules/pace.min.js', 'data-pace-options': { "ajax": false } },
      { src: 'https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/index.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js', body: true },
      { type: 'text/javascript', src: '/modules/mouse-negative.js', body: true },
      { type: 'text/javascript', src: '/modules/custom.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FDCBBC' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/chillax.css',
    'aos/dist/aos.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/aos.js',
    mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
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
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
