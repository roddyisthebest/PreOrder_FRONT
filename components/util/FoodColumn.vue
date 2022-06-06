<template>
  <div class="Container">
    <div class="up">
      <div class="foodImage"></div>
    </div>
    <div class="down">
      <h4 class="title">플랜비 - 버거</h4>
      <div class="align-center">
        <div class="align-center info">
          <span class="material-icons">today</span>
          <span class="ml-5">2 days ago</span>
        </div>
        <div class="dot"></div>
        <div class="align-center info">
          <span class="material-icons">local_atm</span>
          <span class="ml-5">15,000원</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';


export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.Container {
  height: 406px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}
.up {
  flex: 4;
  width: 300px;
}
.down {
  flex: 1;
  width: 300px;
}

.foodImage {
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1618643861505-485accf7a845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 30px;
  height: 100%;
}

.title {
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin: 0 0 15px 0;
}

.info {
  font-size: 20px;
  color: black;
  font-weight: 300;
}

.infoWrapper {
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
</style>
