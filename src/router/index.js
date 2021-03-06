import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import articlePage from '../views/articlePage.vue';
import admin from '../views/admin/admin.vue';
import login from '../views/login.vue';
import addArticle from '../views/admin/addArticle.vue';
import editArticle from '../views/admin/editArticle.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/articlePage',
    name: 'articlePage',
    component: articlePage,
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
  },
  {
    path: '/addArticle',
    name: 'addArticle',
    component: addArticle,
  },
  {
    path: '/editArticle',
    name: 'editArticle',
    component: editArticle,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
