import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from "firebase"
import router from '../router'

Vue.use(Vuex, axios);




export const store = new Vuex.Store({
    state: {
        spnRecipeList: [],
        itaRecipeList: [],
        jpnRecipesList: [],
        indianRecipeList: [],
        user: null,
        email: '',
        password: '',
        toekn: '',
        status: false,
        error: null,
    },
    actions: {
        loadSpanishMenu({
            commit
        }) {
            axios
                .get('https://api.spoonacular.com/recipes/complexSearch?cuisine=spanish&maxFat=52&addRecipeInformation=true&instructionsRequired=true&maxReadyTime=100&maxProtein=100&maxCarbs=100&maxCalories=800&addRecipeInformation=true&number=15&apiKey=30e6ae4b84894f5694498415888fae57')
                .then(res => {
                    let spnRecipes = res.data
                    commit('spn_menu', spnRecipes)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadItalianhMenu({
            commit
        }) {
            axios
                .get('https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&maxFat=52&addRecipeInformation=true&instructionsRequired=true&maxReadyTime=100&maxProtein=100&maxCarbs=100&maxCalories=800&addRecipeInformation=true&number=15&apiKey=30e6ae4b84894f5694498415888fae57')
                .then(res => {
                    let itnRecipes = res.data
                    commit('itn_menu', itnRecipes)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadJpnMenu({
            commit
        }) {
            axios
                .get('https://api.spoonacular.com/recipes/complexSearch?cuisine=japanese&maxFat=52&addRecipeInformation=true&instructionsRequired=true&maxReadyTime=100&maxProtein=100&maxCarbs=100&maxCalories=800&addRecipeInformation=true&number=15&apiKey=30e6ae4b84894f5694498415888fae57')
                .then(res => {
                    let jpnRecipes = res.data
                    commit('jpn_menu', jpnRecipes)
                })
        },
        loadIndMenu({
            commit
        }) {
            axios
                .get('https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&maxFat=52&addRecipeInformation=true&instructionsRequired=true&maxReadyTime=100&maxProtein=100&maxCarbs=100&maxCalories=800&addRecipeInformation=true&number=15&apiKey=30e6ae4b84894f5694498415888fae57')
                .then(res => {
                    let indRecipes = res.data
                    commit('ind_menu', indRecipes)
                })
        },
        authUser({
            commit
        }, payload) {
            commit('authUser', payload)
        },
        signInGoogle({
            commit
        }) {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(user => commit('authUser', user.user))
                .then(() => router.push('/chats'))
                .catch(error => {
                    console.log(error)
                })
        },

        register({
            commit
        }, payload) {
            console.log(payload)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    let user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: payload.email
                    }).then(() => {
                        commit('authUser', firebase.auth().currentUser)
                        router.push('/')
                    })
                })
        },
        activeUser({
            commit
        }, payload) {
            commit('authUser', payload)
        },
        signInEmail({
            commit
        }, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => commit('authUser', user.user)).catch((error => {
                    console.warn(error)
                }))
            router.push('/chats')
        }
    },
    mutations: {
        spn_menu(state, spnRecipes) {
            state.spnRecipeList = spnRecipes.results
            console.log(state.spnRecipeList);
        },
        ind_menu(state, indRecipes) {
            state.indianRecipeList = indRecipes.results
        },
        itn_menu(state, itnRecipes) {
            state.itaRecipeList = itnRecipes.results
        },
        jpn_menu(state, jpnRecipes) {
            state.jpnRecipesList = jpnRecipes.results
        },
        authUser(state, user) {
            state.user = user;
        },
        logoutUser: state => {
            state.user = null;
        }
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        isSignedIn(state) {
            return state.status
        },
        logoutUser: context => {
            context.commit('logoutUser');
        }
    }
})