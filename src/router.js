import { createWebHistory, createRouter } from "vue-router";
import Tools from "./tools";
import ToolComponent from "./components/Tool.vue";
import Home from "./components/Home.vue";

const tools = Tools();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...tools.map((t) => {
    return {
      path: `/utils/${t.name}`,
      name: t.name,
      meta: { tool: t },
      component: ToolComponent,
    };
  }),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
