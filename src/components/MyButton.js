/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const MyButton = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <LinearGradient colors={['#1846A3', '#1846A3']} style={styles.gradient}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  button: {
    width: 320,
    height: 60,
  },
  text: {
    color: 'white',
    fontSize: 19,
    fontFamily: 'Rubik-Medium',
  },
});
