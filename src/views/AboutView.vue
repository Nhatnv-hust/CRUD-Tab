<template>
  <div class="about">
    <h3>SET POST</h3>
    <label>UserID</label>
    <input
      type="text"
      id="userId"
      v-model="datas.userId"
      @blur="validateUseId()"
      @input="update('userId', $event)"
      v-bind:class="{ 'is-invalid': errors.userId }"
    />
    <p class="message">{{ errors.userId }}</p>
    <label>Title</label>
    <input
      type="text"
      id="Title"
      v-model="datas.title"
      @blur="validateTitle()"
       @input="update('title', $event)"
      v-bind:class="{ 'is-invalid': errors.title }"
    />
    <p class="message">{{ errors.title }}</p>
    <label>Body</label>
    <input
      type="text"
      id="Body"
      v-model="datas.body"
      @blur="validateBody()"
       @input="update('body', $event)"
      v-bind:class="{ 'is-invalid': errors.body }"
    />
    <p class="message">{{ errors.body }}</p>

    <!-- Button -->
    <div class="formUpdate__action">
      <button
        @click="createPost"
        :class="{ disabled: isDisable }"
        class="btn-create"
      >
        Create
      </button>
      <router-link :to="{ name: 'home' }">
        <button class="btn-back">Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "about-vue",

  data() {
    return {
      datas: {
        title: "",
        body: "",
        userId: "",
      },
      errors: {
        title: "",
        body: "",
        userId: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.datas)
        .then((response) => {
          this.datas = response.data;
          console.log(response);
          this.$router.push({ name: "home" });
        });
    },
    validateUseId() {
      if (!this.datas.userId) {
        this.errors.userId = "The field is required!";
        return false;
      }
      return true;
    },
    validateTitle() {
      if (!this.datas.title) {
        this.errors.title = "The field is required!";
        return false;
      }
      return true;
    },
    validateBody() {
      if (!this.datas.body) {
        this.errors.body = "The field is required!";
        return false;
      }
      return true;
    },
    update(attribute) {
      if (this.errors[attribute]) {
        this.errors[attribute] = "";
      }
    },
    
  },
  computed: {
    isDisable() {
      return !!this.datas.title && !!this.datas.body && !!this.datas.userId
        ? false
        : true;
    },
  },
  created() {},
};
</script>

<style scoped >
.about {
  width: 80%;
  margin: 15px auto;
  border: 1px solid black;
  padding: 24px;
  text-align: left;
}
.about input.is-invalid {
  border-color: #dc3545;
}
.message {
  color: #dc3545;
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
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}

input:focus {
  outline: 3px solid #c2d9fb;
  box-shadow: unset;
  border: 1px solid transparent;
}
.formUpdate__action {
  margin-top: 8px;
}
.formUpdate__action button {
  padding: 8px 16px;
  margin-right: 24px;
  border-radius: 2px;
}
.btn-back {
  background: red;
}

.btn-create {
  background: green;
}
</style>