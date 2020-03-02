import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import Vuex from 'vuex'
import 'es6-promise/auto'
import { store } from '../src/store'


Vue.use(firebaseui)
library.add(faClock)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });

require("firebase/firestore");
Vue.use(Vuex)


const firebaseConfig = {
  apiKey: "AIzaSyBrwkS37oMme7_t_kDhUbgUlNREpL8jGK0",
  authDomain: "fir-387ad.firebaseapp.com",
  databaseURL: "https://fir-387ad.firebaseio.com",
  projectId: "fir-387ad",
  storageBucket: "fir-387ad.appspot.com",
  messagingSenderId: "531899216348",
  appId: "1:531899216348:web:d2c1e13ac787c949e65f19",
  measurementId: "G-KXHW18FZD1"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

window.db = db;

firebase.auth().onAuthStateChanged(user=>{
  if(user){
    store.dispatch('activeUser',user)
  }else{
    store.dispatch('activeUser',null)
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
