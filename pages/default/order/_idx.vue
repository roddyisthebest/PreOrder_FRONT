<template>
  <div id="container-orders-background" :style="{ minHeight: `${height}px` }">
    <Navbar :title="'주문 상세'">
      <template v-slot:rightMenu>
        <template>
          <button class="buttonPure white">
            <span id="alarmAmount">5</span>
            <span class="material-icons iconSize">notifications_none</span>
          </button>
          <span id="buttonBlock"></span>
          <button class="buttonPure white">
            <span class="material-icons iconSize">menu</span>
          </button>
        </template>
      </template>
    </Navbar>
    <div id="container-orders">
      <div class="titleWrapper">
        <span class="titleOrderText"> Order #421321 </span>
        <div class="titleColumn">
          <button class="buttonPure storeButton">
            <nuxt-link
              to="/default/store/2"
              :style="{ display: 'flex', alignItems: 'center' }"
            >
              <span class="storeButtonText">오아시스</span>
              <span class="storeButtonText material-icons">arrow_right</span>
            </nuxt-link>
          </button>
          <span class="titleText">맛있는 햄버거 1개</span>
        </div>
        <div class="titleColumn" :style="{ alignItems: 'center' }">
          <div class="titleIconColumn">
            <span class="material-icons titleText" :style="{ color: '#5FE122' }"
              >check_circle_outline</span
            >
            <span class="titleText" :style="{ color: '#5FE122' }"
              >준비 및 수령 완료</span
            >
          </div>
          <div class="dot"></div>
          <div class="titleIconColumn">
            <span class="material-icons titleText" :style="{ color: '#C4C4C4' }"
              >event</span
            >
            <span class="titleText" :style="{ color: '#C4C4C4' }"
              >2022년 5월 8일 15:30</span
            >
          </div>
        </div>
      </div>
      <div class="contentsWrapper">
        <div class="contentsAboutMenu">
          <span class="contentsAboutText">맛있는 햄버거</span>
          <div class="contentsAboutSubWrapper">
            <div class="contentsAboutColumn">
              <div class="dot"></div>
              <span class="contentsAboutSubText"
                >1x 맛있는 햄버거 (7,000원)</span
              >
            </div>
            <div class="contentsAboutColumn">
              <div class="dot"></div>
              <span class="contentsAboutSubText"
                >1x 맛있는 햄버거 (7,000원)</span
              >
            </div>
          </div>
        </div>
        <div class="contentsAboutPay">
          <div class="payColumn">
            <span class="payText">총 결제금액</span>
            <span class="payText">10,000원</span>
          </div>
          <div class="payColumn">
            <span class="payText">결제 방법</span>
            <span class="payText">카카오 페이</span>
          </div>
        </div>
      </div>
      <div class="messageWrapper">
        <span class="messageTitleText">To. 가게 사장님</span>
        <span class="messageSubText">
          최대한 빨리 해주시고 가지 빼주세요. 저 못먹음
        </span>
      </div>
      <button class="deleteButton">
        <span class="deleteText">주문내역 삭제</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Navbar from '~/components/default/Navbar.vue';
import FoodType from '~/components/util/FoodType.vue';
import OrderColumn from '~/components/default/OrderColumn.vue';
export default defineComponent({
  setup() {
    const height = ref(0);

    onMounted(() => {
      height.value = window.innerHeight;
    });
    return { height };
  },
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;
    return {
      data,
    };
  },
  components: { Navbar, FoodType, OrderColumn },
  layout: 'default',
});
</script>

<style scoped>
#container-orders-background {
  background-color: #f4f4f4;
}

#container-orders {
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 45px 0;
}

.titleWrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px;
  background-color: white;
  border-bottom: 3px solid;
  border-color: #cdcaca;
}

.titleOrderText {
  font-size: 35px;
  font-weight: 600;
  color: rgba(130, 130, 130, 0.79);
}

.titleColumn {
  display: flex;
  gap: 0 20px;
  align-items: flex-end;
}

.titleText {
  font-size: 35px;
  font-weight: 400;
}

.titleIconColumn {
  display: flex;
  gap: 0 18px;
  align-items: center;
}

.storeButtonText {
  font-size: 60px;
  font-weight: 700;
  color: black;
}

.contentsWrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: 3px solid;
  border-color: #cdcaca;
}

.contentsAboutMenu {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  border-bottom: 3px solid;
  border-color: #f3f3f3;
}

.contentsAboutSubWrapper {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 5px 0;
}

.contentsAboutText {
  font-size: 55px;
  font-weight: 600;
}

.contentsAboutSubText {
  font-size: 35px;
  font-weight: 300;
  color: #9c9c9c;
}

.contentsAboutColumn {
  display: flex;
  gap: 0 20px;
  align-items: center;
}

.contentsAboutPay {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 35px 0;
}

.payColumn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payText {
  font-size: 50px;
  font-weight: 700;
}

.messageWrapper {
  display: flex;
  flex-direction: column;
  gap: 25px 0;
  background-color: white;
  border-bottom: 3px solid;
  border-color: #cdcaca;
  padding: 50px;
}

.messageTitleText {
  font-size: 45px;
  font-weight: 500;
}

.messageSubText {
  font-size: 35px;
  font-weight: 400;
  color: #9c9c9c;
}

.deleteButton {
  display: flex;
  background-color: white;
  border: none;
  border-bottom: 3px solid;
  border-color: #cdcaca;
  padding: 60px 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.deleteText {
  color: #ff3939;
  font-size: 35px;
  font-weight: 400;
}
</style>
