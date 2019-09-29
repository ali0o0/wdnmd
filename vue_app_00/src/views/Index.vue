<template>
  <div>
    <my-header></my-header>
    <carousel01></carousel01>
    <div id="gn_main">
      <div class="w1190">
          <advertise01></advertise01>
          <advertise02></advertise02>
          <advertise03></advertise03>
          <floor01></floor01>
          <floor01></floor01>
          <floor01></floor01>
          <floor01></floor01>
          <floor01></floor01>
          <floor01></floor01>
          <floor01></floor01>
      </div>
    </div>
    <div class="w1190">
      <bottom01></bottom01>
    </div>
    
    <my-footer></my-footer>
  </div>
</template>
<script>
import Carousel from "./index/Carousel.vue";
import Advertise01 from "./index/Advertise01.vue";
import Advertise02 from "./index/Advertise02.vue";
import Advertise03 from "./index/Advertise03.vue";
import Floor01 from "./index/Floor.vue";
import Bottom01 from "./index/Bottom.vue";
export default {
  components: {
    carousel01: Carousel,
    advertise01:Advertise01,
    advertise02:Advertise02,
    advertise03:Advertise03,
    floor01:Floor01,
    bottom01:Bottom01
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

