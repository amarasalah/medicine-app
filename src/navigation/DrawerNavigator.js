import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainNavigator';
import MesReclamations from '../screens/MesReclamations';
import MesRendezVous from '../screens/MesRendezVous';
import PolitiqueDeConfidentialite from '../screens/PolitiqueDeConfidentialite';
import {TouchableOpacity, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  const navigateToMainHome = () => {
    navigation.dispatch(CommonActions.navigate({name: 'MainHome'}));
  };

  return (
    <View>
      {/* Custom drawer item for MainStack */}
      <TouchableOpacity onPress={navigateToMainHome} style={{padding: 10}}>
        <Text style={{color: 'black'}}>Go to MainHome</Text>
      </TouchableOpacity>
      {/* Rest of the drawer items */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MesReclamations')}
        style={{padding: 10}}>
        <Text style={{color: 'black'}}>Mes Reclamations</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MesRendezVous')}
        style={{padding: 10}}>
        <Text style={{color: 'black'}}>Mes RendezVous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PolitiqueDeConfidentialite')}
        style={{padding: 10}}>
        <Text style={{color: 'black'}}>Politique De Confidentialite</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="MainStack" component={MainStack} />
    <Drawer.Screen name="MesReclamations" component={MesReclamations} />
    <Drawer.Screen name="MesRendezVous" component={MesRendezVous} />
    <Drawer.Screen
      name="PolitiqueDeConfidentialite"
      component={PolitiqueDeConfidentialite}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
