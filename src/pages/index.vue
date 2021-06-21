<template>
  <div>
    <ul>
      <li v-for="item in routeMap" :key="item.path">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import routeMap from "../route/routes";
export default {
  data() {
    return {
      routeMap,
    };
  },
};
</script>