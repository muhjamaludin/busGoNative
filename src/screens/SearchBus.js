import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Card} from 'react-native-elements';

const users = [
  {
    name: 'Efisiensi',
    class: 'Economy',
    seat: '15',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '06:00:00 WIB',
    date: '24-04-2020',
    price: 'Rp 125.000',
  },
  {
    name: 'Rosalia',
    class: 'executive',
    seat: '25',
    departure: 'Bandung',
    destination: 'Surabaya',
    timeGo: '14:00:00 WIB',
    arrive: '06:00:00 WIB',
    date: '24-04-2020',
    price: 'Rp 525.000',
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
  cardView: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
});

class SearchBus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {/* <View>
          <Header
            centerComponent={{
              text: 'Get Your Bus',
              style: {color: 'blue', fontSize: 25},
            }}
            containerStyle={{
              backgroundColor: '#f7f7f7',
              height: 60,
              marginTop: -20,
            }}
          />
        </View> */}
        <Card>
          {users.map((u, i) => {
            return (
              <View style={localStyles.cardView}>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: '#e8e8e8',
                    borderTopColor: 'white',
                    borderLeftColor: 'white',
                    borderRightColor: 'white',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Name Bus</Text>
                    <Text>{u.name}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Class</Text>
                    <Text> {u.class} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text> Available </Text>
                    <Text> {u.seat} Seat </Text>
                  </View>
                </View>
                <View key={i} style={localStyles.user}>
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
                  <Text>Price : </Text>
                  <Text> {u.price} </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'orange', fontWeight: 'bold'}}>
                    Book Now
                  </Text>
                </View>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default SearchBus;
