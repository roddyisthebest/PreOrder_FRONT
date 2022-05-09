<template>
  <nuxt-link to="/default/store/2">
    <div id="containerStore">
      <div class="left">
        <div class="storeImage"></div>
      </div>
      <div class="right">
        <div class="storeInfoAnother">
          <span class="storeTitle">오아시스</span>
          <span class="storeSaleStatus ml-5" :style="{ color: '#5FE122' }"
            >영업중</span
          >
        </div>
        <div class="storeInfoMiddle">
          <span class="storeManual">당신이 원하는 메뉴는 다있다.</span>
        </div>
        <div class="storeInfoAnother flex-rows">
          <div class="storeTimeAndPeopleStatusWrapper">
            <span class="material-icons storeTimeAndPeopleStatus">people</span>
            <span class="storeTimeAndPeopleStatus ml-5">15</span>
          </div>
          <div class="dot"></div>
          <div class="storeTimeAndPeopleStatusWrapper">
            <span class="material-icons storeTimeAndPeopleStatus"
              >access_time</span
            >
            <span class="storeTimeAndPeopleStatus ml-5">15 minutes</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
#containerStore {
  margin-bottom: 30px;
  display: flex;
  gap: 0 20px;
  height: 207.5px;
}

.left {
  width: 207.5px;
}

.storeImage {
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1618643861505-485accf7a845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 30px;
  height: 100%;
}

.right {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.storeTitle {
  font-size: 50px;
  color: black;
  font-weight: 600;
}

.storeSaleStatus {
  font-size: 30px;
  font-weight: 400;
}

.storeManual {
  font-size: 30px;
  color: #828282;
  font-weight: 300;
}

.storeInfoMiddle {
  flex: 2;
}

.storeInfoAnother {
  flex: 1;
}

.storeTimeAndPeopleStatusWrapper {
  display: flex;
  align-items: center;
}

.storeTimeAndPeopleStatus {
  font-size: 30px;
  color: black;
  font-weight: 300;
}

.ml-5 {
  margin-left: 10px;
}

.flex-rows {
  flex-direction: row;
  display: flex;
  align-items: center;
}
</style>
