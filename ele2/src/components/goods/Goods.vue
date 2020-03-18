<template>
  <!-- 未完成：左侧菜单的 @click="selectMenu(index,$event)"
2.预留的food组件
点击函数
 -->
  <article>
    <section class="goods">
      <!-- 正常的数据展示 -->
      <div class="menu-wrapper"
           ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods"
              :key="index"
              class="menu-item"
              :class="{'current':currentIndex===index}"
              @click="selectMenu(index,$event)">
            <!-- 这句语法没有看懂 -->
            <span class="text border-1px">
              <span v-show="item.type>0"
                    class="icon"
                    :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!-- {{$store.state.goods.counta}} -->
      <!-- 右边 -->
      <!-- {{Y}} -->
      <!-- {{}} -->
      <vwrapper :goods="goods"
                ref='child'></vwrapper>
    </section>

  </article>
  <!-- 预留food -->
</template>

<script>
import GoodRightWrapper from './GoodRightWrapper';
// import BScroll from 'better-scroll'
import BScroll from '@better-scroll/core'
import axios from 'axios';

import { mapState } from 'vuex'


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
  computed: mapState({
    Y: state => state.goods.Y,
    // 返回当前索引
    currentIndex: function () {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 当前索引的高度
        let height1 = this.listHeight[i];
        // 下一个索引的高度
        let height2 = this.listHeight[i + 1];
        // 判断高度落到的区间
        // console.log(height1, height2);
        // console.log("this.Y", this.Y)
        if (!height2 || (this.Y >= height1 && this.Y < height2)) {
          // console.log("i", i)
          return i;
        }
      }
      return 0;
    },
  }),
  methods: {
    setAPI () {
      axios.get('/goods')
        .then((res) => {
          // console.log('goodres', res.data);
          this.goods = res.data.data.goods;
          this.$nextTick(() => {
            // 问题，父组件获取到数据怎么使用子组件来完成初始化
            // 问题是这个参数是子组件自己，而不是父组件，因此应该不能使用子组件调用父组件来初始化
            // 那么如何保证异步
            // this._initScroll();
            new BScroll(this.$refs.menuWrapper, {
              scrollY: true,
              click: true,
            })
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    selectMenu (index, event) {
      // console.log(index)
      if (!event._constructed) {
        return;
      }
      this.$refs.child.callMethod(index)
    }
  },
  data () {
    return {
      goods: [],
      // Y: this.$store.state.goods.Y,
      listHeight: this.$store.state.goods.listHeight
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
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 82px;
    // height: 505px;
    overflow: hidden;
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