import React, {useState} from 'react';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {AccountScreen} from './screens/AccountScreen/AccountScreen';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

numeral.locale('en-gb');

export const App = () => {
  const [canAddAccount, setCanAddAccount] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AccountScreen />
        {canAddAccount ? (
          <HomeScreen onComplete={() => setCanAddAccount(false)} />
        ) : null}
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
