<template>
  <div :style="{ padding: '20vh' }">
    <h style="font-weight: bolder">Sign up</h>
    <br />
    <br />
    <!-- form for register begins -->
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="handleSignup"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <br />
        <br />
        <router-link to="/login">Go to log in</router-link>
      </a-form-item>
    </a-form>
    <!-- form for register ends -->
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { mapActions } from "vuex";
import { default as user } from "../stores";
export default defineComponent({
  methods: {
    // map and call register function from store
    ...mapActions(["register"]),
    handleSignup(value) {
      const { username, password } = value;
      this.register({ username, password })
        .then(() => {
          console.log(value);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  setup() {
    const formState = reactive(user.state);

    return {
      formState,
    };
  },
});
</script>
