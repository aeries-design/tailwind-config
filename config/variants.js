'use strict';

const setVariants = ( options ) => {
  if (process.env.NODE_ENV === 'cdnBuild') {
    return options
  }

  const defaultVariants = ['last', 'first']
  return defaultVariants.concat(options)
}

const variants = {
  backgroundColor: setVariants(['hover', 'focus']),
  margin: setVariants(['responsive']),
  padding: setVariants(['responsive']),
  border: setVariants(['responsive']),
}

module.exports = variants;