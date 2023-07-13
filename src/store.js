import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      cars: []
    }
  },
  mutations: {
    setCars(state, payload){
      state.cars = payload
    }
  }
});

export default store;