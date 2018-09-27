import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppReducer from '@redux/root'; // Main reducer
import { AppNavigator, reactNavigationMiddleware } from '@navigation/routes';

const store = createStore(AppReducer, applyMiddleware(reactNavigationMiddleware, thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;