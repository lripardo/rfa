const state = {
    user: null
};

const getters = {};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    }
};

const actions = {
    setUser({commit}, config) {
        commit('SET_USER', config.user);
    }
};

export default {
    namespaced: true, state, getters, actions, mutations
};
