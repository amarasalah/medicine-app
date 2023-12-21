import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="HomeTAB"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen name="My Favorites" component={FavoriteScreen} />
    <Tab.Screen name="My Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
