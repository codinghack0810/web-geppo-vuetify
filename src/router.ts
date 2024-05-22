import { HelloWorld } from '@/components/HelloWorld.vue';
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import Admin from "@/components/Admin/Admin.vue";
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
    component: Admin,
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
