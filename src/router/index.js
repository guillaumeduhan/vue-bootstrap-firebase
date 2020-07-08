import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    component: Login,
  },
  {
    path: "/user",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
