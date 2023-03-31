import router from '../router'
// import { crud } from '../services'
const state = {
    email: '',
    password: '',
    loggedin: false
    // loggedin: true

}

const actions = {
    getItems() {
        console.log("To: get items")
        crud.getItems()
    },

    addItem() {
        console.log("To: add item")
        crud.addItem()
    },

    updateItem() {
        console.log("To: up item")
        crud.updateItem()
    },

    authenticate() {
        console.log("To: authenticate")
        const crud_result = crud.authenticate()
        crud_result.then(result => {
            console.log("authentic result at store level: " + result)
            return result
        })
        return crud_result
    },

    closeInput() {
        crud.closeInput()
    }


}

const mutations = {
    changeStatus(state) {
        console.log('To: change login status')
        state.loggedin = true
        router.push('./welcome')

        console.log('logged in!');
        console.log(user.state.loggedin)


    },

    exit_login(state) {
        console.log('To: exit account')
        crud.exit()
        console.log('To: logout')
        state.loggedin = false
        router.push('./login')
    }

}


export const user = {
    namespaced: true,
    state,
    actions,
    mutations
}