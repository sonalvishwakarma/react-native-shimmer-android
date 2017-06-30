/* @flow */

import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

export class Shimmer extends Component {

  render () {
    return (
      <View styles={style.container}>
        <View>
          <Text>adding linearGradient</Text>
            <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    overflow: 'hidden',
  }
});


