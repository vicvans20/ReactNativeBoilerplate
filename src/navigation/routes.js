// React Navigation.
import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import LoginScreen from '@features/session/screens/Login';
import RegisterScreen from '@features/session/screens/Register';

// import SplashScreen from '@features/auth/screens/SplashScreen';

// ========================== AUTH STACK ==========================
const RootNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen, navigationOptions: { header: null } },
    Register: { screen: RegisterScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'Login',
    // headerMode: 'none',
  }
);
// ========================= Auth Stack ========================

// ================== REDUX FINAL SETUP =========================
const AppNavigator = createAppContainer(RootNavigator)

export { RootNavigator, AppNavigator }