import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    }
  },
  actions: {
    GET_COUNTRIES_FROM_API({commit}) {
      return axios('https://restcountries.com/v3.1/all', {
        method: 'GET'
      })
        .then((countries) => {
          commit('SET_COUNTRIES_TO_STATE', countries.data);
          return countries;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    }
  },
  getters: {
    COUNTRIES(state) {
      return state.countries;
    }
  }
})
