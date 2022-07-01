<template>
 
    <div id="app">
      <table >
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>  
        <tr v-for="data in datas" :key="data.id">
          <td>{{ data.userId }}</td>
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.body }}</td>
          <slot name="btn">
            <div class="action" >
              <router-link :to="{ name: 'detail', params: { id: data.id } }">
                <button class="btn btn-upda">Detail</button>
              </router-link>
              <router-link :to="{ name: 'edit', params: { id: data.id } }">
                <button class="btn btn-upda">Edit</button>
              </router-link>
              <button class="btn btn-dele" @click="delData(data.id)">delete</button>
            </div>
          </slot>
        </tr>
      </table>
    </div>

</template>
<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      datas: [],
    };
  },
  components: {},
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.datas = response.data;
      console.log(response);
    });
  },
  methods: {
    delData(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },
  },
};
</script>

<style>
.btn {
  display: flex;
  justify-content: end;
}


#app td, #app th {
  border: 1px solid #ddd;
  padding: 8px;
}

#app tr:nth-child(even){background-color: #f2f2f2;}

#app tr:hover {background-color: #ddd;}

#app th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
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
.btn-upda{
  background-color: #1e68cf;
}
.btn-dele{
   background-color:#dc3545;
}
.action{
  display: flex;
  gap: 8px;
}
</style>
