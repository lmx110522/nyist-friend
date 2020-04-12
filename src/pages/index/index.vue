<template>
  <div>
    <div class="container skeleton">
      <!-- 引入skeleton -->
      <skeleton selector="skeleton"
                loading="spin"
                bgcolor="#FFF"
                v-if="showSkeleton"></skeleton>
      <!--    <van-notice-bar-->
      <!--      mode="closeable"-->
      <!--      text="欢迎您来到南工交友网(南阳理工)，这里有很多有意思的帖子，找对象，丢失找回都可以在这里发生，快去发帖吧"-->
      <!--    />-->
      <swiper class="swiper" circular @change="swiperChange($event)" indicator-dots="true" :style="{'height':Height}"
              autoplay="false" interval="5000" duration="500">
        <block v-for="(item, idx) in imgUrls" :key="idx">
          <swiper-item>
            <image :src="item" class="swiper_img skeleton-rect" mode="widthFix" @load='imgHeight($event)'/>
          </swiper-item>
        </block>
      </swiper>
      <div class="good_user">
        <div class="left_div base_word">
          <span class="topic_name skeleton-rect">最热门贴主</span>
          <van-grid column-num="3" :border="showBorder1">
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/1.jpg"/>
                <image class="grid_logo skeleton-radius" src="http://qiniuyun.donghao.club/first.png"></image>
              </div>
            </van-grid-item>
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/2.jpg"/>
                <image class="grid_logo skeleton-radius" src="http://qiniuyun.donghao.club/second.png"></image>
              </div>
            </van-grid-item>
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/3.jpg"/>
                <image class="grid_logo skeleton-radius" src="http://qiniuyun.donghao.club/third.png"></image>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <div class=" base_word ">
          <span class="topic_name skeleton-rect">新人贴主</span>
          <van-grid column-num="3" :border="showBorder1">
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/4.jpg"/>
                <van-button class="skeleton-rect" type="info">关注</van-button>
              </div>
            </van-grid-item>
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/5.jpg"/>
                <van-button class="skeleton-rect" type="info">关注</van-button>
              </div>
            </van-grid-item>
            <van-grid-item use-slot wx:for-item="index">
              <div class="grid_topic">
                <image
                  class="skeleton-radius"
                  src="http://qiniuyun.donghao.club/8.jpg"/>
                <van-button class="skeleton-rect" type="info">关注</van-button>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <!--    帖子列表-->
      <div class="tz_area">
        <div class="tz_topic base_word">
          <span class="topic_name skeleton-rect">最新帖子</span>
          <span @tap="toFind" class="topic_all skeleton-rect">全部帖子<van-icon name="arrow"></van-icon></span>
        </div>
        <div class="tz_item">
          <view @tap="toDetail()">
            <div class="tz_one"><img class="skeleton-radius" src="http://qiniuyun.donghao.club/2.jpg">
              <div class="tz_content">
                <div class="tz_tag ">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word skeleton-rect">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word skeleton-rect">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                <div class="comment_other">
                  <span class="comment_date">25分钟前</span>
                </div>
              </div>
            </div>
          </view>
        </div>
        <div class="tz_item">
          <view @tap="toDetail()">
            <div class="tz_one"><img class="skeleton-radius" src="http://qiniuyun.donghao.club/8.jpg">
              <div class="tz_content">
                <div class="tz_tag ">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word skeleton-rect">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word skeleton-rect">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                <div class="comment_other">
                  <span class="comment_date">25分钟前</span>
                </div>
              </div>
            </div>
          </view>
        </div>
        <div class="tz_item">
          <view @tap="toDetail()">
            <div class="tz_one"><img class="skeleton-radius" src="http://qiniuyun.donghao.club/7.jpg">
              <div class="tz_content">
                <div class="tz_tag ">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word skeleton-rect">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word skeleton-rect">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                <div class="comment_other">
                  <span class="comment_date">25分钟前</span>
                </div>
              </div>
            </div>
          </view>
        </div>
        <div class="tz_item">
          <view @tap="toDetail()">
            <div class="tz_one"><img class="skeleton-radius" src="http://qiniuyun.donghao.club/6.jpg">
              <div class="tz_content">
                <div class="tz_tag ">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word skeleton-rect">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word skeleton-rect">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                <div class="comment_other">
                  <span class="comment_date">25分钟前</span>
                </div>
              </div>
            </div>
          </view>
        </div>
        <div class="tz_item">
          <view @tap="toDetail()">
            <div class="tz_one"><img class="skeleton-radius" src="http://qiniuyun.donghao.club/1.jpg">
              <div class="tz_content">
                <div class="tz_tag ">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word skeleton-rect">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word skeleton-rect">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                <div class="comment_other">
                  <span class="comment_date">25分钟前</span>
                </div>
              </div>
            </div>
          </view>
        </div>

        <van-divider contentPosition="center" dashed>只显示最新五条</van-divider>
      </div>
      <img src="http://qiniuyun.donghao.club/active-user3.png" @load='adImgHeight($event)' class="ad_area skeleton-rect"
           :style="{'height':adHeight,'width':'100%'}">
      <div class="active_user_area">
        <div class="tz_topic base_word">
          <span style="color: #07c160" class="topic_name skeleton-rect">活跃贴主榜</span>
          <span class="topic_all skeleton-rect">多发优质贴吧最具有活跃度<van-icon color="red" name="fire"></van-icon></span>
        </div>
        <van-grid column-num="3" :border="showBorder" clickable>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/1.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">李沫熙</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/2.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">李茂展李茂展李茂展李茂展李茂展李茂展李茂展李茂展</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/3.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">活跃的小鱼儿</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/4.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">李茂展李茂展</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/1.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">李茂展李茂展</span>
            </div>
          </van-grid-item>
          <van-grid-item use-slot wx:for-item="index">
            <div class="grid_topic">
              <image
                class="skeleton-radius"
                src="http://qiniuyun.donghao.club/3.jpg"
              />
              <span class="base_word active_user_name skeleton-rect">李茂展李茂展</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <van-icon class="floating-button" name="add-o" size="50" @tap="postTz"/>
  </div>
