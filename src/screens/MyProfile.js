import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

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
  render() {
    return (
      <View>
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

export default Profile;
