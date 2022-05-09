<template>
  <div id="container-picture">
    <div v-if="mode === 'first'" id="firstGrid">
      <div class="row" v-for="item in data" :key="item">
        <nuxt-link :to="{ path: '/default/image', query: { url: item } }">
          <div
            class="picture"
            :style="{ backgroundImage: `url(${item})` }"
          ></div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="mode === 'second'" id="notFirstGrid">
      <div class="row" v-for="item in data" :key="item">
        <nuxt-link :to="{ path: '/default/image', query: { url: item } }">
          <div
            class="picture"
            :style="{ backgroundImage: `url(${item})` }"
          ></div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="mode === 'third'" id="notFirstGrid">
      <div class="row">
        <div class="column">
          <div class="row">
            <nuxt-link
              :to="{ path: '/default/image', query: { url: data[0] } }"
            >
              <div
                class="picture"
                :style="{ backgroundImage: `url(${data[0]})` }"
              ></div
            ></nuxt-link>
          </div>
          <div class="row">
            <nuxt-link
              :to="{ path: '/default/image', query: { url: data[1] } }"
            >
              <div
                class="picture"
                :style="{ backgroundImage: `url(${data[1]})` }"
              ></div
            ></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <nuxt-link :to="{ path: '/default/image', query: { url: data[2] } }">
          <div
            class="picture"
            :style="{ backgroundImage: `url(${data[2]})` }"
          ></div
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return {
      mode: '',
    };
  },
  props: {
    data: Array,
  },
  created() {
    if ((this.$props.data?.length as number) === 3) {
      this.mode = 'third';
    } else if ((this.$props.data?.length as number) === 2) {
      this.mode = 'second';
    } else {
      this.mode = 'first';
    }
  },
});
</script>

<style scoped>
#container-picture {
  width: 100%;
  height: 878px;
}

.picture {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

#firstGrid {
  width: 100%;
  height: 100%;
}
#notFirstGrid {
  display: flex;
  flex-direction: column;
  gap: 12.5px 0;
  width: 100%;
  height: 100%;
}
.row {
  flex: 1;
  height: 100%;
}

.column {
  display: flex;
  gap: 0 12.5px;
  height: 100%;
}
</style>
