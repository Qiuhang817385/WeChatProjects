// 获取菜品数量,通过传入的菜品信息,统计当前有多少菜品
// 缓存的数据,H5,小程序
// 应该使用taro的方法
import Event from './event';

import Taro from '@tarojs/taro'
// 定义缓存的数据结构,数组?对象?
// 对象
const foodKey = "taro_meituan";


let myEvent = new Event();

export function getFoodCount (food) {
  let store = Taro.getStorageSync(foodKey)
  if (store) {
    // 查找
    if (store[food.id]) {
      return store[food.id].Num
    } else {
      return 0;
    }
  } else {
    return 0
  }
}

// 加减的时候触发,Num是由加减组件菜单自身存储的
// 当减的数量=0时,删除菜品的数据结构
// 加菜时,数据结构如果没有菜品,新增数据结构
export function setFoodCount (food, Num, type, cb) {
  if (food) {
    let store = Taro.getStorageSync(foodKey);
    if (!store) store = {};
    switch (type) {
      case 'add':
        if (store[food.id]) {
          store[food.id].Num = Num + 1;
        } else {
          store[food.id] = { ...food, Num: 1 };
        }
        Taro.setStorageSync(foodKey, store);
        cb && cb()
        break;
      case 'cut':
        if (Num == 1) {
          console.log(Num)
          // 删除
          if (store[food.id]) {
            console.log("删除", store[food.id])
            delete store[food.id];
          }
        } else {
          if (store[food.id]) {
            store[food.id].Num = Num - 1;
          }
        }
        Taro.setStorageSync(foodKey, store);
        cb && cb()
        break;
      default:
        break;
    }
  }
}


export function getEvent () {
  return myEvent
}
// 获取所有菜品数量和价格
export function getAllFoodInfo () {
  let allPrice = 0;
  let allNum = 0;
  let store = Taro.getStorageSync(foodKey);
  if (store) {
    //对store进行遍历
    Object.keys(store).map((key) => {
      if (store[key]) {
        allPrice += store[key].price * store[key].Num;
        allNum += store[key].Num;
      }
    })
  }
  console.log("allPrice", allPrice)
  return { allPrice, allNum };
}