
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor( props ){
    super( props );
    this.state={
      displayText: 'Hello Traveller',
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <CustomButton 
          text="N"
          onPress={() => {
            this.setState({displayText:"You head North."})
          }}
        />
        
        <CustomButton 
          text="S"
          onPress={() => {
            this.setState({displayText:"You head South."})
          }}
        />

        <CustomButton 
          text="E"
          onPress={() => {
            this.setState({displayText:"You head East."})
          }}
        />

        <CustomButton 
          text="W"
          onPress={() => {
            this.setState({displayText:"You head West."})
          }}
        />
        <Text style={ styles.textStyle }>{this.state.displayText}</Text>
      </View>
    );
  }
}

class CustomButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create( {

  outputBox: {
    backgroundColor: 'grey',
    width: '100%',
    height: 50,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  textStyle: {
    fontSize:20,
    width: "100%",
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  buttonStyle: {
    padding:10,
    width: 50,
    height: 50,
    backgroundColor: '#202646',
    borderRadius:5,
    borderWidth: 5,
    margin: 5,
    }
})
