<template>
  <div>
    <article class="shopcart">
      <!-- 内容 -->
      <section class="content"
               @click="toggleList">
        <!-- 左侧 -->
        <section class="content-left">
          <!-- 第一部分 -->
          <div class="logo-wrapper">
            <div class="logo"
                 :class="{'highlight':getTotalCount>0}">
              <span class="icon-shopping_cart"
                    :class="{'highlight':getTotalCount>0}"></span>
            </div>
            <div class="num"
                 v-show="getTotalCount>0">{{getTotalCount}}</div>
          </div>
          <!-- 第二部分 -->
          <div class="price"
               :class="{'highlight':getTotalCount>0}">{{getTotalPrice}}</div>
          <!-- 第三部分 -->
          <div class="desc">另需配送费${{deliveryPrice}}元</div>
        </section>
        <!-- 右侧 -->
        <section class="content-right"
                 @click.stop.prevent="pay">
          <div class="pay"
               :class="payClass">{{payDesc}}</div>
        </section>
      </section>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters } from 'vuex';
export default {
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return [
        ];
      }
    }
  },
  methods: {
    toggleList () {
      console.log(23412)
    },
    updated () {
      console.log("sele", this.selectFoods())
    },
    pay () {
      if (this.getTotalPrice < this.minPrice) {
        return;
      }
      window.alert(`支付${this.getTotalPrice}元`);
    }
  },
  computed: {
    ...mapState({

    }),
    ...mapGetters({
      getTotalCount: 'cart/getTotalCount',
      getTotalPrice: 'cart/getTotalPrice'
    }),
    payDesc () {
      if (this.getTotalPrice === 0) {
        return `$${this.minPrice}元起送`;
      } else if (this.getTotalPrice < this.minPrice) {
        let diff = this.minPrice - this.getTotalPrice;
        return `还差$${diff}元起送`;
      } else {
        return "去结算";
      }
    },
    payClass () {
      if (this.getTotalPrice < this.minPrice) {
        return "not-enough";
      } else {
        return "enough";
      }
    },
  },
}
</script>
<style lang="scss" >
@import "../../common/stylus/mixin.scss";

.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;

  .content {
    font-size: 0;
    display: flex;
    background: #141d27;

    .content-left {
      flex: 1;

      .logo-wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;

          &.highlight {
            background: rgb(0, 160, 220);
          }

          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;

            &.highlight {
              color: #fff;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        }
      }

      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        box-sizing: border-box;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);

        &.highlight {
          color: #fff;
        }
      }

      .desc {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin: 12px 0 0 12px;
        color: rgba(255, 255, 255, 0.4);
        font-size: 10px;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;

        &.not-enough {
          background: #2b333b;
        }

        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }

  .shopcart-list {
    position: absolute;
    left: 0;
    bottom: 45px;
    z-index: -1;
    width: 100%;

    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .slide-fade-enter-active,
    .move-leave-active {
      transition: all 0.5s;
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;

      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        @include border-1px(rgba(7, 17, 27, 0.1));

        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(100%);
    }
  }
}
</style>