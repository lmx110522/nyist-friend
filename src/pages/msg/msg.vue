<template>
  <div class="msg_area">
    <van-dialog  id="van-dialog" />
    <van-tabs active="a" sticky swipeable color="#37d6b1">
      <van-tab  info="5" title="@我" name="a">
        <div class="msg_list">
          <van-swipe-cell class="swipe-cell" right-width="65" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                  <img src="http://qiniuyun.donghao.club/6.jpg">
                  <div class="tz_content">
                    <van-row>
                      <van-col span="10"><h3 class="user_name base_word">李沫熙</h3></van-col>
                      <van-col class="tz_tag" span="14">

                      </van-col>
                    </van-row>
                    <p class="base_word">
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                    </p>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 140rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>
      </van-tab>
      <van-tab title="评论" name="b">
        <div class="msg_list">
          <van-swipe-cell class="swipe-cell" right-width="65" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                  <img src="http://qiniuyun.donghao.club/6.jpg">
                  <div class="tz_content">
                    <van-row>
                      <van-col span="10"><h3 class="user_name base_word">李沫熙</h3></van-col>
                      <van-col class="tz_tag" span="14">

                      </van-col>
                    </van-row>
                    <p class="base_word">
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                    </p>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 140rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>
      </van-tab>
      <van-tab title="点赞" name="c">
        <div class="msg_list">
          <van-swipe-cell class="swipe-cell" right-width="65" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                  <img src="http://qiniuyun.donghao.club/6.jpg">
                  <div class="tz_content">
                    <van-row>
                      <van-col span="10"><h3 class="user_name base_word">李沫熙</h3></van-col>
                      <van-col class="tz_tag" span="14">

                      </van-col>
                    </van-row>
                    <p class="base_word">
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                      这个商品正好你需要@张三三
                    </p>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 140rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Dialog from '../../../static/vant/dialog/dialog'

  export default {
    name: "Msg",
    methods: {
      closeMsg(event) {
        const position = event.mp.detail.position;
        const instance = event.mp.detail.instance;
        switch (position) {
          case 'left':
          case 'cell':
            instance.close();
            break;
          case 'right':
            Dialog.confirm({
              title: '提醒',
              message: '确定要删除这条消息吗'
            }).then(() => {
              // on confirm
            }).catch(() => {
              instance.close();
            })
            break;
        }
      },
      toDetail(){
        wx.navigateTo({
          url: '/pages/detail/main'
        })
      }
    }
  }
</script>

<style scoped>
  .tz_one {
    display: flex;
    padding: 20rpx 32rpx;
    border-bottom: 2rpx solid #F7F7F7;
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
    margin: 0;
    font-size: 30rpx;
    line-height: 40rpx;
  }

  .tz_one .tz_content p {
    margin: 10rpx 0 0;
    font-size: 24rpx;
    line-height: 40rpx;
    width: 600rpx;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
  }

  .msg_list {
    margin: 10rpx 0 0 0;
  }

  .user_name {
    line-height: 50rpx;
    font-weight: bolder;
    color: transparent;
     background-color: black;
    text-shadow: rgba(255, 255, 255, 0.5) 0 12rpx 12rpx, rgba(255, 255, 255, 0.2) 2rpx 6rpx 6rpx;
     -webkit-background-clip: text;
  }
  .base_word {
    color: #333;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }
</style>
