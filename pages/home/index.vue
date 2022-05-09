<template>
  <div>
    <div id="bottomBorder">
      <div class="headerColumn">
        <h3 class="sectionHeader">가게</h3>
        <button class="buttonPure">
          <nuxt-link to="/default/stores">
            <span class="buttonText">더보기</span>
          </nuxt-link>
        </button>
      </div>
      <div class="slide" :style="{ margin: '0 0 35px 0' }">
        <FoodType :isChecked="true" :value="'전체'" />
        <FoodType :isChecked="false" :value="'일식'" />
        <FoodType :isChecked="false" :value="'중식'" />
        <FoodType :isChecked="false" :value="'퓨전'" />
        <FoodType :isChecked="false" :value="'퓨전'" />
      </div>
      <StoreColumn></StoreColumn>
      <StoreColumn></StoreColumn>
      <StoreColumn></StoreColumn>
    </div>
    <div id="noneBorder">
      <div class="headerColumn">
        <h3 class="sectionHeader">주문 내역</h3>
        <button class="buttonPure">
          <nuxt-link to="/default/orders">
            <span class="buttonText">더보기</span>
          </nuxt-link>
        </button>
      </div>
      <div class="slide">
        <FoodColumn></FoodColumn>
        <FoodColumn></FoodColumn>
        <FoodColumn></FoodColumn>
        <FoodColumn></FoodColumn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import StoreColumn from '~/components/util/StoreColumn.vue';
import FoodColumn from '~/components/util/FoodColumn.vue';
import FoodType from '~/components/util/FoodType.vue';
export default defineComponent({
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;

    const { data: restarant } = await $axios.get(
      `/school/${data.school.idx}/restaurants`
    );
    return {
      data,
      restarant,
    };
  },

  layout: 'home',
  components: {
    StoreColumn,
    FoodColumn,
    FoodType,
  },
});
</script>

<style scoped>
#bottomBorder {
  border-bottom: 50px solid;
  border-color: #f1f0f0;
  padding: 60px 50px;
}

#noneBorder {
  padding: 60px 50px;
}

.headerColumn {
  display: flex;
  justify-content: space-between;
}
.buttonText {
  font-size: 35px;
  color: #42b883;
  font-weight: 400;
}
</style>
