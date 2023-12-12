/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SocialMedia = ({onPressG, onPressF}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressG}>
        <View style={styles.Button}>
          <Image
            style={styles.image}
            source={require('../assets/SocialMediaIcons/google.png')}
          />
          <Text>Google</Text>
        </View>
      </Pressable>
      <Pressable onPress={onPressF}>
        <View style={styles.Button}>
          <Image
            style={styles.image}
            source={require('../assets/SocialMediaIcons/facebook.png')}
          />
          <Text>Facebook</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,

    width: '100%',
  },

  image: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  textSocial: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontFamily: 'Audiowide-Regular',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,

    backgroundColor: 'white',
    width: 120,
    height: 35,
    borderRadius: 10,
  },
});
