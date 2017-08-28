<template>
  <transition name="slide">
    <div class="circle">
      <div class="circle-wrap">
        <div class="back">
          <div @click="back">
            <img src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <span>卡包</span>
        </div>
        <div class="content">
          <div class="content-wrapper" ref="wrapper">
            <div class="content-text">
              <div class="content-top">
                <div class="payment" @click="payment">
                  <h4>我的卡包列表</h4>
                </div>
              </div>
              <div class="content-body">
                <h2>会员卡</h2>
                <div class="server">
                  <div>
                    <p>大润发（2张）</p>
                    <p>屈臣氏（1张）</p>
                  </div>
                </div>
                <h2>优惠卡</h2>
                <div class="server">
                  <div>
                    <p>ofo共享单车（10张）</p>
                    <p>美团外卖（6张）</p>
                    <p>淘票票（9张）</p>
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
        MessageBox({
          title: '提现成功',
          message: '已提现至银行卡，请注意查收',
          showCancelButton: true
        })
      },
      payment () {
        MessageBox({
          title: '提示',
          message: '尚未开通收付款功能',
          showCancelButton: true
        })
      },
      card () {
        MessageBox({
          title: '提示',
          message: '清先添加银行卡',
          showCancelButton: true
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
/*  position: fixed;
    top: 120px;
    left: 0;
    right: 0;
    padding-top: 20px;*/
    padding-top: 50px;

  }
  .server{
    display: flex;
  }
  .content-body h2{
    font-size: 16px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
  }
  .server div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .server div p{
    height: 90px;
    border: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    padding-left: 40px;
    font-size: 14px;
    line-height: 90px;
    background-color: #fff;
  }

  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }

</style>
