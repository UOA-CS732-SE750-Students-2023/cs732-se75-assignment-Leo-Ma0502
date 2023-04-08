<template>
  <table>
    <tr>
      <th>Currently loggedin as {{ username }}</th>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from "vue";
import { default as user } from "../stores";

export default defineComponent({
  setup() {
    const username = user.state.username;
    return {
      username,
    };
  },
});
</script>
