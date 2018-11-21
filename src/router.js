import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import HomePage from "./views/HomePage.vue";
import MyBlog from "./views/MyBlog.vue";
import MyData from "./views/MyData.vue";
import AddBlog from "./views/AddBlog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
      redirect:'/HomePage',
      children:[
        {
          path: "/HomePage",
          name: "HomePage",
          component: HomePage
        },
        {
          path: "/MyBlog",
          name: "MyBlog",
          component: MyBlog
        },
        {
          path: "/MyData",
          name: "MyData",
          component: MyData
        },
        {
          path: "/AddBlog",
          name: "AddBlog",
          component: AddBlog
        },
      ]
    }
  ]
});
