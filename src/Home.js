import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker, Image} from 'react-native';
import {getUserbyId} from './redux/actions/UserActions';
import {getRoutebyId} from './redux/actions/RouteActions';
import {connect} from 'react-redux';
import {Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input';
import {Header} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const localStyles = StyleSheet.create({
  bodyTop: {
    backgroundColor: 'lightskyblue',
    height: 380,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 54,
    borderTopLeftRadius: 10,
    margin: 5,
  },
  dateTraveler: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  titleBook: {
    fontSize: 26,
    textAlign: 'center',
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
    top: 30,
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
  scroll: {
    padding: 10,
  },
});

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

  componentDidMount() {
    const id = this.props.userId;
    const token = this.props.token;
    console.log('toktok', token);
    this.props.getUserbyId(id, token);
    this.props.getRoutebyId(100, token);
  }

  render() {
    console.disableYellowBox = true;
    console.log('route', this.props.route);
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
              {this.props.route.data &&
                this.props.route.data.map((data, i) => (
                  <Picker.Item
                    label={data.departure + ' - ' + data.destination}
                    value={data.id}
                  />
                ))}
              {/* {console.log('mam', this.props.route.data[0].departure)} */}
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
            {/* <View>
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
            </View> */}
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
          <View style={localStyles.container} />
        </View>
        <ScrollView horizontal={true} style={{padding: 10}}>
          <View style={localStyles.scroll}>
            <Image
              style={{width: 200, height: 250}}
              source={{
                uri:
                  'https://tenteraverbisa.files.wordpress.com/2019/11/transportasi-umum-dan-wisata.jpg',
              }}
            />
          </View>
          <View style={localStyles.scroll}>
            <Image
              style={{width: 200, height: 250}}
              source={{
                uri:
                  'https://tenteraverbisa.files.wordpress.com/2019/11/transportasi-umum-dan-wisata.jpg',
              }}
            />
          </View>
          <View style={localStyles.scroll}>
            <Image
              style={{width: 200, height: 250}}
              source={{
                uri:
                  'https://tenteraverbisa.files.wordpress.com/2019/11/transportasi-umum-dan-wisata.jpg',
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authData.token,
    route: state.route.routes,
  };
};

export default connect(mapStateToProps, {getUserbyId, getRoutebyId})(Home);
