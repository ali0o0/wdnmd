<template>
  <div>
    <header id="header">
      <div class="gn_head_nav">
        <div class="w1190">
          <p class="gn_hnf1">
            您好！游客&nbsp;欢迎来
            <a href="#">文具1号商城！</a>
            <a href="#" class="pl15">登录</a>
            <a href="#" class="pl15">免费注册</a>
          </p>
          <div class="gn_fr">
            <ul>
              <li>
                <a href="#">商城首页</a>
              </li>
              <li>
                <a href="#" class="down_drop">会员中心</a>
                <ul>
                  <li>
                    <a href="#">全部订单</a>
                  </li>
                  <li>
                    <a href="#">代付款订单</a>
                  </li>
                  <li>
                    <a href="#">待收货订单</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="down_drop">我的收藏</a>
                <ul>
                  <li>
                    <a href="#">收藏的商品</a>
                  </li>
                  <li>
                    <a href="#">收藏的店铺</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="down_drop">我的福利</a>
                <ul>
                  <li>
                    <a href="#" class="myfl">我的优惠卷</a>
                    <span class="cart-pic">0</span>
                  </li>
                  <li>
                    <a href="#" class="myfl">我的礼品卷</a>
                    <span class="cart-pic cart-pic_two">0</span>
                  </li>
                  <li>
                    <a href="#">我的奖励金</a>
                  </li>
                  <li>
                    <a href="#">我的积分</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">申请商家驻入</a>
              </li>
              <li>
                <a href="#">帮助中心</a>
              </li>
              <li>
                <a href="#" class="down_drop">网站导航</a>
                <ul>
                  <li>
                    <a href="#">会员体系</a>
                  </li>
                  <li>
                    <a href="#">售后政策</a>
                  </li>
                  <li>
                    <a href="#">退款流程</a>
                  </li>
                  <li>
                    <a href="#">配送费用</a>
                  </li>
                  <li>
                    <a href="#">在线客服</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">电子协议</a>
              </li>
              <li class="cart">
                <span class="cart_pic1"></span>
                <span>
                  <a href="#">我的购物车</a>
                </span>
                <span class="cart_pic2">0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 商标 -->
      <div id="gn_logos">
        <div class="w1190 logo-mid clearfix">
          <div class="gn_wjlogo">
            <a href="#" title="文具1号—办公用品采购网站 阳光价格 老板放心 品质保障 员工省力">
              <img
                alt="文具1号—办公用品采购网站 阳光价格 老板放心 品质保障 员工省力"
                src="../img/picture/logo1503285339.jpg"
                width="130"
                height="55"
              >
            </a>
          </div>
          <div class="gn_wjSlogan">
            <a href="#">
              <img
                src="../img/picture/active_entrancer1540363290.gif"
                alt="企业采购解决方案 阳光价格 老板放心 品质保障 员工省力"
                title="企业采购解决方案 阳光价格 老板放心 品质保障 员工省力"
                style="width:190px; height:55px;"
              >
            </a>
          </div>
          <div class="gn_buycar">
            <p>
              <a href="#">
                <img src="../img/picture/logo_left1_adver1551953599.jpg" alt="#">
              </a>
            </p>
          </div>
          <div class="gn_search_qumall">
            <div class="gn_i-search">
              <input type="text" placeholder="亲，这里可以搜索您想要的宝贝，江浙沪满88元包邮！" id="search_ipt">
              <button>搜 索</button>
            </div>
            <div class="gn_hotkeywords">
              <span>热门搜索：</span>
              <ul>
                <li class="hot-products">
                  <a href="#">A4纸</a>
                </li>
                <li>
                  <a href="#">文件夹</a>
                </li>
                <li>
                  <a href="#">硒鼓</a>
                </li>
                <li>
                  <a href="#">墨盒</a>
                </li>
                <li>
                  <a href="#">中性笔</a>
                </li>
                <li>
                  <a href="#">订书机</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航栏 -->
      <div id="gn_navbg">
        <div class="w1190 clearfix">
          <div class="gn_nav">
            <div class="all_products">
              <a href="#">全部商品分类</a>
            </div>
            <ul>
              <li>
                <a href="#" class="nav_first" title="首页">首页</a>
              </li>
              <li>
                <a href="#" title="品牌街">品牌街</a>
              </li>
              <li>
                <a href="#" title="商品列表">商品列表</a>
              </li>
              <li>
                <a href="#" title="文具1号超市">文具一号超市</a>
              </li>
              <li>
                <a href="#" title="积分商城">积分商城</a>
              </li>
              <li>
                <a href="#" title="清单采购">
                  清单采购
                  <img src="../img/picture/68.gif" class="head_icon">
                </a>
              </li>
              <li>
                <a href="#" title="设备租赁">设备租赁</a>
              </li>
              <li>
                <a href="#" title="特价礼包">
                  特价礼包
                  <img src="../img/picture/73.gif" class="head_icon">
                </a>
              </li>
            </ul>
          </div>
          <div id="nav">
            <div class="mod_cate_hd">
              <h2>全部商品分类</h2>
            </div>
            <ul :id="msg">
              <li>
                <h2>
                  <span class="nav_icon1"></span>
                  <a href="#" title="办公用品">办公用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>桌面文具</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon1"></span>
                  <a href="#" title="学生用品">学生用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon2"></span>
                  <a href="#" title="行政用品">行政用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon3"></span>
                  <a href="#" title="财务用品">财务用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon4"></span>
                  <a href="#" title="会议用品">会议用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon5"></span>
                  <a href="#" title="工厂用品">工厂用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon6"></span>
                  <a href="#" title="工程用品">工程用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon7"></span>
                  <a href="#" title="定制用品">定制用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon8"></span>
                  <a href="#" title="数学用品">数学用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h2>
                  <span class="nav_icon9"></span>
                  <a href="#" title="美术用品">美术用品</a>
                </h2>
                <div>
                  <div class="gn-btlfin">
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                    <div class="gn-btlfirst">
                      <h3>办公用纸</h3>
                      <h4>
                        <a href="#">更多</a>
                      </h4>
                    </div>
                    <div class="gn-btlsecond">
                      <ul>
                        <li>
                          <a href="#">打印标签 手写标签</a>
                        </li>
                        <li>
                          <a href="#">电脑打印纸</a>
                        </li>
                        <li>
                          <a href="#">云彩纸 卡纸</a>
                        </li>
                        <li>
                          <a href="#">复印纸 彩色复印纸</a>
                        </li>
                        <li>
                          <a href="#">复写纸</a>
                        </li>
                        <li>
                          <a href="#">工程复印纸</a>
                        </li>
                        <li>
                          <a href="#">相片纸 激光打印纸 喷墨打印纸</a>
                        </li>
                        <li>
                          <a href="#">收银纸</a>
                        </li>
                        <li>
                          <a href="#">传真纸</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
   props:{
     msg:{default:true},
   }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font: 12px/1.5 tahoma, arial, \5b8b\4f53;
}
#nav #disshow{
  display: none
}
#nav:hover #disshow{
    display: block;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
