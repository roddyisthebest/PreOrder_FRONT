<template>
  <div id="container">
    <div id="left" class="align-center">
      <button class="buttonPure" @click="goBack">
        <span class="material-icons iconSize">arrow_back</span>
      </button>
    </div>
    <div id="center" class="align-center">
      <span id="currentPathText"> {{ title }}</span>
    </div>
    <div id="right" class="align-center">
      <slot name="rightMenu"></slot>
      <!-- <button class="buttonPure white">
        <span id="alarmAmount">5</span>
        <span class="material-icons iconSize">notifications_none</span>
      </button>
      <span id="buttonBlock"></span>
      <button class="buttonPure white">
        <span class="material-icons iconSize">menu</span>
      </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: String,
  },
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

#currentPathText {
  color: black;
  font-size: 50px;
  font-weight: 600;
}

.iconSize {
  font-size: 60px;
}
</style>
