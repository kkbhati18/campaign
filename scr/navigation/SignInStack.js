import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import drawer from './DrawerNavigation';

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={drawer} />
    </Stack.Navigator>
  );
}
