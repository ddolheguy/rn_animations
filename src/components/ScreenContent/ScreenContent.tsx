import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {ScrollView, StyleSheet} from 'react-native';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0px 16px;
`;

const Header = styled.View`
  min-height: 30px;
  padding: 0px 16px;
`;

const Footer = styled.View`
  padding: 24px 16px;
`;

type HomeScreenProps = PropsWithChildren & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const ScreenContent = ({children, header, footer}: HomeScreenProps) => {
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <StyledKeyboardAvoidingView behavior="padding">
        <Header>{header}</Header>
        <ScrollView>{children}</ScrollView>
        {footer ? <Footer>{footer}</Footer> : null}
      </StyledKeyboardAvoidingView>
    </SafeAreaView>
  );
};
