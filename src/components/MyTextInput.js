/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const MyTextInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#677294"
        {...props}
      />
      <View style={styles.border} />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E6E8EE',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
  },
  // border: {
  //   width: '100%',
  //   backgroundColor: 'gray',
  //   height: 1,
  //   alignSelf: 'center',
  // },
});
