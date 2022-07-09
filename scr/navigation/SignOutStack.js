import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Screens/Login';
import SingUp from '../Screens/SingUp';

const Stack = createStackNavigator();

export default function SignOutStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}
