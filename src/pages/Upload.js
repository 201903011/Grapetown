import React, { Component } from 'react';
import  {useState} from 'react-hook-use-state';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';


export default class Upload extends Component<{}> {

   constructor(props) {
    super(props);
    this.state = {
      image1 : '../images/grape.png'
    };
  }

 // let Image_Http_URL ={ uri: "../images/grape.png"};      
  
    takephoto(){

        console.warn('take photo');
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          
        });
    }
    choosephoto(){
        
      
  

        ImagePicker.openPicker({
            width: 380,
            height: 470,
            cropping: true
          }).then(image => {
            console.log(image.path);
            this.setState({ count :  image.path  })
          }); 
    }
    server(){
        console.warn('photo upload to server');
    }
    goBack() {
        Actions.sec();
    }
    upload(){
          Actions.upload()
    }
    reel(){
       Actions.reel()    
    }
    profile(){
          Actions.profile()
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
            <Image  style={{width: 380, height: 470}}
          			source={require(  "../images/grape.png" )}/>
            <TouchableOpacity onPress={this.takephoto} style={styles.button}>
              <Text style={styles.buttonText}>Take photo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.choosephoto} style={styles.button}>
              <Text style={styles.buttonText}>Choose photo  </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.server} style={styles.button}>
              <Text style={styles.buttonText}>Upload photo</Text>
            </TouchableOpacity>
          </View>
          </View>
          

                )
        }
    }
    
    const styles = StyleSheet.create({
      container : {
        flexDirection:'row'
        
      },
      con1 : {
        width:100 ,
        backgroundColor:'#245786'
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
    