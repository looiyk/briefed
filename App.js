/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainContainer from './components/MainContainer'
import PropTypes from 'prop-types';

const isUp = false

export default class App extends Component {
  render() {
    return (
      <MainContainer isUp={isUp} />
    );
  }
}

