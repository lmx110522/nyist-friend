<template>
  <div class="record_area">
    <van-toast id="van-toast"/>
    <van-notify id="van-notify"/>
    <van-dialog id="van-dialog"/>
    <div class="rad flex_row">
      <div class="detail_top">
        <van-image
          round
          width="140rpx"
          height="140rpx"
          src="http://qiniuyun.donghao.club/6.jpg"/>
        <div class="flex_col user_other">
          <span class="user_name">杨宁宁</span>
          <span class="user_qm user_name">生活一场修行，慢慢就会生活一场修行，慢慢就会生活一场修行，慢慢就会生活一场修行，慢慢就会</span>
          <span class="user_name" style="color: firebrick"> 粉丝：280</span>
        </div>
        <div class="gz">
          <van-button round plain size="small" color="#eee">
            <span block style="color: #37d6b1;font-weight: bold">关注我</span>
          </van-button>
        </div>
      </div>
    </div>
    <van-tabs :active="activeTab" @change="changeTab($event)" sticky animated color="#37d6b1">
      <van-tab title="发布列表">
        <div class="msg_list">
          <div class="title_msg base_word">
            <span class="secret_tz">累计10篇帖子</span>
            <span class="secret_tz" v-if="!isHide">
              <span style="color: firebrick">私密帖子：</span>
              <van-switch
                size="44rpx"
                :checked="isSecret"
                active-color="#37d6b1"
                inactive-color="white"
                @change="changeSecret"
              />
            </span>
          </div>
          <van-swipe-cell class="swipe-cell" right-width="120" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="primary">编辑</van-button>
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
          <van-swipe-cell class="swipe-cell" right-width="120" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="primary">编辑</van-button>
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
          <van-swipe-cell class="swipe-cell" right-width="120" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="primary">编辑</van-button>
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
          <van-swipe-cell class="swipe-cell" right-width="120" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="primary">编辑</van-button>
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>

      </van-tab>
      <van-tab title="浏览记录">
        <div class="msg_list">
          <div class="title_msg base_word">
            <span class="secret_tz">累计10篇帖子</span>
          </div>
          <van-swipe-cell class="swipe-cell" right-width="60" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>
      </van-tab>
      <van-tab title="收藏记录">
        <div class="msg_list">
          <div class="title_msg base_word">
            <span class="secret_tz">累计10篇帖子</span>
          </div>
          <van-swipe-cell class="swipe-cell" right-width="69" async-close @close="closeMsg">
            <van-cell-group>
              <view @tap="toDetail()">
                <div class="tz_one">
                                    <img src="http://qiniuyun.donghao.club/72d6540a555d11ea8a88acde48001122.jpg" @tap.stop="toDetail">
                  <div class="tz_content">
                    <h3 class="user_name base_word">转让二手书包</h3>
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
                    <div class="base_word tz_msg">
                      <span>2019-12-12 08:00:00</span>
                      <span>
                        <van-icon name="like-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="star-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                      <span>
                        <van-icon name="comment-o" color="red"></van-icon>
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                </div>
              </view>
            </van-cell-group>
            <div slot="right">
              <van-button custom-style="height: 190rpx" type="danger">删除</van-button>
            </div>
          </van-swipe-cell>
        </div>
      </van-tab>
      <van-tab :disabled="isHide" title="关注列表">
        <div class="title_msg base_word">
          <span class="secret_tz">关注了6位创作者</span>
        </div>
        <van-grid column-num="2" border>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/5.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/1.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/2.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/3.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/4.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/6.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="danger" size="small" @tap.stop="doGrid('确定取消关注吗')">取消关注</van-button>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab :disabled="isHide" title="粉丝列表">
        <div class="title_msg base_word">
          <span class="secret_tz">6位铁粉关注了您</span>
        </div>
        <van-grid column-num="2" border>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/5.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/1.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/2.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/3.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/4.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/6.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab :disabled="isHide" title="黑 名 单">
        <div class="title_msg base_word">
          <span class="secret_tz">6位你不太喜欢的贴主</span>
        </div>
        <van-grid column-num="2" border>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/5.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/1.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/2.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/3.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/4.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
          <van-grid-item @tap.stop="toUser" use-slot>
            <van-image
              round
              width="120rpx"
              height="120rpx"
              src="http://qiniuyun.donghao.club/6.jpg"
            />
            <span class="user_name other_name">杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁杨宁宁</span>
            <van-button type="primary" size="small" @tap.stop="doGrid('确定移除黑名单吗')">移除黑名单</van-button>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
    <van-notify id="van-notify"/>
  </div>
