<template>
  <h1>Chart demo 2</h1>
  <a-button type="primary" @Click="showDrawer">Update</a-button>
  <!-- a drawer shows for inputing inforamtion for update if user clicks update button -->
  <a-drawer
    :width="500"
    title="Update item"
    :placement="placement"
    :visible="visible"
    @close="onClose"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="updateSales">Submit</a-button>
    </template>
    <!-- update form begins -->
    <a-form
      :model="toUpdate"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="updateSales"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Item"
        name="goodsname"
        :rules="[{ required: true, message: 'Please input the item!' }]"
      >
        <a-input v-model:value="toUpdate.goodsname" />
      </a-form-item>

      <a-form-item
        label="Quantity"
        name="number"
        :rules="[{ required: true, message: 'Please input your quantity!' }]"
      >
        <a-input v-model:value="toUpdate.number" />
      </a-form-item>
    </a-form>
    <!-- update form ends -->
  </a-drawer>
  <!-- call component and bind data with props -->
  <EchartsDemo :data="sales" />
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import EchartsDemo from "./EchartsDemo.vue";
import "ant-design-vue/dist/antd.css";
import axios from "axios";

export default defineComponent({
  setup() {
    const toUpdate = reactive({ item: "", quantity: 0 });
    const placement = ref("top");
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    return {
      toUpdate,
      placement,
      visible,
      showDrawer,
      onClose,
    };
  },

  components: {
    EchartsDemo,
  },

  data: () => ({
    sales: [],
  }),

  mounted() {
    this.loadData();
  },

  methods: {
    // request data from backend (asyn)
    async loadData() {
      const res = await axios.get("http://localhost:3000/api/data2");
      this.sales = res.data;
    },
    // undate data
    async updateSales() {
      const res = await axios.post(
        "http://localhost:3000/api/data2",
        this.toUpdate
      );
      this.loadData();
    },
  },
});
</script>
