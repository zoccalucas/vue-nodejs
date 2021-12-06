import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [],
    photos: [],
    friends: [],
    title: "Photos",
    api: [],
  },
  mutations: {
    set_api(state, payload) {
      state.api = payload;
    },
  },
  actions: {
    fetchPhotos() {
      axios
        .get("https://thatcopy.pw/catapi/rest/")
        .then((res) => {
          const payload = res.data;
          this.commit("set_api", payload);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase();
    },
    getImgUrl(state){
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + state.cards.image + ".png")
    }
  },
});
