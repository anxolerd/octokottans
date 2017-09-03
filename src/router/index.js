import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import User from '@/components/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/:username',
      name: 'User',
      component: User,
      props: true,
    },
  ],
  mode: 'history',
});
