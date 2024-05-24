import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Admin from "@/pages/admin/Admin.vue";
import HelloWorld from "@/pages/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "home", component: () => import("@/pages/admin/Home.vue") },
    ],
  },
  {
    path: "/lavor",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
