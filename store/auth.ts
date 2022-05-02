import { ActionContext } from 'vuex';

interface State {
  asscessToken: string;
}

export const state = () => ({
  asscessToken: null,
});

export const mutations = {
  addAsscessToken(state: State, payload: string) {
    state.asscessToken = payload;
  },
};

// export const actions = {
//   add({ commit }: ActionContext<State, State>, payload: any) {
//     commit('addMainPost', payload);
//   },
// };
