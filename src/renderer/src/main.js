// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './assets/index.css';
import '../../../tailwind.css';
// 黑暗风格
// import 'element-plus/theme-chalk/dark/css-vars.css'




import  { createApp } from "vue";

// import { createPinia } from 'pinia'
// import VueRouter from 'vue-router'
import router from './components/routes/routes';


import App from "./components/App.vue";


import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'




console.log('👋 This message is being logged by "renderer.js", included via Vite');
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

let appA = createApp(App)
// let appA = createApp({})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    appA.component(key, component)
}




appA
    .use(router)
    .use(ElementPlus)
    .use(ContextMenu)
    // .use(createPinia())

    .mount('#app')