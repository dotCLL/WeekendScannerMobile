import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class BookButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <TouchableOpacity
        style={styles.BookButton}
        onPress={() => console.log(`Trigger Webview: ${this.props.url}`)}
      >
        <View style={styles.priceContainer}>
          <Text style={styles.bigText}>{"$"}</Text>
          <Text style={styles.bigText}>{this.props.price}</Text>
          <Text style={[{paddingLeft: 5, paddingBottom: 3}, styles.smallText]}>AUD</Text>
        </View>
        <Text style={styles.smallText}>TAP TO BOOK</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  BookButton: {
    backgroundColor: '#59CD90',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  smallText: {
    fontSize: 12,
    color: "white",
    fontWeight: "100"
  },
  bigText: {
    color: "white",
    fontSize: 24,
    fontWeight: "500"
  }
})
