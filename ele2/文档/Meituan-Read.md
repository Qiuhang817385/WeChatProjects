## 创建项目

```
初始化项目
taro init meituan2
用到技术
taro+react+redux+axios+taro-ui
*** 注意的地方 ***
安装完成taro-UI需要重新npm install
使用h5启动项目,需要取消掉app.js当中的注释
```



### 高阶组件的用法(未完,找错了,connect不是HOC)

用法:接受一个,返回一个新组件

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200303100128894.png" alt="image-20200303100128894" style="zoom: 67%;" />

### redux的装饰器写法

```
@connect(mapStateToProps,mapDispatchToProps)

class Index

export Index
-------------------
更加简化的写法就是下面的写法

({ counter }) => ({counter})-mapStateToProps,直接从这个函数当中结构出来
```

```
原来的写法
export default connect(mapStateToProps,mdtp)(Index)
```



## redux和vuex的比较

**redux相比vuex来说,重点是没有异步的概念,需要借助中间件来实现**

react默认只支持同步,实现异步任务还需要调用中间件

connect本身返回的是一个函数(本质是一个高阶组件)

接受的参数是一个组件(无状态or有状态)



当做完映射之后

组件当中就会添加这些所有的属性

包括需要dispatch的add本身方法和从store传递过来的store里面的num

对应reducer和action

把reducer抽离出来也叫重构

### redux的装饰器用法(taro封装)

```
引入connect
import { connect } from '@tarojs/redux';
引入action
import { add, minus, asyncAdd } from '../../actions/counter'

(
定义的常量在哪里使用???
	1.action处理函数
	2.
)

//connect函数
@connect(
//参数1,要连接的reducer,利用解构赋值语法
({ counter }) => ({counter})   ,   
//参数2,要派发的action
(dispatch) => ({
  //action1
  add () {
    dispatch(add())
  },
  //action2
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
})
)

```



### Bug的记录

```
1.创建reducer的时候，使用箭头函数不起作用
export default  headReducer = (state = defaultState, action) => {}
解决办法
1.export default function headReducer (state = defaultState, action) {}
2.	let headReducer = (state = defaultState, action) => {}  
	export default headReducer
```



### taro-ui

```
由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：

h5: {
  esnextModules: ['taro-ui']
}

// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
```





### 累计方法

```
Array.isArray() 用于确定传递的值是否是一个 Array。
语法
Array.isArray(obj)
```

