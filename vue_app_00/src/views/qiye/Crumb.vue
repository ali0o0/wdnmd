<template>
  <div class="crumb" id="J_crumbs">
    <div class="crumbCon">
      <div class="crumbSlide" id="J_CrumbSlide">
        <a
          title="上一页"
          class="crumbSlide-prev"
          id="J_CrumbSlidePrev"
          style="visibility: hidden;"
        >&lt;</a>
        <i class="crumbSlide-prev-shadow"></i>

        <div class="crumbClip">
          <ul class="crumbSlide-con clearfix" id="J_CrumbSlideCon">
            <li>
              <router-link class="crumbStrong" to="/">首页</router-link>
              <i class="crumbArrow">&gt;</i>
            </li>

            <!--  -->
            <li class="crumbSearch">
                
                <label class="crumbSearch-label" for="J_CrumbSearchInuput">
                  <input
                    type="text"
                    name="keywords"
                    value="在当前条件下搜索"
                    gdata-default="在当前条件下搜索"
                    class="crumbSearch-input"
                    id="J_CrumbSearchInuput"
                  >
                </label>
                
            </li>
          </ul>
        </div>
        <i class="crumbSlide-next-shadow"></i>
        <a
          title="下一页"
          class="crumbSlide-next"
          href="javascript:void(0);"
          id="J_CrumbSlideNext"
          style="visibility: hidden;"
        >&gt;</a>
      </div>
      <p class="crumbTitle j_ResultsNumber">共
        <span>4284</span>件相关商品
      </p>
    </div>
  </div>
</template>
<style scoped>
/*商品列表页*/
@media (max-width: 1210px) {
  #sn-bd,
  #header .headerLayout,
  #header .headerCon,
  .crumb .crumbCon,
  .main {
    width: 990px !important;
  }
}

.crumb .crumbCon,
.main {
  position: relative;
  margin: 0 auto;
  width: 1190px;
}
.bts-39 {
  margin-top: 10px;
}
/*分类面包屑Start*/
.crumb {
  height: 40px;
  margin-bottom: 10px;
  min-width: 990px;
}
/*@media (min-width:1120px ) {
.crumb{
    width: 1190px;
}
}*/
.crumbCon {
  width: 1190px;
  margin: 0 auto;
  line-height: 27px;
  position: relative;
  /* z-index: 10001*/
}
.crumbSlide {
  height: 40px;
}
.crumbSearch-label {
}
#navbar a i,
.crumbDelete,
.crumbSearch-btn,
.fArea,
.fRange,
.fType-w i,
.fType-g i,
.fSort i,
.fType-l i,
.fR-list i,
.fR-cur i,
.fPb-split,
.fT-cat,
.fT-arrow,
.flagship-icon,
.drop-icon,
.expand-icon,
.shopDropBtn i,
.btmFeed,
.brandAttr .av-search,
.attr li i,
.attr .avo-multiple i,
.attrExtra i,
.cateAttrs .attrKey,
.attrTrigger,
.crumbSlide-prev,
.crumbSlide-next,
.crumbSlide-prev-shadow,
.crumbSlide-next-shadow,
.crumbDrop i,
.i-brandsite,
.i-shop,
.i-flagship,
.subGroup .attrKey {
  background: url(/views/mall/images/shop_icon.png) no-repeat 9999px 9999px;
}

.crumbSlide-prev,
.crumbSlide-next {
  position: absolute;
  top: 3px;
  visibility: hidden;
  cursor: pointer;
  width: 21px;
  height: 25px;
  z-index: 9;
  text-indent: -99999px;
  overflow: hidden;
}
.crumbSlide-prev {
  background-position: -144px -104px;
  left: -21px;
}

.crumbSlide-prev-shadow,
.crumbSlide-next-shadow {
  display: none;
  position: absolute;
  top: 3px;
  cursor: pointer;
  width: 5px;
  height: 25px;
  z-index: -1;
}
.crumbSlide-prev-shadow {
  background-position: -138px -79px;
  left: -2px;
}
.crumbClip {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 5px;
}
.crumbSlide-con {
  position: absolute;
  margin-left: -9px;
}
.crumbSlide-con li {
  height: 40px;
  padding-left: 9px;
  color: #fff;
  float: left;
}
.crumbStrong {
}
.crumbSlide-con a {
  line-height: 40px;
  color: #666;
}
.crumbSlide-con a.crumbStrong {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.crumbSlide-con a.crumbStrong {
  max-width: 9.25em;
}

.crumbArrow {
  color: #151e59;
  margin-left: 3px;
  font-style: normal;
  font-family: 宋体b8b\4f53;
  vertical-align: middle;
  display: inline-block;
  margin-top: 2px;
  height: 38px;
  line-height: 38px;
}

.crumbSearch {
  position: relative;
}
.crumbSearch-label {
  border: 1px solid #dcdcdc;
  float: left;
  position: relative;
  background-position: 0 -154px;
  width: 125px;
  height: 20px;
  line-height: 21px;
  color: #666;
  padding: 0 25px 0 12px;
  margin-right: 15px;
  top: 10px;
}
.crumbSearch-label.focus {
  background-position: 0 -132px;
}
.crumbSearch-input {
  background: none;
  border: 0;
  color: #999999;
  outline: 0;
  float: left;
  line-height: 20px;
  _line-height: 20px;
  height: 20px;
}
.crumbSearch-btn {
  border: 0;
  background-position: 0 -47px;
  display: inline-block;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 14px;
  right: 25px;
  float: left;
  cursor: pointer;
  text-indent: -9999px;
  -webkit-border-radius: 0 2px 2px 0;
  -moz-border-radius: 0 2px 2px 0;
  -ms-border-radius: 0 2px 2px 0;
  -o-border-radius: 0 2px 2px 0;
  border-radius: 0 2px 2px 0;
}
.crumbTitle {
  display: inline-block;
  position: absolute;
  color: #141e59;
  top: 0;
  right: 0;
  line-height: 40px;
  line-height: 40px/9;
  height: 40px;
  overflow: hidden;
}
.crumbTitle span {
  color: #141e59;
  font-family: Arial;
  font-weight: 700;
  margin: 0 5px;
  position: relative;
  top: 1px;
}
.cateAttrs .attrKey,
.subGroup .attrKey {
  background-position: -112px -42px;
  padding: 0;
  margin-top: 7px;
  text-indent: 27px;
  width: 10%;
}
.crumbSlide-con a:hover {
  color: #151e59;
}

</style>
