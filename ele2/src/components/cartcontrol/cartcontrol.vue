<template>
  <div class="cartcontrol">
    <!-- 减少,如果<0 则不显示 -->
    <transition name="move">
      <div class="cart-decrease"
           v-show="resu>0"
           @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <!-- 增 -->

    <!-- <div class="cart-count"
         v-show="foodItem.count>0">{{foodItem.count}}</div> -->
    <div class="cart-count"
         v-show="resu>0">{{resu}}</div>
    <div class="cart-add icon-add_circle"
         @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  mounted () {
    console.log("mounted")
  },
  updated () {
    console.log("update")
  },
  data () {
    return {
      foodItem: this.food,
      resu: 0
    }
  },
  computed: {
    // thisCount () {
    //   return this.foodItem.count
    // }
  },
  props: {
    food: {
      type: Object
    },
  },
  methods: {
    decreaseCart () {
      // console.log("dec")
      this.$store.commit('cart/foodCartDec', this.foodItem);
      let result = this.$store.getters['cart/getItemCount'](this.foodItem);
      this.resu = result;
    },
    addCart () {
      // console.log("add")
      if (!event._constructed) {
        return;
      }
      // console.log(this.food.name)
      //  this.$store.commit('goods/listAdd', height)
      this.$store.commit('cart/foodCartAdd', this.foodItem);
      let result = this.$store.getters['cart/getItemCount'](this.foodItem);
      //  Vue.set(this.foodItem,result, 1);
      console.log("result", result);
      this.resu = result;
    }
  }

};
</script>
<style lang="scss" scoped>
.cartcontrol {
  font-size: 0;
  .cart-decrease,
  .cart-add {
    display: inline-block;
    padding: 6px;
    transition: all 0.4s linear;
    &.move-transition {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .inner {
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      transition: all 0.4s linear;
      transform: rotate(0);
    }
    &.move-enter,
    &.move-leave-active {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
      .inner {
        transform: rotate(180deg);
      }
    }
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
}
</style>
