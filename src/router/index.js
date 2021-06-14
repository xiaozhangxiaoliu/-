import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
    },

    {
        path: '/home',
        component: () =>
            import ('../views/home/Home.vue')
    },
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/city.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ('../views/detail/detail.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router