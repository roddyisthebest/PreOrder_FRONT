<template>
  <div id="container-orders" :style="{ minHeight: `${height}px` }">
    <Navbar :title="'주문 내역'">
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
    <div id="list">
      <OrderColumn></OrderColumn>
      <OrderColumn></OrderColumn>
      <OrderColumn></OrderColumn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Navbar from '~/components/default/Navbar.vue';
import FoodType from '~/components/util/FoodType.vue';
import OrderColumn from '~/components/default/OrderColumn.vue';
export default defineComponent({
  setup() {
    const height = ref(0);

    onMounted(() => {
      height.value = window.innerHeight;
    });
    return { height };
  },
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;
    return {
      data,
    };
  },
  components: { Navbar, FoodType, OrderColumn },
  layout: 'default',
});
</script>

<style scoped>
#container-orders {
  background-color: #f4f4f4;
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

#list {
  border-top: 45px solid;
  border-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  /* padding: 0 50px; */
}
</style>
