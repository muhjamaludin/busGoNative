import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {} from '';
import {} from '';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import LoginScreen from './src/screens/Auth/Login';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import RegisterScreen from './src/screens/Auth/Register';
import Verify from './src/screens/Auth/Verify';

import Home from './src/Home';
import Tickect from './src/screens/Ticket';
import History from './src/screens/History';
import Profile from './src/screens/MyProfile';

import SearchBus from './src/screens/SearchBus';

class BottomStack extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-variant-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          component={Tickect}
          name="Ticket"
          options={{
            tabBarLabel: 'Ticket',
            tabBarIcon: ({color, size}) => (
              <Icon name="ticket-confirmation" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          component={History}
          name="History"
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color, size}) => (
              <Icon name="history" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          component={Profile}
          name="Profile"
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="account" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
}

class MainScreen extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          options={{
            title: 'Login',
            headerShown: true,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{
            title: 'Forgot Password',
            headerShown: true,
          }}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="BottomStack"
          options={{title: 'BusGo'}}
          component={BottomStack}
        />
        <Stack.Screen
          name="Register"
          options={{title: 'Register'}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Verify"
          options={{title: 'Succes', headerShown: false}}
          component={Verify}
        />
        <Stack.Screen
          name="SearchBus"
          options={{title: 'Search Bus', headerShown: true}}
          component={SearchBus}
        />
      </Stack.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    );
  }
}
