<template>
  <transition name="slide">
    <div class="circle">
      <div class="circle-wrap">
        <div class="back">
          <div @click="back">
            <img src="../../../assets/返回.png" height="16" width="19" />
          </div>
          <span>我的相册</span>
        </div>
        <div class="content">
          <div class="content-wrapper" ref="wrapper">
            <div class="content-text">
              <div class="content-top">
                <img class="circle-bg" src="../../../assets/find/bg-1.png" />
                <div class="user">
                  <span>minion</span>
                  <img src="../../../assets/me/minion.png" height="80" width="80" />
                </div>
              </div>
              <div class="content-body">
                <ul v-for="(item, index) in info">
                  <li>
                    <div class="everyuser">
                      <img :src="item.imgurl" height="50" width="50" />
                      <div>
                        <div class="username">
                          <h2 v-html="item.dissname"></h2>
                          <p v-html="item.sign"></p>
                        </div>
                        <div class="useralbum" v-if="item.album.length" v-for="img in item.album">
                          <img :src="img.album1" height="100" width="100" />
                          <img :src="img.album2" height="100" width="100" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div style="text-align: center;opacity: 0.6;margin-top: 20px;">----没有更多动态了----</div>
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
    data () {
      return {
        info: [
          {
            dissname: '曹操',
            sign: '',
            imgurl: 'http://a3.att.hudong.com/63/87/19300001392461132480875422046.jpg',
            album: [
              {
                album1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503833028349&di=a26f415fd0bfc7ae576f62b6a2ce597d&imgtype=0&src=http%3A%2F%2Fsite.i-gamer.net%2Fgamepic%2Fnw%2F2013%2F11%2F0744.jpg',
                album2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503833037637&di=9fb83f7ba0bab959145426231926a9b8&imgtype=0&src=http%3A%2F%2Fi2.img.969g.com%2Fnews%2Fimgx2012%2F05%2F18%2F187_173459_7d200_lit.jpg'
              }
            ],
            time: '20分钟前',
            num: 45
          },
          {
            dissname: '关羽',
            sign: '',
            imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503761569656&di=01696cee833e1c3af42186949cf5a8fc&imgtype=0&src=http%3A%2F%2Fimg11.weikeimg.com%2Fupload%2Fnews%2F2011121315404465027.jpg',
            album: [
              {
                album1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503761561605&di=58808d887f874446d4ee4fa1f025e48d&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmiddle%2F6878eb7eh88be4e1d149a%26690',
                album2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504356148&di=e3d081ed54ebe65da2ec0a0aca295721&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.anfone.com%2FOutside%2F2015-06-10%2F201506102054492527.jpg'
              }
            ],
            time: '39分钟前',
            num: 52
          },
          {
            dissname: '孙权',
            sign: '',
            imgurl: 'http://a0.att.hudong.com/27/15/01300000237183121990159374583_950.jpg',
            album: [
              {
                album1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503833312448&di=0ef89e6479a2bb5f9e27c52ea29554db&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140317%2F20140317110450-527396698.jpg',
                album2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503833293769&di=e4a41c11fdbc6c9c2ac0d5d85a179602&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F28%2F23%2F19300001189326131589234325246.jpg'
              }
            ],
            time: '1小时前',
            num: 9
          },
          {
            dissname: '司马懿',
            sign: '夫将兵者，不战则守，不守则走，不走则逃，不逃则死。',
            imgurl: 'http://www.e3ol.com/biography/upfiles/2008/20089822301342545.jpg',
            album: [],
            time: '2小时前',
            num: 71
          },
          {
            dissname: '大乔',
            sign: '',
            imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502995554006&di=70ab3f456e05a25f092c613fed0df1d3&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141231%2FdaqiaorenwuchahuaJPG_3711796.jpg',
            album: [
              {
                album1: 'http://img1.ali213.net/glpic/2015/12/23/584_2015122335344155.png',
                album2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503767564388&di=effe1985b2d1ff797e1818a94731c617&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fupload%2Fimg_5_2436167610D64180571_23.jpg'
              }
            ],
            time: '8小时前',
            num: 89
          },
          {
            dissname: '刘备',
            sign: '髀肉复生矣',
            imgurl: 'http://i1.hexunimg.cn/2014-02-21/162366807.jpg',
            album: [],
            time: '昨天',
            num: 20
          }

        ]
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
      admire (item) {
        console.log(item)
        item.num += 1
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
    position: relative;
  }
  .circle-bg{
    width: 100%;
    margin-bottom: 20px;
  }
  .user{
    position: absolute;
    bottom: 0px;
    right: 10px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .user span{
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
    margin-right: 10px;
  }
  .user img{
    border: 2px solid #fff;
  }
  .everyuser{
    position: relative;
    border-bottom: 1px solid rgba(153,153,153,0.4);
    margin: 5px 0;
    padding: 20px 10px;
    display: flex;
  }
  .everyuser img{
    margin-right: 10px;
  }
  .username h2{
    color: blue;
    font-family: '楷体';
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 10px;
  }
  .username p{
    font-size: 16px;
    line-height: 30px;
  }
  .usertime{
    font-size: 14px;
    margin-top: 15px;
  }
  .usertime span{
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 14px;
    line-height: 14px;
  }
  .usertime img{
    position: absolute;
    right: 30px;
    bottom: 20px;
    z-index: 999;
  }

  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }

</style>
