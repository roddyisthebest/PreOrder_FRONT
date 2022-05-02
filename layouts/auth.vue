<template>
  <nuxt></nuxt>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const testData = ref<string>('hello');
    const getData = computed(() => testData.value.length);
    return { testData, getData };
  },
});
</script>
