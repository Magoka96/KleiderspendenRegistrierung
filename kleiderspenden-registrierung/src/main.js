import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"

import ClothingDonationForm from "./components/ClothingDonationForm.vue"
import About from "./components/About.vue"

const app = createApp(App)

createApp(App)

const routes = [
    { path: "/Kleiderspende", component: ClothingDonationForm },
    { path: "/About", component: About }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActivesClass: "active"
})

app.use(router)

app.mount('#app')
