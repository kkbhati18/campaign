import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

const Stack = createStackNavigator();

function AuthNavigator() {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        {auth.Splash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : auth.token == null ? (
          <Stack.Screen name="Auth" component={SignOutStack} />
        ) : (
          <Stack.Screen name="App" component={SignInStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;