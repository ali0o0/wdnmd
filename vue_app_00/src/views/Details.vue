<template>
  <div>
    <my-header msg="disshow"></my-header>
    <product-details01></product-details01>
    <my-footer></my-footer>
  </div>
</template>
<script>
import ProductDetails from "./Details/ProductDetails.vue";
export default {
  components: {
    "product-details01":ProductDetails,
  }
};
</script>