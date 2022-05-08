import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import CustomHome from "../views/FullBackGroundImage.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
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
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "etude" */ "../views/LayoutTestView.vue"),
  },
  {
    path: "/portfolio/:id",
    component: () => import("../views/BeepboopView.vue"),
    props: (route) => ({ id: route.params.id }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
