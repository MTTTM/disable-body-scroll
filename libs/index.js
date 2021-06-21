
let isScrollToBottom = (dom) => dom.scrollHeight === (dom.scrollTop + dom.offsetHeight);
let isScrollToTop = (dom) => dom.scrollTop === 0;
/**
 * @params dom {dom}
 * @params swipeDir {string} top|bottom
 * **/
function disabledDefault(dom, swipeDir = "top") {
  // document.querySelector("#offsety").innerHTML=dom.scrollTop;
  if (swipeDir == "top" && isScrollToTop(dom)) {
    return true;
  }
  else if (swipeDir == "bottom" && isScrollToBottom(dom)) {
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
export const disabledBodyScroll = function (dom) {
  let startY = 0;
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
    let dir = disY > 0 ? "top" : "bottom";
    let disabled = disabledDefault(dom, dir);
    // document.querySelector("#offsetx").innerHTML="-"+t;
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
    if (isScrollToBottom(dom)) {
      dom.scrollBy(0, -1)
    }
    else if (isScrollToTop(dom)) {
      dom.scrollBy(0, 1)
    }
    // document.querySelector("#offsetx").innerHTML="-start";
    let position = fixEvent(e);
    startY = position.offsetY;
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