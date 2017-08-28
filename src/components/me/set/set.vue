<template>
  <transition name="slide">
    <div class="circle">
      <div class="circle-wrap">
        <div class="back">
          <div @click="back">
            <img src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <span>设置</span>
        </div>
        <div class="content">
          <div class="content-wrapper" ref="wrapper">
            <div class="content-text">
              <div class="content-body">
                <h2></h2>
                <div class="server">
                  <div>
                    <p>接收新消息通知</p>
                    <span class="switch">
                      <mt-switch v-model="value1"></mt-switch>
                    </span>
                  </div>
                  <div>
                    <p>接收语音和视频聊天邀请通知</p>
                    <span class="switch">
                      <mt-switch v-model="value2"></mt-switch>
                    </span>
                  </div>
                  <div>
                    <p>通知栏显示消息详情</p>
                    <span class="switch">
                      <mt-switch v-model="value3"></mt-switch>
                    </span>
                  </div>
                  <div>
                    <p>声音</p>
                    <span class="switch">
                      <mt-switch v-model="value4"></mt-switch>
                    </span>
                  </div>
                  <div>
                    <p>新消息提示音</p>
                    <span class="switch">
                      <p style="opacity: 0.6;font-size:14px;">默认</p>
                    </span>
                  </div>
                  <div>
                    <p>振动</p>
                    <span class="switch">
                      <mt-switch v-model="value5"></mt-switch>
                    </span>
                  </div>
                  <div>
                    <p>语言选择</p>
                    <span class="switch">
                      <p style="opacity: 0.6;font-size:14px;">跟随系统</p>
                    </span>
                  </div>
                  <div>
                    <p>自动下载微信安装包</p>
                    <span class="switch">
                      <p style="opacity: 0.6;font-size:14px;">从不</p>
                    </span>
                  </div>
                  <div @click="warn">
                    <p>清理微信存储空间</p>
                    <span class="switch">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {MessageBox} from 'mint-ui'

  export default {
    components: {
      BScroll,
      MessageBox
    },
    data () {
      return {
        value1: false,
        value2: true,
        value3: true,
        value4: false,
        value5: true,
        title: 11
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    },
    methods: {
      back (event) {
        // 为防止PC端时,点击事件会被执行两次,须作如下判断，但是这里暂时不需要，参考http://blog.csdn.net/alsnei/article/details/54375957
        // if (!event._constructed) {
        //   return
        // }
        this.$router.back()   // 返回上一级
      },
      warn () {
        this.$toast({
          message: '清理完成',
          duration: 1500
        })
      }
    }
  }
</script>

<style scoped>
  .circle{
    position: fixed;
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 203;
    background-color: rgba(238,233,233,1);
  }
  .back{
    background: #1e2b39;
    height: 50px;
    color: #fff;
    position: fixed;
    width: 100%;
    z-index: 99;
  }
  .back div{
    height: 50px;
    width: 50px;
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
  }
  .content{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content-wrapper{
    height: 100%;
    overflow: hidden;
  }
  .content-top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    background-color: #666f76;
  }
  .payment, .pocket, .card{
    flex: 1;
    display: flex;
    /*flex-direction: row | row-reverse | column | column-reverse;*/
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
  .pocket{
    padding-top: 20px;
  }
  .payment h4, .pocket h4, .card h4{
    margin-top: 10px;
  }
  .pocket span{
    font-size: 12px;
    margin-top: 2px;
  }
  .content-body{
    padding-top: 20px;
  }
  .server div{
    /*border: 1px solid red;*/
    position: relative;
    height: 40px;
    background-color: #fff;
    margin-top: 10px;
  }
  .server div p{
    font-size: 16px;
    line-height: 40px;
    padding-left: 10px;
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
