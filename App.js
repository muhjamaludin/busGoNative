import React, {Component, useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import MainScreen from './src/Index';

import SplashScreen from 'react-native-smart-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <MainScreen />
        </PersistGate>
      </Provider>
    );
  }
}
