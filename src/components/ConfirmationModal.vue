<template>
  <div class="modal-overlay">
    <div class="modal">
      <h3>Вы уверены, что хотите удалить {{ cityName }}?</h3>
      <div class="modal-buttons">
        <button @click="$emit('confirm')">Удалить</button>
        <button @click="$emit('cancel')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true,
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
}

.modal-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
