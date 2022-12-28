/*! Copyright 2022
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 0.1.0
 */
HTMLElement.prototype.actual = function (method, options) {
  const defaults = {
    absolute: false,
    clone: false,
    display: 'block',
    convertToNumber: false
  };

  const configs = Object.assign({}, defaults, options);

  let target = this;

  let fix, restore;

  if (configs.clone === true) {
    fix = function() {
      const style = 'position: absolute !important; top: -1000 !important;';

      // this is useful with css3pie
      target = Object.assign(
          {},
          target,
          { style: style },
          { parentNode: document.body }
      );
    };

    restore = function() {
      // remove DOM element after getting the width
      target.parentNode.removeChild(target);
    };
  } else {
    let tmp = [];
    let style = '';
    let hidden;

    fix = function() {
      // get all hidden parents
      hidden = Array.prototype.filter.call(target.parentElement.querySelectorAll(':scope *'), (el) => el.style.display === 'none').concat([target]);

      if (window.getComputedStyle(target.parentElement).display === 'none') {
        hidden.push(target.parentElement);
      }

      style += 'visibility: hidden !important; display: ' + configs.display + ' !important;';

      if (configs.absolute === true) style += 'position: absolute !important;';

      // save the origin style props
      // set the hidden el css to be got the actual value later
      for (let i = 0; i < hidden.length; i++) {
        // Save original style. If no style was set, getAttribute() returns null
        const elem = hidden[i];
        const thisStyle = elem.getAttribute('style');

        tmp.push(thisStyle);
        // Retain as much of the original style as possible, if there is one
        elem.setAttribute(
            'style',
            thisStyle ? thisStyle + ';' + style : style
        );
      }
    };

    restore = function() {
      // restore origin style values
      for (let i = 0; i < hidden.length; i++) {
        const elem = hidden[i];
        const _tmp = tmp[i];

        if (_tmp === undefined) {
          elem.removeAttribute('style');
        } else {
          elem.setAttribute('style', _tmp);
        }
      }
    };
  }

  fix();

  const actual = configs.convertToNumber ?
      parseFloat(window.getComputedStyle(target)[method]) :
      window.getComputedStyle(target)[method];


  restore();
  // IMPORTANT, this plugin only return the value of the first element
  return actual;
};