<template>
  <div class="user_area">
    <view>
      <div class="tz_one">
        <img :src="userInfo.avatarUrl">
        <div class="tz_content">
          <van-row>
            <van-col span="10">
              <h3 class="base_word" v-if="isShow">{{userInfo.nickName}}</h3>
              <van-button color="#37d6b1" v-else @click="getUserInfo"  size="small"  class="btn-large" open-type="getUserInfo"><span style="font-size: 30rpx;">{{userInfo.nickName}}</span></van-button>
            </van-col>
          </van-row>
          <p class="base_word" style="color: #FE2C54">
            {{userInfo.desc}}
          </p>
        </div>
      </div>
    </view>
    <view>
      <view>
        <van-cell title="VIP专属操作" icon="vip-card-o"/>
        <van-grid column-num="3">
          <van-grid-item icon="orders-o" icon-class="vip_do" text="我的发布" link-type="navigateTo"
                         url="/pages/record/main"/>
          <van-grid-item icon="eye-o" icon-class="vip_do" text="浏览记录" link-type="navigateTo" url="/pages/record/main"/>
          <van-grid-item icon="star-o" icon-class="vip_do" text="收藏记录" link-type="navigateTo" url="/pages/record/main"/>
          <van-grid-item icon="closed-eye" icon-class="vip_do" text="我的关注" link-type="navigateTo"
                         url="/pages/record/main"/>
          <van-grid-item icon="friends-o" icon-class="vip_do" text="我的粉丝" link-type="navigateTo"
                         url="/pages/record/main"/>
          <van-grid-item icon="coupon-o" icon-class="vip_do" text="黑 名 单" link-type="navigateTo"
                         url="/pages/record/main"/>
        </van-grid>
      </view>
    </view>
    <div class="user_system">
      <van-panel>
        <van-cell title="意见反馈" is-link link-type="navigateTo" url="/pages/editor/main" icon="envelop-o"/>
        <van-cell title="版本信息" is-link link-type="navigateTo" url="" icon="label-o"/>
        <van-cell title="关于我们" is-link link-type="navigateTo" url="" icon="user-o"/>
      </van-panel>
    </div>
    <div class="exit_btn">
      <van-button type="primary" color="#37d6b1" block v-if="isShow">退出登录</van-button>
    </div>
    <van-divider dashed contentPosition="center" customStyle="color: #37d6b1;border-color: #37d6b1;">
      @南工交友网2020
    </van-divider>
  </div>
</template>

<script>
  import { login, getUserInfo } from '@/utils/wechat'
  export default {
    name: "User",
    data() {
      return {
        userInfo: {
          nickName: '点击登录/注册',
          avatarUrl: 'http://qiniuyun.donghao.club/not-login.png',
          desc: "欢迎来到南工交友网，找对象，转二手物品等应有尽有"
        },
        isShow: false,
      }
    },
    methods: {
      async getUserInfo () {
        const data = await getUserInfo()
        this.userInfo = data.userInfo
        this.userInfo.desc = "快去找你感兴趣的南工讯息吧...."
        this.isShow = true
      }
    },
    mounted () {
      login().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style>
  page {
    background-color: #F7F7F7;
  }

  .exit_btn {
    margin-top: 20rpx;
  }

  .user_system {
    margin-top: 40rpx;
  }

  .tz_one {
    background: #37d6b1;
    display: flex;
    padding: 20rpx 32rpx;
    color: white;
    font-weight: bolder;
    border-bottom: 2rpx solid #37d6b1;
  }

  .tz_one img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    margin-right: 32rpx;
    flex-shrink: 0;
  }

  .tz_one .tz_content {
    padding-top: 12rpx;
  }

  .tz_one .tz_content h3 {
    margin: 0;
    font-size: 30rpx;
    line-height: 40rpx;
  }

  .tz_one .tz_content p {
    margin: 10rpx 0 0;
    font-size: 24rpx;
    line-height: 20px;
    width: 580rpx;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
  }

  .vip_do {
    color: #37d6b1;
  }

  .base_word {
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }
</style>
