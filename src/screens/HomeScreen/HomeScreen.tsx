import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AccountStackParamList} from '../../navigation/AccountStack';
import styled from 'styled-components/native';
import {AccountCard} from '../../components/AccountCard/AccountCard';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import {Button} from '../../components/Button/Button';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0px 16px;
`;

const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: black;
  font-size: 20px;
`;

const Comment = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: black;
  font-size: 16px;
`;

const Footer = styled.View`
  padding: 16px;
`;

export const HomeScreen = () => {
  const [accountName, setAccountName] = useState('');
  const navigation = useNavigation<NavigationProp<AccountStackParamList>>();

  const handlePress = () => {
    navigation.navigate('Account');
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <StyledKeyboardAvoidingView behavior="padding">
        <ScrollView>
          <AccountCard accountName={accountName} />
          <Title>Give your account a name</Title>
          <Comment>Perhaps relating to what you'll use it for.</Comment>

          <TextInput
            placeholder="Account"
            onChangeText={setAccountName}
            value={accountName}
          />
        </ScrollView>
        <Footer>
          <Button
            disabled={!accountName.length}
            title="Continue"
            onPress={handlePress}
          />
        </Footer>
      </StyledKeyboardAvoidingView>
    </SafeAreaView>
  );
};
