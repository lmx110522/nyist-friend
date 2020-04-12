<template>
  <div class="detail_area">
    <van-toast id="van-toast"/>
    <div class="rad">
      <van-row>
        <van-col span="20">
          <div class="detail_top">
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/6.jpg"/>
            <span style="margin-left: 20rpx;font-weight: bold">李沫熙</span>
          </div>
        </van-col>
        <van-col span="4">
          <van-button round plain size="small" color="#eee">
            <span block style="color: #37d6b1;font-weight: bold">关注我</span>
          </van-button>
        </van-col>
      </van-row>
    </div>
    <van-panel title="字数1233222222" desc="2020-02-11 08:22" status="阅读29">
    </van-panel>
    <div class="title_area">
      <h1 class="title">转让二手电脑</h1>
    </div>
    <div class="rad_main text_item">
      <van-tag custom-class="title_tag" size="large" type="success">简要描述</van-tag>
      <pre class="main_text">
        二手电脑
      </pre>
      <van-tag custom-class="title_tag" size="large" type="primary">详细描述</van-tag>
      <pre class="detail_content">
        刚拿到手的时候大小包装盒很小，可以说的上是微型了，等到拆开包装才发现，这个移动硬盘真的是很小巧，很薄，很轻，我偷偷的用做蛋糕的秤称了一下，重量是117克，我下面会附照片，大家就知道了。尺寸的话，厚度比细烟的烟盒要薄，长度几乎一样，宽度大概宽出来四分之一的烟盒。上手手感很不错，这次我买了一个蓝色的硬盘，颜色比较吸睛，大家千篇一律都是黑的，白的，红的，我拿一个蓝色的，根本不需要做标记，就可以很完美的分清楚到底哪个硬盘是我的。数据端口采用的是USB3. 0，读取速度应该没问题。数据线相对来说比较简单…其实我觉得，数据传输线应该做的稍微长一些，最起码方便一下我们使用者，不一定我这个是接在哪里的啊，这方面厂家考虑着实有些不妥了
      </pre>
    </div>
    <div class="img_area">
      <img src="http://qiniuyun.donghao.club/452d89fc58dbd313.jpg" class="user_img">
      <img src="http://qiniuyun.donghao.club/731e215e555d11ea8a88acde48001122.jpg" class="user_img">
      <van-divider contentPosition="center" customStyle="color: #37d6b1;border-color: #37d6b1;font-size: 24rpx;">
        🤦‍♀️人家是有底线的🤦‍
      </van-divider>
    </div>
    <van-goods-action>
      <van-goods-action-icon
        icon="star"
        text="收藏"
        info="12"
        bind:click="onClickIcon"
      />
      <van-goods-action-icon
        icon="like"
        text="喜欢"
        info="3"
        icon-class="iconClass"
        text-class="iconClass"
        bind:click="onClickIcon"
      />
      <van-goods-action-icon
        info="12"
        icon="comment"
        text="评论"
        @click="showComment"
      />
      <van-goods-action-button
        text="微信"
        custom-class="btn_class"
        color="#37d6b1"
        @click="getWeChat"/>
    </van-goods-action>
    <van-popup
      closeable
      round
      close-icon="clear"
      position="bottom"
      custom-style="height: 90%"
      :show="isShow"
      @click-overlay='close'
      width="95%"
      @close="closeComment">
      <div class="comment_area">
        <Comment/>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Comment from "../comment/comment";
  import Toast from '../../../static/vant/toast/toast'

  export default {
    name: "Detail",
    components: {
      Comment
    },
    data() {
      return {
        isShow: true,
        openWechat: true
      }
    },
    methods: {
      getWeChat() {
        if (this.openWechat) {
          Toast.success('微信号已复制');
        } else {
          Toast('微信号未公开，去评论区@楼主吧！');
        }
      },
      showComment() {
        this.isShow = !this.isShow
      },
      closeComment() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style>
  page {
    background-color: #F7F7F7;
  }
  .detail_area{
    overflow-x:hidden;
  }
  .user_img {
    display: flex;
    margin: 20rpx auto;
    align-items: center;
  }

  .title {
    font-size: 40rpx;
    line-height: 50rpx;
    padding: 20rpx;
    font-weight: bolder;
    color: transparent;
     background-color: #37d6b1;
    text-shadow: rgba(255, 255, 255, 0.5) 0 12rpx 12rpx, rgba(255, 255, 255, 0.2) 2rpx 6rpx 6rpx;
     -webkit-background-clip: text;
    text-align: center;
  }

  .title_area {
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    background: white;
  }

  .detail_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }

  .rad {
    background: #37d6b1;
    border-bottom-right-radius: 30rpx;
    border-bottom-left-radius: 30rpx;
    padding: 20rpx;
    width: 95%;
    height: 120rpx;
  }

  .rad_main {
    border-top-left-radius: 40rpx;
    border-top-right-radius: 40rpx;
    padding: 20rpx;
    width: 95%;
    background: white;
    margin-bottom: 20rpx;
  }

  .main_text {
    color: #646566;
    font-size: 28rpx;
  }

  .img_area {
    margin-bottom: 15%;
  }

  .text_item {
    border-radius: 0 !important;
    width: 100%;
  }
  .detail_content{
    padding: 0px 20rpx;
  }
  .title_tag {
    margin: 10rpx 0px 20rpx;
  }

  .iconClass{
    /*color: #505052;*/
    color: #FE2C54;
  }
</style>
