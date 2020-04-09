import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../utils/styles';

const localStyles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
  },
  textAccount: {
    textAlign: 'center',
    marginTop: 50,
    margin: 30,
    fontSize: 30,
  },
  inputAccount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUser: {
    borderWidth: 1,
    borderBottomColor: '#edb8ce',
    borderTopColor: '#f7f7f7',
    borderRightColor: '#f7f7f7',
    borderLeftColor: '#f7f7f7',
    margin: 10,
    width: '80%',
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  signIn: {
    height: 65,
    fontSize: 20,
  },
  textSignIn: {
    textDecorationLine: 'underline',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.signIn = () => {
      this.props.navigation.navigate('LoginScreen');
    };
    this.register = () => {
      this.props.navigation.navigate('Verify');
    };
  }
  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={localStyles.body}>
            <View style={localStyles.title}>
              <Text style={localStyles.textAccount}>Create New Account</Text>
            </View>
            <View style={localStyles.inputAccount}>
              <TextInput style={localStyles.textUser} placeholder="Username" />
              <TextInput style={localStyles.textUser} placeholder="Email" />
              <TextInput
                style={localStyles.textUser}
                placeholder="Type Password"
              />
              <TextInput
                style={localStyles.textUser}
                placeholder="Re-enter Password"
              />
            </View>
            <View style={localStyles.textAccount}>
              <CheckBox
                title="I agree with term & conditions"
                checked={this.state.checked}
              />
            </View>
            <View>
              <Button onPress={this.register} title="Register" />
            </View>
            <View style={localStyles.socialButton}>
              <View>
                <Icon name="facebook" size={35} color={'blue'} />
              </View>
              <View>
                <Icon name="google" size={35} />
              </View>
            </View>
          </View>
          <View>
            <Text style={localStyles.signIn}>
              Already Have Account ?{' '}
              <Text onPress={this.signIn} style={localStyles.textSignIn}>
                {' '}
                Sign In{' '}
              </Text>
            </Text>
          </View>
        </View>
      </>
    );
  }
}
export default SignUp;
