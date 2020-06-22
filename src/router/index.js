import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Homepage",
    component: () => import("@/views/Homepage.vue")
  },
  {
    path: "/introduction",
    name: "Introduction",
    component: () => import("@/views/Introduction.vue")
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("@/views/Courses.vue")
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("@/views/Course.vue")
  },
  {
    path: "/quizz",
    name: "Quizz",
    component: () => import("@/views/Quizz.vue")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/Account/Account.vue")
  },
  {
    path: "/Challenge",
    name: "Challenge",
    component: () => import("@/views/Challenge/Challenge.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
