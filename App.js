/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";

import LoginPage  from "./page/Login";
// import RegisterPage from "./page/Register";
import ActivationPage from "./page/Activation";
import AuthPage from './page/Auth';

import  HomePage  from './page/tabs/Home';
import  BasketPage  from './page/tabs/Basket';
import  ChatPage  from './page/tabs/Chat';
import  AccountPage  from './page/tabs/Account';


// route
const AuthStackNavigator = createStackNavigator({
  Login : LoginPage,
  // Register : RegisterPage,
  Activation : ActivationPage,
});

const HomeStackNavigator = createStackNavigator({
  Home : HomePage,
  // Register : RegisterPage,
});

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}

const BasketStackNavigator = createStackNavigator({
  Basket : BasketPage,
});

const ChatStackNavigator = createStackNavigator({
  Chat : ChatPage,
});

const AccountStackNavigator = createStackNavigator({
  Account : AccountPage,
});


const AppBottomNavigator = createBottomTabNavigator({
  Home : HomeStackNavigator,
  Basket : BasketStackNavigator,
  Chat : ChatStackNavigator,
  Account : AccountStackNavigator,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : ''}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Basket') {
        iconName = `ios-basket${focused ? '' : ''}`;
      } else if (routeName === 'Chat') {
        iconName = `ios-chatbubbles${focused ? '' : ''}`;
      } else if (routeName === 'Account') {
        iconName = `ios-contact${focused ? '' : ''}`;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#25b2a9',
    inactiveTintColor: 'gray',
  },
}
)

export default createAppContainer(createSwitchNavigator(
  {
    Load : AuthPage,
    Auth : AuthStackNavigator,
    App : AppBottomNavigator,
  },
  {
    initialRouteName : 'Load',
  }
))
