import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';

const Stack = createStackNavigator();

export function RootStack({}) {
  const signedIn = useSelector((state: any) => state.auth.signed);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {signedIn ? (
        <Stack.Screen name="HomePage" component={HomePage} />
      ) : (
        <Stack.Screen name="SignIn" component={SignInPage} />
      )}
    </Stack.Navigator>
  );
}
