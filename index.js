/**
 * @format
 */
// import('./ReactrotonConfig').then(() => console.log('Reactroton Configured'));

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
