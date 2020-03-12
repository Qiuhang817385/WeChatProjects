<template>
  <div>
    <div class="">我是登陆界面</div>
    <div class="class">这是一个1class</div>
    <div class="abc">
      这是abc
    </div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
// import api from '../axios/api';
// import { Button } from 'mint-ui';
// import { Toast, Indicator } from 'mint-ui';
import axios from 'axios';
export default {
  created () {
    this.getGoodsApi();
  },
  methods: {
    getGoodsApi () {
      // api.JH_news('/get')
      axios.get('/seller')
        .then((res) => {
          console.log('res.data', res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleClick () {
      // Toast('提示信息');
      // Indicator.open('加载中');
    }
  },
  data () {
    return {
      input: ''
    };
  }
};
</script>
<style lang="scss" >
.abc {
  background-color: rgb(0, 255, 64);
  color: bisque;
  font-size: 43px;
}
</style>
