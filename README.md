# disable-body-scroll

- Disable the scrolling of the content of the body when the content of the pop-up window is scrolled
- Please add to the Y-axis scrolling element
- Support vue directive(vue2,vue3)
- Support independent function call
- [demo](https://1c4lc.csb.app/)

## Project setup

```
npm install disable-body-scroll
```

### export

| key                | desc                        | params1    | params2 |
| ------------------ | --------------------------- | ---------- | ------- |
| disabledBodyScroll | disabledBodyScroll function | scroll dom | ---     |
| directive          | vue directive config        | --         | ---     |

### Usage

#### disabledBodyScroll

- recommended to replace it with directive if you use vue

```javascript
disabledBodyScroll(document.querySeletor("#modelScrollBox"));
```

#### directive

- only work with vue

```javascript
import { directive } from "disable-body-scroll";
Vue.directive("disabled-body-scroll", { ...directive });
```

```html
//
<div id="modelScrollBox" v-disabled-body-scroll>
  ...
</div>
;
```

#### Q&A

- Dynamically enable or disable the diasabledScroll
- like `v-disabled-body-scroll:[disabledScrollDirectiveStatus]`,variable disabledScrollDirectiveStatus is ”working“ or "disabled"

- Adaptive horizontal screen app
- like `v-disabled-body-scroll="rotate"`,Variable rotate equals 0 or 90 or - 90
