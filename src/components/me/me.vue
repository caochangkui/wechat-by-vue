<template>
  <div class="me">
    <div class="me-wrapper" ref="wrapper">
      <div class="me-content">
        <div class="aboutme">
          <img 
            class="aboutme-img" 
            @click="imgbeBig"
            src="../../assets/me/minion.png" 
            :height="this.height" 
            :width="this.width" 
            ref="aboutme"
          />
          <div>
            <h2>minion</h2>
            <p>微信号：DespicableMe</p>
          </div>
          <img 
            class="aboutme-code" 
            @click="codebeBig"
            src="../../assets/me/二维码.png" 
            :height="this.codeheight" 
            :width="this.codewidth" 
            ref="codeimg"
          />
        </div>
        <router-link tag="div" class="money" to="/me/money">
          <img class="money-img" src="../../assets/me/钱包.png" height="380" width="380" />
          <span class="money-name">钱包</span>
       </router-link>
        <router-link tag="div" class="collection" to="/me/collection">
          <img class="collection-img" src="../../assets/me/收藏.png" height="32" width="32" />
          <span class="collection-name">收藏</span>
        </router-link>
        <router-link tag="div" class="photo" to="/me/album">
          <img class="photo-img" src="../../assets/me/相册.png" height="32" width="32" />
          <span class="photo-name">相册</span>
        </router-link>
        <router-link tag="div" class="card" to="/me/card">
          <img class="card-img" src="../../assets/me/卡包.png" height="32" width="32" />
          <span class="card-name">卡包</span>
        </router-link>
        <div class="emoticon" @click="warn">
          <img class="emoticon-img" src="../../assets/me/表情.png" height="32" width="32" />
          <span class="emoticon-name">表情</span>
        </div>
        <router-link tag="div" class="setup" to="/me/set">
          <img class="setup-img" src="../../assets/me/设置.png" height="32" width="32" />
          <span class="setup-name">设置</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {MessageBox} from 'mint-ui'
  import BScroll from 'better-scroll'

  export default {
    components: {
      BScroll,
      MessageBox
    },
    data () {
      return {
        height: 60,
        codeheight: 30,
        width: 60,
        codewidth: 30
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
          click: true
        })
      })
    },
    methods: {
      imgbeBig () {
        let pageWidth = this.$refs.wrapper.offsetWidth
        if (this.height === 60) {
          this.height = pageWidth
          this.width = pageWidth
          this.$refs.aboutme.style.left = 0
          this.$refs.aboutme.style.transform = 'rotate(360deg)'
        } else {
          this.height = 60
          this.width = 60
          this.$refs.aboutme.style.left = 10 + 'px'
          this.$refs.aboutme.style.transform = 'rotate(0deg)'
        }
      },
      codebeBig () {
        if (this.codeheight === 30) {
          this.codeheight = 200
          this.codewidth = 200
          this.$refs.codeimg.style.transform = 'rotate(360deg)'
        } else {
          this.codeheight = 30
          this.codewidth = 30
          this.$refs.codeimg.style.transform = 'rotate(0deg)'
        }
      },
      warn () {
        this.$toast({
          message: '尚未添加表情包',
          duration: 1500
        })
      }
    }
  }
</script>

<style scoped>
  .me{
    position: fixed;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(238,233,233,0.6);
  }
  .me-wrapper{
    /*border: 1px solid red;*/
    height: 100%;
    overflow: hidden;
  }
  .me-content{
    /*border: 1px solid blue;*/
    overflow: hidden;
  }  
  .aboutme{
    position: relative;
    height: 60px;
    padding: 8px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    /*border: 1px solid red;*/
  }
  .aboutme-img{
    position: absolute;
/*    height: 60px;
    width: 60px;*/
    top: 8px;
    left: 10px;
    z-index: 99;
    transition: all 0.5s;
  }
  .aboutme div{
    position: absolute;
    height: 32px;
    top: 50%;
    margin-top: -16px;
    left: 90px;
  }
  .aboutme h2{
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 5px;
  }
  .aboutme p{
    font-size: 12px;
    line-height: 12px;
  }
  .aboutme-code{
    position: absolute;
    background-color: #fff;
    top: 30px;
    right: 20px;
    transition: all 0.5s;
  }
  .money{
    display: flex;
    align-items: center; 
    left: 0;
    height: 20px;
    padding: 8px 10px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .collection, .photo, .card, .emoticon{
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    left: 0;
    height: 20px;
    border-bottom: 1px solid rgba(153,153,153,0.4);
    padding: 10px 10px;
    margin-top: 0px;
    background-color: #fff;
  }
  .emoticon{
    border-bottom: 0;
  }
  .setup{
    display: flex;
    align-items: center; 
    left: 0;
    height: 20px;
    padding: 8px 10px;
    margin-top: 20px;
    background-color: #fff;
  }
  .money-img, .collection-img, .photo-img, .card-img, .emoticon-img, .setup-img{
    height: 20px;
    width: 20px;
    padding-right: 20px;
  }
</style>
