import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomeLight",
    meta: {
      title: 'Home Light'
    },
    component: () =>
      import("../views/HomeLight.vue"),
  },
  {
    path: '*',
    name: NotFound,
    meta: {
      title: '404'
    },
    component: ()=> import("../views/NotFound.vue")
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router;