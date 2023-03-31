<template>
  <div id="main"></div>
</template>

<script>
// --- fixed ---

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
// Import bar charts, all suffixed with Chart
import { BarChart } from "echarts/charts";
// Import the tooltip, title, rectangular coordinate system, dataset and transform components
// all suffixed with Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from "echarts/features";
// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";

// ---fixed end

export default {
  props: ["data"],
  data: () => ({ myChart: null }),
  created() {
    // Register the required components
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      BarChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
    ]);
  },

  mounted() {
    // The next step is the same as before, initialize the chart and set the configuration items
    let colors = ["#5470c6", "#91cc75"];
    this.myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: "Example",
      },
      tooltip: {},
      xAxis: {
        data: this.data.map((item) => item.goodsname),
      },
      yAxis: {},
      series: [
        {
          name: "sales",
          type: "bar",
          data: this.data.map((item) => item.number),
          itemStyle: {
            color: (params) => colors[params.dataIndex] || "#457789",
          },
        },
      ],
    };
    this.myChart.setOption(option);
  },
  // listen to the change in data and respond to change the chart
  watch: {
    data: {
      handler() {
        this.myChart.setOption({
          xAxis: {
            data: this.data.map((item) => item.goodsname),
          },
          series: [
            {
              data: this.data.map((item) => item.number),
            },
          ],
        });
      },
      deep: true,
    },
  },
};
</script>

<style>
#main {
  width: 600px;
  height: 400px;
  margin: 40px auto;
}
</style>
