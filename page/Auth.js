import React,{ Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {  View, ActivityIndicator, Text } from "react-native";

export default class Auth extends Component{
    constructor(){
      super();
      this._boot()
    }
   

    _boot= async () => {
      const userToken = await AsyncStorage.getItem('userToken')
      this.props.navigation.navigate( userToken ? 'App':'Auth')
    }
    
  
    render() {
      return (
        <View style = {{flex : 1, justifyContent : 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
  }

