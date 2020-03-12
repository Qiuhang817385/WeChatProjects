<template>
  <transition name="fade">
    <div v-show="detailShow"
         class="detail">
      <!-- 公告和内容区域 -->
      <section class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <!-- <star :size="48"
                    :score="seller.score"></star> -->
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>

          <ul class="supports"
              v-if="seller.supports">
            <li class="support-item"
                v-for="(item,key) in seller.supports"
                :key='key'>
              <!--
                  这里添加了一个key
                  -->
              <span class="icon"
                    :class="classMap[seller.supports[key].type]"></span>
              <span class="text">{{seller.supports[key].description}}</span>
            </li>
          </ul>

          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </section>

      <section class="detail-close"
               @click="childHideDetail">
        <i class="icon-close"></i>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
  },
  props: {
    detailShow: {
      type: Boolean,
    },
    seller: {
      type: Object,
    },
  },
  methods: {
    childHideDetail () {
      this.$emit('myHideDetail')
      console.log(12)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/stylus/mixin.scss";
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
  background: rgba(7, 17, 27, 0);
}
.detail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.8);
  .detail-wrapper {
    min-height: 100%;
    width: 100%;
    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;
    }
    .name {
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }
    .star-wrapper {
      margin-top: 18px;
      padding: 2px 0;
      text-align: center;
    }
    .title {
      display: flex;
      margin: 28px auto 24px auto;
      width: 80%;
      .line {
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .text {
        font-weight: 700;
        padding: 0 12px;
        font-size: 14px;
      }
    }
    .supports {
      width: 80%;
      margin: 0 auto;
      .support-item {
        padding: 0 12px;
        margin-bottom: 12px;
        font-size: 0;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: top;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          margin-right: 6px;
          &.decrease {
            @include bg-image("decrease_2");
          }
          &.discount {
            @include bg-image("discount_2");
          }
          &.guarantee {
            @include bg-image("guarantee_2");
          }
          &.invoice {
            @include bg-image("invoice_2");
          }
          &.special {
            @include bg-image("special_2");
          }
        }
        .text {
          line-height: 18px;
          font-size: 12px;
        }
      }
    }
    .bulletin {
      width: 80%;
      margin: 0 auto;
      .content {
        padding: 0 12px;
        font-size: 12px;
        font-weight: 200;
        line-height: 24px;
      }
    }
  }
  .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    // margin: 0 auto;
    clear: both;
    font-size: 32px;
  }
}
</style>