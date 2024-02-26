import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.gray : theme.colors.black};
  border-radius: 8px;
  padding: 12px 16px;
`;

const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  text-align: center;
`;

export const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
