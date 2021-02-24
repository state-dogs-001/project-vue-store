import Vue from "vue";
import VueRouter from "vue-router";
import Market from "../views/Market.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Market",
    component: Market
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
