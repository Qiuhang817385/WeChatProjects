class Event {
  constructor() {
    this.events = {};
  }
  on (eventName, cb) {
    console.log("on+eventName", eventName);
    console.log("on+this.events", this.events)
    console.log("on+this.events.eventName", this.events.eventName)
    if (this.events.eventName) {
      //存在事件
      console.log("on+this.evnets存在", this.events)
      this.events.eventName.push(cb);
    } else {
      // 不存在事件
      console.log()
      console.log("on+this.evnets不存在1", this.events)
      this.events.eventName = [cb];
      console.log("on+this.evnets不存在2", this.events)
    }
  }
  emit (eventName, params) {
    if (this.events.eventName) {
      this.events.eventName.map((cb) => {
        cb(params)
      })
    }
  }
}
export default Event