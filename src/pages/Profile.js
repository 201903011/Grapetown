import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar ,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import Grid from '@react-css/grid'

export default class Profile extends Component<{}> {

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
         
    }
    logout(){
        Actions.form()
    }
        render() {
            return(
          <ScrollView>
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
    
          <View style = { styles.v1}>
          <Image style={styles.grape}
            source={ require('../images/bird.jpg') }
            />
          </View>
              
          <View style={styles.usernamebox1}>
              <Text style={styles.username} >Rahul Gaikwad</Text>
              <TouchableOpacity  style={styles.button}>
                      <Text style={styles.follo}>Follow</Text>
              </TouchableOpacity> 
          </View>
          
          <View style={styles.usernamebox} >
            <View style={styles.im_view}>
            <Image style={styles.grape1}
            source={ require('../images/bird.jpg') }
            />

            <Image style={styles.grape1}
            source={ require('../images/bird.jpg') }
            />

            <Image style={styles.grape1}
            source={ require('../images/bird.jpg') }
            />
            </View>
            <View style={styles.im_view}>
            <Image style={styles.grape1}
            source={ require('../images/bird.jpg') }
            />

            <Image style={ styles.grape1}
            source={ require('../images/bird.jpg') }
            />
            </View>
          </View>
          <View style={styles.usernamebox} >
              <Text style={styles.header} >General Information</Text>
              <Text style={styles.info}>Profession  :   developer</Text>
              <Text style={styles.info}>Degree         :   BTEch  IT (pursuing)</Text>
              <Text style={styles.info}>Contact no  :   9702816011</Text>
              <Text style={styles.info}>Email id        :   rahulkishor@gmail.com</Text>
              <Text style={styles.info}>GitHub         :   201903011</Text>
          </View>

          <View style={styles.usernamebox}>
              <Text style={styles.header}>Personal Information</Text>
              <Text style={styles.info}>Addresss     :   Mumbai 400060</Text>
              <Text style={styles.info}>Gender         :   Male</Text>
              <Text style={styles.info}>Marital Status			: 	Unmarried</Text>
              <Text style={styles.info}>Gender         :   Male</Text>
              
          </View>

          </ScrollView>
            
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
      },
      grape: {
        height : 100 ,
        width : 100,
        marginLeft: 160 ,
        marginTop : 20 ,
        marginBottom : 20 ,
        borderRadius : 20 ,
        opacity : 1 
      },
      v1:{
        backgroundColor : '#1c313a',
        opacity: 0.8
        
      },
      usernamebox1 :{
          
        margin:12,
        backgroundColor : '#1c313a' ,
        padding : 10 ,
        color:'white',
        borderRadius : 10 ,
        flexDirection : 'row'
      },
      usernamebox:{
          
          margin:12,
          backgroundColor : '#1c313a' ,
          padding : 10 ,
          color:'white',
          borderRadius : 10 ,
      },
      username: {
        color:'white',
        fontWeight : 'bold' ,
        fontSize : 30 ,
        padding : 5 ,
        marginTop : 5,
        marginLeft : 10
      },
      header:{
        color:'white',
        fontWeight : 'bold' ,
        fontSize : 26 , 
        paddingBottom : 20 ,
        
      },
      info:{
        color:'white' ,
        color:'white',
        fontWeight : '600' ,
        fontSize : 20,
        paddingBottom: 20 
      },
      follo:{
        fontSize : 20 ,
        fontWeight : 'bold' ,
        color : 'black' ,
        backgroundColor : 'white' ,
        padding : 5 ,
        borderRadius : 5 ,
        marginLeft : 40
      },
      im_view:{

        margin : 5 ,
        padding : 5 ,
        flexDirection : 'row' , 
        backgroundColor : 'black' ,
        borderColor : 'white' ,
        borderRadius: 5 ,
        borderWidth : 1
      },

      grape1:{
        height:100,
        width : 100 ,
        padding : 7,
        margin : 7,
        borderColor : 'white' ,
        borderRadius: 3 ,
        borderWidth : 3
      } ,
      

    });
    