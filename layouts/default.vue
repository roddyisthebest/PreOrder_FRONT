<template>
  <div id="default">
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import Navbar from '~/components/default/Navbar.vue';

export default defineComponent({
  middleware: ['authenticate'],
  components: {
    Navbar,
  },
  setup() {
    const testData = ref<string>('hello');
    const getData = computed(() => testData.value.length);
    return { testData, getData };
  },
});
</script>

<style scoped></style>
