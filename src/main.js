import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAnimateOnScroll from 'vue-animate-onscroll'
 
Vue.use(VueAnimateOnScroll)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
