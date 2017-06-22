import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Shimmer from './index';

export default function RNShimmerAndroid(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shimmer Example</Text>
      <View>
        <Shimmer style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </Shimmer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  loading: {
    marginVertical: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  reactLogo: {
    width: 150,
    height: 150,
  },
});

AppRegistry.registerComponent('RNShimmerAndroid', () => RNShimmerAndroid);

