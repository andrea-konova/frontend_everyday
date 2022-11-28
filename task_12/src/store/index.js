import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    countries: [],
    country: [],
    darkTheme: true,
    // countryName: ''
  },
  mutations: {
    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    },
    SET_COUNTRY_TO_STATE: (state, country) => {
      state.country = country;
    },
    SET_THEME: (state, data) => {
      state.darkTheme = data;
    },
    // SET_COUNTRY_NAME: (state, name) => {
    //   state.countryName = name;
    // }
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
    },
    GET_SEARCH_VALUE({commit}, value) {
      commit('SET_SEARCH_VALUE', value);
    }
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
    COUNTRIES(state) {
      return state.countries;
    },
    COUNTRY(state) {
      return state.country;
    },
    THEME(state) {
      return state.darkTheme;
    },
    // COUNTRY_NAME(state) {
    //   return state.countryName;
    // }
  }
})
