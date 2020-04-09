import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../utils/styles';

const localStyles = StyleSheet.create({
  pict: {
    marginTop: 120,
    marginBottom: 90,
  },
  textConfirm: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
    margin: 10,
  },
  textCheck: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  email: {
    fontWeight: 'bold',
  },
  resendEmail: {
    height: 15,
    alignItems: 'center',
  },
});

class Verify extends Component {
  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={localStyles.pict}>
            <Image
              source={require('../../image/animal-1.png')}
              style={styles.imageBus}
            />
            {/* <Image source={require('../../image/animal-1.svg')} /> */}
          </View>
          <View style={localStyles.textView}>
            <Text style={localStyles.textConfirm}>
              Confirm your email address
            </Text>
          </View>
          <View>
            <Text style={localStyles.textCheck}>
              We sent a confirmation email to:
            </Text>
          </View>
          <View>
            <Text style={localStyles.email}>email</Text>
          </View>
          <View style={localStyles.textCheck}>
            <Text style={localStyles.textCenter}>
              Check your email and click on the
            </Text>
            <Text style={localStyles.textCenter}>
              confirmation link to continue
            </Text>
          </View>
        </View>
        <View style={localStyles.resendEmail}>
          <Text>Resend Email</Text>
        </View>
      </>
    );
  }
}
export default Verify;
