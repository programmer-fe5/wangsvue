import { Component } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    redirect: '/button',
    children: [
      {
        path: 'button',
        name: 'ButtonDocs',
        component: (): Promise<Component> =>
          import('./docs/button/ButtonDocs.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory((import.meta.env || process.env).BASE_URL),
  routes,
});

export default router;