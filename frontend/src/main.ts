import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import { createVuestic } from 'vuestic-ui'
//import 'vuestic-ui/css'
import router from './router'
createApp(App).use(Antd).use(createVuestic()).use(router).mount('#app')
