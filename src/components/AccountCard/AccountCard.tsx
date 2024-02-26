import numeral from 'numeral';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  align-self: center;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 12px;
  justify-content: space-between;
  height: 120px;
  padding: 16px;
  width: 200px;
`;

const AccountName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 8px;
`;

const Balance = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 14px;
  line-height: 18px;
`;

const Logo = styled.Image`
  height: 24px;
  width: 24px;
`;

interface AccountCardProps {
  accountName: string;
  balance?: number;
}

export const AccountCard = ({accountName, balance = 0}: AccountCardProps) => {
  return (
    <CardContainer>
      <Logo source={require('../../assets/png/logo.png')} />
      <View>
        <AccountName>{accountName}</AccountName>
        <Balance>{numeral(balance).format('$0,00.00')}</Balance>
      </View>
    </CardContainer>
  );
};
