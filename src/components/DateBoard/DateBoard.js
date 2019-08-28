import React from 'react';
import DateChooser from './DateChooser.js'
import { View, Text, StyleSheet } from 'react-native';

export default class DateBoard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.DateBoard}>
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Text style={styles.smallText}>Depart</Text>
            <Text style={styles.bigText}>{this.props.departDate}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.smallText}>Return</Text>
            <Text style={styles.bigText}>{this.props.returnDate}</Text>
          </View>
        </View>
        <DateChooser
          getDates={this.props.getDates}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  DateBoard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 15
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  smallText: {
    color: '#54708B',
    fontSize: 12,
    fontWeight: '100'
  },
  bigText: {
    color: '#384050',
    fontSize: 24,
    fontWeight: '500'
  }
})
