<template>
  <div>
    <div class="plus-wrap">
      <div class="plus-cover" v-if="isShow" @click=closeMyself></div>
        <transition name="drop">
          <div class="plus-content" v-if="isShow" @click="warn">
            <ul>
              <li>
                <img src="./发起群聊.png" />
                <span>发起群聊</span>
              </li>
              <li>
                <img src="./添加朋友.png" />
                <span>添加朋友</span>
              </li>
              <li>
                <img src="./扫一扫.png" />
                <span>扫一扫</span>
              </li>
              <li>
                <img src="./收付款.png" />
                <span>收付款</span>
              </li>
              <li>
                <img src="./帮助.png" />
                <span>帮助与反馈</span>
              </li>
            </ul>
          </div>
        </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Toast} from 'mint-ui'

export default {
  components: {
    Toast
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    },
    warn () {
      this.$toast({
        message: '待开发',
        position: 'bottom',
        duration: 1500
      })
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .5s ease;
}
.drop-enter {
  transform: translateX(500px); 
  opacity: 0;
}
.drop-leave-active {
  transform: translateX(500px);
  opacity: 0;

}
.plus-cover {
  position: fixed;
  z-index: 9990;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.plus-content {
  width: 50%;
  /*height: 200px;*/
  position: fixed;
  overflow: auto;
  background: #1e2b39;
  top: 40px;
  right: 10px;
  z-index: 9999;
  padding-top: 10px;
}
.plus-content img{
  height: 26px;
  width: 26px;
  margin-right: 10px;
}
li{
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
}

</style>
