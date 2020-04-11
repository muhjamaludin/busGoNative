import {createStore, compose, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../redux/reducer/reducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authData'],
};

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
export const persistor = persistStore(store);
