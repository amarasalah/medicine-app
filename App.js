const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import OnBoarding01 from './src/screens/Onboarding/Onboarding01';
import Onboarding02 from './src/screens/Onboarding/Onboarding02';
import OnBoarding03 from './src/screens/Onboarding/Onboarding03';
import Home from './src/screens/Home';
import Login from './src/screens/Auth/Login';
import SignUpScreen from './src/screens/Auth/SignUp';
import HomeScreen from './src/screens/Home';
import BankDuSangCard from './src/components/BankDuSangCard';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Onboarding01"
              component={OnBoarding01}
              options={{headerShown: false}}
            />
            <Stack.Screen name="OnBoarding02" component={Onboarding02} />
            <Stack.Screen name="Onboarding03" component={OnBoarding03} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
        {/* <Stack.Navigator>
          <Stack.Screen name="BankDuSangCard" component={BankDuSangCard} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};
export default App;
