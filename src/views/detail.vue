<template>
  <div id="app">
    <table>
      <tr>
         <th>userId</th>
          <th>Title</th>
          <th>Body</th>
      </tr>
      <tr>
        <td >{{ datas.userId }}</td>
        <td>{{ datas.title }}</td>
        <td>{{ datas.body }}</td>
      </tr>
    </table>
    <div class="btn-back">
      <router-link :to="{ name: 'home' }">
        <button class="btn btn-upda">Back</button>
      </router-link>

    </div>
  </div>
</template>
<script>
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
};
</script>

<style scoped>

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
.btn-upda{
  background-color: #1e68cf;
}



</style>