<template>
  <!-- 少了那些东西
  1.二层循环的@click="selectFood(food,$event)"
  2.购物车组件<cartcontrol :food="food"></cartcontrol>
  3.下面这一行的 ref="foodWrapper" ref
 -->
  <div class="core-container">
    <div class="foods-wrapper"
         ref="foodsWrapper">
      <ul>
        <li class="food-list food-list-hook"
            v-for="(item,key) in goods"
            :key="key">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px"
                v-for="(food, index) in item.foods"
                :key="index">
              <!-- @click="selectFood(food,$event)"详情点击,未完成 -->
              <div class="icon">
                <img width="57px"
                     height="57px"
                     :src="food.icon"
                     alt="">
              </div>
              <!-- <img width="57px" height="57px" src="57.png" alt /> -->
              <!-- <div class="imgggg"></div> -->
              <!-- 内容区域 -->
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <!-- 价格 -->
                <div class="price">
                  <span class="now">${{food.price}}</span>
                  <span v-show="food.oldPrice"
                        class="old">${{food.oldPrice}}</span>
                </div>
                <!-- 加减号 -->
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import cartcontrol from "../cartcontrol/cartcontrol"
import { mapState } from 'vuex'
export default {
  computed: mapState({
    goods: state => state.goods.goods,
  }),
  components: {
    cartcontrol
  },
  beforeCreate () {
    console.log()
  },
  data () {
    return {
      Y: this.$store.state.goods.Y,
      listHeight: this.$store.state.goods.listHeight
    }
  },
  updated () {
    console.log("updated-this.goods", this.goods)
    this.$nextTick(() => {
      this._initScroll()
    })
    this._calculateHeight();
    console.log(this.scroll)
  },
  beforeUpdate () {
    console.log("beforeUpdate-this.goods", this.goods)
  },
  mounted () {
    console.log("mounted-this.goods", this.goods)
  },
  methods: {
    // selectFood (food, event) {
    // if (!event._constructed) {
    //   return;
    // }
    // this.selectedFood = food;
    // this.$refs.food.show();
    // console.log('详情')
    // },
    callMethod (index) {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      // 得到要滚动的位置
      let el = foodList[index];
      this.foodScroll.scrollToElement(el, 300);
    },
    _initScroll () {
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        scrollY: true,
        click: true,
        probeType: 3
      })
      console.log("this.foodScroll", this.foodScroll)
      this.foodScroll.on('scroll', pos => {
        // this.Y = ;
        this.$store.commit("goods/musiy", Math.abs(Math.round(pos.y)))
        // console.log(pos)
      });
    },
    _calculateHeight () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        'food-list-hook'
      );
      let height = 0;
      // this.listHeight.push(height);
      // 转换成commit
      this.$store.commit('goods/listAdd', height)
      for (let i = 0; i < foodList.length; i++) {
        // 获取每个区块
        let item = foodList[i];
        // 每一个单个的区块高度,累加
        height += item.clientHeight;
        // 一个递增的区间数组
        // this.listHeight.push(height);
        // 转换成commit
        this.$store.commit('goods/listAdd', height)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../common/stylus/mixin.scss";
.core-container {
  width: 100%;
  .foods-wrapper {
    height: 505px;
    flex: 1;
    background: #fff;
    .title {
      padding: left;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      &last-child {
        @include border-none();
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        height: 57px;
        width: 57px;
        margin-right: 10px;
        // border: 1px solid red;
        // background :url('57.png') left top no-repeat;
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc {
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>