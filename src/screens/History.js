import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';

class History extends Component {
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={{
              text: 'BusGo',
              style: {color: 'blue', fontSize: 25},
            }}
            containerStyle={{
              backgroundColor: '#f7f7f7',
              height: 60,
              marginTop: -20,
            }}
          />
        </View>
        <Text>This is History Screen</Text>
      </View>
    );
  }
}

export default History;
