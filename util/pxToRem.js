'use strict';

/**
 * Convert a number of pixels into the appropriate REM value
 *
 * @param {number} pxSize
 * @return {string}
 */

const pxToRem = (pxSize) => {
  return `${pxSize / 16}rem`;
}

module.exports = pxToRem