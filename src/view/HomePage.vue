<template>
  <div>
    <LoaderElem :show="loading" />
    <h1>Главная</h1>
    <div class="input-toggle" @click="toggleInput">
      <span v-if="!showInput" class="plus-icon">+</span>
    </div>
    <div v-if="showInput" class="input-container">
      <CityAutocomplete @selectCity="onCitySelected" />
    </div>
    <div
      v-for="(weather, index) in weatherList"
      :key="index"
      class="weather-chart-container"
    >
      <WeatherCard
        :cityName="weather.cityName"
        :weatherData="weather.weatherData"
        :isFavorite="isFavorite(weather.cityName)"
        @toggleFavorite="toggleFavorite(weather)"
      />
      <TemperatureChart :temperatureData="weather.temperatureData" />
      <button class="delete-button" @click="confirmDelete(index)">
        Удалить
      </button>
    </div>

    <ConfirmationModal
      v-if="showModal"
      :title="'Подтверждение удаления'"
      :message="'Вы уверены, что хотите удалить этот город?'"
      @confirm="deleteBlock"
      @cancel="cancelDelete"
    />
    <LimitExceededModal
      v-if="showLimitModal"
      title="Лимит городов"
      message="Вы достигли максимального количества городов."
      @close="closeLimitModal"
    />
  </div>
</template>

<script>
import CityAutocomplete from "../components/CityAutocomplete.vue";
import WeatherCard from "../components/WeatherCard.vue";
import TemperatureChart from "../components/TemperatureChart.vue";
import ConfirmationModal from "../components/ConfirmationModal.vue";
import LimitExceededModal from "../components/LimitExceededModal.vue";
import LoaderElem from "../components/LoaderElem.vue";
import { getWeatherByCity, getWeatherByIP } from "../api/weatherApi";
import { getHourlyWeather } from "../api/chartApi";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CityAutocomplete,
    WeatherCard,
    TemperatureChart,
    ConfirmationModal,
    LimitExceededModal,
    LoaderElem,
  },
  data() {
    return {
      showInput: false,
      weatherList: [],
      showModal: false,
      deleteIndex: null,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["favorites", "showLimitModal"]),
  },
  methods: {
    ...mapActions([
      "addFavorite",
      "removeFavorite",
      "closeLimitModal",
      "showLimitModal",
    ]),
    async fetchWeather() {
      this.loading = true;
      try {
        const ipWeather = await getWeatherByIP();
        const ipTemperatureData = await getHourlyWeather(
          ipWeather.coord.lat,
          ipWeather.coord.lon
        );
        this.weatherList.push({
          cityName: "Ваше местоположение",
          weatherData: ipWeather,
          temperatureData: ipTemperatureData,
        });

        const favoriteCities = this.$store.getters.favorites;
        for (const city of favoriteCities) {
          if (city.name) {
            try {
              const weatherData = await getWeatherByCity(city.name);
              const temperatureData = await getHourlyWeather(
                weatherData.coord.lat,
                weatherData.coord.lon
              );
              this.weatherList.push({
                cityName: city.name,
                weatherData,
                temperatureData,
              });
            } catch (error) {
              console.error(
                `Ошибка при получении данных о погоде для города "${city.name}": ${error.message}`
              );
            }
          }
        }
      } catch (error) {
        console.error("Ошибка при загрузке погоды:", error);
      } finally {
        this.loading = false;
      }
    },
    async onCitySelected(city) {
      if (!city || !city.name) {
        console.error("Название города не указано или некорректно");
        return;
      }

      if (this.weatherList.length >= 5) {
        this.showLimitModal();
        return;
      }

      this.loading = true;
      try {
        const weatherData = await getWeatherByCity(city.name);
        const temperatureData = await getHourlyWeather(city.lat, city.lon);
        this.weatherList.push({
          cityName: city.name,
          weatherData,
          temperatureData,
        });
        this.showInput = false;
      } catch (error) {
        console.error("Ошибка при получении данных о погоде:", error);
      } finally {
        this.loading = false;
      }
    },
    toggleInput() {
      this.showInput = !this.showInput;
    },
    confirmDelete(index) {
      this.deleteIndex = index;
      this.showModal = true;
    },
    deleteBlock() {
      if (this.deleteIndex !== null) {
        this.weatherList.splice(this.deleteIndex, 1);
        this.deleteIndex = null;
        this.showModal = false;
      }
    },
    cancelDelete() {
      this.deleteIndex = null;
      this.showModal = false;
    },
    toggleFavorite(weather) {
      if (this.isFavorite(weather.cityName)) {
        this.removeFavorite(weather.cityName);
      } else {
        this.addFavorite(weather);
      }
    },
    isFavorite(cityName) {
      return this.favorites.some((fav) => fav.cityName === cityName);
    },
    closeLimitModal() {
      this.$store.dispatch("closeLimitModal");
    },
  },
  async mounted() {
    await this.fetchWeather();
  },
};
</script>

<style scoped>
#homePage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-toggle {
  cursor: pointer;
  margin-bottom: 10px;
  margin: 0 auto;
  text-align: center;
}

.plus-icon {
  font-size: 24px;
  background-color: #42b983;
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
}

.input-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  margin: 0 auto;
}

.weather-chart-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.weather-card {
  flex: 1 1 300px;
  margin: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.temperature-chart-container {
  flex: 1 1 600px;
  margin: 10px;
}

.delete-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
