<template>
  <div class="edit-form">
    <div class="edit-views">
      <label>UserID</label>
      <input type="text" id="userId" v-model="datas.userId" />
      <label>Title</label>
      <input type="text" id="Title" v-model="datas.title" />
      <label>Body</label>
      <input type="text" id="Body" v-model="datas.body" />
    </div>
    <div class="action">
      <router-link :to="{ name: 'home' }">
        <button class="btn btn-upda">Back</button>
      </router-link>
      <router-link :to="{ name: 'home' }">
        <button @click="updatePost" class="btn btn-upda">update</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: " edit-views",
  data() {
    return {
      datas: {
        title: "",
        body: "",
        userId: "",
      },
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
  methods: {
    updatePost() {
      axios
        .put("https://jsonplaceholder.typicode.com/posts", this.datas)
        .then((response) => {
          this.datas = response.data;
          console.log(response);
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>

<style scoped>
.edit-form {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  padding: 24px;
  width: 80%;
  margin: 15px auto;
}
.edit-views {
  text-align: left;
  display: flex;
  flex-direction: column;
}

label {
  color: #000;
  font-size: 16px;
  display: block;
  margin: 14px 0 12px 0;
}

input {
  color: #586068;
  font-size: 16px;
  width: 100%;
  height: 16px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}

input:focus {
  outline: 3px solid #c2d9fb;
  box-shadow: unset;
  border: 1px solid transparent;
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
.btn-upda {
  background-color: #1e68cf;
}
.action {
  margin-top: 32px;
  display: flex;
  justify-content: start;
  gap:8px
}
</style>