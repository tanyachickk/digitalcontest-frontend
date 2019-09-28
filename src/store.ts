import Vue from 'vue';
import Vuex from 'vuex';

import { createPoll, getPolls, deletePoll } from '@/api/poll';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    polls: {},
  },
  getters: {
    pollsList: (state) => Object.values(state.polls),
  },
  mutations: {
    createPoll(state: any, data: any) {
      state.polls[data.newPoll.id] = data.newPoll;
    },
    deletePoll(state: any, id: string) {
      delete state.polls[id];
      state.polls = { ...state.polls };
    },
    addPolls(state: any, data: any) {
      const polls = [...data.polls];
      data.questions.forEach((q) => {
        const poll = polls.find((p) => p.id === q.pollId);
        if (poll) {
          if (!poll.questions) {
            poll.questions = [];
          }
          poll.questions.push(q);
        }
      });
      state.polls = {};
      polls.forEach((poll) => {
        state.polls[poll.id] = poll;
      });
    },
  },
  actions: {
    async getData({ dispatch }) {
      dispatch('getPolls');
    },
    async createPoll({ commit }, data) {
      const result = await createPoll(data);
      commit('createPoll', result);
    },
    async getPolls({ commit }) {
      const result = await getPolls();
      commit('addPolls', result);
    },
    async deletePoll({ commit }, id) {
      deletePoll(id);
      commit('deletePoll', id);
    },
  },
});
