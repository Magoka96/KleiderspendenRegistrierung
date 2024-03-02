import { createRouter, createWebHashHistory } from "vue-router"
import ClothingDonationForm from "@/components/ClothingDonationForm.vue" // Pfad mit @ für src-Verzeichnis
import About from "@/components/About.vue" // Pfad mit @ für src-Verzeichnis

const routes = [
    { 
        path: "/Kleiderspende", 
        component: ClothingDonationForm 
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