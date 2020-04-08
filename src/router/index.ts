import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ControlPanel from "../views/control-panel/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "control-panel",
        component: ControlPanel
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
