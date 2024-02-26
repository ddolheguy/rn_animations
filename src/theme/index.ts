const fonts = {
  bold: 'Inter-Bold',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
};

const colors = {
  background: '#F0F2EF',
  lightGray: '#E4E4E4',
  gray: '#A6ADAA',
  black: '#000000',
  white: '#FFFFFF',
};

export const theme = {
  fonts,
  colors,
};

export type ThemeColor = typeof colors;

export type Theme = typeof theme;
