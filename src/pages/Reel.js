import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar ,
  TouchableOpacity,
  ProgressBarAndroidComponent
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Video from 'react-native-video';

import {Actions} from 'react-native-router-flux';


export default class Reel extends Component<{}> {

  videoBuffer = (isBuffer) =>{
    console.log(isBuffer)
    //here you could set the isBuffer value to the state and then do something with it
    //such as show a loading icon
    }

    goBack() {
        Actions.sec();
    }
    upload(){
          Actions.upload()
    }
    reel(){
      
    }
    profile(){
         Actions.profile()
    }
    logout(){
        Actions.form()
    }
        render() {
            return(
          <View>
                <View style={styles.container}>
            <TouchableOpacity onPress={this.goBack} style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.upload} style={styles.button}>
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.reel} style={styles.button}>
              <Text style={styles.buttonText}>Reel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.profile} style={styles.button}>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.logout} style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
                </View>	
    
          <View>
            <Text style={styles.txt1}>Sample video for Reel </Text>
          </View>
          <View>
            
          </View>
          <Video
              source={require('../images/animate.mp4')}
              style={styles.vid}
              controls={true}
              onBuffer={this.videoBuffer}
              ref={(ref) => {
              this.player = ref
              }} />
          </View>
            
            )
        }
    }
    
    const styles = StyleSheet.create({
      container : {
        flexDirection:'row'
        
      },
      txt1 : {
        color : 'black' ,
        fontSize : 26 ,
        fontWeight : 'bold' ,
        padding : 10 ,
        textAlign : 'center' 
      },
      vid : {
        height: 400 ,
        width : 300 ,
        backgroundColor : 'black' ,
        margin : 20 ,
        padding : 50
      },
      button: {
        backgroundColor:'#1c313a',
        paddingLeft : 19.2 ,
        paddingRight : 19.2 ,
        paddingVertical: 13 ,
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
      }
      
    });
    