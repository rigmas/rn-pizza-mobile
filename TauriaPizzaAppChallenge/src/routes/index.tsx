import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_NAME } from './constants';
import SCREENS from "../screens";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">

      <RootStack.Screen name={SCREEN_NAME.HOME} component={SCREENS.Home}/>

    </RootStack.Navigator>
  )
  
}

export default RootStackScreen;