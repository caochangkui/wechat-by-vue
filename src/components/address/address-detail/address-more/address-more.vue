<template>
  <transition name="slide">
    <div class="more">
      <div class="back">
        <img src="../../../../assets/返回.png"  @click="back" height="16" width="19" />
        <span>微信</span>
      </div>
      <div class="content">
        <div>
          <p>来源: </p>
          <p class="source">{{this.info.source}}</p>
        </div>
        <div style="margin-top:5px;">
          <p>个性签名: </p>
          <p class="source">未设置签名</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      back () {
        this.$router.back()   // 返回上一级
      }
    },
    computed: {
      ...mapGetters([ // 拿到info的状态
        'info'
      ])
    }
  }
</script>

<style scoped>
  .more{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #ebebeb;
    z-index: 33333;
  }
  .back{
    background: #1e2b39;
    height: 50px;
    color: #fff;
    position: fixed;
    width: 100%;
  }
  .back img{
    position: absolute;
    top: 25px;
    margin-top: -8px;
    left: 14px;
  }
  .back span{
    position: absolute;
    font-size: 20px;
    top: 25px;
    margin-top: -10px;
    left: 50px;
    padding-left: 10px;
    border-left: 1px solid #000;
    color: #fff;
  }
  .content{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content div{
    background-color: #fff;
    height: 40px;
    margin-top: 20px;
    padding: 4px 10px;
    display: flex;
    align-items: center; /*元素垂直居中*/
  }
  .content p{
    flex: 1;
    font-size: 18px;
    font-family: 'Microsoft yahei'
  }
  .source{
    display: flex;
    justify-content: flex-end;
    font-size: 14px !important;
    color: rgba(153,153,153,0.8);
  }

  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
   
</style>