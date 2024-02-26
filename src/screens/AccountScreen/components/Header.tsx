import {faArrowLeft, faEarthAfrica} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AccountSwitcher} from '../../../components/AccountSwitcher/AccountSwitcher';
import {ActiveAccountContext} from '../../../context/ActiveAccountContext';
import {Pressable} from 'react-native';

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

interface HeaderProps {
  goBack: () => void;
}

export const Header = ({goBack}: HeaderProps) => {
  const {accountName} = useContext(ActiveAccountContext);
  return (
    <Container>
      <Pressable hitSlop={20} onPress={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Pressable>
      <AccountSwitcher title={accountName} />
      <FontAwesomeIcon icon={faEarthAfrica} />
    </Container>
  );
};
