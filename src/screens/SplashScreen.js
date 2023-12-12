import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg_(1).png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/docto.png')}
            style={styles.logo}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
