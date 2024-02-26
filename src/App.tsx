import React from 'react';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import {Navigation} from './navigation/Navigation';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

numeral.locale('en-gb');

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
