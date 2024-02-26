import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px;
  flex-direction: row;
  gap: 8px;
  padding: 5px 8px;
  width: 150px;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 24px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  line-height: 16px;
`;

export const Line = styled.View`
  background-color: ${({theme}) => theme.colors.gray};
  height: 15px;
  width: 1px;
`;
