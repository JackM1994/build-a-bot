import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robot';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
