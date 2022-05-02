import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import CustomHome from "../views/FullBackGroundImage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CustomHome,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/PortfolioView.vue"),
  },
  {
    path: "/etude",
    name: "etude",
    component: () =>
      import(/* webpackChunkName: "etude" */ "../views/EtudeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
