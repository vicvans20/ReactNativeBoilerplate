import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../routes';

const firstAction = RootNavigator.router.getActionForPathAndParams('Register');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');

const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

// const initialNavState = RootNavigator.router.getStateForAction(NavigationActions.init()); // Get the default route configured on the router

export default function navigationReducer(state = initialNavState, action) {
  let nextState;
  console.log("Navigation reducer");
  console.log(action.type);
  // action.type seems to have the information about the CURRENT screen for some custom stuff.
  switch (action.type) {
    case 'Register':
      console.log("Register SCREEN");
      break;
    case 'Login':
      console.log("LOGIN SCREEN");
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}