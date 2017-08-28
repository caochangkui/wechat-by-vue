<template>
  <transition name="slide">
    <div class="circle">
      <div class="circle-wrap">
        <div class="back">
          <div @click="back">
            <img src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <span>摇一摇</span>
        </div>
        <div class="content">
          <div class="content-wrapper" ref="wrapper">
            <div class="content-text">
              <div class="content-body">
                <img src="./摇一摇.png" height="128" width="128">
              </div>
              <div class="tip">
                <p>功能未完善</p>
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
// import {Toast} from 'mint-ui'

  export default {
    components: {
      BScroll
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
    background-color: #000;
  }
  .content-body{
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
  .tip{
    color: #fff;
    font-size: 20px;
    text-align: center;
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
  @keyframes myfirst
  {
    from {color: red; font-weight: normal;}
    to {color:yellow; font-weight: bold;}
  }
  @-webkit-keyframes myfirst
  {
    from {color: red; font-weight: normal;}
    to {color:yellow; font-weight: bold;}
  }


  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }

</style>
