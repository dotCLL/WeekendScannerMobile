import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class DateChooser extends React.Component {
  constructor(props) {
    super(props);

    this.getXDateSets.bind(this);
  }

  getXDateSets(x) {
    let allDates = [];
    for (var i = 0; i < x; i++) {
      let dates = this.props.getDates(i);
      allDates.push({value: `${dates.thurs.format("Do MMM")} to ${dates.sun.format("Do MMM")}`})
    }
    return allDates;
  }

  render() {
    return (
      <View style={{ width: '90%' }}>
        <Dropdown
          label='Change dates.'
          data={this.getXDateSets(10)}
          itemTextStyle={styles.text}
          itemCount={3}
          textColor="#54708B"
          baseColor="#54708B"
          onChangeText={(value, index, data) => console.log(value)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 6,
    fontWeight: '600',
  }
})
