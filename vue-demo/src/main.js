import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Test from './Test.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './stores/index.js'

import './assets/main.css'

const app = createApp(App)
// const app = createApp(Test)
app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(store)

app.mount('#app')
