import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      jwtSet: localStorage.getItem("jwt") ? true : false,
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
    },
    setIsJwt(state, payload){
      state.jwtSet = payload;
    }
  },
  getters: {
      getCarsData(state){
          return state.cars;
      },
      isJwtSet(state){
        return state.jwtSet;
      }
  }
});

export default store;