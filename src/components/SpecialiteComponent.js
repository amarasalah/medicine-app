import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const SpecialiteComponent = ({specialty}) => {
  return (
    <LinearGradient
      style={styles.Container}
      locations={[0, 1]}
      colors={['#003399', '#43609a']}
      useAngle={true}
      angle={101.01}>
      <FontAwesome name="comments" size={30} color="#fff" />
      <Text style={styles.text}> {specialty}</Text>
    </LinearGradient>
  );
};

export default SpecialiteComponent;

const styles = StyleSheet.create({
  Container: {
    width: 80,
    height: 80,
    backgroundColor: '#003399',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontFamily: 'rubik-500',
    fontSize: 10,
  },
});
