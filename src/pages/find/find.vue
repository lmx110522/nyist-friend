<template>
  <div>
    <skeleton selector="skeleton"
              loading="spin"
              bgcolor="#FFF"
              v-if="showSkeleton"></skeleton>
    <van-search
      shape="round"
      background="#37d6b1"
      placeholder="请输入搜索关键词"
      input-align="center"
      use-action-slot
    >
      <view slot="action" @tap="onClick">
        <span class="base_word" style="color: white">搜索</span>
      </view>
    </van-search>
    <!--    // 帖子分类-->
    <view class="tz_cate">
      <van-grid clickable column-num="3">
        <van-grid-item :icon="cate.icon" :dot="index == activeIndex"  :text="cate.text" v-for="(cate,index) in cateList"
                       :key="index"
                       @tap="getCateList(index)" :icon-class="index == activeIndex?'vip_do':''" :text-class="index == activeIndex?'vip_do':''"/>
      </van-grid>
    </view>
    <!--    筛选-->
    <div class="choose_area">
      <van-dropdown-menu active-color="#37d6b1">
        <van-dropdown-item :value=" value1" :options="option1"/>
        <van-dropdown-item id="item" :title="itemTitle">
          <van-cell :title="switchTitle1">
            <van-switch
              active-color="#37d6b1"
              slot="right-icon"
              size="28rpx"
              style="height: 26px"
              :checked="switch1"
              @change="switch1Change"
            />
          </van-cell>
          <van-cell :title="switchTitle2">
            <van-switch
              slot="right-icon"
              active-color="#37d6b1"
              size="28rpx"
              style="height: 26px"
              :checked="switch2"
              @change="switch2Change"/>
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <!--    帖子列表-->
    <div class="main_content">
      <div class="tz_area">
        <div class="tz_item">
          <van-skeleton
            title
            avatar
            row="3"
            :loading="loading">
            <view @tap="toDetail()">
              <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
                <div class="tz_content">
                  <div class="tz_tag">
                    <van-tag type="success">精华</van-tag>
                    <van-tag type="danger">热门</van-tag>
                    <van-tag color="#1296db">置顶</van-tag>
                  </div>
                  <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                  <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                </div>
              </div>
            </view>
          </van-skeleton>
        </div>
        <div class="tz_item">
          <van-skeleton
            title
            avatar
            row="3"
            :loading="loading">
            <view @tap="toDetail()">
              <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
                <div class="tz_content">
                  <div class="tz_tag">
                    <van-tag type="success">精华</van-tag>
                    <van-tag type="danger">热门</van-tag>
                    <van-tag color="#1296db">置顶</van-tag>
                  </div>
                  <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                  <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                </div>
              </div>
            </view>
          </van-skeleton>
        </div>
        <div class="tz_item">
          <van-skeleton
            title
            avatar
            row="3"
            :loading="loading">
            <view @tap="toDetail()">
              <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
                <div class="tz_content">
                  <div class="tz_tag">
                    <van-tag type="success">精华</van-tag>
                    <van-tag type="danger">热门</van-tag>
                    <van-tag color="#1296db">置顶</van-tag>
                  </div>
                  <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                  <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                </div>
              </div>
            </view>
          </van-skeleton>
        </div>
        <div class="tz_item">
          <van-skeleton
            title
            avatar
            row="3"
            :loading="loading">
            <view @tap="toDetail()">
              <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
                <div class="tz_content">
                  <div class="tz_tag">
                    <van-tag type="success">精华</van-tag>
                    <van-tag type="danger">热门</van-tag>
                    <van-tag color="#1296db">置顶</van-tag>
                  </div>
                  <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                  <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                </div>
              </div>
            </view>
          </van-skeleton>
        </div>
        <div class="tz_item">
          <van-skeleton
            title
            avatar
            row="3"
            :loading="loading">
            <view @tap="toDetail()">
              <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
                <div class="tz_content">
                  <div class="tz_tag">
                    <van-tag type="success">精华</van-tag>
                    <van-tag type="danger">热门</van-tag>
                    <van-tag color="#1296db">置顶</van-tag>
                  </div>
                  <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                  <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
                </div>
              </div>
            </view>
          </van-skeleton>
        </div>
        <div class="tz_item">
        <van-skeleton
          title
          avatar
          row="3"
          :loading="loading">
          <view @tap="toDetail()">
            <div class="tz_one"><img src="http://qiniuyun.donghao.club/6.jpg">
              <div class="tz_content">
                <div class="tz_tag">
                  <van-tag type="success">精华</van-tag>
                  <van-tag type="danger">热门</van-tag>
                  <van-tag color="#1296db">置顶</van-tag>
                </div>
                <div><span class="text_title base_word">怎么把div定位到页面窗口的右上角，急急急</span></div>
                <pre class="main_content base_word">
		百度前端技术学院是由百度多模交互搜索部EFE团队、百度校园品牌部、百度校园招聘团队创建的面向大学生的前端技术学习平台。
              </pre>
              </div>
            </div>
          </view>
        </van-skeleton>
      </div>
      </div>
    </div>
    <van-divider contentPosition="center" customStyle="color: #37d6b1;border-color: #37d6b1;font-size: 24rpx;">小南工是有底线的
    </van-divider>
    <view class="backTop" @tap='backTop'>
      <span style="color: red;font-weight: bolder">顶</span>
    </view>
  </div>
