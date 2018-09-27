// React Navigation.
import React from 'react';
import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import {
  createStackNavigator
} from 'react-navigation';

import LoginScreen from '@features/auth/screens/Login';
import RegisterScreen from '@features/auth/screens/Register';

// Setup ReactNavigation middleware
const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Register'
  }
)


// ================== REDUX FINAL SETUP =========================
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, reactNavigationMiddleware }