'use strict';

const { ...colors } = require('./config/colors');
const {
  boxShadow,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  maxHeight,
  maxWidth,
  minHeight,
  spacing,
  zIndex,
} = require('./config/typography');

const variants = require('./config/variants');
const { gridRow, gridColumn } = require('./config/grid');
const screens = require('./config/screens');

module.exports = {
  theme: {
    colors,
    container: { center: true },
    fill: {
      ...colors,
      current: 'currentColor'
    },
    fontFamily,
    fontWeight,
    screens,
    stroke: {
      ...colors,
      current: 'currentColor'
    },
    extend: {
      boxShadow,
      fontSize,
      gridRow,
      gridColumn,
      letterSpacing,
      maxHeight,
      maxWidth,
      minHeight,
      spacing,
      zIndex,
    }
  },
  variants,
  corePlugins: {
    translate: false,
  }
}