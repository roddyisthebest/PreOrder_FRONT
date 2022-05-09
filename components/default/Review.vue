<template>
  <div id="container-review">
    <div class="header">
      <span class="nameText">Wade Warren</span>
      <span class="dateText">2022년 03월 23일</span>
    </div>
    <div class="starWidth">
      <StarRating :readOnlyProps="true" :rating="4.5"></StarRating>
    </div>
    <div>
      <span class="contentText">
        Setting the stage for the dramatic and revealing first season finale are
        ...
      </span>
    </div>
    <Pictures
      :data="[
        'http://file3.instiz.net/data/file3/2020/10/17/0/d/e/0de007b5a46f9a46f3401690d9088361.jpg',
      ]"
    />
    <div class="foodTypeWrapper">
      <div class="foodType">
        <span class="foodTypeText">프리미엄 생생돈까스</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import StarRating from '~/components/util/StarRating.vue';
import Pictures from '~/components/util/Pictures.vue';

export default defineComponent({
  setup() {},
  components: {
    StarRating,
    Pictures,
  },
});
</script>

<style scoped>
#container-review {
  padding: 50px;
  border-bottom: 3px solid;
  border-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}

.header {
  display: flex;
  gap: 0 25px;
  align-items: flex-end;
}

.nameText {
  color: black;
  font-size: 45px;
  font-weight: 400;
}

.dateText {
  color: #828282;
  font-size: 25px;
  font-weight: 300;
}

.contentText {
  color: #828282;
  font-size: 35px;
  font-weight: 400;
}

.picturesWrapper {
  display: flex;
  gap: 0 20px;
}

.starWidth {
  width: 35%;
}

.foodTypeWrapper {
  display: flex;
  align-items: center;
}

.foodType {
  padding: 20px 40px;
  border-radius: 30px;
  background-color: #f3f3f3;
}

.foodTypeText {
  font-size: 30px;
  font-weight: 500;
}
</style>
