import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent,
} from 'react-native';

Shimmer.propTypes = {
  animating : PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired
}

export default class Shimmer extends Component {
  static defaultProps = {
    animating : true
  };

  render() {
    const { direction, ...props } = this.props;
    return (<RNShimmeringView shimmeringDirection={direction} {...props} />)
  }
}

const RNShimmeringView = requireNativeComponent('RNShimmeringView', Shimmer, {
  nativeOnly: {
    shimmeringDirection: true,
  },
});
