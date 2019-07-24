import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppSelector from "./views/AppSelector.vue";
import Contact from "./views/Contact.vue";
import EarlySitesSelector from "./views/EarlySitesSelector.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/spa-landing",
      name: "single-page-applications",
      component: AppSelector,
    },
    {
      path: "/early-landing",
      name: "early-sites",
      component: EarlySitesSelector,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});
