import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {},
      jwtSet: localStorage.getItem("jwt") ? true : false,
      stats: {
        totalCars: 1,
        usersOnline: 2,
        adminsOnline: 3,
      },
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
    },
    setStats(state, payload){
      state.stats = payload;
    },
    setUser(state, payload){
      state.user = payload;
    }
  },
  getters: {
      getCarsData(state){
          return state.cars;
      },
      isJwtSet(state){
        return state.jwtSet;
      },
      getStats(state){
        return state.stats;
      },
      getUser(state){
        return state.user;
      }
  }
});

export default store;