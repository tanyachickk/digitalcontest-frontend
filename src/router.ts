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
          children: [
            {
              path: 'new',
              component: () => import(/* webpackChunkName: "new-poll" */ './views/NewPoll.vue'),
              meta: {
                title: 'Создание нового опроса',
                icon: 'rate_review',
              },
            },
            {
              path: 'edit/:id',
              component: () => import(/* webpackChunkName: "edit-poll" */ './views/EditPoll.vue'),
              props: true,
              meta: {
                title: 'Редактирование опроса',
                icon: 'rate_review',
              },
            },
            {
              path: '',
              component: () => import(/* webpackChunkName: "poll-list" */ './views/PollsList.vue'),
              meta: {
                title: 'Опросы',
                icon: 'rate_review',
              },
            },
          ],
          meta: {
            title: 'Опросы',
            icon: 'rate_review',
          },
        },
        {
          path: '/statistic',
          component: () => import(/* webpackChunkName: "statistic" */ './views/Statistic.vue'),
          children: [
            {
              path: ':id',
              component: () => import(/* webpackChunkName: "edit-poll" */ './views/StatisticPoll.vue'),
              props: true,
              meta: {
                title: 'Результаты опроса',
                icon: 'rate_review',
              },
            },
            {
              path: '',
              component: () => import(/* webpackChunkName: "poll-list" */ './views/StatisticList.vue'),
              meta: {
                title: 'Статистика',
                icon: 'rate_review',
              },
            },
          ],
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
