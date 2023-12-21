import React from 'react';
import {View, Text, Button} from 'react-native';

const DrawerContent = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Content</Text>
      <Button title="Go to Tab1" onPress={() => navigation.navigate('Tab1')} />
      <Button title="Go to Tab2" onPress={() => navigation.navigate('Tab2')} />
      {/* Add more buttons or content as needed */}
    </View>
  );
};

export default DrawerContent;
