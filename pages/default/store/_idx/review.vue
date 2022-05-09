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
      <Rating :isItmore="true" />
      <div class="container">
        <div
          class="column"
          :style="{
            padding: '50px',
            borderBottom: '3px solid #f3f3f3',
          }"
        >
          <h3 class="header">CustomerFeedbacks</h3>
        </div>
        <div class="reviewsWrapper">
          <Review />
          <Review />
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
import Review from '~/components/default/Review.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { StoreInfo, FoodSale, Rating, Review },
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
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  margin: 40px 0;
  border: 1px solid;
  border-color: #f3f3f3;
}

.reviewsWrapper {
  display: flex;
  flex-direction: column;
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
