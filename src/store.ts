import Vue from 'vue';
import Vuex from 'vuex';

import { createPoll, getPolls, deletePoll } from '@/api/poll';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    polls: {},
    isLoading: false,
  },
  getters: {
    pollsList: (state) => Object.values(state.polls).sort((a, b) => Number(b.dateCreated) - Number(a.dateCreated)),
    getPollById: (state: any) => (id: string) => state.polls[id],
  },
  mutations: {
    createPoll(state: any, data: any) {
      state.polls[data.newPoll.id] = data.newPoll;
      state.polls = { ...state.polls };
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
    setLoading(state: any) {
      state.isLoading = true;
    },
    resetLoading(state: any) {
      state.isLoading = false;
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
      commit('setLoading');
      const result = await getPolls();
      commit('addPolls', result);
      commit('resetLoading');
    },
    async deletePoll({ commit }, id) {
      deletePoll(id);
      commit('deletePoll', id);
    },
  },
});
