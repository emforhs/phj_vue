import VueRouter from 'vue-router'
import axios from 'axios'

const state = () => ({
  layout:[
    {"x":0,"y":0,"w":2,"h":10,"i":"0", static: false},
    {"x":2,"y":0,"w":2,"h":10,"i":"1", static: false},
    {"x":4,"y":0,"w":2,"h":10,"i":"2", static: false},
    {"x":6,"y":0,"w":2,"h":10,"i":"3", static: false}
  ]
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