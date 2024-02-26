import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AccountStack} from './AccountStack';
import {useTheme} from 'styled-components/native';

export const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background,
        },
      }}>
      <AccountStack />
    </NavigationContainer>
  );
};
