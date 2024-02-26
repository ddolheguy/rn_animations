import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {AccountScreen} from './screens/AccountScreen/AccountScreen';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActiveAccountProvider} from './context/ActiveAccountContext';

const Background = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;

export const App = () => {
  const [canAddAccount, setCanAddAccount] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <ActiveAccountProvider>
        <Background>
          <SafeAreaProvider>
            {/* NOTE:  I prefer using React Native Navigation but since the animation needed to span screens is isn't easily possible in the time for this test.
              Reanimated has a new beta feature called sharedTransitionTag and sharedTransitionStyle which I had a quick play around with but wasm't able to get this
              working without spending a lot of time digging into why / how it works.
             */}

            <AccountScreen goBack={() => setCanAddAccount(true)} />
            {canAddAccount ? (
              <HomeScreen onComplete={() => setCanAddAccount(false)} />
            ) : null}
          </SafeAreaProvider>
        </Background>
      </ActiveAccountProvider>
    </ThemeProvider>
  );
};
