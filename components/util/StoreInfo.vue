<template>
  <div id="container-storeInfo">
    <div class="titles">
      <span class="titleMainText">{{ title }}</span>
      <div class="titleStatusWrapper">
        <span class="titleStatusText">혼잡</span>
      </div>
    </div>
    <div class="introduces">
      <span class="introduceText">
        {{ lotsInfo ? introduce.slice(0, 52) + '...' : introduce }}
      </span>
      <button
        class="introduceButton buttonPure"
        :style="lotsInfo ? { top: 50 } : { bottom: 50 }"
        @click="setLot"
      >
        <span class="material-icons introduceIcon">{{
          lotsInfo ? 'arrow_drop_down' : 'arrow_drop_up'
        }}</span>
      </button>
    </div>
    <div class="subInfoItems">
      <div class="subInfoItem">
        <span class="icon material-icons">restaurant</span>
        <span class="subInfoText">15 dishes</span>
      </div>
      <div class="dot"></div>
      <div class="subInfoItem">
        <span class="icon material-icons">people</span>
        <span class="subInfoText">15</span>
      </div>
      <div class="dot"></div>
      <div class="subInfoItem">
        <span class="icon material-icons">access_time</span>
        <span class="subInfoText">15 minutes</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return { lotsInfo: false as boolean };
  },
  created() {
    if ((this.$props.introduce?.length as number) > 24) {
      this.$data.lotsInfo = true;
    }
  },
  props: {
    status: String,
    title: String,
    introduce: {
      type: String,
    },
  },
  methods: {
    setLot() {
      this.lotsInfo = !this.lotsInfo;
    },
  },
});
</script>

<style scoped>
#container-storeInfo {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  background-color: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 40px;
}

.titles {
  display: flex;
  gap: 0 20px;
  flex: 1;
  align-items: flex-end;
}
.titleMainText {
  font-size: 50px;
  font-weight: 700;
}
.titleStatusWrapper {
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffeae9;
  padding: 8px 30px;
  border-radius: 20px;
}

.titleStatusText {
  font-size: 25px;
  font-weight: 600;
  color: red;
}

.introduces {
  position: relative;
  flex: 2;
}
.introduceText {
  color: #828282;
  font-size: 45px;
  font-weight: 300;
}

.introduceButton {
  position: absolute;
  right: 0px;
}

.introduceIcon {
  font-size: 50px;
  color: black;
}

.subInfoItems {
  display: flex;
  gap: 0 20px;
  flex: 1;
  align-items: center;
}
.subInfoItem {
  display: flex;
  gap: 0 15px;
  align-items: center;
}

.subInfoText {
  font-size: 30px;
  font-weight: 500;
}
.icon {
  color: #ababab;
  font-size: 25px;
}
</style>
