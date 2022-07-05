import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#AB0C0D',
  secondary: '#FF7E00',
  // colors
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  pink: '#e00b0b',
  green: '#3c763d',
  lightGray: '#ebebf0',
  lightGray2: '#e1e1e3',
  lightGray3: '#cdcdd1',
  lightGray4: '#bebec2',
  darkGray: '#7d7d80',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 10,
  padding2: 20,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
