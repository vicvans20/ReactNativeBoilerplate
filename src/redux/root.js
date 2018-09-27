// Main reducer
import { combineReducers } from 'redux';
// import auth from '';
import nav from '@navigation/reducers/index'; // MY CUSTOM ONE IF NEEDED

import { RootNavigator } from '@navigation/routes';
import { createNavigationReducer } from 'react-navigation-redux-helpers'; // Default navigator reducer

export default combineReducers({
  nav: createNavigationReducer(RootNavigator)
  // user,
  // habit,
  // global,
  // navigation,
  // settings,
});