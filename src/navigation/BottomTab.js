import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/Home';
import CustomIcon from '../components/CustomIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Messages from '../screens/Messages';
import {StyleSheet} from 'react-native';
import Doctors from '../screens/Doctors';
import Pharmacies from '../screens/Pharmacies';
import BloodBank from '../screens/BloodBank';
import MainStack from './MainNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 30,
      },
      tabBarActiveBackgroundColor: '#1846A3',
      tabBarActiveTintColor: 'white',
    }}
    initialRouteName="HomeTAB">
    <Tab.Screen
      name="HomeTAB"
      component={MainStack}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <FontAwesome name="home" size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: '#1846A3',
        tabBarActiveTintColor: 'white',
      }}
    />
    <Tab.Screen
      name="My Favorites"
      component={FavoriteScreen}
      options={{
        tabBarIcon: ({color, size}) => {
          return <FontAwesome name="heart" size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: '#1846A3',
        tabBarActiveTintColor: 'white',
      }}
    />
    <Tab.Screen
      name="My Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return (
            <FontAwesome
              name="user"
              size={size}
              color={focused ? Styles.bottomTab : color}
            />
          );
        },
        tabBarActiveBackgroundColor: '#1846A3',
        tabBarActiveTintColor: 'white',
      }}
    />
    <Tab.Screen
      name="My Messages"
      component={Messages}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <FontAwesome name="envelope" size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: '#1846A3',
        tabBarActiveTintColor: 'white',
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;

const Styles = StyleSheet.create({
  bottomTab: {
    padding: 5,
    color: 'black',
    backgroundColor: 'red',
  },
});
