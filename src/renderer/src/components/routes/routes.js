// import VueRouter from "vue-router";
import { createRouter, createWebHashHistory } from 'vue-router';
// import mainComponent from "../main/main.vue";



const routes = [
    { path: '/', component: () => import("../main/main.vue") },
    { path: '/saveText', component: () => import("./saveText/saveText.vue") },

    // { path: '/', component: () => import("/src/components/main/main.vue") },
    // { path: '/', component: mainComponent },
    // { path: '/about', component: About },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


export default router;
