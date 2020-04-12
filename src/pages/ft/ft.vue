<template>
  <div>
    <van-cell-group>
      <div class="newArticle">
        <div class="acticle-title">
          <van-cell-group>
            <van-field :custom-style="base_word"
                       :label="titleName"
                       :value="title"
                       placeholder="想一个响亮的标题上热门"
                       :border="false"
                       type="textarea"
                       autosize
                       clearable
                       clickable
                       left-icon="label-o"
                       required
                       show-word-limit
                       maxlength="30"/>
          </van-cell-group>
          <van-cell-group>
            <van-field :custom-style="base_word"
                       :label="descName"
                       :value="title"
                       type="textarea"
                       placeholder="写一个描述吸引别人的眼球"
                       autosize
                       clickable
                       required
                       maxlength="60"
                       show-word-limit
                       left-icon="description"
                       clearable
                       autosize/>
          </van-cell-group>
        </div>
        <van-collapse>
          <van-collapse-item icon="cluster-o" @click="closeSelect" :title="cateName">
          </van-collapse-item>
        </van-collapse>
        <van-collapse :value="activeName" @change="openUpload" accordion>
          <van-collapse-item icon="photo-o" title="上传附加照片(最多5张)" name="1">
            <van-uploader
              :file-list="fileList"
              max-count="5"
              @before-read="beforeRead"
              @after-read="afterRead"/>
          </van-collapse-item>
        </van-collapse>
        <van-action-sheet
          :show="showSelect"
          :actions="actions"
          @close="closeSelect"
          @select="doSelect"
        />
        <van-row>
          <div class="other_field">
            <van-icon name="bullhorn-o" color="red"/>
            <span style="font-size: 28rpx;margin-left: 14rpx" class="base_word">公开微信</span>
            <van-switch
              size="50rpx"
              @change="changeOpenStatus"
              :checked="isOpenWechat"
              active-color="#37d6b1"/>
          </div>
        </van-row>
        <van-row>
          <div class="other_field">
            <van-icon name="browsing-history-o" color="red"/>
            <span style="font-size: 28rpx;margin-left: 14rpx" class="base_word">私密模式</span>
            <van-switch
              size="50rpx"
              @change="changeIsSercet"
              :checked="isSercet"
              active-color="#37d6b1"/>
          </div>
        </van-row>
        <div class="base_word tz_content">
          <van-icon  name="records"></van-icon>
          帖子内容
        </div>
        <div class="article-edit">
          <div class="article-main">
            <div class='toolbar' @click="format">
              <i v-if="config.bold" :class="'iconfont icon-zitijiacu ' + (formats.bold ? 'ql-active' : '')"
                 data-name="bold"></i>
              <i v-if="config.italic" :class="'iconfont icon-zitixieti ' + (formats.italic ? 'ql-active' : '')"
                 data-name="italic"></i>
              <i v-if="config.underline" :class="'iconfont icon-zitixiahuaxian ' + (formats.bold ? 'ql-active' : '')"
                 data-name="underline"></i>
              <i v-if="config.strike" :class="'iconfont icon-zitishanchuxian ' + (formats.bold ? 'ql-active' : '')"
                 data-name="strike"></i>
              <i v-if="config.alignLeft"
                 :class="'iconfont icon-zuoduiqi ' + (formats.align === 'left' ? 'ql-active' : '')" data-name="align"
                 data-value="left"></i>
              <i v-if="config.alignCenter"
                 :class="'iconfont icon-juzhongduiqi  ' + (formats.align === 'center' ? 'ql-active' : '')"
                 data-name="align" data-value="center"></i>
              <i v-if="config.alignRight"
                 :class="'iconfont icon-youduiqi  ' + (formats.align === 'right' ? 'ql-active' : '')" data-name="align"
                 data-value="right"></i>
              <i v-if="config.justify"
                 :class="'iconfont icon-zuoyouduiqi  ' + (formats.align === 'justify' ? 'ql-active' : '')"
                 data-name="align" data-value="justify"></i>
              <i v-if="config.lineHeight" :class="'iconfont icon-line-height ' + (formats.bold ? 'ql-active' : '')"
                 data-name="lineHeight" data-value="2"></i>
              <i v-if="config.letterSpacing"
                 :class="'iconfont icon-Character-Spacing  ' + (formats.letterSpacing ? 'ql-active' : '')"
                 data-name="letterSpacing" data-value="2em"></i>
              <i v-if="config.marginTop"
                 :class="'iconfont icon-722bianjiqi_duanqianju ' + (formats.marginTop ? 'ql-active' : '')"
                 data-name="marginTop" data-value="20px"></i>
              <i v-if="config.marginBottom"
                 :class="'iconfont icon-723bianjiqi_duanhouju ' + (formats.micon-previewarginBottom ? 'ql-active' : '')"
                 data-name="marginBottom" data-value="20px"></i>
              <i v-if="config.removeFormat" class="iconfont icon-clearedformat" @click="removeFormat"></i>
              <i v-if="config.fontFamily" :class="'iconfont icon-font ' + (formats.fontFamily ? 'ql-active' : '')"
                 data-name="fontFamily" data-value="Pacifico"></i>
              <i v-if="config.fontSize"
                 :class="'iconfont icon-fontsize ' + (formats.fontSize === '24px' ? 'ql-active' : '')"
                 data-name="fontSize" data-value="24px"></i>

              <i v-if="config.color"
                 :class="'iconfont icon-text_color ' + (formats.color === '#0000ff' ? 'ql-active' : '')" data-name="color"
                 data-value="#0000ff"></i>
              <i v-if="config.backgroundColor"
                 :class="'iconfont icon-fontbgcolor ' + (formats.backgroundColor === '#00ff00' ? 'ql-active' : '')"
                 data-name="backgroundColor" data-value="#00ff00"></i>

              <i v-if="config.insertDate" class="iconfont icon-date" @click="insertDate"></i>
              <i v-if="config.listCheck" class="iconfont icon--checklist" data-name="list" data-value="check"></i>
              <i v-if="config.listOrdered"
                 :class="'iconfont icon-youxupailie ' + (formats.list === 'ordered' ? 'ql-active' : '')" data-name="list"
                 data-value="ordered"></i>
              <i v-if="config.listBullet"
                 :class="'iconfont icon-wuxupailie ' + (formats.list === 'bullet' ? 'ql-active' : '')" data-name="list"
                 data-value="bullet"></i>
              <i v-if="config.undo" class="iconfont icon-undo" @click="undo"></i>
              <i v-if="config.redo" class="iconfont icon-redo" @click="redo"></i>

              <i v-if="config.indentReduce" class="iconfont icon-outdent" data-name="indent" data-value="-1"></i>
              <i v-if="config.indentAdd" class="iconfont icon-indent" data-name="indent" data-value="+1"></i>
              <i v-if="config.insertDivider" class="iconfont icon-fengexian" @click="insertDivider"></i>
              <i v-if="config.insertImage" class="iconfont icon-charutupian" @click="insertImage"></i>
              <i v-if="config.header"
                 :class="'iconfont icon-format-header-1  ' + (formats.header === 1 ? 'ql-active' : '')" data-name="header"
                 data-value="1"></i>
              <i v-if="config.scriptSub"
                 :class="'iconfont icon-zitixiabiao  ' + (formats.script === 'sub' ? 'ql-active' : '')" data-name="script"
                 data-value="sub"></i>
              <i v-if="config.scriptSuper"
                 :class="'iconfont icon-zitishangbiao  ' + (formats.script === 'super' ? 'ql-active' : '')"
                 data-name="script" data-value="super"></i>
              <!-- <i class="iconfont icon-quanping"></i> -->
              <i v-if="config.clear" class="iconfont icon-shanchu" @click="clear"></i>
              <i v-if="config.direction"
                 :class="'iconfont icon-direction-rtl  ' + (formats.direction === 'rtl' ? 'ql-active' : '')"
                 data-name="direction" data-value="rtl"></i>
            </div>
            <editor id="editor" class="ql-container" :placeholder="placeholder" showImgSize showImgToolbar showImgResize
                    @statuschange="onStatusChange" @ready="onEditorReady">
            </editor>
          </div>
        </div>
      </div>
      <div class="ft_btn">
        <van-button type="primary" color="#37d6b1" block>发帖</van-button>
      </div>
    </van-cell-group>
    <van-toast id="van-toast"/>
  </div>

