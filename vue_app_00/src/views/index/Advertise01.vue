<template>
  <div class="gift-pack clearfix">
    <div class="gift-pack-left">
      <h1>特价礼包专区</h1>
      <div>
        <a href="#">
          <img src="../../img/picture/special_left1551856160.jpg" alt>
        </a>
      </div>
    </div>

    <div class="gift-pack-right">
      <div class="gift-pack-right-parent">
        <ul id="byzq">
          <li data-byzq="1">
            <a class="gift-first" href="javascript:;">10元包邮</a>
          </li>
          <li data-byzq="2">
            <a href="javascript:;">15元包邮</a>
          </li>
          <li data-byzq="3">
            <a href="javascript:;">20元包邮</a>
          </li>
          <li data-byzq="4">
            <a href="javascript:;">30元包邮</a>
          </li>
        </ul>
        <div class="gift-right-img">
         <img src="../../img/picture/one_chancev.png" alt>
        </div>
      </div>

      <div class="gift-pack-right-bottom show" id="gift1">
        <div class="gift-bottom-inner">
          <a href="#">
             <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>10元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-middle">
          <a href="#">
            <img src="../../img/picture/9dfjvd16312572983220x220.jpg" alt>
            <h3>10元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-last">
          <a href="#">
            <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt> 
            <h3>10元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>
      </div>
      <div class="gift-pack-right-bottom" id="gift2">
        <div class="gift-bottom-inner">
          <a href="#">
            <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>15元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-middle">
          <a href="#">
            <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>15元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-last">
          <a href="#">
            <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>15元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>
      </div>
      <div class="gift-pack-right-bottom" id="gift3">
        <div class="gift-bottom-inner">
          <a href="#">
             <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>20元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-middle">
          <a href="#">
           <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>20元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-last">
          <a href="#">
           <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>20元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>
      </div>
      <div class="gift-pack-right-bottom" id="gift4">
        <div class="gift-bottom-inner">
          <a href="#">
            <img src="../../img/picture/yvedv216312475580.jpg220x220.jpg" alt>
            <h3>30元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-middle">
          <a href="#">
            <img src="../../img/picture/sjglpe1631261.jpg" alt>
            <h3>30元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>

        <div class="gift-bottom-inner gift-bottom-inner-last">
          <a href="#">
            <img src="../../img/picture/sjglpe1631261.jpg" alt>
            <h3>30元包邮A</h3>
            <p>
              ¥20.00/套
              <span>¥95.04/套</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </div> 
 
</template>
<style scoped>
.gift-pack {
  padding-top: 30px;
}
.gift-pack > div {
  float: left;
}

.gift-pack-left h1 {
  height: 38px;
  margin: 0;
  padding-left: 15px;
  font-size: 16px;
  line-height: 38px;
  color: #333;
  font-weight: 400;
  position: relative;
}
.gift-pack-left h1::before {
  content: "";
  display: block;
  position: absolute;
  top: 9px;
  left: 0;
  width: 5px;
  height: 18px;
  background-color: #f53318;
}
.gift-pack-left div,
.gift-pack-right .gift-pack-right-bottom {
  border-top: 1px solid #f53318;
}
.gift-pack-right .gift-pack-right-bottom {
  position: relative;
  width: 595px;
  height: 249px;
  border-bottom: 1px solid #ccc;
  display: none;
}
.gift-pack-right .gift-pack-right-bottom.show {
  display: block;
}
.gift-pack-right ul li {
  float: left;
  position: relative;
}
.gift-pack-right ul li a {
  color: #333;
  display: inline-block;
  font-size: 16px;
  line-height: 38px;
  font-weight: 400;
  width: 125px;
  text-align: center;
}

.gift-pack-right ul li::after {
  content: "";
  display: block;
  width: 1px;
  height: 16px;
  position: absolute;
  top: 11px;
  left: 0;
  background-color: #ccc;
}
.gift-pack-right-parent {
  position: relative;
}
.gift-pack-right .gift-pack-right-parent .gift-right-img {
  position: relative;
  left: 548px;
  top: -40px;
  width: 50px;
  height: 39px;
}

.gift-pack-right .gift-bottom-inner {
  height: 250px;
  width: 199px;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  padding-top: 25px;
  padding-left: 30px;
  position: relative;
  margin-right: 0;
  background-color: #fff;
}
.gift-pack-right .gift-bottom-inner-last {
  border-right: 0;
  left: 398px;
  top: -500px;
}
.gift-pack-right .gift-bottom-inner img {
  width: 140px;
  height: 140px;
}
.gift-bottom-inner-middle {
  left: 199px;
  top: -250px;
}
.gift-bottom-inner h3 {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  top: 175px;
  left: 30px;
  width: 140px;
  display: block;
  position: absolute;
}
.gift-bottom-inner p {
  position: absolute;
  left: 30px;
  top: 207px;
  font-size: 14px;
  color: #d2220a;
}
.gift-bottom-inner p span {
  color: #999;
  text-decoration: line-through;
  margin-left: 3px;
}

.gift-pack-right ul li .gift-first {
  background-color: rgb(215, 22, 53);
  color: #fff;
}
</style>
