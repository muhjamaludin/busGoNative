import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Card} from 'react-native-elements';

const users = [
  {
    date: '26 April 2020',
    day: 'Sunday',
    name: 'Ayana',
    email: 'ayana66@gmail.com',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '06:00:00 WIB',
    seat: '39A',
    Code: 'TEW45g',
    Price: 'Rp 25.000,00',
    status: 'Booked',
  },
];

const localStyles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: 'black',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
  name: {},
  image: {},
});

class Ticket extends Component {
  render() {
    return (
      <View>
        <View>
          <Header
            centerComponent={{
              text: 'Your Ticket Detail',
              style: {color: 'blue', fontSize: 25},
            }}
            containerStyle={{
              backgroundColor: '#f7f7f7',
              height: 60,
              marginTop: -20,
            }}
          />
        </View>
        <Card>
          {users.map((u, i) => {
            return (
              <View>
                <View key={i} style={{backgroundColor: '#ffd245'}}>
                  <View style={localStyles.user}>
                    <View>
                      <Text style={{fontWeight: 'bold'}}>{u.date}</Text>
                      <Text style={{fontWeight: 'bold'}}> {u.day} </Text>
                    </View>
                    <View>
                      <Text style={{fontWeight: 'bold'}}>{u.name}</Text>
                      <Text style={{fontWeight: 'bold'}}> {u.email} </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                      }}>
                      <Text style={{fontWeight: 'bold'}}> {u.timeGo} </Text>
                      <Text style={{fontWeight: 'bold'}}> {u.arrive} </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 1,
                        borderTopColor: 'black',
                        borderLeftColor: 'white',
                        borderRightColor: 'white',
                        borderBottomColor: 'black',
                        padding: 10,
                      }}>
                      <View>
                        <Text style={{fontWeight: 'bold'}}>Departure</Text>
                        <Text style={{fontWeight: 'bold'}}>Destination</Text>
                      </View>
                      <View>
                        <Text style={{fontWeight: 'bold'}}>
                          {' '}
                          {u.departure}{' '}
                        </Text>
                        <Text style={{fontWeight: 'bold'}}>
                          {' '}
                          {u.destination}{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{backgroundColor: '#e8e8e8'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 5,
                    }}>
                    <Text style={{opacity: 0.5}}>Seat No :</Text>
                    <Text> {u.seat} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 5,
                    }}>
                    <Text style={{opacity: 0.5}}>Code:</Text>
                    <Text> {u.Code} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 5,
                    }}>
                    <Text style={{opacity: 0.5}}>Price:</Text>
                    <Text> {u.Price} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 5,
                    }}>
                    <Text>Status:</Text>
                    <Text style={{color: 'orange', fontWeight: 'bold'}}>
                      {' '}
                      {u.status}{' '}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default Ticket;
