<template>
  <div id="container-rating">
    <div class="moreTitleWrapper" v-if="isItmore">
      <span class="moreTitleText">오아시스</span>
    </div>
    <div class="defaultPadding">
      <div class="titleColumn">
        <span class="titleText">Ratings</span>
        <button class="buttonPure" v-if="!isItmore">
          <nuxt-link :to="`/default/store/${idx}/review`">
            <span class="titleDetail">View all review</span>
          </nuxt-link>
        </button>
      </div>
      <div class="contents">
        <ul class="ratingBarWrapper">
          <li class="ratingBar">
            <span class="ratingNumberText">5</span>
            <div class="ratingBarBack">
              <span class="ratingBarInstance" :style="{ width: '80%' }"></span>
            </div>
          </li>
          <li class="ratingBar">
            <span class="ratingNumberText">4</span>
            <div class="ratingBarBack">
              <span class="ratingBarInstance" :style="{ width: '12%' }"></span>
            </div>
          </li>
          <li class="ratingBar">
            <span class="ratingNumberText">3</span>
            <div class="ratingBarBack">
              <span class="ratingBarInstance" :style="{ width: '6%' }"></span>
            </div>
          </li>
          <li class="ratingBar">
            <span class="ratingNumberText">2</span>
            <div class="ratingBarBack">
              <span class="ratingBarInstance" :style="{ width: '1%' }"></span>
            </div>
          </li>
          <li class="ratingBar">
            <span class="ratingNumberText">1</span>
            <div class="ratingBarBack">
              <span class="ratingBarInstance" :style="{ width: '0.5%' }"></span>
            </div>
          </li>
        </ul>
        <div class="ratingScoreWrapper">
          <span class="ratingScoreText">4.5</span>
          <StarRating :readOnlyProps="true" :rating="4.5"></StarRating>
          <span class="ratingScoreSub">232개의 리뷰</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import StarRating from '~/components/util/StarRating.vue';
export default defineComponent({
  setup() {
    const star = ref(3);
    return {
      star,
    };
  },
  components: { StarRating },
  methods: {
    myRatingMethod(rating: number) {
      console.log('The selected rating is ' + rating);
    },
  },
  props: {
    isItmore: Boolean,
    idx: Number,
  },
});
</script>

<style scoped>
#container-rating {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  margin: 40px 0;
  border: 1px solid;
  border-color: #f3f3f3;
}

.defaultPadding {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

.moreTitleWrapper {
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid;
  border-color: #f3f3f3;
  padding: 25px 50px;
}

.moreTitleText {
  font-size: 50px;
  color: #828282;
  font-weight: 700;
}

.titleColumn {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.titleText {
  font-size: 50px;
  font-weight: 700;
}

.titleDetail {
  color: #42b883;
  font-size: 30px;
  font-weight: 400;
}

.contents {
  display: flex;
  gap: 0 50px;
}

.ratingBarWrapper {
  flex: 3;
  display: flex;
  gap: 20px 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.ratingBar {
  flex: 1;
  gap: 0 15px;
  display: flex;
  align-items: center;
  width: 100%;
}

.ratingNumberText {
  font-size: 27.5px;
  color: #828282;
  font-weight: 400;
}

.ratingBarBack {
  flex: 1;
  position: relative;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 30px;
  height: 20px;
}

.ratingBarInstance {
  position: absolute;
  background-color: #ffcc00;
  border-radius: 30px;
  height: 20px;
}

.ratingScoreWrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.ratingScoreText {
  font-size: 80px;
  font-weight: 700;
}

.ratingScoreSub {
  font-size: 30px;
  font-weight: 400;
  color: #828282;
}
</style>
