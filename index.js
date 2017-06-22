import React, {Component, PropTypes} from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent} from 'react-native';

Shimmer.propTypes = {
  animating : React.PropTypesPropTypes.bool,
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right'])
}

Shimmer.defaultProps = {
  animating : true
};

export default class Shimmer extends Component {

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
