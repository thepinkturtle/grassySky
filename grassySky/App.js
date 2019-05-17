
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView, ImageBackground } from 'react-native';


var maze = [
           [  0,    0, -1,  0 , -1, -1,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1, -1,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1,    0,  0,  0 ,  0,  0,  0, -1, -1 , -1, -1, -1,  0, -1 , -1,  0,  0,  0,  0 , -1, -1, -1, -1,  0 ]
         , [ -1,    0, -1, -1 , -1, -1,  0, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ]
         , [ 'm3',  0,  0,  0 ,  0,  0,  0,  0,  2 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 ]
         , [ 'm2', -1, -1,  0 , -1, -1,  0, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 ]
         , [ 'm1', -1, -1,  0 , -1, -1,  0, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ 'm0',  0, -1,  0 , -1, -1,  0, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ 'dead',  0, -1,  0 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ -1,    0,  0,  0 , -1,  0, -1, -1,  0 , -1, -1, -1, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ -1,   -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,    0,  0,  0 , -1,  0, -1, -1, -1 ,  0, -1,  0,  0,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,   -1, -1,  0 , -1,  0, -1,  0,  0 ,  0,  0,  0, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,   -1, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1, -1,  0 , -1,  0,  0,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,   -1, -1,  0 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 ]
         , [  0,   -1, -1,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 ]
         , [  0,   -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ]
         , [  0,   -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ]
         , [  0,    0,  0,  0 ,  0,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1,   -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1,  0 ]
         , [ -1,   -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1,  0 ]
         , [ -1,   -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 ,  0,  0,  0,  0,  0 ]
         , [ -1,   -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1,   -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1,   -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1,   -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1,   -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0,  0,  0,  0,  0 ] ];

var row_limit = 24;
var col_limit = 24;
var currentRow = 0;
var currentCol = 0;
var startingLives = 3;

let story_map = new Map([['0' , "You head down the path."]
                , [ '-1' , "You encounter an unmovable rock, you turn back." ]
                , [ 'm3' , "You hear a sound." ]
                , [ 'm2' , "A larger shadow darts across the path." ]
                , [ 'm1' , "You feel off, as though something evil is staring at you." ]
                , [ 'm0' , "A large hairy beast with blood red eyes " + 
                         ", mangled sharp teeth and the stench of rotten flesh looms " + 
                         "over you, you immediately regret your decision to go this way. " + 
                         "Too late, its mouth opens wide and it lurches toward you..." ]

                , [ 'dead' , "You died..." ] ]);

export default class HelloWorldApp extends Component {
  
  constructor( props ){
    super( props );
    
    this.backgroundChanger = this.swamp.bind( this );
    this.backgroundChanger = this.home.bind( this );
    this.lives = this.die.bind( this );
    this.state={
      displayText: 'Hello Traveller',
      backgroundSource: require("./Resources/background.png"),
      lives: startingLives
    }
  }

  trigger_customButton_disable() {
    this.refs.customButton.disable_button();
  }

  swamp() {
    this.setState({ 
      backgroundSource: require("./Resources/mangrove.png")
    });
  }

  home() {
    this.setState({
      backgroundSource: require("./Resources/background.png")
    });
  }

  die() {
    this.setState( () => {
      if( maze[ currentRow ][ currentCol ] === 'dead' ) {
        currentRow = 0;
        currentCol = 0;
        return { lives: this.state.lives - 1 };
      } 
      else if ( this.state.lives === 0 ){
        return { lives: 0 };
      }
    }, () =>  { if( currentRow === 0 && currentCol === 0) { this.home() } } );
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <ImageBackground
          source={this.state.backgroundSource} style={ styles.image}>
          <Text>{this.state.lives}</Text>
          
          <CustomButton 
            ref = "customButton"
            text="N"
            onPress={() => {
              this.trigger_customButton_disable();
              this.home();
              if( currentRow > 0 ) {
                if( maze[ currentRow - 1 ][ currentCol ] !== -1 ) {
                  currentRow--;
                  this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol ] + "") });
                  
                } else {
                  this.setState({ displayText: story_map.get ( maze[ currentRow ][ currentCol ] + "") }); 
                }
              } else {
                this.setState({ displayText: "There is no path this way, you turn back." });
              }
              this.die();
            }}
          />

          <CustomButton 
          text="S"
          onPress={() => {
            this.swamp();
            if( currentRow < row_limit ) {
              if( maze[ currentRow + 1 ][ currentCol ] !== -1 ) {
                currentRow++;
                this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol ] + "") });
              } else {
                this.setState({displayText: story_map.get( maze[ currentRow + 1 ][ currentCol ] + "") });
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around." });
            }
          }}
          
        />

        <CustomButton 
          text="E"
          onPress={() => {

            if( currentCol < col_limit ) {
              if( maze[ currentRow ][ currentCol + 1 ] !== -1 ) {
                currentCol++;
                this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol ] + "") })
              } else {
                this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol + 1 ] + "") })              
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around."  })
            }
            this.die();
          }}
        />

        <CustomButton 
          text="W"
          onPress={() => {

            if( currentCol > 0 ) {
              if( maze[ currentRow ][ currentCol - 1 ] !== -1 ) {
                currentCol--;
                this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol ] + "") })
              } else {
                this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol - 1 ] + "") })
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around." })
            }
            this.die();
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

  disable_button() {
    this.setState( () => {
      if( maze[ currentRow ][ currentCol ] === 0 ) {
        alert("this happened again again" );
          return { display: "none" };
        } else {
          return { display: "flex" };
        }
      }
    );
  }
	render() {
		const { text, onPress, display } = this.props;
		return (
		  <TouchableOpacity style={[styles.buttonStyle, {display}]}
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
