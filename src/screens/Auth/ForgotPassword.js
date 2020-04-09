import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../utils/styles';

const localstyles = StyleSheet.create({
  imageKey: {
    width: 100,
    height: 100,
    marginTop: 120,
    marginBottom: 90,
  },
  viewKey: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  textPlease: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSend: {
    opacity: 0.5,
  },
  inputEmail: {
    backgroundColor: '#f7f7f7',
    margin: 10,
    borderRadius: 9,
  },
  viewNext: {
    margin: 20,
  },
  buttonNext: {
    backgroundColor: '#f6c143',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    marginLeft: 20,
  },
});

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.emailSent = () => {
      this.props.navigation.navigate('Verify');
    };
  }
  render(navigation) {
    return (
      <>
        <View style={styles.parent}>
          <View style={localstyles.body}>
            <View style={localstyles.viewKey}>
              <Image
                source={require('../../image/key-forgot.png')}
                style={localstyles.imageKey}
              />
            </View>
            <View>
              <Text style={localstyles.textPlease}>
                Please enter your registered email ID
              </Text>
              <Text style={localstyles.textSend}>
                We will send a verification code to your registered email ID
              </Text>
            </View>
            <View>
              {/* <Icon name="account" style={styles.icon} /> */}
              <TextInput
                style={localstyles.inputEmail}
                placeholder={'Email ID'}></TextInput>
            </View>
            <View style={localstyles.viewNext}>
              <Button onPress={this.emailSent} style={localstyles.buttonNext}>
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default ForgotPassword;
