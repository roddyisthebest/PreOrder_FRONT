<template>
  <div>
    <div class="storeBackground">
      <div class="storeNavigationColumn">
        <div class="storeNavigationItems">
          <button class="darkButton" @click="goBack">
            <span class="material-icons darkButtonText backIcon"
              >arrow_back</span
            >
          </button>
        </div>
        <div class="storeNavigationItems">
          <button class="darkButton">
            <span class="material-icons darkButtonText backIcon"
              >favorite_outline</span
            >
          </button>
        </div>
      </div>
    </div>
    <div class="storeContents">
      <StoreInfo
        :status="'혼잡'"
        :introduce="`모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.
모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.`"
        :title="'오아시스'"
      />
      <Rating :isItmore="false" :idx="$route.params.idx" />
      <div class="container">
        <h3 class="header">Open hours</h3>
        <div class="column">
          <span class="text">Monday - Friday</span>
          <span class="text">8:00 - 18:00</span>
        </div>
      </div>
      <div class="container">
        <h3 class="header">Address detail</h3>
        <div class="row">
          <div class="center">
            <span class="dot" :style="{ margin: '0 20px 0 0' }"></span>
            <span class="text">전화번호: 052-665-9587</span>
          </div>
          <div class="center">
            <span class="dot" :style="{ margin: '0 20px 0 0' }"></span>
            <span class="text"
              >주소: 대구 동구 신서동 아름다운 나날 3단지 306-1402</span
            >
          </div>
          <vue-daum-map
            :appKey="appKey"
            :center.sync="center"
            :level.sync="level"
            :mapTypeId="mapTypeId"
            :libraries="libraries"
            style="width: 100%; height: 400px; border-radius: 20px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import StoreInfo from '~/components/util/StoreInfo.vue';
import FoodSale from '~/components/util/FoodSale.vue';
import Rating from '~/components/default/Rating.vue';
import VueDaumMap from 'vue-daum-map';

export default defineComponent({
  setup() {
    return {
      appKey: '397a1649388899b74fe012e8d0138228',
      center: { lat: 35.8666799, lng: 128.7315022 },
      level: 2,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: [],
      map: null,
      daum: null,
    };
  },
  components: { StoreInfo, FoodSale, Rating, VueDaumMap },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<style scoped>
.storeBackground {
  height: 500px;
  width: 100%;
  background-image: url('https://mblogthumb-phinf.pstatic.net/20161001_180/lyl0408_1475302048766jXram_JPEG/DSC_0321.jpg?type=w2');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 50px;
}
.storeNavigationColumn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.storeNavigationItems {
  display: flex;
  gap: 0 20px;
}
.darkButtonText {
  font-size: 50px;
  color: white;
}

.storeContents {
  padding: 0 50px;
  width: 100%;
  transform: translateY(-160px);
}

.storeFilterWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;
}
.storeFilterText {
  font-size: 45px;
  color: #828282;
  font-weight: 400;
}

.filterWrapper {
  display: flex;
  align-items: center;
  gap: 0 10px;
}
.filterIcon {
  font-size: 45px;
  color: #42b883;
  font-weight: 400;
}

#select {
  border: 1px solid #999;
  font-family: inherit;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 70px 30px;
}

.container {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 35px 0;
  background-color: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  margin: 40px 0;
  border: 1px solid;
  border-color: #f3f3f3;
}

.header {
  font-size: 50px;
  font-weight: 700;
  margin: 0;
}
.column {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
}

.text {
  font-size: 35px;
  font-weight: 400;
  color: #828282;
}

.center {
  display: flex;
  align-items: center;
}
</style>
