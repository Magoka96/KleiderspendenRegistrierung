import { createRouter, createWebHashHistory } from "vue-router";
import ClothingRegistration from "@/views/ClothingRegistration.vue";
import DonationConfirmation from "@/components/DonationConfirmation.vue";
import About from "@/components/Header/About.vue";
import Contact from "@/components/Header/Contact.vue";
import TermsOfUse from '@/components/Footer/TermsOfUse.vue';
import PrivacyPolicy from '@/components/Footer/PrivacyPolicy.vue';
import LegalDisclosure from '@/components/Footer/LegalDisclosure.vue';
import { useFormDataStore } from '@/store/formDataStore';


const routes = [
    { 
        path: '/Kleiderspende/Registrierung', 
        name: 'ClothingRegistration',
        component: ClothingRegistration 
    },
    {
        path: '/Kleiderspende/Bestaetigung',
        name: 'DonationConfirmation',
        component: DonationConfirmation,
        beforeEnter: (to, from, next) => {
            const formSubmitted = useFormDataStore().formSubmitted;
            if (!formSubmitted) {
                next({ name: 'ClothingRegistration' });
            } else {
                next();
            }
        }
    },
    { 
        path: '/About', 
        name: 'About',
        component: About 
    },
    { 
        path: '/Kontakt', 
        name: 'Kontakt',
        component: Contact 
    },
    { 
        path: '/Nutzungsbedingungen',
        name: 'TermsOfUse',
        component: TermsOfUse 
    },
    { 
        path: '/Datenschutz',
        name: 'Datenschutz',
        component: PrivacyPolicy 
    },
    { 
        path: '/Impressum',
        name: 'LegalDisclosure',
        component: LegalDisclosure 
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActivesClass: "active"
})

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/Kleiderspende/Registrierung');
    } else {
        next();
    }
});

export default router