import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';
import FavoriteScreen from '../screens/FavoriteScreen';
import Profile from '../screens/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, TouchableOpacity} from 'react-native';
import Messages from '../screens/Messages';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 60,
      },
      tabBarItemStyle: {borderTopLeftRadius: 20, borderTopRightRadius: 20},
      tabBarLabel: '',
      tabBarActiveTintColor: '#1846A3',
      tabBarInactiveTintColor: '#1846A3',
    }}>
    <Tab.Screen
      name="HomeTAB"
      component={DrawerNavigator}
      options={() => ({
        tabBarIcon: ({focused, color, size}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate({name: 'MainHome'}));
            }}
            style={{
              backgroundColor: focused ? '#1846A3' : 'transparent',
              borderRadius: 20,
              padding: 5,
            }}>
            <Entypo name="home" color={focused ? 'white' : color} size={size} />
          </TouchableOpacity>
        ),
      })}
    />
    <Tab.Screen
      name="My Favorites"
      component={FavoriteScreen}
      options={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <View
            style={{
              backgroundColor: focused ? '#1846A3' : 'transparent',
              borderRadius: 20,
              padding: 5,
            }}>
            <Entypo
              name="heart"
              color={focused ? 'white' : color}
              size={size}
            />
          </View>
        ),
      })}
    />
    <Tab.Screen
      name="My Profile"
      component={Profile}
      options={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <View
            style={{
              backgroundColor: focused ? '#1846A3' : 'transparent',
              borderRadius: 20,
              padding: 5,
            }}>
            <Entypo name="user" color={focused ? 'white' : color} size={size} />
          </View>
        ),
      })}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      options={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <View
            style={{
              backgroundColor: focused ? '#1846A3' : 'transparent',
              borderRadius: 20,
              padding: 5,
            }}>
            <AntDesign
              name="message1"
              color={focused ? 'white' : color}
              size={size}
            />
          </View>
        ),
      })}
    />
  </Tab.Navigator>
);

export default TabNavigator;
