import Vue from "vue";
import VueRouter from "vue-router";
import StarWars from "../views/StarWars.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: StarWars,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
