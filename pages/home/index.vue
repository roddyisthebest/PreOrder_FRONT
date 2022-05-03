<template>
  <div>
    <div class="test"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  async asyncData({ store, $axios }) {
    const data = store.state.user.info;
    return {
      data,
    };
  },
  layout: 'home',
});
</script>

<style scoped>
.test {
  height: 10000px;
}
</style>
