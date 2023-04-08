<template>
  <div :style="{ padding: '20vh' }">
    <h style="font-weight: bolder">Log in</h>
    <br />
    <br />
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="handleLogin"
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

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 8 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <br />
        <br />
        <router-link to="/register">New here? Sign Up</router-link>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { mapActions } from "vuex";
import { default as user } from "../stores";

export default defineComponent({
  methods: {
    ...mapActions(["login"]),
    handleLogin(value) {
      const { username, password, remember } = value;
      this.login({ username, password, remember })
        .then(() => {
          console.log("state after logged in: ", user.state);
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
