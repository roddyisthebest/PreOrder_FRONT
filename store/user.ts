import { ActionContext } from 'vuex';

interface State {
  name: 'seong-yeon';
  email: '';
}

export const state = () => ({
  name: 'seong-yeon',
  email: '',
});

export const mutations = {
  addEmail(state: State, payload: any) {
    state.email = payload;
  },
};

// export const actions = {
//   add({ commit }: ActionContext<State, State>, payload: any) {
//     commit('addMainPost', payload);
//   },
// };
