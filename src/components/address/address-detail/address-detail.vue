<template>
  <!-- <transition name="slide"> -->
    <div class="address-detail">
      <div class="back">
        <div @click="back">
          <img src="../../../assets/返回.png" height="16" width="19" />
        </div>
        <span>详细信息</span>
      </div>
      <div class="content" ref="content">
        <div class="content-name">
          <img class="" :src="this.info.imgurl" height="60" width="60" />
          <img class="bagImg" @click="changBig" ref="bagImge" :src="this.info.imgurl" />
          <div>
            <h2 class="" v-html="this.info.dissname"></h2>
            <p class="">微信号：{{this.info.dissid}}</p>
          </div>
        </div>
        <div class="content-phone">
          <span style="font-weight:bold;">电话号码：&nbsp</span>{{this.info.phone}}
        </div>
        <div class="content-location">
          <span style="font-weight:bold;">地区: </span>{{this.info.location}}
        </div>
        <div class="content-album">
          <span style="font-weight:bold;">个人相册 </span>
          <img :src="this.info.album" height="50" width="50" />
          <img :src="this.info.album" height="50" width="50" />
          <img :src="this.info.album" height="50" width="50" />
        </div>
        <div class="content-more" @click="gotoMore(info)">
          <span style="font-weight:bold;">更多</span>
        </div>
        <div class="content-message" @click="doAddList(info)">
          <router-link to='/chatroom' class="message">
            <span>发消息</span>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  <!-- </transition> -->
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    components: {

    },
    props: {
      imgurl: {
        type: String,
        default: ''
      },
      dissname: {
        type: String,
        default: ''
      },
      dissid: {
        type: String,
        default: ''
      },
      phone: {
        type: String,
        default: ''
      },
      location: {
        type: String,
        default: ''
      },
      album: {
        type: String,
        default: ''
      },
      source: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapGetters([ // 拿到info的状态
        'info'
      ])
    },
    created () {
      // console.log(this.info)
    },
    methods: {
      back () {
        this.$router.back()   // 返回上一级
      },
      doAddList (info) {
        this.setaddList(info)
        // console.log('测试')
        // console.log(this.info)
      },
      gotoMore (info) {
        this.$router.push({
          path: `/address/${info.dissid}/more`
        })
        console.log('测试')
      },
      changBig () {
        if (this.$refs.bagImge.offsetWidth < 100) {
          let pageWidth = this.$refs.content.offsetWidth
          this.$refs.bagImge.style.height = pageWidth - 20 + 'px'
          this.$refs.bagImge.style.width = pageWidth - 20 + 'px'
        } else {
          this.$refs.bagImge.style.height = 60 + 'px'
          this.$refs.bagImge.style.width = 60 + 'px'
        }
      },
      ...mapMutations({
        setaddList: 'SET_ADDLIST'
      })
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .address-detail{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 100;
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
  .content div{
    width: 100%;
    background-color: #fff;
  }
  .content-name{
    /*border: 1px solid #000;*/
    margin-top: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }
  .content-name .bagImg{
    position: absolute;
    top: 10px;
    left: 10px;
    height: 60px;
    width: 60px;
    transition: all 0.5s;
  }
  .content-name h2{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 6px;
    padding-left: 20px;
  }
  .content-name p{
    font-size: 14px;
    padding-left: 20px;
  }
  .content-phone{
    margin: 5px 0;
    padding: 10px 10px;
    font-size: 14px;
  }
  .content-location, .content-album{
    border-bottom: 1px solid rgba(153,153,153,0.4);
    padding: 10px 10px;
    font-size: 14px;
  }
  .content-album{
    display: flex;
    align-items: center;
  }
  .content-album img{
    margin-left: 20px;
  }
  .content-more{
    padding: 10px 10px;
    font-size: 14px;
  }
  .content-message {
    margin-top: 20px;
    background-color: #ebebeb !important;
  }
  .message{
    display: flex;
    margin: 0 30px;
    height: 24px;
    padding: 8px 10px;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
    background-color: #1aad16;
    border: 1px solid #1aad16;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
