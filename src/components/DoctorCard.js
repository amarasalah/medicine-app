import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

const DoctorCard = ({drName, drSpec}) => {
  const handleCardClick = cardId => {
    console.log(`Card clicked: ${cardId}`);
  };
  return (
    <Pressable onPress={() => handleCardClick('doctor1')}>
      <View style={styles.group1}>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <Text style={styles.drFillerupGrab1}>{drName}</Text>
            <Text style={styles.medicinSpecialiste1}>{drSpec}</Text>
            <View style={styles.image6Row}>
              <ImageBackground
                source={require('../assets/images/Vector.png')}
                resizeMode="contain"
                style={styles.image6}
                imageStyle={styles.image6_imageStyle}>
                <Image
                  source={require('../assets/images/Vector.png')}
                  resizeMode="contain"
                  style={styles.image7}></Image>
              </ImageBackground>
              <Image
                source={require('../assets/images/Vector.png')}
                resizeMode="contain"
                style={styles.image10}></Image>
              <Image
                source={require('../assets/images/Vector.png')}
                resizeMode="contain"
                style={styles.image9}></Image>
              <Image
                source={require('../assets/images/Vector.png')}
                resizeMode="contain"
                style={styles.image8}></Image>
              <Image
                source={require('../assets/images/Vector_(2).png')}
                resizeMode="contain"
                style={styles.image11}></Image>
            </View>
          </View>
          <Image
            source={require('../assets/images/image_(4).png')}
            resizeMode="contain"
            style={styles.image5}></Image>
        </View>
        <Image
          source={require('../assets/images/Vector.png')}
          resizeMode="contain"
          style={styles.image27}></Image>
      </View>
    </Pressable>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  group1: {
    width: 120,
    height: 170,
  },
  rect5Stack: {
    width: 120,
    height: 172,
  },
  rect5: {
    top: 2,
    left: 3,
    width: 117,
    height: 170,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 13,
  },
  drFillerupGrab1: {
    fontFamily: 'rubik-500',
    color: '#121212',
    marginTop: 117,
    marginLeft: 5,
  },
  medicinSpecialiste1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(156,156,156,1)',
    fontSize: 9,
    marginLeft: 21,
  },
  image6Row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 28,
    marginRight: 40,
  },
  image6: {
    width: 8,
    height: 8,
  },
  image6_imageStyle: {},
  image7: {
    width: 8,
    height: 8,
  },
  image10: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
  image9: {
    width: 8,
    height: 8,
    marginLeft: 2,
  },
  image8: {
    width: 8,
    height: 8,
    marginLeft: 4,
  },
  image11: {
    width: 8,
    height: 8,
  },

  image5: {
    top: 0,
    left: 0,
    width: 120,
    height: 117,
    position: 'absolute',
  },
  image27: {
    width: 8,
    height: 8,
    marginTop: 35,
    marginLeft: 68,
  },
});
