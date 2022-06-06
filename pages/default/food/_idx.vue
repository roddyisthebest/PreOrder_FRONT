<template>
  <div :style="{ minHeight: `${height}px`, position: 'relative' }">
    <BackgroundNavbar
      :imageUrl="'https://newsimg.sedaily.com/2020/11/17/1ZAFYQN80J_1.jpg'"
    />
    <div id="container-food">
      <div id="titleSection">
        <div id="titleColumn">
          <div id="titleText">맛있는 햄버거 세트</div>
          <div id="titlePrice">
            <span class="material-icons titlePriceText">local_atm</span>
            <span class="titlePriceText">3000원</span>
          </div>
        </div>
        <div class="introduces">
          <span class="introduceText">
            {{ lotsInfo ? introduce.slice(0, 52) + '...' : introduce }}
          </span>
          <button
            class="introduceButton buttonPure"
            :style="lotsInfo ? { top: 50 } : { bottom: 50 }"
            @click="setLot"
          >
            <span class="material-icons introduceIcon">{{
              lotsInfo ? 'arrow_drop_down' : 'arrow_drop_up'
            }}</span>
          </button>
        </div>
      </div>
      <MenuSelect
        :title="'세트 사이드 메뉴 '"
        :selections="[
          { name: '할라피뇨 너겟', price: 5000, idx: 1 },
          { name: '치즈스틱(2조각)으로 변경', price: 2000, idx: 2 },
          { name: '어니언 치즈감자로 변경', price: 200, idx: 3 },
        ]"
        @setPrice="addPrice"
      />
      <MenuSelect
        :title="'세부설정'"
        :selections="[
          { name: '설정', price: 500, idx: 1 },
          { name: '설정', price: 500, idx: 2 },
          { name: '설정', price: 500, idx: 3 },
        ]"
        @setPrice="addPrice"
      />

      <div id="addComment">
        <span id="title">가게 사장님께 한마디</span>
        <div id="addCommentInputWrapper">
          <textarea
            type="text"
            id="addCommentInput"
            placeholder="한마디 부탁드립니다."
          />
        </div>
      </div>
    </div>
    <div id="bottomAddPrice">
      <div id="bottomAddPriceBtnWrapper">
        <button class="bottomAddPriceBtn" @click="addAmount(false)">
          <span class="bottomAddPriceText">-</span>
        </button>
        <span class="bottomAddPriceText">{{ amount }}</span>
        <button class="bottomAddPriceBtn" @click="addAmount(true)">
          <span class="bottomAddPriceText">+</span>
        </button>
      </div>
      <div id="bottomAddPriceColumn">
        <span id="bottomAddTitle">카트에 담기</span>
        <span id="dot"></span>
        <span id="bottomAddSubTitle">{{ price }}원</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BackgroundNavbar from '~/components/default/BackgroundNavbar.vue';
import MenuSelect from '~/components/default/MenuSelect.vue';

export default defineComponent({
  components: { BackgroundNavbar, MenuSelect },
  setup() {},
  data() {
    return {
      lotsInfo: true as boolean,
      introduce:
        '모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.',
      price: 10000 as number,
      height: 0 as number,
      amount: 1 as number,
    };
  },
  methods: {
    setLot() {
      this.lotsInfo = !this.lotsInfo;
    },
    addPrice(price: number) {
      this.price += price;
    },
    addAmount(isItAdd: boolean) {
      if (isItAdd) {
        this.price *= 2;
        this.amount += 1;
      } else if (!isItAdd && this.amount > 1) {
        this.price /= 2;
        this.amount -= 1;
      }
    },
  },
  beforeMount() {
    this.height = window.innerHeight;
  },
});
</script>

<style scoped>
#container-food {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  transform: translateY(-50px);
  background-color: white;
  box-shadow: 0px -40px 30px rgba(88, 88, 88, 0.52);
  padding: 0 50px 300px 50px;
}

#titleSection {
  padding: 50px 0;
  border-bottom: 1px solid #a29292;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

#titleColumn {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
#titleText {
  font-size: 55px;
  font-weight: 700;
  color: black;
}
#titlePrice {
  display: flex;
  gap: 0 15px;
  align-items: center;
}
.titlePriceText {
  font-size: 45px;
  font-weight: 400;
  color: black;
}
.introduces {
  position: relative;
  flex: 2;
}
.introduceText {
  color: #828282;
  font-size: 45px;
  font-weight: 300;
}

.introduceButton {
  position: absolute;
  right: 0px;
}

.introduceIcon {
  font-size: 50px;
  color: black;
}
#bottomAddPrice {
  height: 300px;
  background-color: rgba(66, 184, 131, 1);
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#bottomAddPriceBtnWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background-color: #26865b;
  width: 280px;
  height: 125px;
  border-radius: 20px;
}

.bottomAddPriceBtn {
  background-color: transparent;
  border: none;
}

.bottomAddPriceText {
  font-size: 55px;
  font-weight: 400;
  color: white;
}

#bottomAddPriceColumn {
  display: flex;
  gap: 0 25px;
  align-items: center;
}

#dot {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: white;
}

#bottomAddTitle {
  color: white;
  font-size: 50px;
  font-weight: 500;
}

#bottomAddSubTitle {
  color: white;
  font-size: 40px;
  font-weight: 400;
}

#addComment {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

#title {
  font-size: 47.5px;
  font-weight: 600;
  color: black;
}

#addCommentInputWrapper {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
  border: none;
  border-radius: 15px;
}
#addCommentInput {
  width: 90%;
  height: 75%;
  border: none;
  background-color: transparent;
  font-size: 35px;
  outline: none;
}
</style>
