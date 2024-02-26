import React from 'react';
import {Container, Line, Logo, Title} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';

interface AccountSwitcherProps {
  title?: string;
}

export const AccountSwitcher = ({title}: AccountSwitcherProps) => {
  return (
    <Container>
      <Logo source={require('../../assets/png/logo.png')} />
      {title ? <Title numberOfLines={1}>{title}</Title> : null}
      <Line />
      <FontAwesomeIcon icon={faFile} />
    </Container>
  );
};
