import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';

import {Header} from 'react-native-elements';

const localStyle = StyleSheet.create({
  viewButton: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  profileButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

class Profile extends Component {
  logout = () => {
    this.props.setLogout();
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={{
              text: 'BusGo',
              style: {color: 'blue', fontSize: 25},
            }}
            rightComponent={{
              text: 'Logout',
              color: 'blue',
              onPress: this.logout,
            }}
            containerStyle={{
              backgroundColor: '#f7f7f7',
              height: 60,
              marginTop: -20,
            }}
          />
        </View>
        <View style={localStyle.viewButton}>
          <Button style={localStyle.profileButton}>
            <Icon name="user" size={67} />
          </Button>
        </View>
        <View>
          <Text>Name</Text>
        </View>
        <View>
          <Text>Birthday</Text>
        </View>
        <View>
          <Text>Phone</Text>
        </View>
        <View>
          <Text>Email</Text>
        </View>
        <View>
          <Text>Password</Text>
        </View>
        <View>
          <Button color={'white'}>
            <Text>Edit Profile</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(null, {setLogout})(Profile);
