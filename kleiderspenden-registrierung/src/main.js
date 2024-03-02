import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"

import KleiderspendeForm from "./components/KleiderspendeForm.vue"
import About from "./components/About.vue"

const app = createApp(App)

createApp(App)

const routes = [
    { path: "/Kleiderspende", component: KleiderspendeForm },
    { path: "/About", component: About }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActivesClass: "active"
})

app.use(router)

app.mount('#app')
