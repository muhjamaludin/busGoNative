import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Card} from 'react-native-elements';

const users = [
  {
    name: 'Efisiensi',
    seat: '5A',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '06:00:00 WIB',
    date: '24-04-2020',
  },
];

const localStyles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: '#e8e8e8',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
  name: {},
  image: {},
});

class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View>
          <Header
            centerComponent={{
              text: 'Your Trips',
              style: {color: 'blue', fontSize: 25},
            }}
            containerStyle={{
              backgroundColor: '#f7f7f7',
              height: 60,
              marginTop: -20,
            }}
          />
        </View>
        <Card title="PO. Efisiensi">
          {users.map((u, i) => {
            return (
              <View style={localStyles.cardView}>
                <View key={i} style={localStyles.user}>
                  <View>
                    <Text style={localStyles.name}>{u.name}</Text>
                    <Text> {u.seat} </Text>
                  </View>
                  <View>
                    <Text>{u.departure}</Text>
                    <Text> {u.destination} </Text>
                  </View>
                  <View>
                    <Text> {u.timeGo} </Text>
                    <Text> {u.arrive} </Text>
                  </View>
                  <Text> {u.date} </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 5,
                  }}>
                  <Text>Total : Rp.25.000</Text>
                  <Text style={{color: 'orange'}}>Detail</Text>
                </View>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default History;
