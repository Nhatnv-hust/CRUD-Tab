<template>
  <transition class="delete-modal" name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">Do you want delete this post ? </slot>
          </div>
          <div class="modal-footer">
            <div class="btn-modal">
              <button class="btn btn-ok" @click="$emit('close')">OK</button>
              <button class="btn btn-back" @click="$emit('cancerModal')">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: " Modal-delete",
  props: {
    show: Boolean,
    data: Object,
    pendingDelete: Function,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mingzat&display=swap");
.delete-modal {
  font-family: "Mingzat", sans-serif;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #FFFFE0;
  border-radius: 12px;
  border: 1px solid #B22222;
  transition: all 0.3s ease;
}
.modal-body {
  margin: 60px 0px;
  text-align: center;
  font-size: 20px;
  color: #545454;
}
.btn-modal {
  display: flex;
  justify-content: space-around;
}
.btn {
  border: unset;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #00bfff;
  color: #fff;
  padding: 12px 12px;
  border-radius: 4px;
  border: 1px solid green;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.btn:hover {
  transform: scale(1.2);
}
.btn-back {
  background-color: #6e7881;
}
.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>