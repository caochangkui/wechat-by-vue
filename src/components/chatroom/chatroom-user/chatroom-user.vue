<template>
  <transition name="slide">
    <div class="chatroom-user" ref="content">
      <div class="back">
        <router-link to='/chatroom' tag="div">
          <div style="height:50px; width:50px;">
            <img class="img" src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <img class="img" src="../../../assets/返回.png" height="16" width="19" />
        </router-link>
        <span class="top-text">聊天信息</span>
      </div>
      <div class="user">
        <img class="smallImg" :src="info.imgurl" />
        <img class="bigImg" @click="changBig" ref="bagImge" :src="info.imgurl" />
        <p v-html="info.dissname"></p>
      </div>
      <div class="setsome" ref="setsome">
        <div>
          <p>置顶聊天</p>
          <span class="switch">
            <mt-switch v-model="value1"></mt-switch>
          </span>
        </div>
        <div>
          <p>消息免打扰</p>
          <span class="switch">
            <mt-switch v-model="value2"></mt-switch>
          </span>
        </div>
        <div @click="deleteall">清空聊天记录</div>
        <div class="complain" @click="complaint">投诉</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Switch, MessageBox, Toast } from 'mint-ui'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Switchch: Switch,  // switch为预留元素，这里换了个名字
      MessageBox,
      Toast
    },
    data () {
      return {
        value1: false,
        value2: true,
        title: 11
      }
    },
    computed: {
      ...mapGetters([
        'info'
      ])
    },
    methods: {
      changBig () {
        if (this.$refs.bagImge.offsetWidth < 100) {
          let pageWidth = this.$refs.content.offsetWidth
          this.$refs.bagImge.style.height = pageWidth - 60 + 'px'
          this.$refs.bagImge.style.width = pageWidth - 60 + 'px'
          this.$refs.setsome.style.top = 170 - 150 + pageWidth + 'px'
        } else {
          this.$refs.bagImge.style.height = 60 + 'px'
          this.$refs.bagImge.style.width = 60 + 'px'
          this.$refs.setsome.style.top = 170 + 'px'
        }
      },
      deleteall () {
        MessageBox({
          title: '提示',
          message: '确定清空全部聊天信息?',
          showCancelButton: true
        })
      },
      complaint () {
        this.$toast({
          message: '您好，已投诉',
          duration: 1500
        })
      }
    }
  }
</script>

<style scoped>
  *{

  }
  .chatroom-user{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 200;
    background-color: #ebebeb;
    /*border: 1px solid red;*/
  }
  .back{
    background: #1e2b39;
    height: 50px;
    color: #fff;
    position: fixed;
    width: 100%;
  }
  .back .img{
    position: absolute;
    top: 25px;
    margin-top: -8px;
    left: 14px;
  }
  .back .top-text{
    position: absolute;
    font-size: 20px;
    top: 25px;
    margin-top: -10px;
    left: 50px;
    padding-left: 10px;
    border-left: 1px solid #000;
  }
  .user{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 20px;
  }
  .user .smallImg{
    height: 60px;
    width: 60px;
  }
  .bigImg{
    position: absolute;
    top: 10px;
    left: 20px;
    height: 60px;
    width: 60px;
    transition: all 0.5s;
  }
  .user p{
    font-size: 14px;
    line-height: 14px;
    width: 60px;
    text-align: center;
    padding-top: 4px;
  }
  .setsome{
    position: fixed;
    /*border: 1px solid red;*/
    top: 170px;
    left: 0;
    right: 0;
    display: block;
    transition: all 0.5s;
  }
  .setsome div{
    position: relative;
    background-color: #fff;
    margin: 10px 0px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    padding-left: 20px;
  }
  .switch{
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
