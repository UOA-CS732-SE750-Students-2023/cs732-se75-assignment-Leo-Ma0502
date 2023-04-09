import { createStore } from 'vuex'
import axios from "axios";
import router from '../router'
import { reactive } from 'vue';

// read user state from local storage
let storedData = window.localStorage.getItem('user');
console.log('stored data: ', JSON.parse(storedData));
var user_in_server = reactive([]);
var user_names = reactive([]);

// load username, password from server
async function user_load() {
    user_in_server = await axios.get("http://localhost:3000/api/user");
    user_names = []
    for (let i = 0; i < user_in_server.data.length; i++) {
        user_names.push(user_in_server.data[i].username)
    }
}


export default createStore({
    state: JSON.parse(storedData) ? reactive(JSON.parse(storedData)) : reactive({
        username: '',
        password: '',
        loggedin: false,
        remember: true
    }),
    actions: {
        login({ commit }, { username, password, remember }) {
            user_load();
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (user_names.includes(username)) {
                        if (password == user_in_server.data[user_names.indexOf(username)].password) {
                            commit('setUser', { username, password, remember })
                            commit('setLoggedIn', true)
                            resolve()
                            window.localStorage.setItem('user', JSON.stringify(this.state))
                            console.log("stored:", window.localStorage.getItem('user'))
                            router.push('./welcome')
                        }
                        else {
                            alert("wrong password")
                        }
                    }
                    else {
                        alert("username not found")
                    }
                }, 1000)

            })
        },
        register({ commit }, { username, password }) {
            user_load();
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (user_names.includes(username)) {
                        alert("User exists")
                    }
                    else {
                        try {
                            axios.post("http://localhost:3000/api/user", {
                                "username": username,
                                "password": password,
                            })
                            router.push('./login');
                            alert("Sign up successfully")

                        } catch (error) {
                            alert(error)
                        }

                    }
                }, 1000)

            })
        },
        logout({ commit }) {
            setTimeout(() => {
                commit('setLoggedIn', false)
                this.state.remember ? "" : commit('setUser', { username: "", password: "" })
                window.localStorage.setItem("user", JSON.stringify(this.state))
                storedData = window.localStorage.getItem('user');
            }, 1000)
            router.push('./login');
            alert("Succefully logged out");
        }

    },
    mutations: {
        setUser(state, { username, password, remember }) {
            state.username = username
            state.password = password
            state.remember = remember
        },
        setLoggedIn(state, isLoggedIn) {
            state.loggedin = isLoggedIn
        },
    },
    getters: {
        getUser(state) {
            return state
        }
    }
})