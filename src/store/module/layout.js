import VueRouter from 'vue-router'
import axios from 'axios'

const state = () => ({
  layout:[]
})

const getters = {
  layout: (state) => {
    return state.layout
  },
}

const actions = {
  addLayout({commit}, payload) {

  },
  updateLayout({commit}, payload) {

  },
  delLayout({commit}, payload) {
    
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}