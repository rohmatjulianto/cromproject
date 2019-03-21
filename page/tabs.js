import React,{ Component } from "react";
import {  } from "react-native";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import  HomePage  from './tabs/Home';
import  BasketPage  from './tabs/Basket';
import  ChatPage  from './tabs/Chat';
import  AccountPage  from './tabs/Account';

import AuthPage from '../page/Auth';

export default class Tabs extends Component {
    static navigationOptions = {
        header: null
      }
    render(){
        return(
            <AppComponent/>
        );
    }

}
const Appauth = createStackNavigator({ Auth : AuthPage})

const appContainer = createDrawerNavigator ({
    Home : HomePage,
    Basket : BasketPage,
    Chat : ChatPage,
    Account : AccountPage,
})

const AppComponent = createAppContainer(appContainer)