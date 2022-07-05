import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../Screens/DrawerContent';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
