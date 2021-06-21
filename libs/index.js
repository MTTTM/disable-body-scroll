
let isScrolledToBottom = (dom) => dom.scrollHeight === (dom.scrollTop + dom.offsetHeight);
let isScrolledToTop = (dom) => dom.scrollTop === 0;
var ua = navigator.userAgent.toLowerCase();
let isIpad = ua.match(/ipad/i) == "ipad"
/**
 * @params dom {dom}
 * @params swipeDir {string} top|bottom
 * **/
function disabledDefault(dom, swipeDir = "top") {
  // document.querySelector("#offsety").innerHTML=dom.scrollTop;
  console.log("dir", swipeDir)
  if (swipeDir == "top" && isScrolledToTop(dom)) {
    return true;
  }
  else if (swipeDir == "bottom" && isScrolledToBottom(dom)) {
    return true;
  }
  else {
    return false;
  }
}
function removeDocumentStartEvent(el) {
  document.removeEventListener("touchstart", el.$documentTouchStart);
}
/**
 * 
 * @param {*} dom  model scroll dom 
 */
export const disabledBodyScroll = function (dom, binding) {
  let { horizontalScreen, roate, scrollOnePxWhenTouch } = (binding.value ? binding.value : {});
  if (!("scrollOnePxWhenTouch" in binding) && isIpad) {
    scrollOnePxWhenTouch = true;
  }
  let startY = 0;
  let startX = 0;
  function fixEvent(e) {
    let position = {};
    if (e.targetTouches && e.targetTouches[0]) {
      var rect = dom.getBoundingClientRect();
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
    e.stopPropagation();
    let position = fixEvent(e);
    let disY = position.offsetY - startY;
    let disX = position.offsetX - startX;
    //dir是dom的滚动方向
    let dir = disY > 0 ? "top" : "bottom";
    if (horizontalScreen) {
      if (roate == 90) {
        dir = disX < 0 ? "top" : "bottom";
      }
      else if (roate == -90) {
        console.log("-90")
        dir = disX > 0 ? "top" : "bottom";
      }
    }
    let disabled = disabledDefault(dom, dir);
    if (disabled && e.cancelable) {
      e.preventDefault();
    }

  }
  function upFunction(e) {
    e.stopPropagation();
    dom.removeEventListener("mousemove", movefunction)
    dom.removeEventListener("mouseup", upFunction)
    dom.removeEventListener("mouseup", upFunction)
  }
  function documentTouchStart(e) {
    e.stopPropagation();
    //It needs to grab the priority of the scrollable body at ipad
    //其实就这一个步骤就可以通过主动触发滚动元素的滚动，来阻止触发外部滚动
    if (dom && dom.style && dom.style.display !== "none" && scrollOnePxWhenTouch) {
      if (isScrolledToBottom(dom)) {
        dom.scrollBy(0, -1)
      }
      else if (isScrolledToTop(dom)) {
        dom.scrollBy(0, 1)
      }
    }
    let position = fixEvent(e);
    startY = position.offsetY;
    startX = position.offsetX;
    dom.addEventListener("touchmove", dom.$movefunction, false)
    dom.addEventListener("touchend", dom.$upFunction, false)
  }
  dom.$movefunction = movefunction;
  dom.$upFunction = upFunction;
  dom.$documentTouchStart = documentTouchStart
  document.addEventListener("touchstart", dom.$documentTouchStart, false);
}
export const directive = {
  bind: disabledBodyScroll,//v2
  beforeMount: disabledBodyScroll,//v3
  unbind: removeDocumentStartEvent,//v2
  unmounted: removeDocumentStartEvent//v3
}