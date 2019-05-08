
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Level from "./Levelz/level_one";

var grid = new Array(100)
var maze = [
           [  0,  0, -1,  0 , -1, -1,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1, -1,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1,  0,  0,  0 ,  0,  0,  0, -1, -1 , -1, -1, -1,  0, -1 , -1,  0,  0,  0,  0 , -1, -1, -1, -1,  0 ]
         , [ -1,  0, -1, -1 , -1, -1,  0, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1,  0 ]
         , [  0,  0,  0,  0 ,  0,  0,  0,  0,  2 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 ]
         , [  0, -1, -1,  0 , -1, -1,  0, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 ]
         , [  0, -1, -1,  0 , -1, -1,  0, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,  0, -1,  0 , -1, -1,  0, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ -1,  0, -1,  0 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ -1,  0,  0,  0 , -1,  0, -1, -1,  0 , -1, -1, -1, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [ -1, -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0,  0,  0,  0 , -1,  0, -1, -1, -1 ,  0, -1,  0,  0,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0, -1, -1,  0 , -1,  0, -1,  0,  0 ,  0,  0,  0, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0, -1, -1,  0 , -1,  0, -1,  0, -1 , -1, -1, -1, -1,  0 , -1,  0,  0,  0, -1 , -1, -1, -1,  0, -1 ]
         , [  0, -1, -1,  0 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1,  0, -1 ]
         , [  0, -1, -1,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0,  0,  0, -1 ]
         , [  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ]
         , [  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ]
         , [  0,  0,  0,  0 ,  0,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ]
         , [ -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1,  0 ]
         , [ -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1,  0 ]
         , [ -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 ,  0,  0,  0,  0,  0 ]
         , [ -1, -1, -1, -1 , -1,  0, -1, -1, -1 , -1, -1, -1, -1, -1 , -1,  0, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1, -1, -1, -1 , -1,  0,  0,  0,  0 ,  0,  0,  0,  0,  0 ,  0,  0, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0, -1, -1, -1, -1 ]
         , [ -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 , -1, -1, -1, -1, -1 ,  0,  0,  0,  0,  0 ] ];
  
var row_limit = 24;
var col_limit = 24;

function autofill() {
  for ( var i = 0; i < 100; i++) {
    grid[i]=new Array( 100 );
    for ( var j = 0; j < 100; j++ ) {
       grid[ i ][ j ] = 0;
    }
  }
}

autofill();
var currentRow = 0;
var currentCol = 0;

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
    return (

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <ImageBackground
          source={this.state.backgroundSource} style={ styles.image}>
          
          
          <CustomButton 
            text="N"
            onPress={() => {
              this.home()
              if( currentRow > 0 ) {
                if( maze[ currentRow - 1 ][ currentCol ] !== -1 ) {
                  currentRow--;
                  this.setState({displayText:"You head North." + " row:" + currentRow + " col:" + currentCol })
                } else {
                  this.setState({ displayText: "You hit a wall" + " row:" + currentRow + " col:" + currentCol  }); 
                }
              } else {
                this.setState({ displayText:"There is no path this way, you turn around." + " row:" + currentRow + " col:" + currentCol })
              }
            }}
          />

          <CustomButton 
          text="S"
          onPress={() => {
            this.swamp();
            if( currentRow < row_limit ) {
              if( maze[ currentRow + 1 ][ currentCol ] !== -1 ) {
                currentRow++;
                this.setState({displayText:"You head South." + " row:" + currentRow + " col:" + currentCol })
              } else {
                this.setState({ displayText: "You hit a wall" + " row:" + currentRow + " col:" + currentCol }); 
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around." + " row:" + currentRow + " col:" + currentCol })
            }
          }}
        />

        <CustomButton 
          text="E"
          onPress={() => {

            if( currentCol < col_limit ) {
              if( maze[ currentRow ][ currentCol + 1 ] !== -1 ) {
                currentCol++;
                this.setState({displayText:"You head East."  + " row:" + currentRow + " col:" + currentCol })
              } else {
                this.setState({ displayText: "You hit a wall"  + " row:" + currentRow + " col:" + currentCol }); 
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around."  + " row:" + currentRow + " col:" + currentCol })

            }
          }}
        />

        <CustomButton 
          text="W"
          onPress={() => {

            if( currentCol > 0 ) {
              if( maze[ currentRow ][ currentCol - 1 ] !== -1 ) {
                currentCol--;
                this.setState({displayText:"You head West."  + " row:" + currentRow + " col:" + currentCol })
              } else {
                this.setState({ displayText: "You hit a wall"  + " row:" + currentRow + " col:" + currentCol }); 
              }
            } else {
              this.setState({ displayText:"There is no path this way, you turn around." + " row:" + currentRow + " col:" + currentCol })
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
