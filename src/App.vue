<template>
  <div id="app">
    <div class="home">
      <a href="/#/home">home</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home {
  position: fixed;
  top: 0;
  line-height: 30px;
  z-index: 20;
  background: pink;
}
.fixed-pancel {
  width: 667px;
  width: 100%;
  height: 200px;
  background: red;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: auto;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
}

.fixed-pancel-inner p {
  line-height: 59px;
}

.num {
  position: fixed;
  top: 0;
  right: 0;
}

.box {
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

li {
  height: 60px;
  background: gray;
}

li:nth-child(odd) {
  background: skyblue;
}
p:nth-child(odd) {
  background: pink;
}
</style>
