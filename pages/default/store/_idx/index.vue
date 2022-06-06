<template>
  <div>
    <BackgroundNavbar
      :imageUrl="'https://mblogthumb-phinf.pstatic.net/20161001_180/lyl0408_1475302048766jXram_JPEG/DSC_0321.jpg?type=w2'"
    >
      <template v-slot:rightNavigations>
        <button class="darkButton">
          <span class="material-icons darkButtonText backIcon"
            >favorite_outline</span
          >
        </button>
        <button class="darkButton">
          <nuxt-link :to="`/default/store/2/detail`">
            <span class="material-icons darkButtonText backIcon"
              >info_outline</span
            >
          </nuxt-link>
        </button>
      </template>
    </BackgroundNavbar>
    <div class="storeContents">
      <StoreInfo
        :status="'혼잡'"
        :introduce="`모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.
모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.`"
        :title="'오아시스'"
      />
      <div class="storeFilterWrapper">
        <div class="filterWrapper">
          <select id="select" class="filterIcon">
            <option value="All">All</option>
          </select>
          <span class="material-icons filterIcon">arrow_drop_down</span>
        </div>

        <span class="storeFilterText"> 8 dishes</span>
      </div>
      <div class="menu">
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
        <FoodSale :idx="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import StoreInfo from '~/components/util/StoreInfo.vue';
import FoodSale from '~/components/util/FoodSale.vue';
import BackgroundNavbar from '~/components/default/BackgroundNavbar.vue';

export default defineComponent({
  data() {
    return { idx: '' };
  },
  components: { StoreInfo, FoodSale, BackgroundNavbar },
  methods: {
    goBack() {
      this.$router.back();
    },
    goDetailPage() {
      this.$router.push('/default/store/2/detail');
    },
  },
  created() {
    this.idx = this.$route.params.idx;
  },
});
</script>

<style scoped>
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
</style>