</template>

<script>
  import Dialog from '../../../static/vant/dialog/dialog'
  import Notify from '../../../static/vant/notify/notify'
  import {mapState} from 'vuex'
  import Toast from "../../../static/vant/toast/toast";


  export default {
    name: "Record",
    data() {
      return {
        isSecret: false,
        isHide: false
      }
    },
    methods: {
      doGrid(msg) {
        Dialog.confirm({
          title: '提醒',
          message: msg
        }).then(() => {
          Notify({type: 'primary', message: "取消关注成功"});
          // on confirm
        }).catch(() => {

        })
      },
      toUser() {
        wx.navigateTo({
          url: '/pages/record/main?isHide=true'
        })
      },
      toDetail() {
        wx.navigateTo({
          url: '/pages/detail/main'
        })
      },
      changeSecret() {
        this.isSecret = !this.isSecret
      },

      changeTab(event){
        if(event.mp.detail.index > 1 && this.isHide){
          Toast('用户设置为私密，无权限');
        }
      }
    },
    computed: {
      // 映射状态到本组件
      ...mapState(['activeTab'])
    },
    onLoad(options){
      console.log(options.isHide)
      console.log(options)
      this.$data.isHide = options.isHide;
    },
    onHide() {
      this.$store.dispatch('getActiveTab', {active_tab: 0});
    }
  }
</script>

<style>
  page {
    height: 100%;
  }

  .record_area {
    overflow-x: hidden;
  }

  .rad {
    background: #37d6b1;
    padding: 20rpx;
    width: 95%;
    height: 120rpx;
  }

  .detail_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  .flex_row {
    /*float: right;*/
    display: flex;
    flex-direction: row;
  }

  .flex_col {
    display: flex;
    flex-direction: column;
  }

  .user_other {
    margin-left: 20rpx;
    width: 80%;

  }

  .user_name {
    color: #333;
    font-weight: bold;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    font-size: 28rpx;
    margin-bottom: 4rpx;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
    width: 100%;
  }

  .other_name {
    font-weight: normal !important;
    width: 80% !important;
    text-align: center;
  }

  .user_qm {
    font-weight: normal !important;
    font-size: 26rpx !important;
  }

  .tz_one {
    display: flex;
    padding: 20rpx 32rpx;
    border-bottom: 1px solid #F7F7F7;
  }

  .tz_one img {
    width: 140rpx;
    height: 140rpx;
    border-radius: 0px;
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

  .tz_one .tz_content p, .tz_one .tz_content h3 {
    margin: 10rpx 0 0;
    font-size: 26rpx;
    line-height: 40rpx;
    width: 560rpx;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
  }

  .title_msg {
    width: 90%;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .secret_tz {
    color: #37d6b1;
    font-weight: bold;
    font-size: 26rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .base_word {
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }

  .msg_list {
    margin: 10rpx 0 0 0;
  }

  .tz_msg {
    font-size: 24rpx;
    align-items: center;
    display: flex;
    flex-direction: row;
    align-self: baseline;
  }

  .tz_msg span {
    margin-right: 10rpx;
  }

  .tz_one {
    border-bottom: 1px solid #E6E6E6;
  }

  .gz {
    position: absolute;
    top: 0rpx;
    right: 50rpx;
  }
</style>
