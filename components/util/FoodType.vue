<template>
  <div>
    <button id="Container" :class="isChecked ? 'checked' : 'notChecked'">
      <span :class="isChecked ? 'buttonCheckedText' : 'buttonNotCheckedText'">{{
        value
      }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    isChecked: Boolean,
    value: String,
  },
});
</script>

<style scoped>
#Container {
  width: 180px;
  height: 90px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notChecked {
  border: 1px solid;
  border-color: #d6d4d4;
  background-color: white;
}
.checked {
  background-color: #b9f0d7;
  border: 1px solid;
  border-color: #b9f0d7;
}

.buttonNotCheckedText {
  color: black;
  font-size: 30px;
  font-weight: 300;
}
.buttonCheckedText {
  color: #42b883;
  font-size: 30px;
  font-weight: 600;
}
</style>
