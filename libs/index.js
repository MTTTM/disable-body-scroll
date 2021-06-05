
/**
 * @params dom {dom}
 * @params swipeDir {string} top|bottom
 * **/
function disabledDefault(dom, swipeDir = "top") {
  let isScrollToBottom = dom.scrollHeight === (dom.scrollTop + dom.offsetHeight);
  let isScrollToTop = dom.scrollTop === 0;
  if (swipeDir == "top" && isScrollToTop) {
    return true;
  }
  else if (swipeDir == "bottom" && isScrollToBottom) {
    return true;
  }
  else {
    return false;
  }
}
function removeDocumentStartEvent(el){
  document.removeEventListener("touchstart",el.$documentTouchStart);
}
/**
* @param fn {Function}   
* @param delay {Number} （ms）
* @return {Function}
*/
export const throttle=function (fn, threshhold=200) {
  var last = 0;
  var timer;
  return function () {
    var context = this
    var args = arguments
    var now = +new Date()
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
/**
 * 
 * @param {*} dom  model scroll dom 
 */
export const disabledBodyScroll = function (dom) {
  let startY = 0;
  function fixEvent(e) {
    let position = {};
    if (e.targetTouches && e.targetTouches[0]) {
      var rect = e.target.getBoundingClientRect();
      var x = e.targetTouches[0].pageX - rect.left;
      var y = e.targetTouches[0].pageY - rect.top;
      position = {
        offsetX: x,
        offsetY: y,
        e: e
      }
    }
    else {
      position = {
        offsetX: e.offsetX,
        offsetY: e.offsetY,
        e: e
      }
    }
    return position;
  }
  function movefunction(e) {
    let position = fixEvent(e);
    let disY = position.offsetY - startY;
    let dir = disY > 0 ? "top" : "bottom";
    let t = disabledDefault(dom, dir);
    function disabledFn() {
      if (t) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
    throttle(disabledFn, 150)();
  }
  function upFunction(e) {
    e.stopPropagation();
    e.preventDefault();
    dom.removeEventListener("mousemove", movefunction)
    dom.removeEventListener("mouseup", upFunction)
    dom.removeEventListener("mouseup", upFunction)
  }
  function documentTouchStart(e) {
    let position = fixEvent(e);
    startY = position.offsetY;
    dom.addEventListener("touchmove", e.$movefunction)
    dom.addEventListener("touchend", e.$upFunction)
  }
  dom.$movefunction=movefunction;
  dom.$upFunction=upFunction;
  dom.$documentTouchStart=documentTouchStart
  document.addEventListener("touchstart", dom.$documentTouchStart);
}
export const directive = {
  bind: disabledBodyScroll,//v2
  beforeMount: disabledBodyScroll,//v3
  unbind: removeDocumentStartEvent,//v2
  unmounted:removeDocumentStartEvent//v3
}