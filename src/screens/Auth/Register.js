import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {isRegister} from '../../redux/actions/AuthActions';

import styles from '../../utils/styles';

const localStyles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
  },
  textAccount: {
    textAlign: 'center',
    marginTop: 20,
    margin: 10,
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
    top: 40,
    fontSize: 20,
    left: 60,
  },
  textSignIn: {
    textDecorationLine: 'underline',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone: '',
      password2: '',
    };
    this.signIn = () => {
      this.props.navigation.navigate('LoginScreen');
    };
    this.register = () => {
      this.props.navigation.navigate('Verify');
    };
  }

  signUp = () => {
    console.log('aman', this.state.username);
    if (this.state.password !== this.state.password2) {
      ToastAndroid.show('Password must be same!', ToastAndroid.SHORT);
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: this.state.phone,
      };
      console.log('ssssssssss', data);
      this.props.isRegister(data);
      this.props.navigation.navigate('LoginScreen');
    }
  };

  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={localStyles.body}>
            <View style={localStyles.title}>
              <Text style={localStyles.textAccount}>Create New Account</Text>
            </View>
            <View style={localStyles.inputAccount}>
              <TextInput
                style={localStyles.textUser}
                onChangeText={(username) => this.setState({username: username})}
                placeholder="Username"
              />
              <TextInput
                style={localStyles.textUser}
                onChangeText={(email) => this.setState({email: email})}
                placeholder="Email"
              />
              <TextInput
                style={localStyles.textUser}
                onChangeText={(phone) => this.setState({phone: phone})}
                placeholder="phone"
              />
              <TextInput
                style={localStyles.textUser}
                onChangeText={(password) => this.setState({password: password})}
                secureTextEntry={true}
                placeholder="Type Password"
              />
              <TextInput
                style={localStyles.textUser}
                onChangeText={(password2) =>
                  this.setState({password2: password2})
                }
                secureTextEntry={true}
                placeholder="Re-enter Password"
              />
            </View>
            <View style={localStyles.textAccount}>
              <CheckBox
                title="I agree with term & conditions"
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
              />
            </View>
            <View>
              <Button onPress={this.signUp} title="Register" />
            </View>
            <View style={localStyles.socialButton}>
              <View>
                <Icon name="facebook" size={35} color={'blue'} />
              </View>
              <View>
                <Icon name="google" size={35} />
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
        </View>
      </>
    );
  }
}

const mapDispatchToProps = {isRegister};
export default connect(null, mapDispatchToProps)(SignUp);
