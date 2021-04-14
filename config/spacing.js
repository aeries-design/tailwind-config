'use strict';

const defaults = {
  '28': '7rem',
}

// extra large spacings for use with tailwind 
// CLI use-cases. These should not be included
// in  the CDN Build.
const extended = {
  '82': '24rem',
  '120': '30rem',
  '160': '40rem',
  '240': '60rem',
  '320': '80rem'
}

let spacing

if (process.env.NODE_ENV != 'cdnBuild') {
  spacing = {
    ...defaults,
    ...extended
  }
} else {
  spacing = { ...defaults }
}


module.exports = spacing