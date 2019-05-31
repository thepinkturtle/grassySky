
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView, ImageBackground } from 'react-native';


var maze = [
           [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'm3',      -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'm2',      -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'm1',      -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'm0',      -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'agoroth', -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1,        -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,        -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,        -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,        -1,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,         0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ] ];

var row_limit = 24;
var col_limit = 24;
var currentRow = 0;
var currentCol = 0;
var startingLives = 3;
var minor_boss = 0

let story_map = new Map([['0' , "You head down the path."]
                , [ 'escape'  , "You escaped with your life in hand. You lucky dog, next time you might not be so lucky..."]
                , [ '-1' , "You encounter an unmovable rock, you turn back." ]
                , [ 'm3' , "You hear a sound." ]
                , [ 'm2' , "A large shadow darts across the path." ]
                , [ 'm1' , "You feel off, as though something evil is staring at you." ]
                , [ 'm0' , "A large hairy beast with blood red eyes " + 
                         ", mangled sharp teeth and the stench of rotten flesh looms " + 
                         "over you, you immediately regret your decision to go this way. " + 
                         "Too late, its mouth opens wide and it lurches toward you..." ]

                , [ 'dead' , "You died..." ]
                , [ 'agoroth', "My name is, Agoroth! I am the mighty demon of the black woods. You seem like a clever enough " +
                  "fool. Hand to hand combat is only uncultered swine. I will make a deal with you. A battle of wits! If I win " +
                  "I get to consume your soul and you will remain a prisoner to me, trapped in the dark diminsion, forever my slave. " +
                  "If you win, I will let your spirit remain in that bag of flesh, and you may pass without further strife from me." ] 
                , [ 'caught', "Ha ha ha, nice try you delicous little morsel. You can't escape from me!"]
                ]);

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
          
          <NavButton 
            text="N"
            onPress={() => {
              this.home();
              if( currentRow > 0 ) {
                if( maze[ currentRow - 1 ][ currentCol ] !== -1 ) {
                  currentRow--;
                  this.setState({displayText: story_map.get( maze[ currentRow ][ currentCol ] + "") });
                  
                } else {
                  this.setState({ displayText: story_map.get ( maze[ currentRow - 1 ][ currentCol ] + "") }); 
                }
              } else {
                this.setState({ displayText: "There is no path this way, you turn back." });
              }
              this.die();
            }}
          />

          <NavButton 
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

        <NavButton 
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

        <NavButton 
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
          <InteractButton text="Fight!"
            onPress={() => {
              currentRow++;
              if( maze[ currentRow ][ currentCol ] === 'agoroth' ) {
                this.setState({ displayText: story_map.get( maze[ currentRow ][ currentCol ] + "" ) })
              }
            }
          }
          />
          <InteractButton text="Run!"
          onPress={() => {
              var odds = Math.random();
              if( odds > minor_boss ){
                  currentRow = currentRow + 3;
                  this.setState({ displayText: story_map.get( 'escape' ) } )
                  // alert( "current position: " + currentRow + ',' + currentCol )
              }
              else{
                this.setState({ displayText: story_map.get( 'caught' ) } )
              }
            }
          }/>
          <Text style={ styles.displayStyle }>{this.state.displayText}</Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class NavButton extends Component {
	render() {
    const display = ( maze[ currentRow ][ currentCol ] === 'm0' ? "none" : 
                      maze[ currentRow ][ currentCol ] === 'agoroth' ? "none" :
                    "flex" )
		const { text, onPress } = this.props;
		return (
		  <TouchableOpacity style={[styles.buttonStyle, { display } ] }
      onPress={() => onPress()}
      >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

class InteractButton extends Component {
	render() {
    const display = ( maze[ currentRow ][ currentCol ] === 'm0' ? "flex" : "none" )
		const { text, onPress } = this.props;
		return (
		  <TouchableOpacity style={[styles.interactButtonStyle, { display } ] }
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
    fontSize: 20,
    flex: 1,
    color: 'lightgray',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  
  displayStyle: {
    fontSize: 20,
    width: '100%',
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
  
  interactButtonStyle: {
    flex: 1,
    padding:5,
    width: 100,
    height: 50,
    backgroundColor: '#202646',
    borderRadius:5,
    borderWidth: 5,
    margin: 5,
    flexDirection: "row",
    },
    
  scrollViewStyle: {
    flex: 1,
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
