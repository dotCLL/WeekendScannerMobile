/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Lander from './src/components/Lander.js';

// <View style={styles.body}>
//   <View style={styles.sectionContainer}>
//     <Text style={styles.sectionTitle}>{res}</Text>
//     <Text style={styles.sectionDescription}>
//       Edit <Text style={styles.highlight}>App.js</Text> to change this
//       screen and then come back to see your edits.
//
//     </Text>
//   </View>
// </View>

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Lander/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
