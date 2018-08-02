/* @flow */

import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