</template>

<script>
  import skeleton from '@/components/skeleton';
  import Global from "@/utils/global";

  export default {
    name: "Index",
    components: {
      skeleton,
    },
    data() {
      return {
        imgUrls: [
          'http://qiniuyun.donghao.club/jiaoyou.png',
          'http://qiniuyun.donghao.club/zhaodongxi.png',
          'http://qiniuyun.donghao.club/xunwen.png',
          'http://qiniuyun.donghao.club/12.png',
        ],
        idx: '',
        showBorder: true,
        showBorder1: false,
        loading: false,
        Height: '',
        adHeight: '',
        bgColor: ['#FED637', '#36CAC4', '#F5A624', '#D8D6DE'],
        showSkeleton: false
      }
    },
    methods: {
      toFind() {
        wx.switchTab({
          url: '/pages/find/main'
        })
      },
      imgHeight(e) {
        var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
        var imgh = e.target.height;//图片高度
        var imgw = e.target.width;//图片宽度
        var swiperH = winWid * imgh / imgw + "px"//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.Height = swiperH;
      },
      adImgHeight(e) {
        var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
        var imgh = e.target.height;//图片高度
        var imgw = e.target.width;//图片宽度
        var swiperH = winWid * imgh / imgw + "px"//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.adHeight = swiperH;
      },
      getCateList(index) {
        this.activeIndex = index
      },
      toDetail() {
        wx.navigateTo({
          url: '/pages/detail/main'
        })
      },
      postTz() {
        wx.navigateTo({
          url: '/pages/ft/main'
        })
      },
      swiperChange(e) {
        Global.swiperCurrent = e.target.current
        if (!this.showSkeleton) {
          wx.setNavigationBarColor({
            frontColor: "#000000",/*标题颜色，这里貌似仅支持 #ffffff 和 #000000 */
            backgroundColor: this.bgColor[e.target.current],/*背景色 十六进制即可*/
            animation: {/*动画*/
              duration: 500,
              timingFunc: 'easeIn'
            }
          })
        }
      }
    },
    onShow() {
      this.bgColor = ['#FED637', '#36CAC4', '#F5A624', '#D8D6DE'];
      wx.setNavigationBarColor({
        frontColor: "#000000",/*标题颜色，这里貌似仅支持 #ffffff 和 #000000 */
        backgroundColor: this.bgColor[Global.swiperCurrent],/*背景色 十六进制即可*/
        animation: {/*动画*/
          duration: 0,
          timingFunc: 'easeIn'
        }
      })
    },
    onHide() {
      this.bgColor = ['#37d6b1', '#37d6b1', '#37d6b1', '#37d6b1'];
    }
  }
