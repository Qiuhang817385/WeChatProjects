<template>
  <div>
    <div class="seller"
         ref="seller">
      <div class="seller-content">
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc border-1px">
            <!-- <star :size="36"
                  :score="seller.score"></star> -->
            <span class="text">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryTime}}</span>分钟
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/stylus/mixin.scss";
.seller {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  .overview {
    position: relative;
    padding: 18px;

    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: rgb(7, 17, 27);
      font-size: 14px;
    }

    .desc {
      padding-bottom: 18px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      font-size: 0;

      .star {
        display: inline-block;
        margin-right: 8px;
        vertical-align: top;
      }

      .text {
        display: inline-block;
        margin-right: 12px;
        line-height: 18px;
        vertical-align: top;
        font-size: 10px;
        color: rgb(77, 85, 93);
      }
    }
    .remark {
      display: flex;
      padding-top: 18px;

      .block {
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(7, 17, 27, 0.1);

        &:last-child {
          border: none;
        }

        h2 {
          margin-bottom: 4px;
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .content {
          line-height: 24px;
          font-size: 10px;
          color: rgb(7, 17, 27);

          .stress {
            font-size: 24px;
          }
        }
      }
    }
    .favorite {
      position: absolute;
      width: 50px;
      right: 11px;
      top: 18px;
      text-align: center;

      .icon-favorite {
        display: block;
        margin-bottom: 4px;
        line-height: 24px;
        font-size: 24px;
        color: #d4d6d9;

        &.active {
          color: rgb(240, 20, 20);
        }
      }
      .text {
        line-height: 10px;
        font-size: 10px;
        color: rgb(77, 85, 93);
      }
    }
  }
  .bulletin {
    padding: 18px 18px 0 18px;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: rgb(7, 17, 27);
      font-size: 14px;
    }
    .content-wrapper {
      padding: 0 12px 16px 12px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .content {
        line-height: 24px;
        font-size: 12px;
        color: rgb(240, 20, 20);
      }
    }
    .supports {
      .support-item {
        padding: 16px 12px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        font-size: 0;
        &:last-child {
          @include border-none();
        }
      }

      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: top;
        margin-right: 6px;
        background-size: 16px 16px;
        background-repeat: no-repeat;

        &.decrease {
          @include bg-image("decrease_4");
        }

        &.discount {
          @include bg-image("discount_4");
        }

        &.guarantee {
          @include bg-image("guarantee_4");
        }

        &.invoice {
          @include bg-image("invoice_4");
        }

        &.special {
          @include bg-image("special_4");
        }
      }
      .text {
        line-height: 16px;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }
    }
  }
  .pics {
    padding: 18px;
    .title {
      margin-bottom: 12px;
      line-height: 14px;
      color: rgb(7, 17, 27);
      font-size: 14px;
    }
    .pic-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .pic-list {
        font-size: 0;
        .pic-item {
          display: inline-block;
          margin-right: 6px;
          width: 120px;
          height: 90px;

          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  .info {
    padding: 18px 18px 0 18px;
    color: rgb(7, 17, 27);
    .title {
      padding-bottom: 12px;
      line-height: 14px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      font-size: 14px;
    }
    .info-item {
      padding: 16px 12px;
      line-height: 16px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      font-size: 12px;
      &:last-child {
        @include border-none();
      }
    }
  }
}
</style>