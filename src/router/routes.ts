import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProfilePage.vue') }],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/reset-password',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [{ path: '', component: () => import('pages/PwdResetPage.vue') }],
  },
  {
    path: '/signup',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [{ path: '', component: () => import('pages/SignupPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: { path: '/' },
  },
];

export default routes;
