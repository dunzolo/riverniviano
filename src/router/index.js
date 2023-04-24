import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/pages/Home.vue';
import Contacts from '../components/pages/Contacts.vue';
import Classifica2015 from '../components/pages/Classifica2015.vue';
import Classifica2014 from '../components/pages/Classifica2014.vue';
import Classifica2013 from '../components/pages/Classifica2013.vue';
import Classifica2012 from '../components/pages/Classifica2012.vue';



const routes = [
    {
        path: '/riverniviano/',
        component: Home
    },
    {
        path: '/riverniviano/contatti',
        component: Contacts
    },
    {
        path: '/riverniviano/classifica2015',
        component: Classifica2015
    },
    {
        path: '/riverniviano/classifica2014',
        component: Classifica2014
    },
    {
        path: '/riverniviano/classifica2013',
        component: Classifica2013
    },
    {
        path: '/riverniviano/classifica2012',
        component: Classifica2012
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;