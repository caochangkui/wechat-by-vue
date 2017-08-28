<template>
  <div class="chat">
    <scroll class="chat-wrapper" :data="chatList">
      <div>
        <ul>
          <router-link 
            to='/chatroom' 
            tag="li" 
            v-for="addinfo in this.addList" 
            :key="addinfo.id" 
            class="item"
          >
            <div class="item-cell" @click="">
              <img class="item-img" :src="addinfo.imgurl" height="40" width="40" />
              <h2 class="dissname" v-html="addinfo.dissname"></h2>
              <p class="summary">点击发送消息</p>
              <span class="item-time">刚刚</span>
            </div>
          </router-link>
        </ul>
        <ul>
          <router-link 
            to='/chatroom' 
            tag="li" 
            v-for="info in chatList" 
            :key="info.id" 
            class="item"
          >
            <div class="item-cell" @click="gotoChatroom(info)">
              <div class="img-unread">
                <img class="item-img" :src="info.imgurl" height="40" width="40" /><span v-html="info.unread" v-show="info.unread"></span>
              </div>
              <h2 class="dissname" v-html="info.dissname"></h2>
              <p class="summary" v-html="info.summary"></p>
              <span class="item-time" v-html="info.time"></span>
            </div>
          </router-link>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '../../base/scroll/scroll'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    components: {
      Scroll
    },
    // updated () {
    //   console.log('测试：测试：')
    //   console.log(this.addList)
    // },
    computed: {
      ...mapGetters([ // 拿到info的状态
        'info',
        'addList'
      ])
    },
    methods: {
      enterMessage () {
        console.log(12)
      },
      gotoChatroom (info) {
        info.unread = ''  // 点击后使未读消息的提示消失
        info.summary = '点击发送消息' // 点击后使未读消息的提示消失
        info.time = '刚刚'
        this.setAddress(info)
      },
      ...mapMutations({
        setAddress: 'SET_INFO'
      })
    },
    data () {
      return {
        chatList: [
          {
            dissname: '诸葛亮',
            dissid: 'zhugeliang',
            phone: '18312345678',
            imgurl: 'http://static.bbs.9wee.com/attachment/forum/201306/07/210751qbp4p4c5yzhhbpym.jpg',
            location: '蜀国',
            album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
            source: '通过搜索手机号添加',
            summary: '点击发送消息',
            unread: '',
            time: '08:25'
          },
          {
            dissname: '赵云',
            dissid: 'zhaoyun',
            phone: '18312345678',
            imgurl: 'http://p5.so.qhimgs1.com/t0171807b9d0a9ac16b.jpg',
            location: '蜀国',
            album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
            source: '通过扫一扫添加',
            summary: '有2个未读消息',
            unread: 2,
            time: '12:36'
          },
          {
            dissname: '司马懿',
            dissid: 'simayi',
            phone: '18312345678',
            imgurl: 'http://www.e3ol.com/biography/upfiles/2008/20089822301342545.jpg',
            location: '魏国',
            album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
            source: '通过扫一扫添加',
            summary: '有3个未读消息',
            unread: 3,
            time: '昨天'
          },
          {
            dissname: '华佗',
            dissid: 'huatuo',
            phone: '18312345678',
            imgurl: 'http://img1.gamedog.cn/2014/01/23/30-1401230942040.jpg',
            location: '东汉',
            album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
            source: '通过扫一扫添加',
            summary: '有1个未读消息',
            unread: 1,
            time: '8月18日'
          }
        ],
        moreList: []
      }
    }
  }
</script>

<style scoped>
  .chat{
    position: fixed;
    /*border: 1px solid red;*/
    /*width: 100%;*/
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
  .item{
    width: 100%;
    margin-left: 0;
  }
  .chat-wrapper{
    height: 100%;
    overflow: hidden;
  }
  .item-cell{
    position: relative;
    border-bottom: 1px solid rgba(153,153,153,0.4); 
    height: 60px;
  }
  .img-unread{
    position: relative;
  }
  .img-unread span{
    position: absolute;
    top: 0;
    left: 44px;
    font-size: 10px;
    line-height: 14px;
    color: #fff;
    height: 14px;
    width: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: red;
    border: 1px solid red;
    border-radius: 50%;
  }
  .item-img{
    float: left;
    margin:10px 10px 10px 10px;
  }
  .dissname{
    /*border: 1px solid red;*/
    font-size: 14px;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 70px;
  }
  .summary{
    font-size: 14px;
    padding-top: 10px;
    padding-left: 70px;
    color: rgba(153,153,153,0.8);
    font-style: italic;
  }
  .item-time{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
    color: rgba(153,153,153,0.8); 
  }
   
</style>