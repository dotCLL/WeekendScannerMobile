import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default class ShowWebView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          style={styles.ShowWebView}
          source={{ uri: this.props.navigation.getParam('uri', 'https://www.skyscanner.com.au') }}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  ShowWebView: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
