<template>
  <div>
    <Navbar />
    <div id="home">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@vue/composition-api';
import Navbar from '~/components/home/Navbar.vue';

export default defineComponent({
  middleware: ['authenticate'],
  components: {
    Navbar,
  },
  setup() {
    const testData = ref<string>('hello');
    const height = ref(0);
    onMounted(() => {
      height.value = window.innerHeight;
      console.log(height.value);
    });

    const getData = computed(() => testData.value.length);
    return { testData, getData, height };
  },
});
</script>

<style scoped>
#home {
  padding-top: 80px;
}
</style>
