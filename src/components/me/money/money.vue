<template>
  <transition name="slide">
    <div class="circle">
      <div class="circle-wrap">
        <div class="back">
          <div @click="back">
            <img src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <span>我的钱包</span>
        </div>
        <div class="content">
          <div class="content-wrapper" ref="wrapper">
            <div class="content-text">
              <div class="content-top">
                <div class="payment" @click="payment">
                  <img src="./收付款.png" height="40" width="40">
                  <h4>收付款</h4>
                </div>
                <div class="pocket" @click="warn">
                  <img src="./零钱.png" height="40" width="40">
                  <h4>零钱</h4>
                  <span>999,999</span>
                </div>
                <div class="card" @click="card">
                  <img src="./银行卡.png" height="40" width="40">
                  <h4>银行卡</h4>
                </div>
              </div>
              <div class="content-body">
                <h2>腾讯服务</h2>
                <div class="server">
                  <div>
                    <p>银行卡还款</p>
                    <p>手机充值</p>
                    <p>理财通</p>
                  </div>
                  <div>
                    <p>生活缴费</p>
                    <p>城市服务</p>
                    <p>腾讯公益</p>
                  </div>
                </div>
                <h2>第三方服务</h2>
                <div class="server">
                  <div>
                    <p>火车票机票</p>
                    <p>美团外卖</p>
                    <p>酒店预订</p>
                  </div>
                  <div>
                    <p>滴滴出行</p>
                    <p>电影赛事演出</p>
                    <p>蘑菇街</p>
                  </div>
                  <div>
                    <p>京东优选</p>
                    <p>吃喝玩乐</p>
                    <p>58到家</p>
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
    height: 120px;
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
    padding-top: 120px;

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
    text-align: center;
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
