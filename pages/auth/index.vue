<template>
  <div id="container">
    <div id="backgroundPic" :style="{ height: `${height / 1.6}px` }">
      <div id="conetents">
        <h3 id="header">
          완벽한 하루를 위한<br />
          단 한번의 클릭
        </h3>
        <p id="sub">
          이제 수업시간에 허덕이면서 줄서서 기다리며 식당을 이용하지 말고
          예약하고 음식을 받아가세요.
        </p>
      </div>
    </div>
    <button id="button">
      <nuxt-link to="/auth/signup">
        <span class="buttonText" :style="{ color: 'white' }"
          >가입하기</span
        ></nuxt-link
      >
    </button>
    <button id="buttonNood">
      <nuxt-link to="/auth/signin">
        <span class="buttonText" :style="{ color: '#42b883' }">로그인</span>
      </nuxt-link>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const height = ref(0);
    onMounted(() => {
      height.value = window.innerHeight;
    });
    return { height };
  },
  layout: 'auth',
});
</script>

<style scoped>
#backgroundPic {
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1618643861505-485accf7a845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 40px;
}

#conetents {
  margin: 50px;
}
#header {
  color: white;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 10px;
}
#sub {
  color: rgba(255, 255, 255, 0.75);
  font-size: 37px;
  font-weight: 300;
}
</style>
