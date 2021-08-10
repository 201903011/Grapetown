import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button  ,
  TouchableOpacity 
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Logo from './Logo';

export default class Form extends Component<{}> {

  show2() {
    Alert.alert('You wnt to login ')  
  }
  constructor(props) {  
    super(props);  
    this.state = {user: '' , pass :''};  
} 
onPressButton(){
  
  Actions.sec()
}


	render(){
		return(
      <View style={styles.container1}>
        
        <Logo style={styles.grape1}/>
    
			<View style={styles.container}>
          
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={(user) => this.setState({user})}  
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={(pass) => this.setState({pass})}  
              />  
             
            <TouchableOpacity onPress={this.onPressButton} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
  		</View>
      </View>
     
			)
	}
}

const styles = StyleSheet.create({
  
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  grape1 : {
    marginBottom: 100
  },
  inputBox: {
    width:300,
    backgroundColor:'grey',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
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

});