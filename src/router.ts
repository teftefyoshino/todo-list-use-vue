import topVue from "./pages/top.vue";
import profileVue from "./pages/profile.vue";
import { RouteRecordRaw, createMemoryHistory, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Top",
    component: () => Promise.resolve(topVue),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => Promise.resolve(profileVue),
  },
];

export const createVueRouter = () => {
  return createRouter({ history: createMemoryHistory(), routes });
};
