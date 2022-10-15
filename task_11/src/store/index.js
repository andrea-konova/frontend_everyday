import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    CART(state) {
      return state.cart;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    }
  },
  modules: {
  }
})
