<template>
  <nuxt-link :to="`/default/food/${idx}`" class="Container">
    <div class="up">
      <div class="foodImage"></div>
    </div>
    <div class="down">
      <div :style="{ marginVertical: 10, display: 'flex' }">
        <span class="title">햄버거</span>
      </div>
      <div class="align-center">
        <div class="align-center info">
          <span class="material-icons size">local_atm</span>
          <span class="ml-5">15,000원</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    idx: Number,
  },
  setup() {},
});
</script>

<style scoped>
.Container {
  height: 640px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  flex: 1;
  border: none;
  background: none;
  width: 40%;
}
.up {
  flex: 4;
  width: 100%;
}
.down {
  flex: 1;
  width: 470px;
}

.foodImage {
  width: 100%;
  background-image: url('https://newsimg.sedaily.com/2020/11/17/1ZAFYQN80J_1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 30px;
  height: 100%;
}

.title {
  text-align: start;
  font-size: 50px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
}

.info {
  font-size: 40px;
  color: black;
  font-weight: 300;
}

.align-center {
  display: flex;
  align-items: center;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #c4c4c4;
  margin: 0 10px;
}

.ml-5 {
  margin-left: 10px;
}

.size {
  font-size: 50px;
}
</style>
