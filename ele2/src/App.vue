<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- new分割线 -->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller" />
  </div>
</template>
<script>
import headers from '@/components/header/header'
import './common/stylus/index.scss'
import axios from 'axios'
export default {
  components: {
    'v-header': headers
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.setAPI();
  },
  methods: {
    setAPI () {
      axios.get('http://www.qiuhang.club:7300/mock/5e3f72c000fbdf09dcf21f79/sell/api/seller')
        .then((res) => {
          console.log('res', res);
          if (res.data.errno === 0) {
            this.seller = res.data.data.seller;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
}
</script>
<style lang="scss">
@import "./common/css/mixin.scss";
#app {
  .tab {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        font-size: 14px;
        color: rgba(77, 85, 93, 1);
        // &:active不起作用
        &.router-link-active {
          color: red;
        }
      }
    }
  }
}
</style>
