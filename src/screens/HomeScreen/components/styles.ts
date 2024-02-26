import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const Comment = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

export const SkipText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  line-height: 18px;
`;
