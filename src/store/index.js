import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      datas: [],
    };
  },
  getters: {},
  actions: {
    async Getpost({ commit }) {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("Getpost", res.data);
      } catch (err) {
        console.error(err);
      }
    },
    async Deletepost({ commit }, data) {
      try {
        const res = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${data.id}`
        );
        commit("Deletepost", data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    async createPost({ commit }, datas) {
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts/",
          { datas }
        );
        console.log(res);
        commit("createPost", datas);
      } catch (err) {
        console.log(err);
      }
    },
    async updatePost({ commit }, datas) {
      try {
        const res = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${datas.id}`,
          { datas }
        );
        console.log(res);
        commit("updatePost", datas);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    Getpost(state, data) {
      state.datas = data;
    },
    Deletepost(state, data) {
      console.log("check data ", state.datas);
      console.log(state.datas.indexOf(data), 1);
      state.datas.splice(state.datas.indexOf(data), 1);
    },
    createPost(state, input) {
      state.datas = [...state.datas, input];
    },
    updatePost(state, data) {
      state.datas = data;
    },
  },
});

export default store;
