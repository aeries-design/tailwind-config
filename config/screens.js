'use strict';

const screens = {
  'xs': '375px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px'
}

// If not building for CDN add the XL breakpoint
if (process.env.NODE_ENV != 'cdnBuild') {
  screens['xl'] = '1200px'
}

module.exports = screens