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
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: "#e2e9f2"}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Lander/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#e2e9f2",
    height: '100%'
  },
});

export default App;
