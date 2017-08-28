<template>
  <div id="app">
    <div>
      <div class="app-header">
        <div class="title">微信</div>
        <router-link tag="div" class="search" to="/search">
          <img src="./assets/搜索.png" height="20" width="20">
        </router-link>
        <div class="plus" @click="logClick">
          <img src="./assets/加号.png" height="20" width="20">
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/chat">
          <div class="tab-link tab-link-1">
            <span class="tab-link-text">微信</span>
          </div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/address">
          <div class="tab-link tab-link-2">
            <span class="tab-link-text">通讯录</span>
          </div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/find">
          <div class="tab-link tab-link-3">
            <span class="tab-link-text">发现</span>
          </div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/me">
          <div class="tab-link tab-link-4">
            <span class="tab-link-text">我</span>
          </div>
        </router-link>
      </div>
    </div>
    <Plus :is-show="isShowPlus" @on-close="closeDialog"></Plus>
  </div>
</template>

<script>
import Plus from './components/plus/plus'

export default {
  name: 'app',
  components: {
    Plus
  },
  data () {
    return {
      isShowPlus: false
    }
  },
  methods: {
    closeDialog () {
      this.isShowPlus = false
    },
    logClick () {
      this.isShowPlus = true
    }
  }
}
</script>

<style>
/*@import "./common/style.css"*/

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-family: 'Avenir Next','Lantinghei SC';
  font-smoothing: antialiased; /*字体平滑显示*/
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


html, body {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

}
#app{
  height: 100%;
}
.app-header{
  background-color: #1e2b39;
  height: 50px;
  color: #fff;
  position: absolute;
  width: 100%;
  /*z-index: 9;*/
}
.title{
  font-size: 18px;
  padding-top: 14px;
  padding-left: 14px;
}
.search img{
  position: absolute;
  top: 14px;
  right: 80px;
}
.plus img{
  position: absolute;
  top: 14px;
  right: 24px;
}
.tab{
  border-top: 1px solid rgba(153,153,153,0.4);
  display: flex;
  position: fixed;
  height: 50px;
  line-height: 44px;
  font-size: 14px;
  bottom: 0px;
  left: 0;
  right: 0;
  /*z-index: 9;*/
  background-color: #fff;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-link{
  position: relative;
  color: #999999;
  height: 50px;
}
.tab-link span{
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  width: 100%;
  bottom: 6px;
  left: 0px;
}
.tab-link-1{
  background: url('./assets/tab/微信.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.tab-link-2{
  background: url('./assets/tab/通讯录.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.tab-link-3{
  background: url('./assets/tab/发现.png') no-repeat center 8px;
  background-size: 16px 16px;
}
.tab-link-4{
  background: url('./assets/tab/我.png') no-repeat center 8px;
  background-size: 16px 16px;
}
.router-link-active .tab-link{
  color: #09BB07;
}
.router-link-active .tab-link-1{
  background: url('./assets/tab/微信1.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.router-link-active .tab-link-2{
  background: url('./assets/tab/通讯录1.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.router-link-active .tab-link-3{
  background: url('./assets/tab/发现1.png') no-repeat center 8px;
  background-size: 16px 16px;
}
.router-link-active .tab-link-4{
  background: url('./assets/tab/我1.png') no-repeat center 8px;
  background-size: 16px 16px;
}
        
</style>