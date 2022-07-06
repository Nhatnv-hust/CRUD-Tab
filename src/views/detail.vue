<template>
  <div id="app">
    <div class="detail">
      <div class="detailform">
        <label>UserId</label>
        <input type="text" v-model="datas.userId" readonly/>
      </div>
      <div class="detailform">
        <label>Title</label>
        <input type="text" v-model="datas.title" readonly/>
      </div>
      <div class="detailform">
        <label>Body</label>
        <input type="text" v-model="datas.body" readonly/>
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'home' }">
        <button class="btn btn-back">Back</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: " detail-views",
  data() {
    return {
      datas: [],
    };
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      .then((response) => {
        this.datas = response.data;
        console.log(response);
      });
  },
  computed: {
    ...mapState({
      datas: (state) => state.datas,
    }),
  },
};
</script>
<style scoped>
.detail {
  width: 85%;
  margin: 15px auto;
  padding: 24px;
  text-align: left;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  padding: 24px;
}
.detailform {
  display: flex;
  justify-content: space-between;
  margin: 24px;
}
label {
  color: #000;
  font-size: 16px;
  display: block;
  margin: 8px 0;
}
input {
  color: #586068;
  font-size: 16px;
  width: 90%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
.btn {
  border: unset;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.btn-back {
  background: #696969;
}
.btn-upda {
  background-color: #1e68cf;
}
</style>