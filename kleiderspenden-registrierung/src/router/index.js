import { createRouter, createWebHashHistory } from "vue-router"
import ClothingRegistration from "@/views/ClothingRegistration.vue"
import About from "@/components/About.vue"

const routes = [
    { 
        path: "/Kleiderspende", 
        component: ClothingRegistration 
    },
    { 
        path: "/About", 
        component: About 
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActivesClass: "active"
})

export default router