</template>

<script>
  import Toast from '../../../static/vant/toast/toast'
  export default {
    name: "Ft",
    config: {
      navigationBarTitleText: '编辑贴子',
      navigationBarTextStyle: 'black',
      navigationBarBackgroundColor: '#FFFFFF'
    },
    data() {
      return {
        formData: {
          "title": "",
          "desc": "",
          "mainText": ""
        },
        cateName: "给你的帖子挑一个类别",
        fileList: [],
        activeName: '1',
        isOpenWechat: false,
        isSercet: false,
        showSelect: false,
        actions: [
          {
            name: '二手商品贴'
          },
          {
            name: '表白贴'
          },
          {
            name: '寻丢失贴',
          },
          {
            name: '面试贴',
            subname: '找工作询问'
          },
          {
            name: '其他贴',
            subname: '后续会补齐'
          }
        ],
        titleName: '贴子标题',
        descName: '贴子简要',
        title: '',
        main: '',
        placeholder: '请输入贴子内容',
        editorCtx: null,
        formats: {},
        config: {
          /** 配置粗体 */
          bold: true,
          italic: true,
          underline: true,
          strike: true,
          alignLeft: false,
          alignCenter: false,
          alignRight: false,
          justify: true,
          lineHeight: true,
          letterSpacing: true,
          marginBottom: true,
          removeFormat: true,
          fontFamily: true,
          fontSize: true,
          color: true,
          backgroundColor: true,
          insertDate: true,
          listCheck: true,
          listOrdered: true,
          listBullet: true,
          undo: true,
          redo: true,
          indentReduce: false,
          indentAdd: false,
          insertDivider: false,
          insertImage: false,
          header: false,
          scriptSub: false,
          scriptSuper: false,
          clear: false,
          direction: false
        },
        base_word: "color: #333;\n" +
          "    font-family: Helvetica, Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"微软雅黑\", STHeiti, \"华文细黑\", sans-serif;\n" +
          "    line-height: 25px;"
      }
    },
    methods: {
      closeSelect() {
        this.showSelect = !this.showSelect
      },
      doSelect(event) {
        this.cateName = event.target.name
      },
      changeOpenStatus() {
        this.isOpenWechat = !this.isOpenWechat
        let msg = this.isOpenWechat ? "微信被公开" : "微信不公开"
        Toast.fail(msg);
      },
      changeIsSercet() {
        this.isSercet = !this.isSercet
        let msg = this.isSercet ? "文章私密" : "文章公开"
        Toast.fail(msg);
      },
      openUpload() {
        this.activeName = this.activeName == "1" ? "0" : "1"
      },
      beforeRead(event) {

      },
      afterRead(event) {
        const {file} = event.detail;
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: file.path,
          name: 'file',
          formData: {user: 'test'},
          success(res) {
            // 上传完成需要更新 fileList
            const {fileList = []} = this.data;
            fileList.push({...file, url: res.data});
            this.setData({fileList});
          }
        });
      },
      format(e) {
        console.log('format')
        console.log(e)
        let {name, value} = e.target.dataset
        if (!name) return
        this.editorCtx.format(name, value)
      },
      onEditorReady() {
        console.log('onEditorReady')
        const that = this
        wx.createSelectorQuery().select('#editor').context(function (res) {
          that.editorCtx = res.context
          console.log(that.editorCtx)
        }).exec()
      },
      onStatusChange(e) {
        console.log(e)
        this.formats = e.mp.detail
      },
      removeFormat() {
        this.editorCtx.removeFormat()
      },
      insertDate() {
        const date = new Date()
        const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        this.editorCtx.insertText({
          text: formatDate
        })
      },
      undo() {
        this.editorCtx.undo()
      },
      redo() {
        this.editorCtx.redo()
      },
      insertDivider() {
        this.editorCtx.insertDivider({
          success: function () {
            console.log('insert divider success')
          }
        })
      },
      clear() {
        this.editorCtx.clear({
          success: function (res) {
            console.log('clear success')
          }
        })
      },
      insertImage() {
        const that = this
        wx.chooseImage({
          count: 1,
          success: function () {
            that.editorCtx.insertImage({
              src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543767268337&di=5a3bbfaeb30149b2afd33a3c7aaa4ead&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151031%2Ftooopen_sy_147004931368.jpg',
              data: {
                id: 'abcd',
                role: 'god'
              },
              success: function () {
                console.log('insert image success')
              }
            })
          }
        })
      }
    },
    onLoad() {
      console.log('onLoad')
    },
    onShow() {
      console.log('onShow')
    },
    /** 页面加载完成时调用函数 */
    mounted() {
      console.log('mounted')
      console.log(wx.api)
      const that = this
      wx.createSelectorQuery().select('#editor').context(function (res) {
        that.editorCtx = res.context
        console.log(that.editorCtx)
      }).exec()
    }
  }
