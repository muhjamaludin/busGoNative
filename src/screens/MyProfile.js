import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API} from '../utils/config';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {setLogout} from '../redux/actions/AuthActions';
import {getUserbyId} from '../redux/actions/UserActions';
import Entypo from 'react-native-vector-icons/Entypo';

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
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  iconStyle: {
    fontSize: 25,
    color: '#053354',
  },
  paddingIcon: {
    padding: 10,
    width: 50,
  },
});

class Profile extends Component {
  logout = () => {
    this.props.setLogout();
  };

  componentDidMount() {
    const id = this.props.userId;
    const token = this.props.token;
    this.props.getUserbyId(id, token);
  }

  render() {
    console.log('id', this.props.user);
    return (
      <View>
        {this.props.user.data ? (
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
              {/* <Button style={localStyle.profileButton}> */}
              <Image
                style={localStyle.profileButton}
                source={{
                  uri:
                    API.API_BACKEND + 'profile/' + this.props.user.data
                      ? this.props.user.data[0].profile_picture
                      : 'alt',
                }}
              />
              {/* </Button> */}
            </View>
            <View style={{top: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="money" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    Rp{' '}
                    {this.props.user.data
                      ? this.props.user.data[0].balance
                      : '0'}
                    , 00{' '}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="user" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    {this.props.user.data
                      ? this.props.user.data[0].fullname
                      : 'name'}{' '}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="id-card" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    {this.props.user.data
                      ? this.props.user.data[0].identity
                      : 'identity'}{' '}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="phone" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    0
                    {this.props.user.data
                      ? this.props.user.data[0].phone
                      : '0'}{' '}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="envelope" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    {this.props.user.data
                      ? this.props.user.data[0].email
                      : 'email'}{' '}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={localStyle.paddingIcon}>
                  <Icon name="map-marker" style={localStyle.iconStyle} />
                </View>
                <View>
                  <Text style={localStyle.textStyle}>
                    {' '}
                    {this.props.user.data
                      ? this.props.user.data[0].address
                      : 'address'}{' '}
                  </Text>
                </View>
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
        ) : (
          <View>
            <Text>Makan malam</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.users,
    userId: state.authData.data.userId,
    token: state.authData.data.token,
  };
};

export default connect(mapStateToProps, {setLogout, getUserbyId})(Profile);
