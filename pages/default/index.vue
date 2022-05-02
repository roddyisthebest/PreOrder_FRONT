<template>
  <div>hello asas{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { getMyInfo } from '~/api/user';

export default defineComponent({
  async asyncData({ store, $axios }) {
    const { data } = await $axios.get('/user');

    return {
      data,
    };
  },
});
</script>
