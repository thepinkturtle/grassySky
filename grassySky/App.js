
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

var maze = [
           [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  1,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  2,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  3,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  4,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ 'agoroth',     -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,            -1,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [  0,             0,  0,  0,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ] ];

var row_limit = 23;
var col_limit = 23;
var currentRow = 0;
var currentCol = 0;
var startingLives = 3;
var minor_boss = .33
var showInteractionBtn = false;

let story_map = new Map([['0' , "You head down the path."]
                , [ 'escape'  , "You escaped with your life in hand. You lucky dog, head back the way you came. " +
                                "Next time you might not be so lucky..."]
                , [ '-1' , "You encounter an unmovable rock, you turn back." ]
                , [ '1' , "You hear a sound." ]
                , [ '2' , "A large shadow darts across the path." ]
                , [ '3' , "You feel off, as though something evil is staring at you." ]
                , [ '4' , "A large hairy beast with blood red eyes " + 
                         ", mangled sharp teeth and the stench of rotten flesh looms " + 
                         "over you, you immediately regret your decision to go this way. " + 
                         "Too late, its mouth opens wide and it lurches toward you..." ]

                , [ 'dead' , "You died..." ]
                , [ 'agoroth', "My name is, Agoroth! I am the mighty demon of the black woods. You seem like a clever enough " +
                  "fool. Hand to hand combat is only for uncultered swine. I will make a deal with you. A battle of wits! If I win " +
                  "I get to consume your soul and you will remain a prisoner to me, trapped in the dark diminsion, forever my slave. " +
                  "If you win, I will let your spirit remain in that bag of flesh, and you may pass without further strife from me." ] 
                , [ 'caught', "Ha ha ha, nice try you delicous little morsel. You can't escape from me!"]
                ]);

var imagesMonsters = [ require("./Resources/agoroth.png"), ];
var monsters = [ ['agoroth', imagesMonsters[0] ] ];
let regions_map = new Map([ ['swap', require("./Resources/mangrove.png") ],
                            ['forest', require("./Resources/background.png") ], ])

export default class HelloWorldApp extends Component {
  
  constructor( props ){
    super( props );
    
    this.lives = this.die.bind( this );
    this.state={
      displayText: 'Hello Traveller',
      backgroundSource: require("./Resources/background.png"),
      lives: startingLives,
      buttonPressed: '',
    }
  }

  backgroundChanger( region ) {
    if( currentRow < 12 && currentCol > 12 )
      this.setState({ backgroundSource: regions_map.get( 'swap' ) })
    else
      this.setState({ backgroundSource: regions_map.get( 'forest' )})
  }

  moveTowardMoster(){
    if( this.state.buttonPressed === 'e' )
      currentCol++;
    if( this.state.buttonPressed === 'w' )
      currentCol--;
    if( this.state.buttonPressed === 'n' )
      currentRow--;
    if( this.state.buttonPressed === 's' )
      currentRow++;
  }

  moveAwayMoster(){
    if( this.state.buttonPressed === 'e' )
      currentCol--;
    if( this.state.buttonPressed === 'w' )
      currentCol++;
    if( this.state.buttonPressed === 'n' )
      currentRow++;
    if( this.state.buttonPressed === 's' )
      currentRow--; 
  }

  getMonster(){
    monsters.forEach( monster => {
      alert("here: " + maze[ currentRow ][ currentCol ] )
      if( monster[ 0 ] ===  maze[ currentRow ][ currentCol ] ) {
        this.setState({ backgroundSource: monster[ 1 ] } )
      }
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
    }, () =>  { if( currentRow === 0 && currentCol === 0) { this.backgroundChanger('forest') } } );
  }

  render() {
    return (

      <View style={{ flexGrow: 1, alignItems: "flex-end" }}>
        <ImageBackground
          source={this.state.backgroundSource} style={ styles.image}>
          <Text>{this.state.lives}</Text>
          
          <NavButton 
            text="N"
            onPress={() => {
              this.setState({ buttonPressed: "n" })
              this.backgroundChanger( 'placeholder' );
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
            this.setState({ buttonPressed: 's' })
            this.backgroundChanger( 'placeholder' );
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
            this.setState({ buttonPressed: 'e' })
            this.backgroundChanger( 'placeholder' );
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
            this.setState({ buttonPressed: 'w' })
            this.backgroundChanger( 'placeholder' );
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
              showInteractionBtn = true;
              this.moveTowardMoster();
              this.getMonster();
              if( isNaN( maze[ currentRow ][ currentCol ] ) ) {
                showInteractionBtn = false;
                this.setState({ displayText: story_map.get( maze[ currentRow ][ currentCol ] + "" ) })
              }
            }
          }
          />
          <InteractButton text="Run!"
          onPress={() => {
            var odds = Math.random();
            if( odds > minor_boss ){
                this.moveAwayMoster();
                this.setState({ displayText: story_map.get( 'escape' ) } )
              }
              else{
                this.moveTowardMoster();
                this.getMonster();
                this.setState({ displayText: story_map.get( 'caught' ) + " " +  story_map.get(maze[ currentRow ][ currentCol ] + "" ) } );
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
    var position = maze[ currentRow ][ currentCol ];
    const display = ( position > 3 || isNaN( position ) ? "none" : "flex" )
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
    var position = maze[ currentRow ][ currentCol ];
    const display = ( position > 3 || isNaN( position ) && showInteractionBtn ? "flex" : "none" )
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



class Agoroth extends Component {
  render(){

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
    flexGrow: 1,
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
