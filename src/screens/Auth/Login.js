import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ToastAndroid} from 'react-native';
import styles from '../../utils/styles';
import {Button, Input} from 'native-base';
// import LinearGradient from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {setLogin} from '../../redux/actions/AuthActions';
import {connect} from 'react-redux';
import auth from '../../utils/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    };

    this.forgot = () => {
      this.props.navigation.navigate('ForgotPassword');
      console.log('tes');
    };
    this.register = () => {
      this.props.navigation.navigate('Register');
    };
  }
  login = () => {
    console.log('aman', this.state.username);
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log('ssssssssss', data);
    this.props.setLogin(data);
  };

  // componentDidMount() {
  //   AsyncStorage.getItem('token', (err, result) => {
  //     if (result) {
  //       console.log('Yeah', result);
  //     }
  //   });
  // }

  render(navigation) {
    console.disableYellowBox = true;
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
                onChangeText={(username) => this.setState({username: username})}
                placeholder="username"
                style={styles.formLoginText}
              />
              <Input
                onChangeText={(password) => this.setState({password: password})}
                secureTextEntry={true}
                placeholder="password"
                style={styles.formLoginText}
              />
            </View>
            <View style={styles.forgotPassword}>
              <Text onPress={this.forgot}>Forgot Password ?</Text>
            </View>
            <View style={localStyles.viewSign}>
              {/* <LinearGradient colors={['#ade8ff', '#b0baff', '#b572ff']}> */}
              <Button
                title="Sign In Yeah"
                onPress={this.login}
                style={styles.buttonLogin}
                block>
                <Text>Sign In</Text>
              </Button>
              {/* </LinearGradient> */}
            </View>
            <View style={styles.notAccount}>
              <Text>
                Don't have an account?{' '}
                <Text onPress={this.register} style={styles.signUp}>
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

const localStyles = StyleSheet.create({
  viewSign: {
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

const mapDispatchToProps = {setLogin};
export default connect(null, mapDispatchToProps)(Login);
