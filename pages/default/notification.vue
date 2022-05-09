<template>
  <div>
    <Navbar :title="'알림'">
      <template v-slot:rightMenu>
        <button class="buttonPure white">
          <span class="material-icons iconSize">delete_outline</span>
        </button>
      </template>
    </Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Navbar from '~/components/default/Navbar.vue';

export default defineComponent({
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;
    return {
      data,
    };
  },
  components: { Navbar },
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
</style>
