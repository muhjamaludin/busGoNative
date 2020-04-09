import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input';

const localStyles = StyleSheet.create({
  dateTraveler: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  titleBook: {
    fontSize: 36,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2020-04-08',
    };
  }
  render() {
    return (
      <View>
        <View>
          <Text style={localStyles.titleBook}>Book your next travel</Text>
        </View>
        <View>
          <TextInput placeholder="From" />
        </View>
        <View>
          <TextInput placeholder="To" />
        </View>
        <View style={localStyles.dateTraveler}>
          <View>
            <Text>Date</Text>
            <DatePicker
              style={{width: 150}}
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
              textColor="#B0228C"
              iconStyle={{color: '#f6c143'}}
            />
          </View>
        </View>
        <View>
          <Button>
            <Text>Search Bus</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Home;
