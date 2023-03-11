import { createStore } from "vuex";

const user = JSON.parse(localStorage.getItem('user'));

const store = createStore({
  state: {
    user:user ? user : null
  },
  mutations:{
    loginSuccess(state,user){
      state.user=user
    }
  },
  actions:{
    login({commit},user){
      commit('loginSuccess', user)
    },
    logout() {
      localStorage.removeItem('user');
    }
  }
});

export default store;
