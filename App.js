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
import Lander from './src/screens/Lander.js';
import ShowWebView from './src/screens/ShowWebView.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Lander},
  Web: {screen: ShowWebView},
});

const App = createAppContainer(MainNavigator);

export default App;
