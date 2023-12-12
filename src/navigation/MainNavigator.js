// navigation/MainNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp.js';
import Login from '../screens/Auth/Login.js';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
