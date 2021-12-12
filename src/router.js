import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander.vue')},
        {path:'/games',  name:'Games',   component: () =>import('./components/Games.vue')}
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});
export default router;
