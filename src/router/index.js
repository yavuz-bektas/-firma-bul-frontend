import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dasboard from "../views/Dashboard.vue";
import Cookies from "js-cookie";
const jwt = require("jsonwebtoken");
import UserSettings from "../views/UserSettings"
import UsersList from "../views/UsersList"
import Factories from "../views/Factories"
import FactoriesEdit from "../views/FactoriesEdit"
import Details from "../views/Details"

/* import store from "../store/index";
 */
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dasboard,
  },
  {
    path: "/settings",
    name: "Settings",
    component: UserSettings,
  },
  {
    path: "/userlist",
    name: "Userlist",
    component: UsersList,
  },
  {
    path: "/factories",
    name: "Factories",
    component: Factories,
  },
  {
    path: "/factories/:id",
    name: "FactoriesEdit",
    component: FactoriesEdit,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

try {
  router.beforeEach((to, from, next) => {
    const token = Cookies.get("token");
    if (to.name === "Dashboard" && !token) next({ name: "Login" });
    else next();

    try {
      const tokenResult = jwt.verify(token, "secretkey");
      if (to.name === "Dashboard" && token && tokenResult.isActive === false)
        next({ name: "Login" });
      else next();
    } catch (e) {
      console.log(".");
    }
  });
} catch (e) {
  console.log(e);
}

export default router;
