<template>
  <div class="city-input">
    <input v-model="query" @input="onInput" placeholder="Введите город" />
    <transition name="fade">
      <ul v-if="cities.length" class="autocomplete-list">
        <li
          v-for="city in cities"
          :key="city.lat"
          @click="selectCity(city)"
          class="autocomplete-item"
        >
          {{ city.name }}, {{ city.country }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      cities: [],
    };
  },
  methods: {
    async onInput() {
      if (this.query.length > 2) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${this.query}&limit=5&appid=d4afeb7f2df1e4c2958dda920a7232b6`
          );
          const data = await response.json();
          this.cities = data.map((city) => ({
            name: city.name,
            country: city.country,
            lat: city.lat,
            lon: city.lon,
          }));
        } catch (error) {
          console.error("Ошибка при получении списка городов:", error);
        }
      } else {
        this.cities = [];
      }
    },
    selectCity(city) {
      this.query = `${city.name}, ${city.country}`;
      this.cities = [];
      this.$emit("selectCity", city);
    },
  },
};
</script>

<style scoped>
.city-input {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #42b983;
  border-radius: 4px;
  font-size: 16px;
}

.autocomplete-list {
  list-style-type: none;
  padding: 0;
  margin: 5px 0 0;
  border: 1px solid #ccc;
  background-color: white;
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.autocomplete-item {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-item:hover {
  background-color: #f0f0f0;
}
</style>
