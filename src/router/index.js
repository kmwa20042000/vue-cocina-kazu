import Spanishmenu from '../components/spanishmenu.vue'
import Japanesemenu from '../components/japmenu'
import Italianmenu from '../components/italianmenu'
import Indianmenu from '../components/indianmenu'
import Home from '../components/home'
import Login from '../components/login.vue'
import Registration from '../components/registration.vue'
import Profile from '../components/profile'
import Chat from '../components/chat-boxes'
import VueRouter from "vue-router";
import Vue from "vue";
import thankyou from '../components/thankyou.vue'

Vue.use(VueRouter);

const routes = ([

    {
        path: '/', 
        name: "home",
        component: Home,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/spanish', 
        component: 
        Spanishmenu
    },
    {
        path: '/japanese', 
        component: Japanesemenu
    },
    {
        path: '/italian', 
        component: 
        Italianmenu},
    {
        path: '/indian', 
        component: Indianmenu},
    {
        path:'/login', 
        component: Login,
        meta: {
            guest: true}
    },
    {
        path:'/registration', 
        component: Registration
    },
    {
        path:'/profile', 
        name: Profile,
        component: Profile,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/chats',
        name: Chat,
        component: Chat,
    },
    {
        path:'/thankyou',
        name: thankyou,
        component: thankyou,
    }
]
);
const router = new VueRouter({
    routes,
    mode: 'history',
  });
export default router;