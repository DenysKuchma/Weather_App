<template>
  <div>
    <h1>Избранное</h1>
    <p v-if="favorites.length === 0">У вас нет избранных городов.</p>
    <div v-if="favorites.length > 0">
      <div
        v-for="(weather, index) in favorites"
        :key="index"
        class="weather-card-container"
      >
        <WeatherCard
          :cityName="weather.cityName"
          :weatherData="weather.weatherData"
          :isFavorite="true"
          @removeFavorite="removeFavorite(weather.cityName)"
        />
        <TemperatureChart :temperatureData="weather.temperatureData" />
        <button class="delete-button" @click="confirmRemoveFavorite(index)">
          Удалить
        </button>
      </div>
    </div>
    <ConfirmationModal
      v-if="showModal"
      @confirm="removeFavoriteConfirm"
      @cancel="cancelRemoveFavorite"
    />
  </div>
</template>

<script>
import WeatherCard from "../components/WeatherCard.vue";
import TemperatureChart from "../components/TemperatureChart.vue";
import ConfirmationModal from "../components/ConfirmationModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    WeatherCard,
    TemperatureChart,
    ConfirmationModal,
  },
  data() {
    return {
      showModal: false,
      removeIndex: null,
    };
  },
  computed: {
    ...mapGetters(["favorites", "showLimitModal"]),
  },
  methods: {
    ...mapActions(["removeFavorite", "closeLimitModal"]),
    confirmRemoveFavorite(index) {
      this.removeIndex = index;
      this.showModal = true;
    },
    removeFavoriteConfirm() {
      if (this.removeIndex !== null) {
        const cityName = this.favorites[this.removeIndex].cityName;
        this.removeFavorite(cityName);
        this.removeIndex = null;
      }
      this.showModal = false;
    },
    cancelRemoveFavorite() {
      this.removeIndex = null;
      this.showModal = false;
    },
    closeLimitModal() {
      this.$store.dispatch("closeLimitModal");
    },
  },
};
</script>

<style scoped>
.weather-card-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 20px;
  position: relative;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  max-width: 150px;
  margin: 0 auto;
}
</style>