</template>

<script>
  export default {
    name: "Find",
    data() {
      return {
        cateList: [
          {
            "icon": "home-o",
            "text": "全部贴"
          },
          {
            "icon": "points",
            "text": "二手商品"
          },
          {
            "icon": "like-o",
            "text": "表白贴"
          },
          {
            "icon": "paid",
            "text": "寻丢失贴"
          },
          {
            "icon": "records",
            "text": "面试经验"
          },
          {
            "icon": "question-o",
            "text": "其他咨询"
          },
        ],
        activeIndex: 0,
        switchTitle1: '热门',
        switchTitle2: '精华',
        itemTitle: '筛选',
        switch1: false,
        switch2: false,
        option1: [
          {text: '全部日期', value: 0},
          {text: '今天', value: 1},
          {text: '最近一个月', value: 2},
          {text: '最近六个月', value: 3}
        ],
        value1: 0,
        loading: false,
      }
    },
    methods: {
      getCateList(index) {
        this.activeIndex = index
      },
      toDetail() {
        wx.navigateTo({
          url: '/pages/detail/main'
        })
        console.log("哈哈")
      },
      confirm() {
        this.selectComponent('#item').toggle();
      },

      switch1Change() {
        this.switch1 = !this.switch1;
      },

      switch2Change() {
        this.switch2 = !this.switch2;
      },
      // 滚动到顶部
      backTop() {
        // 控制滚动
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    },
    computed: {
      switch1(n, o) {
        console.log("哈哈")
        console.log(n)
        this.switch1 = n;
      },
      switch2(n, o) {
        this.switch2 = n
      }
    },
  }
</script>

<style>
  page {

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

  .tz_one .tz_content h3 {
    margin: 0;
    font-size: 30rpx;
    line-height: 40rpx;
  }

  .tz_one .tz_content pre {
    font-size: 30rpx;
    line-height: 48rpx;
  }

  .tz_content {
    margin: 0;
    padding: 0;
  }

  .tz_tag {
    float: right;
  }


  .tz_tag van-tag {
    margin-left: 4rpx;
  }

  .choose_area {
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2), 0 0 20rpx rgba(0, 0, 0, 0.1) inset;
  }

  .text_title {
    font-size: 28rpx;
    line-height: 50rpx;
    font-weight: bolder;
    color: transparent;
     background-color: black;
    text-shadow: rgba(255, 255, 255, 0.5) 0 12rpx 12rpx, rgba(255, 255, 255, 0.2) 2rpx 6rpx 6rpx;
     -webkit-background-clip: text;
  }

  .main_content {
    margin-top: 10rpx;
    color: #2B2B2B;
  }

  .tz_item {
    margin-bottom: 40rpx;
  }

  .vip_do {
    color: #FE2C54 !important;
    font-weight: bolder;
  }

  .base_word {
    color: #333;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }

  .backTop {
    width: 60rpx;
    height: 60rpx;
    background: #fff;
    position: fixed;
    right: 20rpx;
    bottom:120rpx;
    border-radius: 30rpx;
    box-shadow: 0px 0px 2px #000;
    line-height: 60rpx;
    text-align: center
  }

  .backTop text {
    font-size: 40rpx;
  }
</style>
