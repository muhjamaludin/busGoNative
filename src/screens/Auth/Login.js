import React, {Component} from 'react';
import {View, Text, Image, Alert, ToastAndroid} from 'react-native';
import styles from '../../utils/styles';
import {Button, Input} from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
    this.login = () => {
      if (this.state.user === 'Admin' && this.state.pass === 'a') {
        this.props.navigation.reset({
          index: 0,
          routes: [{name: 'BottomStack'}],
        });
      } else {
        ToastAndroid.show('Wrong Username or Password', ToastAndroid.SHORT);
      }
    };
    this.forgot = () => {
      this.props.navigation.navigate('ForgotPassword');
    };
  }
  render(navigation) {
    return (
      <>
        <View>
          <View style={styles.fullBody}>
            <View style={styles.viewBus}>
              <Image
                source={require('../../image/clipart-bus-logo.png')}
                style={styles.imageBus}
              />
            </View>
            <View style={styles.busGo}>
              <Text style={styles.busGoTravel}>BusGo Travel Apps</Text>
            </View>
            <View style={styles.formLogin}>
              <Input
                onChange={(text) => this.setState({user: text})}
                placeholder="username"
                style={styles.formLoginText}
              />
              <Input
                onChange={(text) => this.setState({pass: text})}
                secureTextEntry={true}
                placeholder="password"
                style={styles.formLoginText}
              />
            </View>
            <View style={styles.forgotPassword}>
              <Text onPress={this.forgot}>Forgot Password ?</Text>
            </View>
            <View>
              <Button
                title="Sign In Yeah"
                onPress={this.login}
                style={styles.buttonLogin}>
                <Text>Sign In</Text>
              </Button>
            </View>
            <View style={styles.notAccount}>
              <Text>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Register')}
                  style={styles.signUp}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Login;
