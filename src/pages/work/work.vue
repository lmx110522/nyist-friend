<template>
  <div>
    <div class="main_content">
      <img src="http://qiniuyun.donghao.club/kai.png">
      <span class="base_word">正在努力开发中...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Work"
  }
</script>

<style>
  page {
    background-color: #37d6b1;
  }

  .main_content {
    margin: 50% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main_content img{
    width: 150rpx;
    height: 150rpx;
    margin-bottom: 30rpx;
  }
  .main_content span{

  }

  .base_word {
    color: lightyellow;
    font-family: Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", STHeiti, "华文细黑", sans-serif;
    line-height: 50rpx;
  }
</style>
