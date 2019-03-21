/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform, Image, ImageBackground, TouchableOpacity, TextInput ,StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';


export default class Login extends Component {
  constructor(){
    super();
    this.state = { HidePass : true}
  }
  static navigationOptions = {
    header: null
  }

  ShowHidePass = () => {
   this.setState({HidePass : !this.state.HidePass});
  }

  render() {

    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
      style={{flex: 1 ,justifyContent: 'center'}}
      resizeMode = 'stretch'
      source ={require('../assets/imgs/background-login.png')}>
      
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
              style={styles.logo}
              source={{uri: 'https://cromassets.000webhostapp.com/logo1.png'}}
            />
        </View>

           <View style ={styles.form}> 
           <View style={styles.containerInput}>
              <TextInput 
                  inlineImagePadding={15}
                  inlineImageLeft='user_icon'
                  style={styles.input}
                  placeholder="Nama Warung"/>
           </View>

           <View style={styles.containerInput}>
              <TextInput
                inlineImagePadding={15}
                inlineImageLeft='locked_icon'
                style={styles.input}
                secureTextEntry = { this.state.HidePass }
                placeholder ="Kata Sandi"/>
                <TouchableOpacity
                  onPress = {this.ShowHidePass}  
                  style={{position: 'absolute', right: 1, padding : 15}}>
                <Image
                style = {{height : 15, width : 20}}
                source = { (this.state.HidePass) ? {uri : 'https://cromassets.000webhostapp.com/icon/hide.png'} : {uri:'https://cromassets.000webhostapp.com/icon/show.png' } }></Image>
                </TouchableOpacity>
           </View>
    
      
              <TouchableNativeFeedback
                onPress={ async () => {
                  await AsyncStorage.setItem('userToken', 'login');
                  this.props.navigation.navigate('App');
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Masuk</Text>
                </View>
              </TouchableNativeFeedback>

              <View style={styles.txtBtn}>
                <Text
                onPress={() => navigate('Register')}>
                  Tidak Punya akun?
                  <Text style={styles.txthref}>
                  {' '}Daftar
                  </Text>
                </Text>
              </View>
            </View> 
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    width: 160,
    height: 160, 
  },
  containerLogo:{
    marginBottom:80,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerInput:{
    marginBottom : 7,
  },
  input :{
    fontSize: 18,
    borderRadius: 10,
    backgroundColor : '#ffffff',
    height: 50,
    padding: 10,
    width : '100%',
  },


  txtBtn :{
    alignItems : 'center',
    marginTop: 5
  },
  txthref:{
    color: '#007acc'
  },
  btn :{
    alignItems : 'center',
    backgroundColor : '#25b2a9',
    borderRadius : 10,
    height: 50,
    padding : 10
  },

  btnText : {
    fontSize: 18,
    fontWeight: 'bold',
    color : '#ffffff'
  },

  label : {
    marginBottom : 70,
    textAlign : 'center',
    fontSize : 20,
    fontWeight : 'bold'
  },

  form : {
    padding : 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  
});


