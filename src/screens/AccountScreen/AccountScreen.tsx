import React from 'react';
import {ScreenContent} from '../../components/ScreenContent/ScreenContent';
import {
  Balance,
  BalanceLarge,
  ContentContainer,
  Percentage,
  PercentageContainer,
  Title,
} from './styles';
import {Header} from './components/Header';

interface AccountScreenProps {
  goBack: () => void;
}

export const AccountScreen = ({goBack}: AccountScreenProps) => {
  return (
    <ScreenContent header={<Header goBack={goBack} />}>
      <ContentContainer>
        <Title>Total balance</Title>

        <BalanceLarge>
          $0<Balance>.00</Balance>
        </BalanceLarge>

        <PercentageContainer>
          <Percentage>0%</Percentage>
        </PercentageContainer>
      </ContentContainer>
    </ScreenContent>
  );
};
