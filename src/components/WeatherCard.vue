<template>
  <div class="weather-card">
    <h2>{{ cityName }}</h2>
    <div class="weather-info">
      <p v-if="weatherData?.main?.temp">
        Температура: <span class="temp">{{ weatherData.main.temp }}°C</span>
      </p>
      <p v-if="weatherData?.weather[0]?.description">
        Описание: {{ weatherData.weather[0].description }}
      </p>
      <p v-if="weatherData?.main?.humidity">
        Влажность: {{ weatherData.main.humidity }}%
      </p>
      <p v-if="weatherData?.wind?.speed">
        Ветер: {{ weatherData.wind.speed }} м/с
      </p>
    </div>
    <div class="favorite-icon" @click="toggleFavorite">
      <span v-if="isFavorite" class="icon">❤️</span>
      <span v-else class="icon">🤍</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true,
    },
    weatherData: {
      type: Object,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggleFavorite");
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
