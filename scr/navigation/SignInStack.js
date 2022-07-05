import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import drawer from './DrawerNavigation';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={drawer} />
    </Stack.Navigator>
  );
}
