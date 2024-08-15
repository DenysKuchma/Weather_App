import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../view/HomePage.vue";
import FavoritesPage from "../view/FavoritesPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