</script>

<style scoped>
  .slogn_title {
    height: 240rpx;
    width: 100%;
  }

  .other_field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20rpx;
  }

  .other_field span {
    margin-right: 60rpx;
    color: #323233;
    font-size: 28rpx;
  }
  @import "../../../static/css/iconfont.wxss";

  .wrapper {
    padding: 5px;
  }

  .iconfont {
    display: inline-block;
    padding: 16rpx 24rpx;
    width: 48rpx;
    height: 48rpx;
    cursor: pointer;
    font-size: 40rpx;
  }

  .toolbar {
    box-sizing: border-box;
    /* border: 1px solid #ccc; */
    border-bottom: 0;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .ql-active {
    color: #37d6b1;
  }

  .ql-container {
    box-sizing: border-box;
    padding: 24rpx 0px;
    width: 100%;
    height: auto;
    border-top: 2rpx solid #ccc;
    font-size: 32rpx;
    line-height: 1.5;
  }

  .base_word {
    color: #333;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }

  .tz_content {
    border-top: 1px solid #EEEEEE;
    padding-left: 20rpx;
    font-size: 28rpx;
    width: 100%;
    padding-top: 10rpx;
  }

  .newArticle{
    border-top: 1px solid #EEEEEE;
    padding: 0px 20rpx;
  }

</style>
