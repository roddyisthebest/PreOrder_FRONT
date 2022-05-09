<template>
  <div id="container-image" :style="{ height: `${height}px` }">
    <button id="goBack" class="buttonPure" @click="goBack">
      <span class="material-icons icon">clear</span>
    </button>
    <div
      class="background"
      :style="{
        backgroundImage: `url(${url})`,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const height = ref(0);
    onMounted(() => {
      height.value = window.innerHeight;
    });
    return { height };
  },
  data() {
    return {
      url: '' as string,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  created() {
    this.$data.url = this.$route.query.url as string;
    console.log(this.$route);
  },
});
</script>

<style scoped>
#container-image {
  background-color: black;
  position: relative;
}

#goBack {
  position: absolute;
  top: 80px;
  left: 60px;
}

.icon {
  color: white;
  font-size: 75px;
}

.background {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
