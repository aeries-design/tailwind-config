'use strict';

const pxToRem = require('../util/pxToRem')

const fontFamily = {
  'aeries':   ['Aeries Sans'],
  'nunito' :  ['Nunito Sans']
}

const fontWeight = {
  thin        : 200,
  light       : 300,
  medium      : 400,
  'semi-bold'   : 600,
  bold        : 700,
  'extra-bold'  : 800
}

const fontSize = {
  'xx-large'    : '3.06rem',
  'display'     : '2.43rem',
  'header'      : '1.93rem',
  'title'       : '1.56rem',
  'subhead'     : '1.15rem',
  'body'        : '1rem',
  'minimum-text': '.81rem',
  'fine-print'  : '.625rem'
}

const zIndex = {
  '-10': -10,
  '-5': -5,
  '-1': -1,
  '5': 5,
  '15': 15,
  '25': 25,
  '35': 35,
  '45': 45,
  '55': 55,
  '60': 60,
  '65': 65,
  '70': 70,
  '75': 75,
  '80': 80,
  '85': 85,
  '90': 90,
  '95': 95,
  '100': 100,
}

const maxWidth = {
  '32':   '8rem',
  '56':   '14rem',
  'page-inset': '56rem',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '5/6': '83.333333%',
  '960': '60rem'
}

const minHeight = {
  '24': '6rem',
  '32': '8rem',
}

const maxHeight = {
  '0': pxToRem('0'),
}

const boxShadow = {
  'double-drop': '0px 4px 25px rgba(22, 43, 77, 0.11), 0px 4px 8px rgba(94, 109, 133, 0.04)'
}

const letterSpacing = {
  'superwide': '.75rem',
}

module.exports = {
  boxShadow,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  maxHeight,
  maxWidth,
  minHeight,
  zIndex,
}