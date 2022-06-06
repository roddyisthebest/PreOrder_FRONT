<template>
  <div class="container-menu">
    <span id="menu-title">{{ title }}</span>
    <ul id="menu-ul">
      <li
        class="menu-li"
        v-for="(editSelection, idx) in editedSelections"
        :key="editSelection.idx"
      >
        <div class="li-front">
          <button id="noodBtn" @click="setCheck(idx)">
            <span
              v-if="editSelection.checked"
              class="material-icons"
              :style="{ color: 'green', fontSize: '52px' }"
              >check</span
            >
            <div class="unCheckedMark" v-else></div>
            <span
              :class="
                editSelection.checked ? 'menu-text check' : 'menu-text unCheck'
              "
              >{{ editSelection.name }}</span
            >
          </button>
        </div>
        <span
          :class="
            editSelection.checked ? 'menu-text check' : 'menu-text unCheck'
          "
          >+ {{ editSelection.price }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface selection {
  name: string;
  price: number;
  idx: number;
  checked: boolean;
}

export default defineComponent({
  setup() {},
  data() {
    return { checked: false as boolean, editedSelections: [] as selection[] };
  },
  props: {
    title: String as PropType<string>,
    selections: {
      type: Array as PropType<selection[]>,
    },
  },
  methods: {
    setCheck(idx: number) {
      this.editedSelections.splice(idx, 1, {
        ...this.editedSelections[idx],
        checked: !this.editedSelections[idx].checked,
      });
      const checked = this.editedSelections[idx].checked;
      const price = this.editedSelections[idx].price;
      this.$emit('setPrice', checked ? price : price * -1);
    },
  },
  created() {
    this.$props.selections?.map((e) => {
      this.editedSelections.push({ ...e, checked: false });
    });
  },
});
</script>

<style scoped>
.container-menu {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

#menu-title {
  font-size: 47.5px;
  font-weight: 600;
  color: black;
}

#menu-ul {
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.menu-li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.li-front {
  display: flex;
  align-items: center;
  gap: 0 35px;
}

.unCheckedMark {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(249, 249, 249, 1);
  border: 1px solid #ebebeb;
}

.menu-text {
  font-size: 40px;
  color: black;
}
.unCheck {
  font-weight: 300;
}
.check {
  font-weight: 600;
}
#noodBtn {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0 15px;
}
</style>
