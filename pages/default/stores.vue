<template>
  <div>
    <Navbar :title="'stores'">
      <template v-slot:rightMenu>
        <template>
          <button class="buttonPure white">
            <span id="alarmAmount">5</span>
            <span class="material-icons iconSize">notifications_none</span>
          </button>
          <span id="buttonBlock"></span>
          <button class="buttonPure white">
            <span class="material-icons iconSize">menu</span>
          </button>
        </template>
      </template>
    </Navbar>
    <div id="Container">
      <div class="slide" :style="{ margin: '35px 0 ', paddingBottom: '35px' }">
        <div>
          <div id="filterIconWrapper">
            <span class="material-icons filterIconSize">tune</span>
          </div>
        </div>
        <div>
          <div id="filterOptionWapper">
            <select id="select">
              <option value="최신순">최신순</option>
              <option value="평점순">평점순</option>
            </select>
            <span class="material-icons filterIconSize">arrow_drop_down</span>
          </div>
        </div>
        <FoodType :isChecked="true" :value="'전체'" />
        <FoodType :isChecked="false" :value="'일식'" />
        <FoodType :isChecked="false" :value="'중식'" />
        <FoodType :isChecked="false" :value="'퓨전'" />
        <FoodType :isChecked="false" :value="'퓨전'" />
        <FoodType :isChecked="false" :value="'퓨전'" />
      </div>
      <StoreColumn></StoreColumn>
      <StoreColumn></StoreColumn>
      <StoreColumn></StoreColumn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Navbar from '~/components/default/Navbar.vue';
import FoodType from '~/components/util/FoodType.vue';
import StoreColumn from '~/components/util/StoreColumn.vue';
export default defineComponent({
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;
    return {
      data,
    };
  },
  components: { Navbar, FoodType, StoreColumn },
  layout: 'default',
});
</script>

<style scoped>
.test {
  height: 10000px;
}

#alarmAmount {
  width: 25px;
  height: 25px;
  background-color: black;
  border: 5px solid;
  border-color: white;
  border-radius: 20px;
  position: absolute;
  top: 0;
  right: 3px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
#buttonBlock {
  height: 35%;
  width: 3px;
  background-color: #00000053;
}

#Container {
  border-top: 45px solid;
  border-color: #f4f4f4;
  padding: 0 50px;
}

#filterIconWrapper {
  height: 90px;
  width: 90px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #d6d4d4;
  background-color: white;
}

#filterOptionWapper {
  height: 90px;
  width: 180px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #d6d4d4;
  background-color: white;
}

#select {
  padding: 0.8em 0.5em;
  border: 1px solid #999;
  font-family: inherit;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  font-size: 30px;
}



.filterIconSize {
  font-size: 40px;
}
</style>
