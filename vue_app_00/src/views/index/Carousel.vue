<template>
  <div id="gn_banner">
    <div class="banner-md">
      <div class="banner-img">
        <img src="../../img/picture/fe3861a5c907a9d.jpg" alt>
      </div>
      <div class="small-banner">
        <a href="#">
          <img class="img_hover" src="../../img/picture/56e3a8ba59a4fbef.jpg" alt>
        </a>
        <b id="img_border"></b>
        <a href="#">
          <img class="img_hover" src="../../img/picture/9802192759a4fc9e.jpg" alt>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img_hover{
    transition:0.2s linear;
}
.img_hover:hover{
    transform: translateX(-5px);
}
#gn_banner{
    height: 450px;
    width: 100%;
    background-color: #4bbffc;
    position: relative;
    
}
#gn_banner .small-banner{
    width: 190px;
    height: 450px;
    float: left;
    opacity: 0.9;
}
#gn_banner .banner-md .banner-img{
    float: left;
    width: 810px;
}
#gn_banner .small-banner img{
    height: 225px;
    width: 190px;
    vertical-align: top;
}
#gn_banner .banner-md{
    width: 1000px;
    margin: 0 auto;
    position: relative;
    left:95px;
    
}
#gn_banner .small-banner #img_border{
    height: 0;
    border-top: 1px dotted #eee;
    display: block;
    line-height: 0;
}
</style>
