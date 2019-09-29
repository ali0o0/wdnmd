<template>
  <div>
    <my-header msg="disshow"></my-header>
    <div id="gn_main">
      <div class="w1190">
        <crumb01></crumb01>
        <bts01></bts01>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Crumb from "./qiye/Crumb.vue";
import Bts from "./qiye/bts-39.vue";
export default {
  components: {
    crumb01: Crumb,
    bts01: Bts
  }
};
</script>

<style scoped>
#gn_main {
  background-color: #f5f5f5;
}
.w1190 {
  width: 1190px;
  margin: 0 auto;
}
</style>