</script>

<style>
  page {
    background-color: #F7F7F7;
  }

  .container {
    width: 100%;
  }

  .swiper_img {
    height: 240rpx;
    width: 100%;
  }

  .tz_one {
    display: flex;
    padding: 0 32rpx;
  }

  .tz_one img {
    width: 90rpx;
    height: 90rpx;
    border-radius: 50%;
    margin-right: 32rpx;
    flex-shrink: 0;
  }

  .tz_content {
    margin: 0;
    padding: 0;
  }

  .tz_one .tz_content h3 {
    font-size: 30rpx;
    line-height: 40rpx;
  }

  .tz_one .tz_content pre {
    font-size: 30rpx;
    line-height: 48rpx;
  }

  .tz_tag {
    float: right;
  }

  .tz_tag van-tag {
    margin-left: 4rpx;
  }

  .tz_area {
    margin: 10rpx 0;
    background: white;
  }

  .floating-button {
    color: #fff;
    position: fixed;
    right: 32rpx;
    bottom: 176rpx;
    width: 112rpx;
    height: 112rpx;
    border-radius: 50%;
    z-index: 1500;
    overflow: hidden;
    transition-duration: 300ms;
    box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, .19), 0 12rpx 12rpx rgba(0, 0, 0, .23);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #37d6b1;
  }

  .base_word {
    color: #333;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }

  .text_title {
    font-size: 28rpx;
    font-weight: bolder;
    color: transparent;
     background-color: black;
    text-shadow: rgba(255, 255, 255, 0.5) 0 12rpx 12rpx, rgba(255, 255, 255, 0.2) 2rpx 6rpx 6rpx;
     -webkit-background-clip: text;
  }

  .main_content {
    font-size: 24rpx;
    margin-top: 10rpx;
    color: #2B2B2B;
  }

  .tz_item {
    margin-bottom: 40rpx;
  }

  .ad_area {
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
  }

  .active_user_area {
    background: white;
  }

  .active_user_area image {
    height: 90rpx;
    width: 90rpx;
    border-radius: 50%;
  }

  .good_user image {
    margin-bottom: 15rpx;
    height: 90rpx;
    width: 90rpx;
    border-radius: 50%;
  }

  .tz_topic {
    margin: 0 auto;
    width: 90%;
    height: 120rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .tz_topic .topic_all {
    font-size: 20rpx;
    color: #505052;
  }

  .tz_topic .topic_name {
    font-size: 40rpx;
    background: orangered;
    font-weight: bolder;
    -webkit-background-clip: text;
    color: transparent;
  }

  .comment_date {
    font-size: 20rpx;
    margin-top: 8rpx;
    color: orangered;
  }

  .comment_other {
    float: right;
  }

  .good_user {
    padding: 15rpx;
    background: white;
    display: flex;
    flex-direction: row;
    margin-bottom: 20rpx;
  }

  .good_user .left_div {
    border-right: 5rpx solid #F7F7F7;
  }

  .good_user .topic_name {
    font-size: 30rpx;
    color: #FE2C54;
    text-align: left;
    padding-left: 25rpx;
    font-weight: bold;
  }

  .grid_topic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .good_user > div {
    width: 50%;
  }

  .active_user_area .active_user_name {
    display: block;
    width: 200rpx;
    text-align: center;
    color: #505052;
    font-size: 24rpx;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
  }
</style>
