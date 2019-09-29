<template>
  <div class="floor-top">
    <div class="floor_top_info clearfix">
      <div class="gn_f1_left">
        <a href="#">
          <img src="../../img/picture/pur_left1544087707.jpg" alt>
        </a>
      </div>

      <div class="gn_center">
        <ul>
          <li class="gn_center-first">
            <router-link to="details">
              <img src="../../img/picture/pur_right11541144373.jpg" alt>
            </router-link>
          </li>
          <li class="gn_center-second">
            <router-link to="qiye">
              <img src="../../img/picture/pur_right21541144373.jpg" alt>
            </router-link>
          </li>
          <li class="gn_center-third">
            <a href="#">
              <img src="../../img/picture/pur_right31541144373.jpg" alt>
            </a>
          </li>
          <li class="gn_center-last">
            <a href="#">
              <img src="../../img/picture/pur_right41541144373.jpg" alt>
            </a>
          </li>
        </ul>
      </div>

      <div class="gn_fr">
        <dl>
          <dt id="gn-fr-dl">
            <a href="javarscrip:;" class="wjyh-info gonggao" data-gonggao="1">公告</a>
            <a href="javarscrip:;" class="wjyh-info" data-gonggao="2">资讯</a>
            <a href="javarscrip:;" class="wjyh-info info-more">更多...</a>
          </dt>
          <div>
            <div id="gn-fr-dl-1" class="show">
              <dd>
                <a href="#">
                  <span>积分活动调整</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>奖励金活动上线</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>极速达有偿配送服务开通</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>最新邮费政策</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>超级会员周活动</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>发票开具规则更新</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>办公采购，文具1号比东东更便宜！</span>
                  <p></p>
                </a>
              </dd>
            </div>
            <div id="gn-fr-dl-2">
              <dd>
                <a href="#">
                  <span>芬欧蓝泰公司推出Dogbone冷冻标签</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>全球首款获PEFC认证的数码打样纸张问世</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>Xitron公司宣布推出网络印刷软件模块</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>爱普生WorkForce系列新添两员虎将</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>海德堡全张机代表之速霸XL145/162设备解读</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>俄罗斯Sun公司即将推出专业平板式打印机</span>
                  <p></p>
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span>InfoPrint公司即将推出Pro C900AFP打印机</span>
                  <p></p>
                </a>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<style scoped>
.floor-top {
  padding: 30px 0;
}
.floor_top_info {
  background-color: #fff;
}
.gn_f1_left {
  float: left;
  margin-right: 4px;
}
.gn_center {
  float: left;
  width: 401px;
  height: 322px;
  overflow: hidden;
}
.gn_center ul li {
  float: left;
  height: 160px;
  margin: 0 4px 4px 0;
}
.gn_center ul .gn_center-second {
  margin-right: 0;
}
.gn_center ul .gn_center-third {
  margin-bottom: 0;
}
.gn_center ul .gn_center-last {
  margin: 0;
}
.gn_fr {
  float: right;
}
.gn_fr dt {
  height: 40px;
  width: 191px;
  line-height: 30px;
  background-color: #e1e0e0;
}
.gn_fr .wjyh-info {
  color: #666;
  font-weight: 800;
  font-family: 宋体;
  display: inline-block;
  line-height: 40px;
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 14px;
}
.wjyh-info.gonggao {
  background-color: #666;
  color: #fff;
}

.wjyh-info.info-more {
  display: inline-block;
  height: 40px;
  width: 60px;
  font-size: 12px;
  color: #000;
  font-weight: normal;
}
.gn_fr dl dd a {
  display: block;
  width: 175px;
  padding: 0 8px;
  overflow: hidden;
  height: 40px;
  border-bottom: 1px solid #eaeaea;
  color: #9d9b9b;
  box-sizing: border-box;
}
.gn_fr dl dd a:hover {
  text-decoration: none;
  color: #b40000;
}
.gn_fr dl dd a span {
  width: 175px;
  display: block;
  line-height: 40px;
  height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#gn-fr-dl-1,
#gn-fr-dl-2 {
  display: none;
}
#gn-fr-dl-1.show,
#gn-fr-dl-2.show {
  display: block;
}
</style>
