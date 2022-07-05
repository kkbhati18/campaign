import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './scr/store/store';
import AuthNavigator from './scr/navigation/AuthNavigator';

import {COLORS} from './scr/constants';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <AuthNavigator />
    </Provider>
  );
};

export default App;
