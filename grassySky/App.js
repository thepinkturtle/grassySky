
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {
  
  render() {
    var text = '';
    return (
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <CustomButton 
          text="N"
          onPress={() => {
            text = 'You head North';
            alert("You head North");
          }}
        />
        
        <CustomButton 
          text="S"
          onPress={() => {
            alert("You head South");
          }}
        />

        <CustomButton 
          text="E"
          onPress={() => {
            alert("You head East");
          }}
        />

        <CustomButton 
          text="W"
          onPress={() => {
            alert("You head West");
          }}
        />
        <OutputBox setOutputText={ text }> text</OutputBox>
      </View>
    );
  }
}
class Square extends Component {
  constructor( props ){
    super( props );
  }
  render() {
    return (
      <View style={styles.square}>
        <Text>background</Text>
      </View>
    );
  }
}

class Rectangle extends Component {
  constructor( props ) {
    super(props);
  }
  render(){
    return(
      <View style={styles.rectangle}>
        <Text>here</Text>
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

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

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

class OutputBox extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      outputText: 'Welcome Traveller'
    };
  }

  setOutputText = () => {
    this.setState({ outputText: 'I changed' } );
  };

  render() {
    return (
      <View style={ styles.outputBox }>
        <Text>{this.state.outputText}</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create( {

  outputBox: {
    backgroundColor: 'blue',
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
    color: '#ffffff',
    textAlign: 'center'
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