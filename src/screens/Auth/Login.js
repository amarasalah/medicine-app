/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import SocialMedia from '../../components/SocialMedia';
import onGoogleButtonPress from '../../config/firebase/GoogleSignIn';
import signInWithEmailAndPassword from '../../config/firebase/EmailAndPassword';
import onFacebookButtonPress from '../../config/firebase/FacebookSignIn';
import {Color} from '../GlobalStyles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    onGoogleButtonPress();
  };
  const handleEmailAndPassword = () => {
    signInWithEmailAndPassword(email, password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg_(1).png')}
        style={styles.imageBackground}>
        <Text style={styles.title}>Bon Retour</Text>

        <View style={styles.inputContainer}>
          <SocialMedia
            onPressG={handlePress}
            onPressF={onFacebookButtonPress}
          />

          <MyTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter E-mail or Username"
          />
          <MyTextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
          />

          <MyButton title={"S'inscrire"} onPress={handleEmailAndPassword} />
          <View style={styles.forgetpswdtxtContainer}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.textQuest}>Forget Password?</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.signuptxtContainer}>
          <Text style={styles.textQuest}>Vous n'avez pas de compte ?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: '#1846A3'}}>Rejoignez-nous</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 90,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 20,
    top: Platform.OS === 'android' ? 20 : 50,
  },
  title: {
    fontSize: 25,
    color: '#000',
    marginTop: Platform.OS === 'android' ? 60 : 110,
    fontFamily: 'Rubik-SemiBold',
    paddingBottom: 100,
  },
  inputContainer: {
    paddingTop: 200,
    height: 400,
    width: '100%',

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  textQuest: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,

    color: '#1846A3',
    fontFamily: 'Rubik-Regular',
  },
  textSocial: {
    fontSize: 20,
    color: 'gray',
    marginVertical: 20,
    fontFamily: 'Rubik-Regular',
    paddingTop: 10,
  },
  signuptxtContainer: {
    marginTop: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  forgetpswdtxtContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
});
