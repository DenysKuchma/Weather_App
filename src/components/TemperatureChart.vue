<template>
  <div class="chart-container">
    <LoaderElem :show="loading" />
    <canvas ref="temperatureChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import LoaderElem from "./LoaderElem.vue";
LoaderElem;
export default {
  props: {
    temperatureData: {
      type: Array,
      required: true,
    },
  },
  components: {
    LoaderElem,
  },
  data() {
    return {
      chart: null,
      loading: true,
    };
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    temperatureData() {
      this.renderChart();
    },
  },
  methods: {
    renderChart() {
      if (this.chart) {
        this.chart.destroy();
      }

      const ctx = this.$refs.temperatureChart.getContext("2d");
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.temperatureData.map((item) => item.hour),
          datasets: [
            {
              label: "Температура по часам",
              data: this.temperatureData.map((item) => item.temp),
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Час",
              },
            },
            y: {
              title: {
                display: true,
                text: "Температура (°C)",
              },
              beginAtZero: true,
            },
          },
        },
      });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to right, #f9f9f9, #e0f7fa);
  position: relative;
}

.weather-card h2 {
  margin-top: 0;
  font-size: 1.5em;
}

.weather-info p {
  margin: 10px 0;
}

.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.icon {
  font-size: 24px;
}

.chart-container {
  width: 100%;
  height: 300px;
  margin-top: 20px;
  max-width: 100%;
}
</style>
