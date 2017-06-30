/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shimmer from './index';

export default class ShimmerExample extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center' }} >
          <Shimmer/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    marginTop: 40
  },
});
