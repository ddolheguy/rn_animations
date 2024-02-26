import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../screens/AccountScreen/AccountScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';

export type AccountStackParamList = {
  Home: undefined;
  Account: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{animation: 'fade'}}
      />
    </Stack.Navigator>
  );
};
