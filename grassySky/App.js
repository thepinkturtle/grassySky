
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, ScrollView } from 'react-native';

var grid=new Array(100)

for ( var i = 0; i < 100; i++) {
  grid[i]=new Array(100);
  for ( var j = 0; j < 100; j++ ) {
    grid[ i ][ j ] = 0;
  }
}

var currentX = 0;
var currentY = 0;

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
            grid[ currentX ][ currentY ] = 1;
            if( currentY < 100 )
              currentY++;
            else
              this.setState({ displayText:"There is no path this way, you turn around." })
          }}
        />
        
        <CustomButton 
          text="S"
          onPress={() => {
            this.setState({displayText:"You head South.You notice a strange aperation on the horizon. You stop, and wonder if it's safe to continue down this path."})
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
        <ScrollView style={styles.scrollViewStyle} >
          <Text style={ styles.displayStyle }>{this.state.displayText}</Text>
        </ScrollView>
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
    color: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  
  displayStyle: {
    fontSize:20,
    backgroundColor: "lightgrey",
    color: 'gray',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: "stretch",
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
    },
  
  scrollViewStyle: {
    flex: 1,
    width: "100%",
  }
})
