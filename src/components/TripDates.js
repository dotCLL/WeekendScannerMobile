import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TripDates extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View
        style={styles.TripDates}
      >
        <Text></Text>
        <Text>{moment(this.state.trips[0].departureFlight.departureDate).format("Do MMM")} -- {this.state.trips[0].returnFlight.arrivalDate}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TripDates: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
