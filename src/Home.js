import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, Picker} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Carousel from 'react-native-carousel-view';
import ViewPagerAndroid from 'react-native';
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
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// renderItem = ({item, index}) => {
//   const {backgroundColor} = item;
//   return (
//     <TouchableOpacity
//       style={[localStyles.item, {backgroundColor}]}
//       onPress={() => {
//         this._carousel.scrollToIndex(index);
//       }}>
//       .......
//     </TouchableOpacity>
//   );
// };

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2020-04-08',
      route: 'Semarang - Surabaya',
      data: [1, 2, 3, 4],
    };
    this.searchBus = () => {
      this.props.navigation.navigate('SearchBus');
    };
  }
  render() {
    console.disableYellowBox = true;
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
              selectedValue={this.state.route}
              style={{height: 50, width: 250}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({route: itemValue})
              }>
              <Picker.Item
                label="Surabaya - Semarang"
                value="Surabaya-Semarang"
              />
              <Picker.Item
                label="Semarang - Surabaya"
                value="Semarang-Surabaya"
              />
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={localStyles.container}>
            <Carousel
              width={375}
              height={300}
              delay={2000}
              indicatorAtBottom={false}
              indicatorSize={20}
              indicatorText="✽"
              indicatorColor="red">
              <View style={localStyles.contentContainer}>
                <Text>Page 1</Text>
              </View>
              <View style={localStyles.contentContainer}>
                <Text>Page 2</Text>
              </View>
              <View style={localStyles.contentContainer}>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
