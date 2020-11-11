# Element show/hide effects

*Show/hide an element with transition effect.*

## Installation

Via npm:

```bash
$ npm install @siteparts/show-hide-effects
```

## Usage

```js
import {slideUp} from '@siteparts/show-hide-effects';

// Slide up an element
let e1 = document.getElementById("element-1");
slideUp(e1);
```

```js
import {hide, fadeOut} from '@siteparts/show-hide-effects';

// Immediately hide an element
let e2 = document.getElementById("element-2");
hide(e2);

// Fade out an element and provide a complete callback
let e3 = document.getElementById("element-3");
fadeOut(e3, {complete: function () {
	console.log("Fade out complete");
}});
```

```js
import {fadeIn} from '@siteparts/show-hide-effects';

// Fade in an element with duration 2s and easing "linear"
// We assume #element-4 has inline style: "display: none"
let e4 = document.getElementById("element-4");
fadeIn(e4, {duration: 2000, easing: "linear"});
```
