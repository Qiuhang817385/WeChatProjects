## vue-cli3创建美团/饿了么项目

```注意
vue cli 完全可配置的，无需再使用webpack配置
```

配置sass

https://www.npmjs.com/package/sass-resources-loader

### dart-sass和node-sass的区别

在大型项目中 使用`dart-sass`比 `node-sass`（`js`本机`C`库的包装）要慢于很多

`art-sass`只是一个编译版本，比`node-sass和``native dart-sass慢`。

### sass配置

```
cnpm i node-sass

npm i sass-loader

如果需要配置全局主题

安装sass-resources-loader

npm install sass-resources-loader
参考文档
```

([https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8](https://cli.vuejs.org/zh/guide/css.html#预处理器))

 ### 代理配置

```
devServer: {
    proxy: {
      '/': ' http://www.qiuhang.club:7300/mock/5e3f72c000fbdf09dcf21f79/sell',
      changeOrigin: true
    }
  }

axios.defaults.baseURL = '/api';
```



### 报错

```
This dependency was not found:

* core-js/modules/es.object.to-string in ./src/router/index.js

To install it, you can run: npm install --save core-js/modules/es.object.to-string
```

翻译：corejs问题

转义成toString 怀疑是转换的问题

进入core.js官网查询配置

https://gitee.com/skygf163/core-js

```
if target contains an old environment like `IE 11` we will have something like:
```



找到这句话

然后去package.json、bable当中查看配置项

发现browserslist配置项

关于配置的详解，解答是，如果兼容低版本浏览器的同时，会对其他前端工具的编译产生影响

https://www.jianshu.com/p/2a935a7dbab0

```
 // "browserslist": [
 //  "> 1%",
 //  "last 2 versions"
 // ]
```

解决无效

Could not install from "core-js\modules\es.object.to-string" as it does not contain a package.json file.

**删掉重新install,成功解决**



## main.js

```
// 配置axios
import axios from 'axios';
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
```



配置代理服务器

'/': ' http://www.qiuhang.club:7300/mock/5e3f72c000fbdf09dcf21f79/sell',



### 父子传值

```
父亲
<v-header :seller="seller"></v-header>
儿子
props: {
  seller: {
   type: Object
  }
}
```

### 子调父方法

```
父:<vmask :detailShow="detailShow"
           @myHideDetail="hideDetail"></vmask>
子:this.$emit('myHideDetail')
```



## 父调子方法

父亲

```
<child ref="child" ></child>
export default {
 methods: {
  click () {
      this.$refs.child.$emit('childMethod') // 方法1
      this.$refs.child.callMethod() // 方法2
 },
 components: {
  child: child
 }
}
```



儿子

```
<script>
    export default {
        mounted() {
            this.monitoring() // 注册监听事件
        },
        methods: {
            monitoring() { // 监听事件 方法1
                this.$on('childMethod', (res) => {
                    console.log('方法1:触发监听事件监听成功')
                    console.log(res)
                })
            },
            callMethod() { 方法2
                console.log('方法2:直接调用调用成功')
            },
        }
    }
</script>
```



### css3 min-device-pixel-ratio属性 解决高清的图片适配

https://www.jianshu.com/p/6f5b1d29895a





### scss

```
### `@mixin`

### @include

搭配导入文件

`@import` 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

- 文件拓展名是 `.css`；
- 文件名以 `http://` 开头；
- 文件名是 `url()`；
- `@import` 包含 media queries。
```

```
<!-- 这个有两个class 一个class是icon 另一个class实际上是一个伪类来显示图片,

​       根据伪类的样式,调用scss来显示不同的图片,也就是js和scss的结合 -->

​     <span class="icon"

​        :class="classMap[seller.supports[0].type]"></span>
---------
created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
  },
----------
   &.decrease {
            @include bg-image("decrease_1");
          }
          &.discount {
            @include bg-image("discount_1");
          }
```

```
app.js引入图标字体
import './common/stylus/index.scss'
```



### v-if列表循环

```
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
```



### vue路由history模式刷新404问题解决方案

```
https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
```

### vue路由激活更新

类---》router-link-active



新增用法,

sass函数生成类别图库

路由守卫的配置



## refs用法

```
<button ref="btn">我是按钮</button>
this.$refs.btn

在组件的Dom部分,任意标签当中,写上ref="xxx"
        2:通过组件对象,this.$refs.xxx 获取到元素
        ```带$开头的属性,都是vue准备好的```
```



# new-----------



### BetterScroll的使用

https://zhuanlan.zhihu.com/p/27407024

https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#scrollx

```

mounted () {
    // 需要借助中间函数
    this.init()
  },
methods: {
init () {
      this.bs = new BScroll(this.$refs.foodsWrapper, {
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      })
    }
    }
    
    高度没有注意到！！！！
    必须content的高度大于wrapper的高度
    
    
  
```

！！注意

```
 一般初始化的时机是挂载完毕
   也就是mounted
   
   而对于父传子组件
   
   真正的挂载完毕是在updated时期
   
   并且也可以放在beforeUpdated时期
   
 mounted-this.goods [__ob__: Observer]
   
 beforeUpdate-this.goods (9) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, __ob__: Observer]

 updated-this.goods (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, __ob__: Observer]
 
 
