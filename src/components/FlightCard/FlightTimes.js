import React from 'react';
import Emoji from 'react-native-emoji';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';

export default class FlightTimes extends React.Component {
  render() {
    return (
      <View style={styles.FlightTimes}>
        <View style={styles.container}>
          <Emoji name="airplane_departure" style={{fontSize: 20}} />
          <Text style={styles.text}>{moment(this.props.departureTime, "HH:mm:ss").format("hh:mm A")}</Text>
        </View>
        <View style={styles.container}>
          <Emoji name="airplane_arriving" style={{fontSize: 20}} />
          <Text style={styles.text}>{moment(this.props.arrivalTime, "HH:mm:ss").format("hh:mm A")}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FlightTimes: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingLeft: 7,
    paddingTop: 7,
    paddingBottom: 2,
    opacity: 0.7,
    fontSize: 12,
    color: "#54708B",
    fontWeight: "400"
  }
})
