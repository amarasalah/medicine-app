import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PharmacieCard = ({pharmacistName, hourlyRate, review}) => {
  return (
    <View style={styles.group5}>
      <View style={styles.rect9}>
        <View style={styles.image30Row}>
          <Image
            source={require('../assets/images/Vector_(3).png')}
            resizeMode="contain"
            style={styles.image30}></Image>
          <Image
            source={require('../assets/images/Vector.png')}
            resizeMode="contain"
            style={styles.image31}></Image>
          <Text style={styles.text7}>{review}</Text>
        </View>
        <Image
          source={require('../assets/images/Ellipse_141.png')}
          resizeMode="contain"
          style={styles.image32}></Image>
        <View style={styles.drCrick2Stack}>
          <Text style={styles.drCrick2}>{pharmacistName}</Text>
          <Text style={styles.text8}>{hourlyRate}/heure</Text>
          <Text style={styles.text9}>$</Text>
        </View>
      </View>
    </View>
  );
};

export default PharmacieCard;

const styles = StyleSheet.create({
  group5: {
    width: 86,
    height: 115,
    marginLeft: 4,
  },
  rect9: {
    width: 86,
    height: 115,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 14,
  },
  image30: {
    width: 8,
    height: 8,
  },
  image31: {
    width: 8,
    height: 8,
    marginLeft: 42,
    marginTop: 1,
  },
  text7: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 6,
    marginLeft: 1,
    marginTop: 2,
  },
  image30Row: {
    height: 10,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 10,
    marginRight: 8,
  },
  image32: {
    width: 53,
    height: 53,
    marginTop: 2,
    marginLeft: 15,
  },
  drCrick2: {
    top: 0,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 8,
  },
  text8: {
    top: 16,
    left: 8,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 9,
  },
  text9: {
    top: 15,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#0ebe7f',
    fontSize: 10,
  },
  drCrick2Stack: {
    width: 57,
    height: 28,
    marginTop: 6,
    marginLeft: 14,
  },
});
