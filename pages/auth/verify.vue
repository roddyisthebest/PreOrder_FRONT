<template>
  <div id="container">
    <button id="circleButton" @click="goBack">
      <span class="material-icons size">arrow_back</span>
    </button>
    <h1 id="headerTitle">이메일 인증</h1>
    <h5 id="subHeader">
      <strong>{{ $store.state.user.email }} </strong>로 인증링크를 보냈습니다.
    </h5>
    <p id="contents">
      받은 메일내의 인증링크를 눌러주세요. <br />그 이후에 서비스 이용이
      가능합니다.
    </p>
    <button id="button">
      <nuxt-link to="/auth/signin">
        <span class="buttonText" :style="{ color: 'white' }"
          >로그인하기</span
        ></nuxt-link
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const height = ref(0);
    return { height };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  layout: 'auth',
  asyncData({ query }) {
    return { email: query.email };
  },
});
</script>

<style scoped>
#subHeader {
  color: #828282;
  font-weight: 300;
  font-size: 30px;
  margin: 15px 0;
}

#contents {
  color: #666666;
  font-weight: 400;
  font-size: 45px;
  margin: 150px 0 80px 0;
}
.size {
  font-size: 40px;
}
</style>
