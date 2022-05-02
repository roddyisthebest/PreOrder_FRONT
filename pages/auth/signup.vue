<template>
  <div id="container">
    <button id="circleButton" @click="goBack">
      <span class="material-icons size">arrow_back</span>
    </button>
    <h1 id="headerTitle">가입</h1>
    <div id="inputsWrapper">
      <div class="inputWrapper">
        <label for="email" class="label">이메일</label>
        <div id="inputColumn">
          <input
            type="text"
            id="email"
            class="input"
            placeholder="아이디 부분입니다."
            :style="{ width: '35%' }"
            v-model="id"
          />
          <span id="middleEmail">@</span>
          <div id="searchContainer" :style="{ width: '50%' }">
            <input
              v-if="searchMode"
              type="text"
              class="input searchUniv"
              placeholder="학교를 입력해주세요."
              v-model="univKeyword"
            />
            <div class="input" v-else>
              {{ schoolInfo.domain }}
              <button id="deleteKeywordBtn" @click="resetDomain">
                <span
                  class="material-icons"
                  :style="{ fontSize: 15, color: 'gray' }"
                  >clear</span
                >
              </button>
            </div>
            <ul id="searchRes" v-if="searchMode">
              <li
                v-for="item in searchUniv(univKeyword)"
                :key="item.idx"
                class="searchItem"
                @click="setDomain(item.domain, item.idx)"
              >
                <div class="searchItemLeft">
                  <div id="univLogoWrapper">
                    <img
                      id="univLogo"
                      src="https://mblogthumb-phinf.pstatic.net/20161004_182/by267_1475545735828gzWay_JPEG/%BC%AD%BF%EF%B4%EB%C7%D0%B1%B3%B7%CE%B0%ED-01.jpg?type=w800"
                    />
                  </div>
                </div>
                <div class="searchItemRight">
                  <span id="univNameText">{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="inputWrapper">
        <label for="nickname" class="label">닉네임</label>
        <input
          type="text"
          id="nickname"
          class="input"
          placeholder="닉네임을 입력해주새요."
          v-model="nickname"
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
      <div class="inputWrapper">
        <label for="passwordCheck" class="label">비밀번호 확인</label>
        <input
          type="password"
          id="passwordCheck"
          class="input"
          placeholder="위의 비밀번호와 동일하게 입력해주새요."
          v-model="passwordCheck"
        />
      </div>
    </div>
    <button
      id="button"
      :disabled="!check"
      :style="{ opacity: check ? '1' : '0.3' }"
      @click="register"
    >
      <span class="buttonText" :style="{ color: 'white' }">가입하기</span>
    </button>
    <div id="navigate">
      <span id="navigateText">계정이 있으신가요?</span>
      <span id="navigateLink"
        ><nuxt-link to="/auth/signin">로그인하기</nuxt-link></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import { schoolListType } from '~/types/asset';

export default defineComponent({
  async asyncData({ $axios }) {
    try {
      const { data }: { data: schoolListType[] } = await $axios.get(
        '/user/schools'
      );
      return { schoolList: data };
    } catch (e) {
      console.log(e);
    }
  },
  setup() {
    const searchMode = ref(true);
    const schoolInfo = ref({ domain: '', idx: 0 });
    const schoolList = reactive<schoolListType[]>([]);
    // const univData = reactive([
    //   {
    //     name: '서울대학교',
    //     idx: 0,
    //     url: 'https://mblogthumb-phinf.pstatic.net/20161004_182/by267_1475545735828gzWay_JPEG/%BC%AD%BF%EF%B4%EB%C7%D0%B1%B3%B7%CE%B0%ED-01.jpg?type=w800',
    //     email: 'snu.ac.kr',
    //   },
    //   {
    //     name: '경기대학교',
    //     idx: 1,
    //     url: 'data:image/png;base64,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',
    //     email: 'kyonggi.ac.kr',
    //   },
    //   {
    //     name: '한양대학교',
    //     idx: 2,
    //     url: 'https://www.hanyang.ac.kr/html-repositories/images/custom/introduction/img_hy0104_02_0102.png',
    //     email: 'hanyang.ac.kr',
    //   },
    //   {
    //     name: '성균관대학교',
    //     idx: 3,
    //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_Cqi9lZXnvuAJ8yEnj0-ZfbWGfpZVymbT1lMORmNZPkl6T3OGiAGyo66qV_NNpl32oY&usqp=CAU',
    //     email: 'skku.ac.kr',
    //   },
    // ]);
    const univKeyword = ref('');
    const id = ref('');
    const password = ref('');
    const passwordCheck = ref('');
    const nickname = ref('');

    return {
      univKeyword,
      searchMode,
      schoolInfo,
      schoolList,
      id,
      password,
      passwordCheck,
      nickname,
    };
  },

  methods: {
    goBack() {
      this.$router.back();
    },
    searchUniv(name: string) {
      if (name.length === 0) {
        return [];
      }
      return this.schoolList.filter((school) => school.name.includes(name));
    },
    setDomain(back: string, idx: number) {
      this.schoolInfo = {
        domain: back,
        idx,
      };
      this.searchMode = false;
    },
    resetDomain() {
      this.schoolInfo = { domain: '', idx: 0 };
      this.searchMode = true;
      this.univKeyword = '';
    },
    async register() {
      try {
        const body = {
          email: this.id + '@' + this.schoolInfo.domain,
          password: this.password,
          oauth: 'EMAIL',
          schoolIdx: this.schoolInfo.idx,
          nickname: this.nickname,
        };
        await this.$axios.post('/user', {
          body,
        });
        this.$store.commit(
          'user/addEmail',
          this.id + '@' + this.schoolInfo.domain
        );
        this.$router.push('/auth/verify');
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    check(): boolean {
      return (
        this.id.length !== 0 &&
        this.password.length !== 0 &&
        this.password === this.passwordCheck &&
        this.schoolInfo.domain.length !== 0 &&
        this.nickname.length !== 0
      );
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

#inputColumn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#middleEmail {
  font-size: 50px;
}

.searchUniv {
  padding-left: 20px;
}

#searchContainer {
  position: relative;
}

#searchRes {
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin: 0;
  padding: 0;
  max-height: 25.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-y: hidden;
}

.searchItem {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  font-size: 50px;
  border-bottom: 1px solid #dee2e6;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
}

.searchItemLeft {
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
}
.searchItemRight {
  flex: 2;
  align-items: center;
  justify-content: center;
  display: flex;
}

#univLogoWrapper {
  width: 80px;
  height: 80px;
  border: 1px solid;
  border-color: #ebebeb;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#univNameText {
  color: black;
  font-size: 40px;
  font-weight: 600;
}

#univLogo {
  width: 80%;
  height: 80%;
}

#deleteKeywordBtn {
  width: 45px;
  height: 45px;
  background-color: #ededed;
  border-radius: 15px;
  border: none;
  margin-left: 15px;
}

.size {
  font-size: 40px;
}
</style>
