import React, {useContext, useState} from 'react';
import {AccountCard} from '../../components/AccountCard/AccountCard';
import {Button} from '../../components/Button/Button';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {ScreenContent} from '../../components/ScreenContent/ScreenContent';
import {
  Background,
  CardContainer,
  Comment,
  StyledTextInput,
  Title,
} from './styles';
import {Header} from './components/Header';
import {ActiveAccountContext} from '../../context/ActiveAccountContext';
import {cardExiting, textExiting} from './HomeScreen.utils';

interface HomeScreenProps {
  onComplete: () => void;
}

const messages = {
  title: 'Give your account a name',
  comment: "Perhaps relating to what you'll use it for.",
  headerTitle: 'Add a new account',
  headerComment: "To Drew's wallet",
  accountCreatedTitle: 'Account created',
  accountCreatedComment: 'Taking you to your new account now.',
};

export const HomeScreen = ({onComplete}: HomeScreenProps) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const {setAccountName: setActiveAccount} = useContext(ActiveAccountContext);

  const offset = useSharedValue('0deg');
  const [accountName, setAccountName] = useState('');

  const handlePress = () => {
    setActiveAccount(accountName);
    setAccountCreated(true);

    offset.value = withSequence(
      withTiming('-5deg', {duration: 0}),
      withRepeat(withTiming('5deg', {duration: 1500}), 2, true, () => {
        runOnJS(onComplete)();
      }),
    );
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{rotate: offset.value}],
  }));

  return (
    <Background>
      <ScreenContent
        header={
          !accountCreated ? (
            <Header
              title={messages.headerTitle}
              comment={messages.headerComment}
            />
          ) : null
        }
        footer={
          !accountCreated ? (
            <Button
              disabled={!accountName.length}
              title="Continue"
              onPress={handlePress}
            />
          ) : null
        }>
        <CardContainer>
          <Animated.View style={cardStyle} exiting={cardExiting}>
            <AccountCard accountName={accountName} />
          </Animated.View>
        </CardContainer>
        <Animated.View exiting={textExiting}>
          <Title>
            {accountCreated ? messages.accountCreatedTitle : messages.title}
          </Title>
          <Comment>
            {accountCreated ? messages.accountCreatedComment : messages.comment}
          </Comment>
        </Animated.View>

        {!accountCreated ? (
          <StyledTextInput
            autoFocus
            placeholder="Account"
            onChangeText={setAccountName}
            value={accountName}
          />
        ) : null}
      </ScreenContent>
    </Background>
  );
};
