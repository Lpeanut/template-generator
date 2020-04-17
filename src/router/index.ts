import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ControlPanel from "../views/control-panel/index.vue";
import TestPage from '../views/test-page/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      // {
      //   path: "/",
      //   name: "control-panel",
      //   component: ControlPanel
      // },
      {
        path: "/test",
        name: "test_page",
        component: TestPage
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
