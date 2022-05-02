<template>
  <div>
    <div>{{ testData }}</div>
    <div>{{ getData }}</div>
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  middleware: ['authenticate'],
  setup() {
    const testData = ref<string>('hello');
    const getData = computed(() => testData.value.length);
    return { testData, getData };
  },
});
</script>
