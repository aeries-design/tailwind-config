'use strict';

const pxToRem = require('../util/pxToRem');

const screens = {
  'xs': pxToRem('375px'),
  'sm': pxToRem('640px'),
  'md': pxToRem('768px'),
  'lg': pxToRem('1024px'),
  'xl': pxToRem('1200px')
}

module.exports = { screens }