<template>
  <div id="app">
    <span v-for="(amountPage, index) in pageNumber" :key="index">
      <button class="btn-pagi" @click="handleAmountPage(amountPage)">
        {{ amountPage }}
      </button>
    </span>
    <br />
    <table>
      <tr>
        <th class="UserId">UserId</th>
        <th class="Id-th">Id</th>
        <th class="Title">Title</th>
        <th class="Body">Body</th>
        <th class="Action">Action</th>
      </tr>
      <tr v-for="data in postsOnPage" :key="data.id">
        <td>{{ data.userId }}</td>
        <td>{{ data.id }}</td>
        <td>{{ data.title }}</td>
        <td>{{ data.body }}</td>
        <slot name="btn">
          <div class="action">
            <router-link :to="{ name: 'detail', params: { id: data.id } }">
              <button class="btn btn-upda">Detail</button>
            </router-link>
            <div class="space"></div>
            <router-link :to="{ name: 'edit', params: { id: data.id } }">
              <button class="btn btn-upda">Edit</button>
            </router-link>
            <div class="space"></div>
            <button class="btn btn-dele" @click="showModal = true">
              Delete
            </button>
            <teleport to="body">
              <modaldelete
                :show="showModal"
                @close="comfirmDelete(data)"
                @cancerModal="backHome"
                :pendingDelete="pendingDelete"
              >
              </modaldelete>
            </teleport>
          </div>
        </slot>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Modaldelete from "./modal/Modaldelete.vue";
export default {
  name: "HomeView",
  components: {
    Modaldelete,
  },
  data() {
    return {
      showModal: false,
      amountPages: 10,
      currentPage: 1,
      postsOnPage: [],
    };
  },
  created() {
    this.$store.dispatch("Getpost");
    console.log("test created");
  },
  methods: {
    backHome() {
      this.showModal = false;
    },
    comfirmDelete(data) {
      this.$store.dispatch("Deletepost", data);
      this.showModal = false;
    },
    // mount Pagination
    handleAmountPage(value) {
      console.log("check value ", value);
      this.currentPage = value;
      this.postsOnPage = this.datas.slice(this.startPost, this.endPost);
      console.log("check postsOnPage", this.postsOnPage);
    },
  },
  computed: {
    ...mapState({
      datas: (state) => state.datas,
    }),
    startPost() {
      const startPost = (this.currentPage - 1) * this.amountPages;
      return startPost;
    },
    endPost() {
      const endPost = this.startPost + this.amountPages;
      return endPost;
    },
    postAmount() {
      let postAmount = this.datas.length;
      return postAmount;
    },
    pageNumber() {
      let pageNumber = this.postAmount / this.amountPages;
      return Math.ceil(pageNumber);
    },
  },
  watch: {
    datas: {
      immediate: true,
      handler() {
        this.handleAmountPage(this.currentPage);
      },
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: end;
}
#app td,
#app th {
  border: 1px solid #ddd;
  padding: 8px;
}

#app tr:nth-child(even) {
  background-color: #f2f2f2;
}

#app tr:hover {
  background-color: #ddd;
}

#app th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.btn {
  display: inline-block;
  border: unset;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
  text-decoration: none;
}
.btn-upda {
  background-color: #1e68cf;
}
.btn-dele {
  background-color: #dc3545;
}
.action {
  display: flex;
  justify-content: center;
  padding: 15%;
}
.space {
  width: 1px;
  background-color: black;
  height: 22px;
  float: center;
  border: 1px ridge silver;
  border-radius: 2px;
  margin: 0px 2px;
}
.btn-pagi {
  cursor: pointer;
  padding: 8px 24px;
  margin: 10px 4px 30px;
  border-radius: 6px;
  background-color: #f2f2f2;
}
.UserId {
  width: 5%;
}
.Id-th {
  width: 5%;
}
.Title {
  width: 30%;
}
.Body {
  width: 60%;
}
.Action {
  width: 20%;
}
</style>
