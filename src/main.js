import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Plugin } from 'vue-responsive-video-background-player'
Vue.use(Plugin);
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
