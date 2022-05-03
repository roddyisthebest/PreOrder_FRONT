<template>
  <div id="container">
    <div id="left" class="align-center">
      <button class="buttonPure" @click="goBack">
        <span class="material-icons iconSize">arrow_back</span>
      </button>
    </div>
    <div id="center" class="align-center">
      <span id="currentPathText"> 주문 내역 </span>
    </div>
    <div id="right" class="align-center">
      <button class="buttonPure white">
        <span id="alarmAmount">5</span>
        <span class="material-icons iconSize">notifications_none</span>
      </button>
      <span id="buttonBlock"></span>
      <button class="buttonPure white">
        <span class="material-icons iconSize">menu</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  methods: {
    goBack() {
      return this.$router.back();
    },
  },
});
</script>
<style scoped>
#container {
  position: sticky;
  background-color: white;
  top: 0;
  height: 130px;
  display: flex;
}
#left {
  flex: 1;
}
#right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
#center {
  flex: 2;
  justify-content: center;
}

.align-center {
  display: flex;
  align-items: center;
}

.iconSize {
  font-size: 60px;
}

#currentPathText {
  color: black;
  font-size: 50px;
  font-weight: 600;
}

#alarmAmount {
  width: 25px;
  height: 25px;
  background-color: black;
  border: 5px solid;
  border-color: white;
  border-radius: 20px;
  position: absolute;
  top: 0;
  right: 3px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
#buttonBlock {
  height: 35%;
  width: 3px;
  background-color: #00000053;
}
</style>
