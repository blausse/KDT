import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'

Vue.use(mdiVue, {
  icons: mdijs
}) 

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
