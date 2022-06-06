<template>
  <div class="storeBackground" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="storeNavigationColumn">
      <div class="storeNavigationItems">
        <button class="darkButton" @click="goBack">
          <span class="material-icons darkButtonText backIcon">arrow_back</span>
        </button>
      </div>
      <div class="storeNavigationItems">
        <slot name="rightNavigations"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    imageUrl: String,
  },
  methods: {
    goBack() {
      return this.$router.back();
    },
  },
});
</script>
<style scoped>
.storeBackground {
  height: 500px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 50px;
}

.storeNavigationColumn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.storeNavigationItems {
  display: flex;
  gap: 0 20px;
}
.darkButtonText {
  font-size: 50px;
  color: white;
}
</style>
