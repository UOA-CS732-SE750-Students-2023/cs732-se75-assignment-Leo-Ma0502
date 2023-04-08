<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="handleLogin"
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

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { mapActions } from "vuex";
import { default as user } from "./stores";

// const formState = reactive(user.state);

export default defineComponent({
  methods: {
    ...mapActions(["login"]),
    handleLogin(value) {
      const { username, password } = value;
      this.login({ username, password })
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

    const handleLogout = () => {
      logout()
        .then(() => {
          console.log("Logout successful");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      formState,
      handleLogout,
    };
  },
});
</script>
