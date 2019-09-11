import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload
    },
    setActiveCar(state, payload) {
      state.activeCar = payload
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await api.get('cars')
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/cars/${payload.carId}`)
        commit('setActiveCar', res.data.data)

      } catch (error) {
        console.error(error)

      }
    },
    async addCar({ dispatch }, payload) {
      try {
        let res = await api.post('/cars', payload)
        dispatch('getCars')
      } catch (error) {
        console.error(error)

      }
    },
    async delortCar({ dispatch }, payload) {
      try {
        let res = await api.delete('/cars/' + payload)
        dispatch('getCars')
        //NOTE this is coming from the import statement at the top
        router.push({ name: 'cars' })
      } catch (error) {
        console.error(error)
      }
    }

  }
})
