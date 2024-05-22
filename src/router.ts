import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: HelloWorld,
  },
  {
    path: "/lavor",
    name: "Lavor",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
