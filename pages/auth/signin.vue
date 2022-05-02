<template>
  <div id="container">
    <button id="circleButton" @click="goBack">
      <span class="material-icons size">arrow_back</span>
    </button>
    <h1 id="headerTitle">로그인</h1>
    <div id="inputsWrapper">
      <div class="inputWrapper">
        <label for="email" class="label">이메일</label>
        <input
          type="email"
          id="email"
          class="input"
          placeholder="이메일을 입력해주새요."
          v-model="id"
        />
      </div>
      <div class="inputWrapper">
        <label for="password" class="label">비밀번호</label>
        <input
          type="password"
          id="password"
          class="input"
          placeholder="비밀번호를 입력해주새요."
          v-model="password"
        />
      </div>
    </div>
    <button
      @click="login"
      id="button"
      :disabled="!check"
      :style="{ opacity: check ? '1' : '0.3' }"
    >
      <span class="buttonText" :style="{ color: 'white' }">가입하기</span>
    </button>
    <div id="navigate">
      <span id="navigateText">계정이 없으신가요?</span>
      <span id="navigateLink"
        ><nuxt-link to="/auth/signup">가입하기</nuxt-link></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import { signin } from '~/api/auth';
import * as Cookies from 'js-cookie';

export default defineComponent({
  setup() {
    const id = ref<string>('');
    const password = ref<string>('');
    const check = computed(
      () => id.value.length !== 0 && password.value.length !== 0
    );
    return { id, password, check };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    async login() {
      try {
        const body = { email: this.id, password: this.password };
        const { data } = await this.$axios.post('/user/authentication', {
          ...body,
        });
        this.$axios.setToken(data.accessToken, 'Bearer');
        this.$store.commit('auth/addAsscessToken', data.accessToken);
        this.$router.push('/default');
      } catch (e) {
        console.log(e);
      }
    },
  },
  layout: 'auth',
});
</script>

<style scoped>
#navigate {
  display: flex;
  align-items: center;
  padding: 50px 0;
  justify-content: space-evenly;
}

#navigateText {
  color: #828282;
  font-size: 30px;
  font-weight: 400;
}

#navigateLink {
  font-size: 40px;
  font-weight: 400;
  color: #0e7de3;
}
.size {
  font-size: 40px;
}
</style>
