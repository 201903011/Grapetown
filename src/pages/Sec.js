import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SectionList,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

const DATA = [
  {
    title: "Yash",
    data: ['Going with career']
  },
  {
    title: "aditya",
    data: ["Enjoy Weekends"]
  },
  {
    title: "atharva",
    data: ["Best time with buddies"]
  },
  {
    title: "utkarsha",
    data: ["Family time"]
  }
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.grape}
            source={ require('../images/ser.jpg') }
    ></Image>
  </View>
);
export default class Sec extends Component<{}> {

goBack() {
    Actions.form();
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
        
        
            <TouchableOpacity onPress={this.home} style={styles.button}>
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

            <TouchableOpacity onPress={this.goBack} style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
			</View>	

      <View>
        
              <SectionList
              style = {styles.lis}
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
              />
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
    backgroundColor:'#1c313a'
  },
  lis: {
    backgroundColor: '#1c313a',
    margin: 10 ,
    borderRadius : 25 
    
  },
  item : {
    backgroundColor: 'white' ,
    color : 'white' ,
    fontWeight : '500' ,
    fontSize : 15 ,
    margin: 10 ,
    borderRadius : 25 ,
    paddingBottom : 25 
  },
  title:{
    borderRadius : 20 ,
    color : '#1c313a' ,
    fontWeight : '500' ,
    fontSize : 20 ,
    margin: 10 ,
    marginLeft: 12 ,
    borderRadius : 5 ,
    backgroundColor : 'white'
  },
  grape : {
    height : 350 ,
    width : 350 ,
    marginLeft : 10
  },
  header:{
    color : 'white' ,
    fontWeight : '900' ,
    fontSize : 26 ,
    marginLeft : 20 
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
