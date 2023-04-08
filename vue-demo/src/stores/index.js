import { createStore } from 'vuex'
import axios from "axios";
import localStoragePlugin from './vue-persist';
import router from '../router'

const storedData = localStorage.getItem('store');
const user_in_server = await axios.get("http://localhost:3000/api/user");
const user_names = []
for (let i = 0; i < user_in_server.data.length; i++) {
    user_names.push(user_in_server.data[i].username)
}

export default createStore({
    state: storedData ? JSON.parse(storedData) : {
        username: '',
        password: '',
        loggedin: false,
        remember: true
    },
    actions: {
        login({ commit }, { username, password }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (user_names.includes(username)) {
                        if (password == user_in_server.data[user_names.indexOf(username)].password) {
                            commit('setUser', { username })
                            commit('setLoggedIn', true)
                            resolve()
                            localStorage.setItem('store', JSON.stringify(this.state))
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
                            alert("Sign up successfully")
                            router.push('./login')
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
            }, 1000)
            alert("Succefully logged out");
        }

    },
    mutations: {
        setUser(state, { username }) {
            state.username = username
        },
        setLoggedIn(state, isLoggedIn) {
            state.loggedin = isLoggedIn
        }
    },
    plugins: [localStoragePlugin],
})