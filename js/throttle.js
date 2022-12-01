/**
 * @param  {} fn
 * @param  {} delay
 * !节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 * ?节流在连续的事件，每隔一段时间执行一次回调的场景有：
 * *1.鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * *2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
 * *3.计算鼠标移动的距离，mousemove(单位时间内只触发一次)
 * *4.拖拽场景，mousemove(单位时间内只触发一次)
 * *5.Canvas 模拟画板功能，mousemove(单位时间内只触发一次)
 */
const throttle = (fn, delay) => {
  let lastCall = 0;
  
  return (...args) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;  
    return fn(...args);
  }
}

const task = () => console.log('Task performed');
// 利用闭包保存上一次执行的时间
const throttledTask = throttle(task, 1000);
window.addEventListener('scroll', throttledTask);