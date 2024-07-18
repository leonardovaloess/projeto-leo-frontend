import { createRouter, createWebHistory } from "vue-router";
import beforeEach from "./beforeEach";

import TheContainer from "../components/TheContainer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Cadastro",
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/recover-password/:hash",
      name: "recover-password",
      component: () => import("../views/auth/RecoverPassword.vue"),
    },

    {
      path: "/",
      component: TheContainer,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/home",
          name: "Logado",
          component: () => import("../views/logado/LogadoView.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(beforeEach);

export default router;
