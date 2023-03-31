<template>
  <h1>Chart demo 1</h1>
  <a-button type="primary" @Click="updateSales">Update</a-button>
  <!-- call component and bind data with props -->
  <EchartsDemo :data="sales" />
</template>

<script>
import EchartsDemo from "./EchartsDemo.vue";
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import axios from "axios";

export default {
  name: "ChartView1",
  components: {
    AButton: Button,
    EchartsDemo,
  },
  data: () => ({
    sales: [],
  }),

  // request data from backend (asyn)
  async created() {
    const res = await axios.get("http://localhost:3000/data1");
    this.sales = res.data;
  },

  methods: {
    // undate data
    async updateSales() {
      const res = await axios.post("http://localhost:3000/data1", {
        goodsname: "dog",
        number: 10,
      });
      this.sales.push(res.data);
    },
  },
};
</script>