ul {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.img_hover {
  transition: 0.2s linear;
}
.img_hover:hover {
  transform: translateX(-5px);
}

/* 顶部导航栏 */

.gn_head_nav {
  background-color: #f2f2f2;
  height: 29px;
  color: #999;
}
.w1190 {
  width: 1190px;
  margin: 0 auto;
}
.gn_head_nav .w1190 p {
  height: 29px;
  line-height: 29px;
  float: left;
}
.gn_head_nav .w1190 p a {
  color: #999;
}
.gn_head_nav .w1190 p .pl15 {
  padding-left: 15px;
}
.gn_head_nav .gn_fr {
  float: right;
}
.gn_head_nav .gn_fr ul li {
  float: left;
}
.gn_head_nav .gn_fr ul li:hover > a {
  color: #c40000;
}
.gn_head_nav .gn_fr ul li a {
  display: block;
  height: 29px;
  padding: 0 10px;
  line-height: 29px;
  color: #999;
}
.gn_head_nav .gn_fr ul li .down_drop {
  background: url(../img/images/drop_down_iconv.png) no-repeat right center;
  width: 60px;
}
.gn_head_nav .gn_fr ul li:hover ul {
  display: block;
}
.gn_head_nav .gn_fr ul li ul {
  display: none;
  position: absolute;
  z-index: 10;
  border-top: 1px solid #c40000;
}
.gn_head_nav .gn_fr ul li ul li {
  float: none;
}
.gn_head_nav .gn_fr .cart-pic {
  width: 17px;
  height: 17px;
  position: absolute;
  right: 10px;
  top: 6px;
  line-height: 17px;
  text-align: center;
  color: #fff;
  background: url(../img/images/icon_title_nav4.png) no-repeat 0 0;
}
.gn_head_nav .gn_fr .cart-pic_two {
  top: 36px;
}
.gn_head_nav .gn_fr .myfl {
  width: 80px;
}
.gn_head_nav .gn_fr ul li ul li a {
  background: #f5f5f5;
  color: #999;
}
.gn_head_nav .gn_fr ul li ul li a:hover {
  color: #c40000;
}

.gn_head_nav .gn_fr ul .cart span {
  float: left;
}
.gn_head_nav .gn_fr ul li .cart_pic1 {
  background: url(../img/images/icon_title1.png) no-repeat 0 0;
  display: block;
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.gn_head_nav .gn_fr ul .cart span a {
  color: #c40000;
  padding: 0;
}
.gn_head_nav .gn_fr ul li .cart_pic2 {
  background: url(../img/images/icon_title2.png) no-repeat 0 0;
  display: block;
  width: 17px;
  height: 17px;
  margin-top: 5px;
  color: #fff;
  text-align: center;
}

/* 商标部分 */

.logo-mid {
  padding: 15px 0;
}
.gn_wjlogo {
  width: 130px;
  margin-left: 10px;
  float: left;
}

.gn_wjSlogan {
  float: left;
  margin-left: 20px;
  height: 54px;
  width: 190px;
  line-height: 54px;
}
.gn_buycar {
  float: right;
  margin: 15px 0 0 125px;
  width: 150px;
}
.gn_buycar p {
  text-align: center;
  margin-left: -95px;
  margin-top: -10px;
}
.gn_search_qumall {
  float: right;
  position: relative;
  padding-left: 55px;
  top: 4px;
}
.gn_i-search {
  position: relative;
  width: 494px;
  height: 30px;
  border: 3px solid #c40000;
}
input#search_ipt {
  border: 0;
  margin: 0;
  width: 400px;
  background-color: transparent;
  padding: 2px 0 0 10px;
  position: absolute;
  color: #000;
  font-size: 100%;
  outline: none;
  line-height: 28px;
}
.gn_i-search button {
  background-color: #c40000;
  text-align: center;
  color: #fff;
  height: 30px;
  width: 78px;
  border: none;
  float: right;
  font: normal 16px/30px microsoft Yahei;
}
.gn_hotkeywords {
  padding-top: 8px;
  height: 20px;
  color: #999;
}
.gn_hotkeywords li {
  float: left;
  padding: 0 9px;
}
.gn_hotkeywords span {
  display: block;
  float: left;
}
.gn_hotkeywords li a {
  color: #999;
}
.gn_hotkeywords ul .hot-products a {
  color: #c40000;
}

/* 轮播图上方的导航 */

#gn_navbg {
  background-color: #c40000;
  width: 100%;
  min-width: 1190px;
  position: relative;
}
.all_products {
  height: 40px;
  line-height: 40px;
  position: relative;
  width: 1190px;
}
#gn_navbg .all_products {
  float: left;
  width: 180px;
  height: 40px;
  padding: 0 0 0 20px;
}
#gn_navbg .all_products a {
  color: #fff;
  font-size: 16px;
  font-family: "Microsoft Yahei";
}

