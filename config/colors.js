'use strict';

/** Tailwind treates a key called `default` as the value to use
 * when a color is accessed without a nested specifier. 
 * (ie. blue instead of blue-400)
 */

const addDefault = (colorDefinition, defaultKey = '500') => {
  return {
    DEFAULT: colorDefinition[defaultKey],
    ...colorDefinition
  };
}

const neutral = addDefault(
  {
    '2000':       '#060E1E',
    '1900':       '#0C1E41',
    '1800':       '#162B4D',
    '1700':       '#203858',
    '1600':       '#344563',
    '1500':       '#41526E',
    '1400':       '#505F79',
    '1300':       '#5E6D85',
    '1200':       '#6C788D',
    '1100':       '#7A879B',
    '1000':       '#8993A4',
    '900':        '#96A0AF',
    '800':        '#A5ADBA',
    '700':        '#B2BAC5',
    '600':        '#C0C6D0',
    '500':        '#DFE3E9',
    '400':        '#ECEEF2',
    '300':        '#F6F8FA',
    '200':        '#FCFDFE',
    '100':        '#ffffff'
  },
  '1300'
);

const purple = addDefault(
  {
    '800':        '#362C83',
    '700':        '#3F3894',
    '600':        '#54489E',
    '500':        '#6359A7',
    '400':        '#8076B6',
    '300':        '#9A8CC3',
    '200':        '#C0B5D9',
    '100':        '#EBE6F2'
  }
);

const orange = addDefault(
  {
    '800':        '#C55B18',
    '700':        '#F36B21',
    '600':        '#F6891E',
    '500':        '#FAA31A',
    '400':        '#FFD503',
    '300':        '#FCF58B',
    '200':        '#F7F2C0',
    '100':        '#F9F6EB'
  }
);

const green = addDefault(
  {
    '800':        '#0F5636',
    '700':        '#0F6745',
    '600':        '#068A5B',
    '500':        '#34B67F',
    '400':        '#73C7A0',
    '300':        '#9FD3B9',
    '200':        '#C2E1CE',
    '100':        '#E7F4EB'
  }
);

const red = addDefault(
  {
    '800':        '#8E0F1B',
    '700':        '#BE212F',
    '600':        '#D43027',
    '500':        '#E64C33',
    '400':        '#EE6A51',
    '300':        '#EB806B',
    '200':        '#F0AFA3',
    '100':        '#F3DCD6'
  },
  '700'
);

const blue = addDefault(
  {
    '800':        '#193878',
    '700':        '#1649A0',
    '600':        '#345BA9',
    '500':        '#396DB5',
    '400':        '#467FC1',
    '300':        '#57A5DA',
    '200':        '#B6E3FA',
    '100':        '#D4EAF8',
  },
  '600'
);

const white = '#FFFFFF';
const black = '#060E1E';

module.exports = {
  neutral,
  red,
  blue,
  green,
  orange,
  purple,
  white,
  black,
  current: 'currentColor'
}