<template>
  <FrameWork />
</template>

<script>
import FrameWork from "./framework/FrameWork.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FrameWork,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
