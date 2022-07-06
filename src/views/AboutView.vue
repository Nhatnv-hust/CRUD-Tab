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
    <div class="formUpdate__action">
      <button
        @click="createPost"
        :class="{ disabled: isDisable }"
        class="btn btn-create"
      >
        Create
      </button>
      <router-link :to="{ name: 'home' }">
        <button class="btn btn-back">Back</button>
      </router-link>
    </div>
  </div>
</template>
<script>
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
      if (this.checkValidated()) {
        this.$store.dispatch("createPost", this.datas);
        this.$router.push({ name: "home" });
      }
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
    checkValidated() {
      if (
        !this.validateUseId() ||
        !this.validateTitle() ||
        !this.validateBody()
      ) {
        this.validateUseId();
        this.validateTitle();
        this.validateBody();
        return false;
      }
      return true;
    },
  },
  computed: {
    isDisable() {
      return !!this.datas.title && !!this.datas.body && !!this.datas.userId
        ? false
        : true;
    },
  },
};
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&display=swap');
.about {
 border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  padding: 24px;
  width: 70%;
  margin: 15px auto;
  text-align: left;
}
.about input.is-invalid {
  border-color: #dc3545;
}
.about h3 {
  margin-bottom: 30px;
  text-align: center;
}
.message {
  color: #dc3545;
}
label {
  color: #808080;
  font-size: 16px;
  display: block;
  margin: 16px 0;
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
p{
  font-size: 12px;
}
.formUpdate__action {
  margin-top: 8px;
}
.formUpdate__action button {
  padding: 8px 16px;
  margin-right: 24px;
  border-radius: 2px;
}
.btn {
  border: unset;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.btn-back {
  background: #696969;
}
.btn-create {
  background: green;
}
</style>