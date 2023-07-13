import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      cars: [
        {
          carName : "Ford Fiesta",
          carColour : "Silver",
          carSku: "ffsilver",
        },
        {
          carName : "BMW M140",
          carColour : "Black",
          carSku: "bmblack",
        },
      ]
    }
  },
  mutations: {
    setCars(state, payload){
      state.cars = payload
    }
  }
});

export default store;