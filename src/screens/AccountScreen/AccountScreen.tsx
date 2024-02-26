import React from 'react';
import styled from 'styled-components/native';
import {ScreenContent} from '../../components/ScreenContent/ScreenContent';

const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: black;
  font-size: 20px;
`;

export const AccountScreen = () => {
  return (
    <ScreenContent>
      <Title>Give your account a name</Title>
    </ScreenContent>
  );
};
