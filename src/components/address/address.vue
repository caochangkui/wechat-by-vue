<template>
  <div class="address">
    <div class="address-wrapper">
      <mt-index-list>
        <mt-index-section index="">
          <mt-cell class="top" title="">
            <div class="top-cell">
              <div class="new-friend" @click="newFriend">
                <img src="../../assets/address/新的朋友.png" />
                <span>新的朋友</span>
              </div>
              <div class="new-friend" @click="warn">
                <img src="../../assets/address/群聊.png" />
                <span>群聊</span>
              </div>
              <div class="new-friend" @click="warn">
                <img src="../../assets/address/标签.png" />
                <span>标签</span>
              </div>
              <div class="new-friend" @click="warn">
                <img src="../../assets/address/公众号.png" />
                <span>公众号</span>
              </div>
            </div>
          </mt-cell>
        </mt-index-section>
        <mt-index-section 
          v-for="(item, index) in personnelList" 
          :key="item.id" 
          :index="item.group"
        >
          <mt-cell 
            class="address-item" 
            v-for="info in item.info" 
            :key="info.id" 
            :title="info.dissname"
            
          >
            <div class="mt-cell-wrapper" @click="gotoDetail(info)">
              <img v-lazy="info.imgurl" height="40" width="40" />
            </div>
          </mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { IndexList, IndexSection, Toast, MessageBox } from 'mint-ui'
  import {mapMutations} from 'vuex'

  export default {
    components: {
      IndexList,
      IndexSection,
      Toast,
      MessageBox
    },
    created () {
      // console.log(this.personnelList)
    },
    methods: {
      gotoDetail (info) {
        // console.log('测试')
        this.$router.push({
          path: `/address/${info.dissid}`
        })
        this.setAddress(info)
      },
      ...mapMutations({
        setAddress: 'SET_INFO'
      }),
      newFriend () {
        this.$toast({
          message: '没有新的朋友',
          duration: 1500
        })
      },
      warn () {
        MessageBox({
          title: '提示',
          message: '尚未开发，还是和下面的人聊聊天吧',
          showCancelButton: true
        })
      }
    },
    data () {
      return {
        personnelList: [
          {
            group: 'C',
            info: [
              {
                dissname: '曹操',
                dissid: 'caocao',
                phone: '18312345678',
                imgurl: 'http://a3.att.hudong.com/63/87/19300001392461132480875422046.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '曹丕',
                dissid: 'caopi',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30412A60-1B1H.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '曹植',
                dissid: 'caozhi',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3041I440-1T362.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过二维码添加'
              }
            ]
          },
          {
            group: 'D',
            info: [
              {
                dissname: '董卓',
                dissid: 'dongzhuo',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3040T3P-154b4.jpg',
                location: '东汉',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '典韦',
                dissid: 'dianwei',
                phone: '18312345678',
                imgurl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1614597475,2162289114&fm=26&gp=0.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '大乔',
                dissid: 'daqiao',
                phone: '18312345678',
                imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502995554006&di=70ab3f456e05a25f092c613fed0df1d3&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141231%2FdaqiaorenwuchahuaJPG_3711796.jpg',
                location: '吴国 建业',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'F',
            info: [
              {
                dissname: '费祎',
                dissid: 'feiyi',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30412A60-1B1H.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '法正',
                dissid: 'fazheng',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304056250-14YX.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'G',
            info: [
              {
                dissname: '郭嘉',
                dissid: 'guojia',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3041I440-1T362.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '关羽',
                dissid: 'guanyu',
                phone: '18312345678',
                imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503761569656&di=01696cee833e1c3af42186949cf5a8fc&imgtype=0&src=http%3A%2F%2Fimg11.weikeimg.com%2Fupload%2Fnews%2F2011121315404465027.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'H',
            info: [
              {
                dissname: '黄忠',
                dissid: 'huangzhong',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3040T3P-154b4.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '华佗',
                dissid: 'huatuo',
                phone: '18312345678',
                imgurl: 'http://img1.gamedog.cn/2014/01/23/30-1401230942040.jpg',
                location: '东汉',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'J',
            info: [
              {
                dissname: '贾诩',
                dissid: 'jiaxu',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30412A60-1B1H.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'K',
            info: [
              {
                dissname: '孔融',
                dissid: 'kongsong',
                phone: '18312345678',
                imgurl: 'http://img3.redocn.com/tupian/20141229/kongrongrenwuchatu_3710874.jpg',
                location: '魏国 洛阳',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'L',
            info: [
              {
                dissname: '刘备',
                dissid: 'liubei',
                phone: '18312345678',
                imgurl: 'http://i1.hexunimg.cn/2014-02-21/162366807.jpg',
                location: '蜀国 成都',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '刘婵',
                dissid: 'liuchan',
                phone: '18312345678',
                imgurl: 'http://img4.imgtn.bdimg.com/it/u=3637701658,1545034888&fm=26&gp=0.jpg',
                location: '蜀国 成都',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过二维码添加'
              },
              {
                dissname: '吕布',
                dissid: 'lvbu',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3041I440-1T362.jpg',
                location: '东汉',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过二维码添加'
              },
              {
                dissname: '吕蒙',
                dissid: 'lvmeng',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304056250-14YX.jpg',
                location: '东吴',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过二维码添加'
              }
            ]
          },
          {
            group: 'M',
            info: [
              {
                dissname: '马超',
                dissid: 'machao',
                phone: '18312345678',
                imgurl: 'http://img4.imgtn.bdimg.com/it/u=2728427651,1908159735&fm=27&gp=0.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'N',
            info: [
              {
                dissname: '南华老仙',
                dissid: 'nanhualaoxian',
                phone: '18312345678',
                imgurl: 'http://img0.imgtn.bdimg.com/it/u=122621943,1277921133&fm=26&gp=0.jpg',
                location: '东汉',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'P',
            info: [
              {
                dissname: '庞统',
                dissid: 'pangtong',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30412A60-1B1H.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '庞德',
                dissid: 'pangde',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c3040T3P-154b4.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'Q',
            info: [
              {
                dissname: '清河公主',
                dissid: 'gongzhu',
                phone: '18312345678',
                imgurl: 'http://i6.qhimg.com/dr/250_500_/t018979f012be2d3ce2.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'S',
            info: [
              {
                dissname: '孙坚',
                dissid: 'sunjian',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30402Q20-136005.jpg',
                location: '东吴',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '孙策',
                dissid: 'sunce',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304056250-14YX.jpg',
                location: '东吴',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '孙权',
                dissid: 'sunquan',
                phone: '18312345678',
                imgurl: 'http://a0.att.hudong.com/27/15/01300000237183121990159374583_950.jpg',
                location: '东吴',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '司马懿',
                dissid: 'simayi',
                phone: '18312345678',
                imgurl: 'http://www.e3ol.com/biography/upfiles/2008/20089822301342545.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'T',
            info: [
              {
                dissname: '太史慈',
                dissid: 'taishici',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30402Q20-136005.jpg',
                location: '吴国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'W',
            info: [
              {
                dissname: '魏延',
                dissid: 'weiyan',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304150-1J156.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'X',
            info: [
              {
                dissname: '小乔',
                dissid: 'xiaoqiao',
                phone: '18312345678',
                imgurl: 'http://p1.qhmsg.com/t01702ab9a323fbea28.jpg',
                location: '吴国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '夏侯渊',
                dissid: 'xiahou',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304056250-14YX.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '许猪',
                dissid: 'xuzhu',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304150-1J156.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              }
            ]
          },
          {
            group: 'Y',
            info: [
              {
                dissname: '袁绍',
                dissid: 'yuanshao',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c304056250-14YX.jpg',
                location: '东汉',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '杨修',
                dissid: 'yangxiu',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30402Q20-136005.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              }
            ]
          },
          {
            group: 'Z',
            info: [
              {
                dissname: '诸葛亮',
                dissid: 'zhugeliang',
                phone: '18312345678',
                imgurl: 'http://static.bbs.9wee.com/attachment/forum/201306/07/210751qbp4p4c5yzhhbpym.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过搜索手机号添加'
              },
              {
                dissname: '张飞',
                dissid: 'zhangfei',
                phone: '18312345678',
                imgurl: 'http://img3.imgtn.bdimg.com/it/u=187699675,1270817048&fm=26&gp=0.jpg',
                location: '魏国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '赵云',
                dissid: 'zhaoyun',
                phone: '18312345678',
                imgurl: 'http://p5.so.qhimgs1.com/t0171807b9d0a9ac16b.jpg',
                location: '蜀国',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '周瑜',
                dissid: 'zhouyu',
                phone: '18312345678',
                imgurl: 'http://img2.hao661.com/uploads/allimg/c160128/1453c30402Q20-136005.jpg',
                location: '东吴',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: '通过扫一扫添加'
              },
              {
                dissname: '',
                dissid: '',
                phone: '',
                imgurl: '',
                location: '',
                album: 'http://src.zhigame.com/news/20130123/2013012310413268.jpg',
                source: ''
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .address{
    position: fixed;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
  .top{
    height: 150px;
  }
  .top-cell{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .new-friend{
    display: flex;
    left: 0;
    height: 20px;
    border-bottom: 1px solid rgba(153,153,153,0.4);
    padding: 8px 10px;
    align-items: center; /*定义body的元素垂直居中*/
    /*justify-content: center; 定义body的里的元素水平居中*/
  }
  .new-friend img{
    margin-right: 20px;
    height: 20px;
    width: 20px;
  }
  .address-list{
  }

  .address-item{
    /*border-bottom: 0.2px solid rgba(153,153,153,0.4);*/
    background-color: #fff;
    padding-left: 60px;
    height: 50px;
  }
  .mt-cell-wrapper{
    /*border: 1px solid red;*/
    position: absolute;
    left: 10px;
    top: 5px;
    width: 100%;
  }
  .address-item img{
    /*position: absolute;
    left: 10px;
    top: 5px;*/
  }

</style>
