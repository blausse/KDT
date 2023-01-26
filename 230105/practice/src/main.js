import {createApp} from 'vue'
import App from './App.vue'
import router from './routes/index.js'

Vue.config.productionTip = false

const app = createApp(App)

app.use(router);
app.mount('#app');
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
