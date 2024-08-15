<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.modal-content button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #42b983;
  color: white;
}
</style>
