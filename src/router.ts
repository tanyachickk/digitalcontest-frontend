import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "main" */ './views/Main.vue'),
      children: [
        {
          path: '/polls',
          component: () => import(/* webpackChunkName: "polls" */ './views/Polls.vue'),
          meta: {
            title: 'Опросы',
            icon: 'rate_review',
          },
        },
        {
          path: '/statistic',
          component: () => import(/* webpackChunkName: "statistic" */ './views/Statistic.vue'),
          meta: {
            title: 'Статистика',
            icon: 'pie_chart',
          },
        },
        {
          path: '/settings',
          component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
          meta: {
            title: 'Настройки',
            icon: 'settings',
          },
        },
        {
          path: '*',
          redirect: '/polls',
        },
      ],
    },
  ],
});
