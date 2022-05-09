<template>
  <div id="container-order">
    <div class="menuColumn">
      <div class="menu">
        <span class="orderStatusText">04/05 (금)</span>
        <div class="dot"></div>
        <span class="orderStatusText">결제완료</span>
      </div>
      <div class="menu">
        <button class="button-order">
          <span class="buttonText">리뷰쓰기</span>
        </button>
        <button class="button-order">
          <nuxt-link to="/default/order/2">
            <span class="buttonText">주문상세</span>
          </nuxt-link>
        </button>
        <button class="buttonPure">
          <span class="material-icons buttonText">more_vert</span>
        </button>
      </div>
    </div>
    <div class="contentsColumn">
      <div class="left">
        <div class="foodImage"></div>
      </div>
      <div class="right">
        <button class="buttonPure storeButton">
          <nuxt-link to="/default/store/2">
            <span class="storeButtonText">오아시스</span>
            <span class="material-icons storeButtonText">arrow_right</span>
          </nuxt-link>
        </button>
        <span class="orderInfoText"> 맛있는 햄버거 1개 10000원 </span>
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
#container-order {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  border-bottom: 3px solid;
  border-color: #cdcaca;
  background-color: white;
}
.menuColumn {
  display: flex;
  justify-content: space-between;
}

.menu {
  display: flex;
  gap: 0 20px;
  align-items: center;
}

.orderStatusText {
  font-size: 40px;
  font-weight: 400;
  color: #828282ce;
}

.button-order {
  padding: 15px 20px;
  border: 1px solid;
  border-color: rgb(181, 178, 178);
  border-radius: 20px;
  background: none;
}
.buttonText {
  font-size: 20px;
  font-weight: 300;
}

.contentsColumn {
  display: flex;
  gap: 0 50px;
  height: 207px;
}

.left {
  flex: 1;
}

.right {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

.orderInfoText {
  font-size: 30px;
  font-weight: 400;
}

a {
  color: black;
  display: flex;
}
</style>
