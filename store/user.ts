import { ActionContext } from 'vuex';

interface info {
  idx: number;
  email: string;
  password: string | null;
  nickname: string;
  type: 'STUDENT' | string;
  oauth: 'EMAIL' | string;
  createdAt: Date;
  school: { idx: number; name: string; description: string; domain: string };
}

interface State {
  email: '';
  info: info;
}

export const state = () => ({
  email: '',
  info: {},
});

export const mutations = {
  addEmail(state: State, payload: any) {
    state.email = payload;
  },
  addInfo(state: State, payload: info) {
    state.info = payload;
  },
};

export const actions = {
  add({ commit }: ActionContext<State, State>, payload: any) {
    commit('addMainPost', payload);
  },
};
