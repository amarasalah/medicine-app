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
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import SocialMedia from '../../components/SocialMedia';
import onGoogleButtonPress from '../../config/firebase/GoogleSignIn';
import signInWithEmailAndPassword from '../../config/firebase/EmailAndPassword';
import onFacebookButtonPress from '../../config/firebase/FacebookSignIn';
import Modal from 'react-native-modal';
import PagerView from 'react-native-pager-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const pagerViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const handleContinuePressed = () => {
    if (pagerViewRef.current && currentPage < 2) {
      pagerViewRef.current.setPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePress = async () => {
    await onGoogleButtonPress(navigation);
  };
  const handleEmailAndPassword = () => {
    signInWithEmailAndPassword(email, password);
  };
  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleResetPassword = () => {
    // Implement your logic to send a reset password email
    // using the entered email address (stored in the 'email' state).
    // You can make an API call or use the appropriate method here.
    // For demonstration purposes, I'm just logging the email.
    console.log(`Reset password for email: ${email}`);

    // Optionally, close the modal after handling the email.
    toggleBottomSheet();
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

          <MyButton title={'Se Connecter'} onPress={handleEmailAndPassword} />
          <View style={styles.forgetpswdtxtContainer}>
            <Pressable onPress={toggleBottomSheet}>
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
        <Modal
          isVisible={isBottomSheetVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={toggleBottomSheet}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: '50%',
            }}>
            <View
              style={{
                width: '60%',
                height: 4,
                backgroundColor: '#C4C4C4',
                alignSelf: 'center',
                borderRadius: 50,
                overflow: 'hidden',
              }}
            />
            <PagerView style={{flex: 1}} ref={pagerViewRef} initialPage={0}>
              <View key="1">
                <Text
                  style={{
                    marginTop: 40,
                    fontSize: 25,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Mot De passe oublie ?
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    paddingRight: 30,
                    color: '#677294',
                    fontSize: 16,
                  }}>
                  Enter your email for the verification process. We will send a
                  4-digit code to your email.
                </Text>

                <View style={{marginTop: 10}}>
                  <TextInput
                    style={{
                      marginTop: 35,
                      borderWidth: 1,
                      borderColor: '#E6E8EE',
                      padding: 15,
                      borderRadius: 10,
                      fontSize: 20,
                    }}
                    placeholder="Email"
                    place
                    placeholderTextColor="#677294"
                    value={email}
                    onChangeText={handleEmailChange}
                  />
                </View>

                <MyButton title={'Continuer'} onPress={handleContinuePressed} />
              </View>
              <View
                style={{justifyContent: 'center', alignItems: 'center'}}
                key="2">
                <View>
                  <Text
                    style={{
                      marginTop: 40,
                      fontSize: 25,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    Mot De passe oublie ?
                  </Text>

                  <Text
                    style={{
                      marginTop: 10,
                      paddingRight: 30,
                      color: '#677294',
                      fontSize: 16,
                    }}>
                    Saisissez le code à 4 chiffres que vous avez reçu votre
                    email.
                  </Text>
                </View>

                <OTPInputView
                  style={{
                    width: '80%',
                    height: 150,
                    color: '#1846A3',
                  }}
                  pinCount={4}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    console.log(`Code is ${code}, you are good to go!`);
                  }}
                />
                <MyButton title={'Continuer'} onPress={handleContinuePressed} />
              </View>
              <View key="3">
                <Text
                  style={{
                    marginTop: 40,
                    fontSize: 25,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Mot De passe oublie ?
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    paddingRight: 30,
                    color: '#677294',
                    fontSize: 14,
                  }}>
                  Définissez le nouveau mot de passe de votre compte afin de
                  pouvoir vous connecter et accéder à toutes les
                  fonctionnalités.
                </Text>

                <View style={{marginTop: 10}}>
                  <TextInput
                    style={{
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: '#E6E8EE',
                      padding: 10,
                      borderRadius: 10,
                      fontSize: 15,
                    }}
                    placeholder="Nouvelle Mot de passe"
                    place
                    placeholderTextColor="#677294"
                    value={email}
                    onChangeText={handleEmailChange}
                  />
                  <TextInput
                    style={{
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: '#E6E8EE',
                      padding: 10,
                      borderRadius: 10,
                      fontSize: 15,
                    }}
                    placeholder="Confirmer Mot de passe"
                    place
                    placeholderTextColor="#677294"
                    value={email}
                    onChangeText={handleEmailChange}
                  />
                </View>

                <MyButton title={'Continuer'} onPress={handleResetPassword} />
              </View>
            </PagerView>
          </View>
        </Modal>
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
  borderStyleBase: {
    width: 30,
    height: 45,
    placeholderTextColor: '#1846A3',
  },

  borderStyleHighLighted: {
    borderColor: '#1846A3',
  },

  underlineStyleBase: {
    width: 50,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E8EE',
    color: '#1846A3',
    fontSize: 25,
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: '#1846A3',
  },
});
