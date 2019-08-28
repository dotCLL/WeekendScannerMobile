import React from 'react';
import Emoji from 'react-native-emoji';
import moment from 'moment';
import FlightInfo from './FlightCard/FlightInfo.js';
import DateBoard from './DateBoard/DateBoard.js';
import { Dropdown } from 'react-native-material-dropdown';
var ApiService = require('../services/ApiService.js');
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';

export default class Lander extends React.Component {
  constructor(props) {
    super(props);

    this.getNextThursAndSun.bind(this);
    this.getXDateSets.bind(this);

    this.state = {
      isLoading: true,
      trips: [{
        departureFlight: {
          arrivalDate: "2019-09-10",
          arrivalTime: "19:55:00",
          carrier: {
            name: "Virgin Australia",
            imageUrl: "https://s1.apideeplink.com/images/airlines/V1.png"
          },
          departureDate: "2019-09-10",
          departureTime: "18:15:00",
        },
        price: 352.88,
        returnFlight: {
          arrivalDate: "2019-09-15",
          arrivalTime: "21:30:00",
          carrier: {
            name: "Jetstar",
            imageUrl: "https://s1.apideeplink.com/images/airlines/JQ.png"
          },
          departureDate: "2019-09-15",
          departureTime: "19:10:00",
        }
      }]
    }
  }

  componentDidMount() {
    // If initial call then do multiplier zero. else nothing.


      // // POST next thurs / sun
      // let tripDates = this.getNextThursAndSun(this.state.weeksToSkipAhead);
      // console.log(tripDates);
      // // ApiService.GetTripsForDates(tripDates.thurs, tripDates.sun)
      // ApiService.GetTripsForDates()
      // .then((result) => {
      //   console.log(result[0]);
      //
      //   this.setState({
      //     isLoading: false,
      //     trips: result,
      //   }, function(){
      //
      //   });
      // })
      // .catch(e => console.log("error", e));
  }

  getNextThursAndSun(weeksToSkipAhead = 0) {
    let trip = {
      thurs: moment().day(11 + (7 * weeksToSkipAhead)),
      sun: moment().day(7 + (7 * weeksToSkipAhead))
    }
    if(trip.thurs.isAfter(trip.sun)) {trip.sun = moment().day(14 + (7 * weeksToSkipAhead))};
    return trip;
  }

  getXDateSets(x) {
    let allDates = [];
    for (var i = 0; i < x; i++) {
      let dates = this.getNextThursAndSun(i);
      allDates.push({value: `${dates.thurs.format("Do MMM")} to ${dates.sun.format("Do MMM")}`})
    }
    return allDates;
  }

  getTrips(departDate, returnDate) {
    // ApiService.GetTripsForDates(tripDates.thurs, tripDates.sun)
    ApiService.GetTripsForDates()
    .then((result) => {
      console.log(result[0]);

      this.setState({
        isLoading: false,
        trips: result,
      }, function(){

      });
    })
    .catch(e => console.log("error", e));
  }

  render() {
    if(this.state.isLoading){
      return(
          <View style={styles.Lander}>
            <View style={{ width: '90%' }}>
              <Dropdown
                label='Trip dates.'
                data={this.getXDateSets(10)}
                itemTextStyle={styles.text}
                itemCount={3}
                textColor="#54708B"
                baseColor="#54708B"
                onChangeText={(value, index, data) => this.getTrips("test","test")}
              />
            </View>
            {/* <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View> */}
          </View>
      )
    }

    return (
      <View style={styles.Lander}>
        <View style={{ width: '90%', marginTop: 25 }}>
          <Dropdown
            label='Trip dates.'
            data={this.getXDateSets(10)}
            itemTextStyle={styles.text}
            itemCount={3}
            textColor="#54708B"
            baseColor="#54708B"
            onChangeText={(value, index, data) => this.getTrips("test","test")}
          />
        </View>
          <ScrollView
            contentContainerStyle={styles.containerContent}
            style={styles.scrollView}>
            {this.state.trips.map((trip, ind) => {
              return (
                <View style={styles.sectionContainer} key={ind}>
                  <FlightInfo
                    departureFlightDepartureTime={trip.departureFlight.departureTime}
                    departureFlightArrivalTime={trip.departureFlight.arrivalTime}
                    returnFlightDepartureTime={trip.returnFlight.departureTime}
                    returnFlightArrivalTime={trip.returnFlight.arrivalTime}
                    departureCarrier={trip.departureFlight.carrier}
                    returnCarrier={trip.returnFlight.carrier}
                    price={trip.price}
                    bookLink={trip.bookLink}
                  />
                </View>
              )
            })}
          </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  Lander: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  sectionContainer: {
    marginTop: 32,
    width: '90%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#444444",
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    color: 'white',
    fontSize: 6,
    fontWeight: '600',
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  }
})
