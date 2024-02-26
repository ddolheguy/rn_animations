import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View} from 'react-native';
import {Comment, Container, SkipText, Title} from './styles';

interface HeaderProps {
  title: string;
  comment: string;
}

export const Header = ({title, comment}: HeaderProps) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faArrowLeft} />
      <View>
        <Title>{title}</Title>
        <Comment>{comment}</Comment>
      </View>
      <SkipText>Skip</SkipText>
    </Container>
  );
};