```

**结论：对于发起异步请求的组件来说，直接在异步请求完毕之后直接this.$nextTick就可以**

**而对于子组件，接收到的父组件的值，必须放置在update的时候**



如果需要监听on事件  scroll  就需要加属性 probeType: 3



## 异步数据的处理

当数据返回来之后的异步处理

方式1. this.$nextTick，

方式2.使用promise

方式3.setTimeout(fn, 20)



## Bug

为什么这里在 created 这个钩子函数里请求数据而不是放到 mounted 的钩子函数里？

requestData 是发送一个网络请求，这是一个异步过程

当拿到响应数据的时候，Vue 的 DOM 早就已经渲染好了

但是数据改变 —> DOM 重新渲染仍然是一个异步过程

所以即使在我们拿到数据后，也要异步初始化 better-scroll。



 this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染

如果不进行异步初始化,那么可能数据得到了但是DOM还没有渲染完毕



因为 Vue 是数据驱动的， Vue 数据发生变化（this.data = res.data）到页面重新渲染是一个异步的过程

我们的初始化时机是要在 DOM 重新渲染后进行滚动条的异步初始化



获取到数据的后，需要通过异步的方式再去初始化 better-scroll



相当于排序,如果直接



# 组件的拆分进一步提升了组件间交互的难度



## computed

计算属性

参考资料

[https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7](https://cn.vuejs.org/v2/guide/computed.html#计算属性)

在computed当中的函数

直接使用的话{{ currentIndex }}

这个值不是函数,而是一个返回值

返回常量就是常量

返回数组就是数组



什么时候会触发计算属性?

this,数据的时候会发生改变

下面的Demo当中,

```
 computed: {
                result:function(){
                //x会发生改变
					this.x++;
					console.log(this.x);
				//x只定义了一次,然后就不再发生改变,x++并未被执行
					let x = 0;
					x++
                    //原值不变,则函数不会再次调用,有缓存机制
                    //监视对象,写在了函数内部
                    return ((this.n1-0)+(this.n2-0))*(this.n3-0)
                }
            },
```



## VueX

1.通过模块导出

```
export default new Vuex.Store({
  modules: {
    goods		//当设置了命名空间之后
  }
})
对应的命名空间
this.$store.commit("goods/musiy", Math.abs(Math.round(pos.y)))

