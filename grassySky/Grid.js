'use strict'

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Grid extends Component {
  constructor( props ){
    super( props );
  }

  checkRow = (event) => {
    alert('check row');
  };
  checkCol = (event) => {
    alert('check col');
  };

  render() {
    return (
      <View>
            <Text>Welcome to React Native</Text>
         </View>
    );
  }
}
const grid = new Grid();

export default grid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  fixedRatio: {
    backgroundColor: 'rebeccapurple',
    flex: 1,
    aspectRatio: 1
  },
});