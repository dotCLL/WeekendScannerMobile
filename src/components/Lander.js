import React from 'react';
import Emoji from 'react-native-emoji';
import moment from 'moment';
import FlightInfo from './FlightInfo.js';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class Lander extends React.Component {
  constructor(props) {
    super(props);

    this.getNextThursAndSun.bind(this);

    this.state = {
      isLoading: false,
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
    this.getNextThursAndSun()
  }

  getNextThursAndSun() {
    let thurs = moment().day(11);
    let sun = moment().day(7);
    if(thurs.isAfter(sun)) {sun = moment().day(14)};
    console.log(thurs);
    console.log(sun);
  }

  render() {
    if(this.state.isLoading){
      return(
        <View>
          <View style={styles.sectionContainer}>
            <Text>{moment(this.state.trips[0].departureFlight.departureDate).format("Do MMM")} -- {moment(this.state.trips[0].returnFlight.arrivalDate).format("Do MMM")}</Text>
          </View>
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        </View>
      )
    }

    return (
      <View
        style={styles.Lander}
      >
        <View style={styles.sectionContainer}>
          <Text>{moment(this.state.trips[0].departureFlight.departureDate).format("Do MMM")} -- {moment(this.state.trips[0].returnFlight.arrivalDate).format("Do MMM")}</Text>
        </View>
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
              />
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Lander: {
    backgroundColor: '#e2e9f2',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
})
