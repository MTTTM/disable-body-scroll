<template>
  <div id="app">
    <div class="fixed-pancel" v-disabled-body-scroll>
      <div class="fixed-pancel-inner">
        <p style="background: green">23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p>23444</p>
        <p style="background: blue">23444</p>
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
</style>