（如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名）
来自https://vuex.vuejs.org/zh/guide/modules.html
```

2.mutation对应同步--------commit

action对应异步-------dispatch





## touch事件补充

https://www.cnblogs.com/kenshinobiy/p/10720151.html



# vuex同步页面数据的问题

if (!height2 || (this.$store.state.goods.Y >= height1 && this.$store.state.goods.Y < height2))

if (!height2 || (this.Y >= height1 && this.Y < height2))

滚动的时候

为什么没有动态获取？？？

 Y: this.$store.state.goods.Y,

没有效果  只赋值了一次

为什么store当中改变的时候没有映射到本地的Y

**解决办法**

```
  import { mapState } from 'vuex'
  
  computed: mapState({
    Y: state => state.goods.Y,
    // 返回当前索引
  }),
  参考https://vuex.vuejs.org/zh/guide/state.html
  mapState 辅助函数
```





## 这个表达式

@click.stop.prevent="pay"



数据结构遇见的问题

正常的购物车底下是一个index   对这个index就可以标识唯一的货物

但是此处的是双重数据

在类目地下才是商品



复杂的做法是

把二维项目变成一维的  再用food进行--确认 再对每一项进行count属性的添加

goods---->shopcart----->cartcontrol

**步骤1**

selectFoods:相当于购物车,把二维的变成一维的

```
selectFoods () {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
```

**步骤2**,每一项的标识不是index就是food本身

```
<li class="food" v-for="food in selectFoods">
	<cartcontrol :food="food"></cartcontrol>
</li>
```

**步骤3.对food这个对象进行操作**

```
{{food.count}}
```



修改成vuex的话就是再goods当中对good进行初始化



**步骤1**

selectFoods:相当于购物车,把二维的变成一维的

在nextStick当中进行操作

// 对购物车进行初始化,这个初始化是把所有的对象都放进去,后期判断的时候根据的是count字段





## 问题

再代码刷新,页面不刷新的情况下

添加购物车  打印当前this的这个货物的时候

执行了两遍

解决,利用this解决



## find方法(数组的方法)

获取数组中年龄大于 18 的第一个元素

```
var ages = [3, 10, 18, 20];
 
function checkAdult(age) {
    return age >= 18;
}
 
function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
```

find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。

find() 对于空数组，函数是不会执行的。

 find() 并没有改变数组的原始值。



问题

在点击add之后,显示商品的数量的时候,发现count没有变化,没有出现

这个时候原来传递进来的是food



发现原来food来源于foods的遍历

而foods是goods的一部分

那么goods并没有使用vuex管理,所以不会双向流向数据

修改方法,把goods使用vuex进行管理



 this.$store.commit('cart/foodCartAdd', this.food);

   console.log("this.food", this.food)



在commit之后  其实food的数据结构已经发生了变化 但是这个组件的food是二级类目下的food

是通过props传递过来的

怎么在commit完成之后修改原来的food值





### 利用vue的prop属性

## [单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#单向数据流)

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不**应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图改变一个 prop 的情形：

1. **这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。**在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：

   ```
   props: ['initialCounter'],
   data: function () {
     return {
       counter: this.initialCounter
     }
   }
   ```

2. **这个 prop 以一种原始的值传入且需要进行转换。**在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

   ```
   props: ['size'],
   computed: {
     normalizedSize: function () {
       return this.size.trim().toLowerCase()
     }
   }
   ```



# 受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。





## 购物车组件的显示总数和count

```
  js
  ...mapGetters({
      getTotalCount: 'cart/getTotalCount',
      getTotalPrice: 'cart/getTotalPrice'
   }),
    
   html
   <div class="num" v-show="getTotalCount>0">{{getTotalCount}}</div>
```

![image-20200321094504145](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200321094504145.png)





### 关于3层遍历

WX的一个bug  不知道为什么

是因为这个块级元素是最后才出现的吗

对应遍历的每个对象按道理应该对应生成一个块级元素

但是结果是循环遍历生成了n个,而且最后一个显示在最上面一层



## 正常的生成对应的对象的本身数据,

## 就是对本身这个对象的数据结构进行操作



### 饿了么遮罩层分析

就是,直接父向子传递

prop :seller = seller

如果有子组件  应该是可以的,关于那个三层结构的难题

