import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const BalanceLarge = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: 40px;
  line-height: 40px;
`;

export const Balance = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: 30px;
  line-height: 40px;
`;

export const PercentageContainer = styled.View`
  align-self: flex-start;
  background-color: ${({theme}) => theme.colors.lightGray};
  border-radius: 10px;
  padding: 3px 10px;
  margin-top: 10px;
`;

export const Percentage = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  line-height: 18px;
`;

export const ContentContainer = styled.View`
  margin-top: 40px;
`;
