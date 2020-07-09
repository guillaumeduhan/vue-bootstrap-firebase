import Vue from "vue";
import VueRouter from "vue-router";

import Friends from "@/views/Friends.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import User from "@/views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      hideNavbar: true,
    },
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Login",
    path: "/",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    name: "Profile",
    path: "/user",
    component: User,
  },
  {
    name: "Friends",
    path: "/friends",
    component: Friends,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
