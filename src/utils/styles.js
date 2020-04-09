import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullBody: {
    backgroundColor: '#f7f7f7',
  },
  icon: {
    fontSize: 25,
    position: 'absolute',
    marginTop: 21,
    marginLeft: 10,
    zIndex: 999,
  },
  viewBus: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  busGo: {
    marginTop: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  busGoTravel: {
    fontSize: 27,
  },
  formLogin: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 115,
  },
  formLoginText: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 300,
    margin: 10,
    height: 50,
  },
  imageBus: {
    width: 250,
    height: 150,
  },
  forgotPassword: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  notAccount: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUp: {
    textDecorationLine: 'underline',
  },
});

export default styles;
