<template>
  <div id="container">
    <div id="contentsWrapper">
      <div id="contentsLeft">
        <div class="column">
          <span id="contentsText">Location to</span>
        </div>
        <div class="column">
          <span id="contentsHeader">경기대학교</span>
          <div id="contentsImg"></div>
        </div>
      </div>
      <div id="contentsRight">
        <button class="buttonPure white">
          <nuxt-link to="/default/notification">
            <span id="alarmAmount">5</span>
            <span class="material-icons size">notifications_none</span>
          </nuxt-link>
        </button>
        <span id="buttonBlock"></span>
        <button class="buttonPure white">
          <nuxt-link to="/default/menu">
            <span class="material-icons size">menu</span>
          </nuxt-link>
        </button>
      </div>
    </div>
    <div id="searchBarWrapper">
      <div id="searchBar">
        <span class="material-icons searchText ml-30">search</span>
        <span class="ml-30 searchText">Search dish name, restarant</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {},
});
</script>
<style scoped>
#container {
  position: sticky;
  background-color: #42b883;
  top: 0;
  height: 170px;
  z-index: 500;
}

#contentsHeader {
  color: white;
  font-size: 60px;
  font-weight: 700;
  margin-right: 15px;
}

#contentsText {
  color: white;
  font-size: 40px;
  font-weight: 400;
}

#contentsImg {
  background-image: url('https://w.namu.la/s/6e36ae14895a6c7b78c2d9df5548337e62f8e3cd631d3cb015cd31cfe129d82c74fe66f0bff7d848a5d2dc9bf59b6f4a252f4e4e2ee4877ef68bb54ccde926982d539bd9249c859144b31194093d8efdb70264d38db455e47c514fc9c4c31f03');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 70px;
  height: 100%;
  border-radius: 10px;
  /* box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); */
}

.mt-5 {
  margin-top: 20px;
}

.ml-30 {
  margin-left: 30px;
}

.searchText {
  font-size: 40px;
  color: #828282;
  font-weight: 400;
}

#buttonBlock {
  height: 35%;
  width: 3px;
  background-color: rgba(255, 255, 255, 0.226);
}

#alarmAmount {
  width: 25px;
  height: 25px;
  background-color: white;
  border: 5px solid;
  border-color: #42b883;
  border-radius: 20px;
  position: absolute;
  top: 0;
  right: 3px;
}
.size {
  font-size: 60px;
}

#contentsLeft {
  flex: 1;
  gap: 5px 0;
  display: flex;
  flex-direction: column;
}

#contentsRight {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#contentsWrapper {
  position: relative;
  width: 100%;
  display: flex;
}

#searchBarWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

#searchBar {
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 130px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
}

.column {
  display: flex;
  align-items: center;
}
.white {
  color: white;
}
</style>
