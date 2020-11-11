/**
 * @callback completeCallback
 */

/**
 * @typedef {Object} Options
 * @property {number} [duration]
 * @property {string} [easing]
 * @property {completeCallback} [complete]
 */

/**
 * @param {Element} element
 * @param {Object.<string, string>} properties
 * @param {completeCallback} complete
 */
function fadeComplete(element, properties, complete)
{
	if (properties.transition) {
		element.style.transition = properties.transition;
	} else {
		element.style.removeProperty('transition');
	}

	if (properties.opacity) {
		element.style.opacity = properties.opacity;
	} else {
		element.style.removeProperty('opacity');
	}

	if (complete) {
		complete();
	}
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function fadeIn(element, options = {})
{
	const o = getOptions(options);

	const properties = {
		transition: element.style.transition || undefined,
		opacity: element.style.opacity || undefined
	};

	// styles necessary for the animation
	if (!element.style.opacity) {
		element.style.opacity = 0;
	}

	element.style.removeProperty('display');
	element.style.transition = `opacity ${o.duration / 1000}s ${o.easing}`;
	requestAnimationFrame(function () {
		element.style.opacity = 1;
	});

	setTimeout(function () {
		fadeComplete(element, properties, o.complete);
	}, o.duration);
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function fadeOut(element, options = {})
{
	const o = getOptions(options);

	const properties = {
		transition: element.style.transition || undefined,
		opacity: element.style.opacity || undefined
	};

	// styles necessary for the animation
	if (!element.style.opacity) {
		element.style.opacity = 1;
	}

	element.style.transition = `opacity ${o.duration / 1000}s ${o.easing}`;
	requestAnimationFrame(function () {
		element.style.opacity = 0;
	});

	setTimeout(function () {
		element.style.display = 'none';

		fadeComplete(element, properties, o.complete);
	}, o.duration);
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function fadeToggle(element, options = {})
{
	const display = element.style.display || undefined;

	if (display == 'none') {
		fadeIn(element, options);
	} else {
		fadeOut(element, options);
	}
}

/**
 * @param {Options} options
 * @return {Options}
 */
function getOptions(options)
{
	return {
		duration: options.duration || 400,
		easing: options.easing || "ease-out",
		complete: options.complete || undefined
	};
}

/**
 * @param {Element} element
 */
function hide(element)
{
	element.style.display = 'none';
}

/**
 * @param {Element} element
 */
function show(element)
{
	element.style.removeProperty('display');
}

/**
 * @param {Element} element
 * @param {Object.<string, string>} properties
 * @param {completeCallback} complete
 */
function slideComplete(element, properties, complete)
{
	if (properties.transition) {
		element.style.transition = properties.transition;
	} else {
		element.style.removeProperty('transition');
	}

	if (properties.overflowY) {
		element.style.overflowY = properties.overflowY;
	} else {
		element.style.removeProperty('overflow-y');
	}

	if (properties.marginTop) {
		element.style.marginTop = properties.marginTop;
	} else {
		element.style.removeProperty('margin-top');
	}

	if (properties.marginBottom) {
		element.style.marginBottom = properties.marginBottom;
	} else {
		element.style.removeProperty('margin-bottom');
	}

	if (properties.paddingTop) {
		element.style.paddingTop = properties.paddingTop;
	} else {
		element.style.removeProperty('padding-top');
	}

	if (properties.paddingBottom) {
		element.style.paddingBottom = properties.paddingBottom;
	} else {
		element.style.removeProperty('padding-bottom');
	}

	if (properties.height) {
		element.style.height = properties.height;
	} else {
		element.style.removeProperty('height');
	}

	if (complete) {
		complete();
	}
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function slideDown(element, options = {})
{
	const o = getOptions(options);

	const properties = {
		transition: element.style.transition || undefined,
		overflowY: element.style.overflowY || undefined,
		marginTop: element.style.marginTop || undefined,
		marginBottom: element.style.marginBottom || undefined,
		paddingTop: element.style.paddingTop || undefined,
		paddingBottom: element.style.paddingBottom || undefined,
		heigth: element.style.height || undefined
	};

	const cs = window.getComputedStyle(element);
	const marginTop = cs.getPropertyValue("margin-top");
	const marginBottom = cs.getPropertyValue("margin-bottom");
	const paddingTop = cs.getPropertyValue("padding-top");
	const paddingBottom = cs.getPropertyValue("padding-bottom");

	// styles necessary for the animation
	if (!element.style.height) {
		element.style.height = '0px';
	}

	element.style.marginTop = '0px';
	element.style.marginBottom = '0px';
	element.style.paddingTop = '0px';
	element.style.paddingBottom = '0px';
	element.style.overflowY = 'hidden';
	element.style.removeProperty('display');
	element.style.transition = `height ${o.duration / 1000}s ${o.easing}, margin ${o.duration / 1000}s ${o.easing}, padding ${o.duration / 1000}s ${o.easing}`;
	requestAnimationFrame(function () {
		let height = element.scrollHeight;

		if (cs.getPropertyValue("box-sizing") == "border-box") {
			height += parseFloat(paddingTop) + parseFloat(paddingBottom);
		}

		element.style.height = `${height}px`;
		element.style.marginTop = marginTop;
		element.style.marginBottom = marginBottom;
		element.style.paddingTop = paddingTop;
		element.style.paddingBottom = paddingBottom;
	});

	setTimeout(function () {
		slideComplete(element, properties, o.complete);
	}, o.duration);
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function slideToggle(element, options = {})
{
	const display = element.style.display || undefined;

	if (display == 'none') {
		slideDown(element, options);
	} else {
		slideUp(element, options);
	}
}

/**
 * @param {Element} element
 * @param {Options} [options]
 */
function slideUp(element, options = {})
{
	const o = getOptions(options);

	const properties = {
		transition: element.style.transition || undefined,
		overflowY: element.style.overflowY || undefined,
		marginTop: element.style.marginTop || undefined,
		marginBottom: element.style.marginBottom || undefined,
		paddingTop: element.style.paddingTop || undefined,
		paddingBottom: element.style.paddingBottom || undefined,
		heigth: element.style.height || undefined
	};

	const cs = window.getComputedStyle(element);
	const marginTop = cs.getPropertyValue("margin-top");
	const marginBottom = cs.getPropertyValue("margin-bottom");
	const paddingTop = cs.getPropertyValue("padding-top");
	const paddingBottom = cs.getPropertyValue("padding-bottom");

	// styles necessary for the animation
	requestAnimationFrame(function () {
		if (!element.style.height) {
			let height = element.scrollHeight;

			if (cs.getPropertyValue("box-sizing") == "content-box") {
				height -= parseFloat(paddingTop) + parseFloat(paddingBottom);
			}

			element.style.height = `${height}px`;
		}

		element.style.marginTop = marginTop;
		element.style.marginBottom = marginBottom;
		element.style.paddingTop = paddingTop;
		element.style.paddingBottom = paddingBottom;
		element.style.overflowY = 'hidden';
		element.style.transition = `height ${o.duration / 1000}s ${o.easing}, margin ${o.duration / 1000}s ${o.easing}, padding ${o.duration / 1000}s ${o.easing}`;
		requestAnimationFrame(function () {
			element.style.height = '0px';
			element.style.marginTop = '0px';
			element.style.marginBottom = '0px';
			element.style.paddingTop = '0px';
			element.style.paddingBottom = '0px';
		});
	});

	setTimeout(function () {
		element.style.display = 'none';

		slideComplete(element, properties, o.complete);
	}, o.duration);
}

/**
 * @param {Element} element
 */
function toggle(element)
{
	const display = element.style.display || undefined;

	if (display == 'none') {
		show(element);
	} else {
		hide(element);
	}
}

export {
	fadeIn,
	fadeOut,
	fadeToggle,
	hide,
	show,
	slideDown,
	slideToggle,
	slideUp,
	toggle
};
