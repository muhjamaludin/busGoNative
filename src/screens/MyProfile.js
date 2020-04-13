import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';

import {Header} from 'react-native-elements';

const localStyle = StyleSheet.create({
  wrapper: {
    width: 600,
    height: 600,
    backgroundColor: 'lightskyblue',
    position: 'absolute',
    borderRadius: 250,
    top: -450,
    left: -80,
  },
  viewButton: {
    alignItems: 'center',
    top: 45,
    bottom: 10,
  },
  profileButton: {
    width: 120,
    height: 120,
    borderRadius: 80,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {},
  textStyle: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  iconStyle: {
    fontSize: 25,
    color: 'lightskyblue',
    padding: 10,
  },
});

class Profile extends Component {
  logout = () => {
    this.props.setLogout();
  };

  render() {
    return (
      <View>
        <View style={localStyle.wrapper}></View>
        <View style={localStyle.container}>
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
              <Icon name="user-alt" size={67} />
            </Button>
          </View>
          <View style={{top: 70}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="wallet" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>Rp 555.555,55</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="user" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>Alita Battle Angle</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="id-card" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>45600355030501001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="calendar-day" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>9 Desember 2002</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="phone" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>085633225678</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="envelope" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>alitaMail@mail.com</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="eye" style={localStyle.iconStyle} />
              <Text style={localStyle.textStyle}>*******</Text>
              <Entypo name="cycle" style={localStyle.iconStyle} />
            </View>
          </View>
          <View style={{alignItems: 'center', top: 150}}>
            <Button
              style={{
                width: '80%',
                backgroundColor: '#f6c143',
                borderRadius: 50,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  width: '100%',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Edit Profile
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {setLogout};

export default connect(null, {setLogout})(Profile);
