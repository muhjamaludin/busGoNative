import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import {Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input';
import {Header} from 'react-native-elements';

import {getRoutes} from './redux/actions/RouteActions';
import {connect} from 'react-redux';
import axios from 'axios';
import {API} from './utils/config';

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
      datet: '04-04-2020',
      route: [],
      data: [1, 2, 3, 4],
      selectedRoute: {},
      selectedDestination: {},
      selectedDate: {},
      date: {},
      routes: [],
      numeric: '',
    };
    console.log(this.state.datet);
  }

  searchBus = async () => {
    this.props.navigation.navigate('SearchBus');
  };

  componentWillReceiveProps() {
    if (this.props.route.params) {
      this.setState({
        date: this.props.route.params.dateSelected,
      });
    }
  }
  async componentDidMount() {
    const result = await axios.get(API.API_BACKEND.concat('route'));
    this.setState({route: result.data});
  }
  Bo = (selected) => {
    this.setState({
      selectedItem: selected,
    });
  };
  onSubmit = () => {
    this.props.navigation.navigate('Schedules');
  };

  render() {
    console.disableYellowBox = true;
    console.log(this.state.route);
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
                date={this.state.datet}
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
                  this.setState({datet: date});
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

const mapStateToProps = (state) => ({
  schedules: state.schedules,
  routes: state.routes,
});

const mapDispatchToProps = {getRoutes};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
