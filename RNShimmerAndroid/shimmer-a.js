/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Image, ScrollView } from 'react-native';
import Shimmer from './index';

export default class ShimmerExample extends Component {
  constructor(props) {
    super(props);
    this.loadingAnimated = [];
    this.avatarLoadingAnimated = [];
    this.bigImageAndSomeRowsAnimated = [];
    this.state = {
      isfetched: false,
      imageIsFetched: false,
    };
  }
  componentDidMount() {
    this.runAnimated();
    this.runAvatarAnimated();
    setTimeout(() => this.setState({ isfetched: true }), 2000);
  }

  runAnimated() {
    if (Array.isArray(this.loadingAnimated) && this.loadingAnimated.length > 0) {
      Animated.parallel(
        this.loadingAnimated.map(animate => {
          if (animate && animate.runAnimated) {
            return animate.runAnimated();
          }
          return null;
        }),
        {
          stopTogether: false,
        },
      ).start(() => {
        this.runAnimated();
      });
    }
  }

  runAvatarAnimated() {
    if (Array.isArray(this.avatarLoadingAnimated) && this.avatarLoadingAnimated.length > 0) {
      Animated.sequence([
        this.avatarLoadingAnimated[0].runAnimated(),
        Animated.parallel(
          this.avatarLoadingAnimated.slice(1).map(animate => {
            if (animate&&animate.runAnimated) {
              return animate.runAnimated();
            }
            return null
          }),
          {
            stopTogether: false
          }
        )]
      ).start(() => {
          this.runAvatarAnimated()
      })
    }
  }
  _renderRows(loadingAnimated,number,uniqueKey){
    shimmerRows=[]
    for(let index=0;index<number;index++ ){
      shimmerRows.push(
        <Shimmer
          key={`loading-${index}-${uniqueKey}`}
          ref = {(ref) => loadingAnimated.push(ref)}
          style={{ marginBottom: 7 }}
        />
      )
    }
    return(
      <View>
        {shimmerRows}
      </View>
    )
  }
  _renderImageAndRows() {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Shimmer
            ref={(ref) => this.avatarLoadingAnimated.push(ref)}
            width={60}
            height={60}
            style={{ marginRight: 16 }}
          />
          {this._renderRows(this.avatarLoadingAnimated, 3, 'image-row')}
        </View>
      </View>
    )
  }

  render() {
    const { isfetched, imageIsFetched } = this.state;
    return (
      <ScrollView style={styles.container}>

        <Text style={{ marginBottom: 7 }}> Simple </Text>
        <Shimmer autoRun={true} />

        <Text style={{ marginBottom: 7 }}>Fetching image and text</Text>

        <View style={{ alignItems: 'center' }} >
          <Shimmer
            ref={(ref) => this.bigImageAndSomeRowsAnimated.push(ref)}
            width={175}
            height={175}
            isDisplayChildComponent={imageIsFetched}
          >
            <Image
              style={{ width: 250, height: 250 }}
              source={{ uri: 'https://unsplash.it/300/300' }}
              onLoad={() => { this.setState({ imageIsFetched: true }); }}

            />
          </Shimmer>
          <View>
            <Shimmer
              ref={(ref) => this.bigImageAndSomeRowsAnimated.push(ref)}
              style={{ marginTop: 7 }}
              width={350}
              height={9}
              isDisplayChildComponent={isfetched}
            >
              <Text style={{ marginTop: 3 }}>Lorem Ipsum is simply dummy text of the printing</Text>
            </Shimmer>
            <Shimmer
              ref={(ref) => this.bigImageAndSomeRowsAnimated.push(ref)}
              style={{ marginTop: 7 }}
              width={350}
              height={9}
              isDisplayChildComponent={isfetched}
            >
              <Text style={{ marginTop: 3 }}>Lorem Ipsum is simply dummy text of the printing </Text>
            </Shimmer>
          </View>
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
