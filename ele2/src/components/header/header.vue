<template>
  <div class="header">
    <!-- 背景 -->
    <div class="background">
      <img :src="seller.avatar"
           width="100%"
           height="100%" />
    </div>
    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 头像 -->
      <section class="avatar">
        <img width="64"
             height="64"
             :src="seller.avatar"
             alt="">
      </section>
      <!-- 内容区 -->
      <section class="content">
        <!-- 标题 -->
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <!-- 描述 -->
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <!-- support里面的type对应不同的免减类型 -->
        <div class="support"
             v-if="seller.supports">
          <!-- 这个有两个class  一个class是icon 另一个class实际上是一个伪类来显示图片,
             根据伪类的样式,调用scss来显示不同的图片,也就是js和scss的结合 -->
          <span class="icon"
                :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports"
             class="support-count"
             @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </section>
    </div>
    <!-- 公告板 -->
    <section class="bulletin-wrapper"
             @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </section>

    <vmask :detailShow="detailShow"
           :seller="seller"
           @myHideDetail="hideDetail"></vmask>
  </div>
</template>
<script >
import mask from './mask'
export default {
  components: {
    vmask: mask
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true;
      console.log()
    },
    hideDetail () {
      this.detailShow = false;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../common/stylus/mixin.scss";
.header {
  position: relative;
  color: #fff;
  overflow: hidden;
  background: rgba(7, 17, 27, 0.3);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    // 头像
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 2px;
      }
    }
    // 内容
    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          vertical-align: top;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          @include bg-image("brand");
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          color: white;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 12px;
        color: white;
        font-weight: 200;
        line-height: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          margin-top: 2px;
          // 根据后端传来的数据选择不同的class,这里是副样式
          &.decrease {
            @include bg-image("decrease_1");
          }
          &.discount {
            @include bg-image("discount_1");
          }
          &.guarantee {
            @include bg-image("guarantee_1");
          }
          &.invoice {
            @include bg-image("invoice_1");
          }
          &.special {
            @include bg-image("special_1");
          }
        }
        .text {
          font-size: 12px;
          font-weight: 200;
          line-height: 12px;
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 17px;
        padding: 0 8px;
        height: 24px;
        line-height: 27px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count {
          font-size: 10px;
        }
        .icon-keyboard_arrow_right {
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  // 公告板
  .bulletin-wrapper {
    background: rgba(7, 17, 27, 0.2);
    position: relative;
    // font-size 0
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .bulletin-title {
      display: inline-block;
      width: 22px;
      height: 12px;
      @include bg-image("bulletin");
      margin-top: 8px;
      vertical-align: top;
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 9px;
    }
  }
}
</style>>

