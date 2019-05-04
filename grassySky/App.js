
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Level from "./Levelz/level_one";

var grid = new Array(100)

var x_limit = 99;
var y_limit = 99;

function autofill() {
  for ( var i = 0; i < 100; i++) {
    grid[i]=new Array(100);
    for ( var j = 0; j < 100; j++ ) {
      grid[ i ][ j ] = 0;
    }
  }
}

autofill();
var currentX = 0;
var currentY = 0;

export default class HelloWorldApp extends Component {
  
  constructor( props ){
    super( props );

    this.backgroundChanger = this.swamp.bind( this );
    this.backgroundChanger = this.home.bind( this );

    this.state={
      displayText: 'Hello Traveller',
      backgroundSource: require("./Resources/background.png")
    }
  }
  
  swamp() {
    this.setState({ 
      backgroundSource: require("./Resources/mangrove.png")
    });
  }

  home() {
    this.setState({
      backgroundSource: require("./Resources/background.png")
    })
  }

  render() {
    var icon = this.props.active
    ? require('./Resources/background.png')
    : require('./Resources/mangrove.png');
    return (

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <ImageBackground
          source={this.state.backgroundSource} style={ styles.image}>
          
          <CustomButton 
          text="N"
          onPress={() => {
            this.swamp();
            this.setState({displayText:"You head North."})
            
            if( currentY < y_limit  ) {
              grid[ currentX ][ currentY ] = 1;
              currentY++;
            }
            else {
              this.setState({ displayText:"There is no path this way, you turn around." })
            }
          }}
        />
        
        <CustomButton 
          text="S"
          onPress={() => {
            this.setState({displayText:"You head South."})
            this.home()

            if( currentY > 0 ) {
              grid[ currentX ][ currentY ] = 1;
              currentY--;
            }
            else {
              this.setState({ displayText:"There is no path this way, you turn around." })
            }
          }}
        />

        <CustomButton 
          text="E"
          onPress={() => {
            this.setState({displayText:"You head East."})

            if( currentX < x_limit ) {
              grid[ currentX ][ currentY ] = 1;
              currentX++;
            }
            else {
              this.setState({ displayText:"There is no path this way, you turn around." })

            }
          }}
        />

        <CustomButton 
          text="W"
          onPress={() => {
            this.setState({displayText:"You head West."})
            if( currentX > 0 ) {
              grid[ currentX ][ currentY ] = 1;
              currentX--;
            }
            else{
              this.setState({ displayText:"There is no path this way, you turn around." })
            }
          }
        }
        />

        <ScrollView style={styles.scrollViewStyle} >
          <Text style={ styles.displayStyle }>{this.state.displayText}</Text>
        </ScrollView>
        </ImageBackground>
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
    flex: 1,
    color: 'lightgray',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-end',
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
    padding:5,
    width: 50,
    height: 50,
    backgroundColor: '#202646',
    borderRadius:5,
    borderWidth: 5,
    margin: 5,
    justifyContent: "flex-end",
    },
  
  scrollViewStyle: {
    bottom: 0,
    position: 'absolute',
    width: "100%",
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