.gn_nav li {
  float: left;
  padding-right: 15px;

  position: relative;
}
.gn_nav li a {
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 0 25px;
  display: block;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}
.gn_nav li .nav_first {
  background-color: #db2020;
}
.gn_nav li a:hover {
  background-color: #db2020;
}
.head_icon {
  position: absolute;
  right: 20px;
  width: 20px;
  height: 20px;
}
#nav {
  width: 200px;
  position: absolute;
  background: #fff;
  opacity: 0.95;
  z-index: 10001;
}
#nav .mod_cate_hd {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  text-indent: 7px;
  background-color: #c40000;
}
#nav .mod_cate_hd h2 {
  line-height: 40px;
  padding-left: 15px;
  font-size: 16px;
  font-family: "Microsoft Yahei";
}

#nav > ul > li h2 a {
  color: #62615f;
  padding-right: 5px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
}
#nav > ul > li {
  height: 25px;
  padding: 10px 10px 10px 35px;
}
#nav > ul > li span {
  float: left;
  background: url(../img/images/icon_totle.png);
  width: 17px;
  height: 17px;
  margin-top: 3px;
  padding-right: 10px;
}
#nav li .nav_icon1 {
  background-position: -23px -154px;
}
#nav li .nav_icon2 {
  background-position: -23px -180px;
}
#nav li .nav_icon3 {
  background-position: -23px -203px;
}
#nav li .nav_icon4 {
  background-position: -23px -232px;
}
#nav li .nav_icon5 {
  background-position: -23px -256px;
}
#nav li .nav_icon6 {
  background-position: -53px -23px;
}
#nav li .nav_icon7 {
  background-position: -170px -23px;
}
#nav li .nav_icon8 {
  background-position: -78px -23px;
}
#nav li .nav_icon9 {
  background-position: -107px -23px;
}

