import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const CardContainer = styled.View`
  height: 120px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: 20px;
`;

export const Comment = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  margin-top: 16px;
`;

export const StyledTextInput = styled.TextInput`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: 20px;
  line-height: 24px;
  margin-top: 40px;
`;
