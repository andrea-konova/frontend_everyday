import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    country: []
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    },
    SET_COUNTRY_TO_STATE: (state, country) => {
      state.country = country;
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
    },
    GET_COUNTRY_FROM_API({commit}, name) {
      // this.country = [];
      return axios(`https://restcountries.com/v3.1/name/${name}`, {
        method: 'GET'
      })
        .then((country) => {
          commit('SET_COUNTRY_TO_STATE', country.data[0]);
          return country;
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
    },
    COUNTRY(state) {
      return state.country;
    }
  }
})
