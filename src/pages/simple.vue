<template>
  <div class="wrap">
    <button class="btn" @click="show = !show">
      {{ show ? "hide" : "show" }} modal
    </button>
    <div
      class="wrap-wrpa"
      v-show="show"
      @touchstart.prevent.stop
      @touchsmove.prevent.stop
    >
      <div class="fixed-pancel" v-disabled-body-scroll>
        <div class="fixed-pancel-inner">
          <p style="background: green">header</p>
          <p v-for="item in arr" :key="item" @click="clickFn(item)">
            {{ item }}
          </p>

          <p style="background: blue">footer</p>
        </div>
      </div>
    </div>
    <div class="num">
      <p>offsetX: <span id="offsetx">0</span></p>
      <p>offsetY: <span id="offsety">0</span></p>
    </div>
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      show: false,
    };
  },
  methods: {
    clickFn(item) {
      alert(item);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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
  -webkit-overflow-scrolling: auto;
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
  -webkit-overflow-scrolling: auto;
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
.wrap-wrpa {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 999;
}
.btn {
  position: fixed;
  z-index: 9999;
  left: 50px;
  top: 20px;
  width: 100px;
  height: 50px;
  display: block;
}
</style>
