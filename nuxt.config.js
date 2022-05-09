export default {
  head: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
  ],
  css: ['@/assets/css/util.css', '@/assets/main.css'],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],
  modules: ['nuxt-material-design-icons-iconfont', '@nuxtjs/axios'],
  plugins: [
    { src: '~/plugins/persistedState.ts' },
    { src: '~/plugins/api.ts' },
  ],
  axios: {
    baseURL: 'https://junggam.click/api/v1/user',
  },
};
