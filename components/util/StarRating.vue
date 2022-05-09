<template>
  <div id="container-starRating">
    <button
      class="buttonPure"
      v-for="idx in 5"
      :key="idx"
      @click="setScore(idx)"
      :disabled="readOnlyProps"
      :style="{ padding: '0px' }"
    >
      <span
        :class="
          ratings[idx - 1]
            ? 'material-icons starRating clicked'
            : 'material-icons starRating notClicked'
        "
        >{{
          ratings[idx - 1]
            ? computeDecimal(rating - (idx - 1))
              ? 'star_half'
              : 'star'
            : 'star_border'
        }}</span
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return { ratings: [false, false, false, false, false], readOnly: false };
  },
  props: {
    readOnlyProps: Boolean,
    rating: Number,
  },
  methods: {
    setScore(idx: number) {
      const newArray = [];
      for (let i = 0; i < 5; i++) {
        if (i < idx) {
          newArray.push(true);
        } else {
          newArray.push(false);
        }
      }
      this.ratings = newArray;
    },
    computeDecimal(value: number) {
      if (value > 0 && value < 1) {
        return true;
      }
      return false;
    },
  },
  created() {
    const idx = this.$props.rating;
    const newArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < (idx as number)) {
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    }
    this.ratings = newArray;
  },
});
</script>

<style scoped>
#container-starRating {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.starRating {
  font-size: 50px;
}

.notClicked {
  color: #f3f3f3;
}

.clicked {
  color: #ffcc00;
}
</style>
