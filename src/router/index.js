import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Homepage",
    component: () => import("@/views/Homepage.vue")
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
    path: "/inscription",
    name: "Inscription",
    component: () => import("@/views/Inscription.vue")
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: () => import("@/views/Connexion.vue")
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
