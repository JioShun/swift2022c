import { createRouter, createWebHistory } from "vue-router"
import topPage from "./components/topPage.vue"
import eatPage from "./components/eatPage.vue"
// import spaPage from "./components/spaPage.vue"
import seePage from "./components/seePage.vue"
// import newsPage from "./components/newsPage.vue"
import searchResult from "./components/searchResult.vue"
import knowPage from "./components/knowPage.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: '/top'
        },
        {
            path:'/top',
            name:'top',
            component: topPage,
        },
        {
            path: '/eat',
            name: 'eat',
            component: eatPage,
        },
        // {
        //     path: '/spa',
        //     name: 'spa',
        //     component: spaPage,
        // },
        {
            path: '/see',
            name: 'see',
            component: seePage,
        },
        // {
        //     path: '/news',
        //     name: 'news',
        //     component: newsPage,
        // },
        {
            path: '/know',
            name: 'know',
            component: knowPage,
        },              
        {
            path: '/searchResult/:search',
            name: 'searchResult',
            component: searchResult,
            props: true
        },  
    ],
})