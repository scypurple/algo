/**
 * @param  {} fn
 * @param  {} delay
 * !防抖：n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
 * ?防抖在连续的事件，只需触发一次回调的场景有：
 *  *1.搜索框搜索输入。只需用户最后一次输入完，再发送请求
 *  *2.手机号、邮箱验证输入检测
 *  *3.窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
 */
const debounce = (fn, delay) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}