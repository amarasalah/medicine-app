import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

function OnBoarding03(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg_(1).png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/image_(2).png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.loremIpsum}>
            Trouver des médecins{'\n'} de confiance
          </Text>
          <Text style={styles.loremIpsum3}>
            Contrary to popular belief, Lorem Ipsum is not {'\n'}simply random
            text. It has roots in a piece of it {'\n'}over 2000 years old.
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.button}>
            <View style={styles.rect}>
              <Text style={styles.commencer}>Commencer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.passerStack}>
              <Text style={styles.passer}>Passer</Text>
              <View style={styles.rect2}></View>
            </View>
          </TouchableOpacity>
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
    position: 'absolute',
    top: 0,
    left: 0,
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loremIpsum: {
    fontFamily: 'cairo-900',
    color: '#121212',
    textAlign: 'center',
    fontSize: 20,
  },
  loremIpsum3: {
    fontFamily: 'cairo-regular',
    color: '#121212',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 12,
  },
  button: {
    width: 245,
    height: 51,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    width: 245,
    height: 51,
    backgroundColor: 'rgba(0,51,153,1)',
    borderRadius: 33,
  },
  commencer: {
    fontFamily: 'cairo-600',
    color: 'rgba(255,255,255,1)',
    marginTop: 14,
    marginLeft: 83,
  },
  button2: {
    width: 63,
    height: 17,
    marginTop: 20,
    marginLeft: 0,
  },
  passer: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  rect2: {
    top: 0,
    left: 0,
    width: 63,
    height: 17,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    opacity: 0,
  },
  passerStack: {
    width: 63,
    height: 17,
  },
});

export default OnBoarding03;
