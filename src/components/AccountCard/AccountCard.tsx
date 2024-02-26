import numeral from 'numeral';
import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View``;

const AccountName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 12px;
  line-height: 16px;
`;

const Balance = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 12px;
  line-height: 16px;
`;

interface AccountCardProps {
  accountName: string;
  balance?: number;
}

export const AccountCard = ({accountName, balance = 0}: AccountCardProps) => {
  return (
    <CardContainer>
      <AccountName>{accountName}</AccountName>
      <Balance>{numeral(balance).format('$0,00.00')}</Balance>
    </CardContainer>
  );
};
