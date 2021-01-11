import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/AreaBusca.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '*',
        redirect: '/'
    }]
})