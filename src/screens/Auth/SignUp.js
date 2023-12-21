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
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import SocialMedia from '../../components/SocialMedia';
import onGoogleButtonPress from '../../config/firebase/GoogleSignIn';
import signInWithEmailAndPassword from '../../config/firebase/EmailAndPassword';
import onFacebookButtonPress from '../../config/firebase/FacebookSignIn';

const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // // State variable to track password visibility
  // const [showPassword, setShowPassword] = useState(false);

  // // Function to toggle the password visibility state
  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

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
        <Text style={styles.title}>
          Rejoignez-nous pour commencer la recherche
        </Text>

        <View style={styles.inputContainer}>
          <SocialMedia
            onPressG={handlePress}
            onPressF={onFacebookButtonPress}
          />
          <View style={styles.MyTextInput}>
            <MyTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Votre Nom et Prenom"
            />
          </View>

          <View style={styles.MyTextInput}>
            <MyTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Votre Email"
              secureTextEntry
            />
          </View>

          <View style={styles.MyTextInput}>
            <MyTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Votre Mot de Passe"
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>
              J'accepte les conditions d'utilisation et la politique de
              confidentialité
            </Text>
          </View>
          <View style={styles.buttonContainerInscrit}>
            <MyButton title={"S'inscrire"} onPress={handleEmailAndPassword} />
          </View>
          <View style={styles.forgetpswdtxtContainer}>
            <Pressable
              onPress={() => navigation.navigate('SignUp')}></Pressable>
          </View>
        </View>
        <View style={styles.signuptxtContainer}>
          <Text style={styles.textQuest}>Avez vous un compte? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textQuest}>Se connecter</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

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
    height: 300,
    width: '100%',

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  textQuest: {
    alignSelf: 'flex-start',
    marginLeft: 20,
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
    top: '91%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  forgetpswdtxtContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  MyTextInput: {
    width: '100%',
    margin: -10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    marginTop: 4,
    marginLeft: 10,
    alignSelf: 'flex-start',
    borderRadius: '50%',
  },
  label: {
    marginTop: 10,
    fontSize: 14,
  },
  buttonContainerInscrit: {
    padding: 0,
    marginTop: 100,
    marginBottom: -70,
    height: 40,
  },
});
