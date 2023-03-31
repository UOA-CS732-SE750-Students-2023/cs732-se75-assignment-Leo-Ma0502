<template>
    <table>
        <tr>
            <th>Currently loggedin as</th>
        </tr>
        <tbody id="users"></tbody>
    </table>
    <div id="editForm" style="display:none">
        <h3>Edit</h3>
        <form action="javascript:void(0);" @submit.prevent="updateUser()">
            <input type="hidden" id="edit-id">
            Edit Email <input type="text" id="edit-email">
            <br />
            <br />
            Edit Password <input type="text" id="edit-password">
            <br />
            <input type="submit" value="Save">
            <a @click="exitInput()" aria-label="Close">&#10006;</a>
        </form>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ProfilePage",
    mounted() {
        this.display()
    },
    methods: {
        ...mapActions('user', ['updateItem', 'getItems', 'closeInput']),

        display() {
            this.getItems()
        },

        updateUser() {
            this.updateItem()
        },

        exitInput() {
            this.closeInput()
        }

    }

}
</script>