#nav li:hover .nav_icon1 {
  background-position: 3px -154px;
}
#nav li:hover .nav_icon2 {
  background-position: 3px -180px;
}
#nav li:hover .nav_icon3 {
  background-position: 3px -203px;
}
#nav li:hover .nav_icon4 {
  background-position: 3px -232px;
}
#nav li:hover .nav_icon5 {
  background-position: 3px -256px;
}
#nav li:hover .nav_icon6 {
  background-position: -53px 0px;
}
#nav li:hover .nav_icon7 {
  background-position: -170px 0px;
}
#nav li:hover .nav_icon8 {
  background-position: -78px 0px;
}
#nav li:hover .nav_icon9 {
  background-position: -107px 0px;
}

#nav li > div .gn-btlfin {
  padding: 0 15px;
  width: 770px;
}
#nav li > div .gn-btlfin .gn-btlfirst {
  width: 725px;
  height: 25px;
  border-bottom: 1px dashed #cbcbcb;
  overflow: hidden;
}
#nav li > div .gn-btlfin div h3 {
  color: #c40000;
  font-weight: 700;
  float: left;
  font-size: 12px;
  line-height: 25px;
}
#nav li > div .gn-btlfin div h4 {
  float: right;
  line-height: 25px;
}
#nav li > div .gn-btlfin div h4 a {
  color: #000;
}
#nav li > div .gn-btlfin div a {
  color: #888;
}
#nav li > div .gn-btlfin .gn-btlsecond ul {
  width: 725px;
}
#nav li div .gn-btlfin .gn-btlsecond li {
  background: none;
  float: left;
  padding: 0 8px;
  margin-left: 1px;
}
#nav li > div .gn-btlfin .gn-btlsecond li a:hover {
  color: #cc0000;
}

#nav li:hover {
  background: #db2020 url(../img/images/icon_right.png) no-repeat 160px 17px;
}
#nav li:hover a {
  color: #fff;
}
#nav li > div > div {
  display: none;
  width: 800px;
  height: 450px;
  position: absolute;
  background: #fff;
  left: 200px;
  top: 40px;
  padding: 0 15px;
  overflow-y: scroll;
  overflow-x: hidden;
}

#nav li:hover > div > div {
  display: block;
}
</style>
