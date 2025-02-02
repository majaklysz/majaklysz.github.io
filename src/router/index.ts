import {createRouter, createWebHistory} from "vue-router";

import DefaultLayout from "../layout/DefaultLayout.vue";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: HomeView,
      },
      {
        path: "project/:id",
        name: "project",
        component: ProjectView,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
