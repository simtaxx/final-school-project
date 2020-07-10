import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Homepage",
    component: () => import("@/views/HomePage/Homepage.vue")
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("@/views/Courses.vue")
  },
  {
    path: "/course/:id",
    name: "Course",
    component: () => import("@/views/Course/Course.vue")
  },
  {
    path: "/quizz/:id",
    name: "Quizz",
    component: () => import("@/views/Quizz/Quizz.vue")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue"),
    meta: { isDisconected: true }
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
    meta: { isDisconected: true }
  },
  {
    path: "/profil",
    name: "Account",
    component: () => import("@/views/Account/Account.vue"),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 30 }
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(localStorage.getItem("userLog"))
  if (to.meta.requiresAuth) {
    if (authUser === null && to.path !== "/sign-up") {
      next("/sign-up")
    } else next()
  } else if (to.meta.isDisconected) {
    if (authUser !== null && to.path !== "/profil") {
      next("/profil")
    } else next()
  } else next()
})

export default router
