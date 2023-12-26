import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Doctors from '../screens/Doctors';
import Pharmacies from '../screens/Pharmacies';
import BloodBank from '../screens/BloodBank';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainHome" component={HomeScreen} />
    <Stack.Screen name="Doctors" component={Doctors} />
    <Stack.Screen name="Pharmacies" component={Pharmacies} />
    <Stack.Screen name="BloodBank" component={BloodBank} />
  </Stack.Navigator>
);

export default MainStack;
