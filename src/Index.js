import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './screens/Auth/Login';
import ForgotPassword from './screens/Auth/ForgotPassword';
import RegisterScreen from './screens/Auth/Register';
import Verify from './screens/Auth/Verify';

import Home from './Home';
import Tickect from './screens/Ticket';
import History from './screens/History';
import Profile from './screens/MyProfile';

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
            headerTitle: 'My Profile',
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
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth && !this.props.auth.isLogin ? (
            <Stack.Screen
              name="LoginScreen"
              options={{
                title: 'Login',
                headerShown: true,
              }}
              component={LoginScreen}
            />
          ) : (
            <>
              <Stack.Screen
                name="BottomStack"
                options={{title: 'BusGo', headerShown: false}}
                component={BottomStack}
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
                name="Register"
                options={{title: 'Register'}}
                component={RegisterScreen}
              />
              <Stack.Screen
                name="Verify"
                options={{title: 'Succes', headerShown: false}}
                component={Verify}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authData,
  };
};

export default connect(mapStateToProps, null)(MainScreen);
