<template>
  <!-- 未完成：左侧菜单的 @click="selectMenu(index,$event)"
2.预留的food组件
点击函数
 -->
  <article>
    <section class="goods">
      <!-- 正常的数据展示 -->
      <div class="menu-wrapper">
        <ul>
          <li v-for="(item, index) in goods"
              :key="index"
              class="menu-item">
            <span class="text border-1px">
              <span v-show="item.type>0"
                    class="icon"
                    :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <vwrapper :goods="goods"></vwrapper>
    </section>
  </article>
  <!-- 预留food -->
</template>

<script>
import axios from 'axios';
import GoodRightWrapper from './GoodRightWrapper'
export default {
  components: {
    vwrapper: GoodRightWrapper
  },
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    this.setAPI();
  },
  methods: {
    setAPI () {
      axios.get('/goods')
        .then((res) => {
          console.log('goodres', res.data);
          this.goods = res.data.data.goods;
          // this.$nextTick(() => {
          //   this._initScroll();
          //   this._calculateHeight();
          // });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  data () {
    return {
      goods: []
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/stylus/mixin.scss";
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: auto;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 82px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      padding: 0 12px;
      &.current {
        position: relative;
        margin-top: -1px;
        z-index: 10;
        background: #fff;
        font-weight: 700;
        .text {
          @include border-none();
        }
      }
      .text {
        font-size: 12px;
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          margin-top: 2px;
          // 根据后端传来的数据选择不同的class,这里是副样式
          &.decrease {
            @include bg-image("decrease_3");
          }
          &.discount {
            @include bg-image("discount_3");
          }
          &.guarantee {
            @include bg-image("guarantee_3");
          }
          &.invoice {
            @include bg-image("invoice_3");
          }
          &.special {
            @include bg-image("special_3");
          }
        }
      }
    }
  }
}
</style>