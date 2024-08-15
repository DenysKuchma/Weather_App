import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    showLimitModal: false,
    limitModalType: "",
  },
  mutations: {
    ADD_FAVORITE(state, city) {
      if (state.favorites.length < 5) {
        state.favorites.push(city);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        state.limitModalType = "favorites";
        state.showLimitModal = true;
      }
    },
    REMOVE_FAVORITE(state, cityName) {
      state.favorites = state.favorites.filter(
        (city) => city.cityName !== cityName
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    SET_FAVORITES(state, cities) {
      state.favorites = cities;
      localStorage.setItem("favorites", JSON.stringify(cities));
    },
    CLOSE_LIMIT_MODAL(state) {
      state.showLimitModal = false;
      state.limitModalType = "";
    },
    SHOW_LIMIT_MODAL(state, type) {
      state.limitModalType = type;
      state.showLimitModal = true;
    },
  },
  actions: {
    addFavorite({ commit }, city) {
      commit("ADD_FAVORITE", city);
    },
    removeFavorite({ commit }, cityName) {
      commit("REMOVE_FAVORITE", cityName);
    },
    setFavorites({ commit }, cities) {
      commit("SET_FAVORITES", cities);
    },
    closeLimitModal({ commit }) {
      commit("CLOSE_LIMIT_MODAL");
    },
    showLimitModal({ commit }, type) {
      commit("SHOW_LIMIT_MODAL", type);
    },
  },
  getters: {
    favorites: (state) => state.favorites,
    showLimitModal: (state) => state.showLimitModal,
    limitModalType: (state) => state.limitModalType,
  },
});
