import React, {Component, useState} from 'react';
import {View, FlatList, Text, StyleSheet, Picker} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input';
import {Header} from 'react-native-elements';

const localStyles = StyleSheet.create({
  bodyTop: {
    backgroundColor: 'lightskyblue',
    height: 420,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 54,
    borderTopLeftRadius: 10,
    margin: 5,
  },
  dateTraveler: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  titleBook: {
    fontSize: 36,
    fontFamily: 'monospace',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  viewSearch: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  viewButtonSearch: {
    alignItems: 'center',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2020-04-08',
    };
    this.searchBus = () => {
      this.props.navigation.navigate('SearchBus');
    };
  }
  render() {
    console.disableYellowBox = true;
    const [selectedValue, setSelectedValue] = useState('java');

    return (
      <View>
        <View>
          <Header
            centerComponent={{
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
        <View style={localStyles.bodyTop}>
          <View>
            <Text style={localStyles.titleBook}>Book your next travel</Text>
          </View>
          <View style={localStyles.viewSearch}>
            <Text>Select Route</Text>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={localStyles.dateTraveler}>
            <View>
              <Text>Date</Text>
              <DatePicker
                style={{
                  width: 150,
                  backgroundColor: 'white',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="08-04-2020"
                maxDate="08-05-2020"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  this.setState({date: date});
                }}
              />
            </View>
            <View>
              <Text>Traveller</Text>
              <NumericInput
                value={this.state.value}
                onChange={(value) => this.setState({value})}
                minValue={1}
                maxValue={10}
                totalWidth={100}
                totalHeight={40}
                iconSize={25}
                step={1.5}
                rounded
                type="up-down"
                valueType="integer"
                textColor="black"
                backgroundColor="blue"
                iconStyle={{color: 'black'}}
              />
            </View>
          </View>
          <View style={localStyles.viewButtonSearch}>
            <Button
              style={{
                width: '80%',
                backgroundColor: '#f6c143',
                borderRadius: 50,
              }}
              onPress={this.searchBus}>
              <Text
                style={{
                  textAlign: 'center',
                  width: '100%',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Search Bus
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
