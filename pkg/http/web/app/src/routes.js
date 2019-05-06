import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@okta/okta-vue";

import Home from "./components/Home";
import Login from "./components/Login";
import TruxRepoDetails from "./components/TruxRepoDetails";

Vue.use(VueRouter);
// Calling Vue.use(Auth, ...) will inject an authClient
// object into our Vue instance which can be accessed by
// calling this.$auth anywhere inside our Vue instance.
Vue.use(Auth, {
  issuer: "https://dev-840446.okta.com/oauth2/default",
  client_id: "0oajv5m99Gs3OS1y5356",
  // redirect_uri: If we later change our app to run in production on a different URL, we’ll need to modify this value.
  redirect_uri: "http://localhost:8080/implicit/callback",
  scope: "openid profile email"
});

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Login },
    { path: "/me", component: Home, meta: { requiresAuth: true } },
    {
      name: "repo-details",
      path: "/repo/:id",
      component: TruxRepoDetails,
      meta: { requiresAuth: true }
    },
    { path: "/implicit/callback", component: Auth.handleCallback() }
  ]
});
