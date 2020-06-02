import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Header, Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const users = [
  {
    date: '26 Mei 2020',
    agent: 'Remaja',
    busName: 'Pahala Lama',
    classBus: 'Economy',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '09:00:00 WIB',
    seat: '39',
    Price: 'Rp 65.000,00',
  },
  {
    date: '26 Mei 2020',
    agent: 'Sumber',
    busName: 'Rosalia',
    classBus: 'Economy',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '05:00:00 WIB',
    arrive: '10:00:00 WIB',
    seat: '39',
    Price: 'Rp 75.000,00',
  },
  {
    date: '27 Mei 2020',
    agent: 'Remaja',
    busName: 'Pahala Lama',
    classBus: 'Bisnis',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '06:00:00 WIB',
    seat: '39',
    Price: 'Rp 125.000,00',
  },
  {
    date: '27 April 2020',
    agent: 'Remaja',
    busName: 'Pahala Lama',
    classBus: 'Executive',
    departure: 'Semarang',
    destination: 'Surabaya',
    timeGo: '04:00:00 WIB',
    arrive: '07:00:00 WIB',
    seat: '39',
    Price: 'Rp 225.000,00',
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

class SearchBus extends React.Component {
  constructor(props){
  super(props)
  this.navigat = () => {
    console.log('saya', this.props)
  }
  this.button = () => {
    Alert.alert(
      'Confirm Reservation',
      'Are you sure want to book this schedule ?',
      [
        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => console.log(this.props.navigation.navigate('History'))},
      ]
    );
  }
}



  render() {
    return (
      <ScrollView>
        {users.map((u, i) => {
          return (
            <Card>
              <View>
                <View key={i} style={{backgroundColor: 'white'}}>
                  <View style={localStyles.user}>
                    <View>
                      <Text style={{fontWeight: 'bold'}}>{u.date}</Text>
                    </View>
                    <View>
                      <Text style={{fontWeight: 'bold'}}>{u.agent}</Text>
                      <Text style={{fontWeight: 'bold'}}> {u.busName} </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}>
                      <Text> {u.timeGo} </Text>
                      <Text> {u.arrive} </Text>
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
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}>
                      <View>
                        <Text>Departure</Text>
                        <Text>Destination</Text>
                      </View>
                      <View>
                        <Text> {u.departure} </Text>
                        <Text> {u.destination} </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{backgroundColor: 'white'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}>
                    <Text style={{fontWeight: 'bold', opacity: 0.9}}>Seat</Text>
                    <Text style={{fontWeight: 'bold'}}> {u.seat} </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingTop: 5,
                      paddingBottom: 5,
                    }}>
                    <Text style={{fontWeight: 'bold', opacity: 0.9}}>
                      Price:
                    </Text>
                    <Text style={{fontWeight: 'bold'}}> {u.Price} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      padding: 5,
                    }}>
                    <TouchableOpacity style={{backgroundColor: '#111111'}} onPress={this.button}>
                      <Text style={{color: '#ffd245', fontWeight: 'bold'}}>
                        Book Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    );
  }
}

export default SearchBus;
