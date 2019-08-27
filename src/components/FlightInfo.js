import React from 'react';
import FlightTimes from "./FlightTimes.js";
import ScaledImage from "./ScaledImage.js";
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native';

export default class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View
        style={styles.FlightInfo}
      >
        <View style={styles.flightsContainer}>
          <View style={styles.container}>
            <ScaledImage uri={this.props.departureCarrier.imageUrl} />
            <FlightTimes
              departureTime={this.props.departureFlightDepartureTime}
              arrivalTime={this.props.departureFlightArrivalTime}
            />
          </View>
          <View style={styles.container}>
            <ScaledImage uri={this.props.returnCarrier.imageUrl} />
            <FlightTimes
              departureTime={this.props.returnFlightDepartureTime}
              arrivalTime={this.props.returnFlightArrivalTime}
            />
          </View>
        </View>
        <View style={[{paddingTop: 12}, styles.bookContainer]}>
          <Text>Price: ${this.props.price}</Text>
          <Button title="BOOK NOW" onPress={() => {
            console.log("pressed");
          }}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FlightInfo: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 15,
    paddingVertical: 5
  },
  flightsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    width: '100%'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120
  },
  bookContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
