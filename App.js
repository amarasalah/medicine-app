import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TabNavigator from './src/navigation/BottomTab';
import StackNavigator from './src/navigation/StackNavigator';
import auth from '@react-native-firebase/auth'; // Import Firebase auth module

const Stack = createStackNavigator();
const App = () => {
  const [user, setUser] = React.useState(null);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      setHideSplashScreen(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {hideSplashScreen ? (
          user ? (
            <Stack.Screen name="Main" component={TabNavigator} />
          ) : (
            <Stack.Screen name="Login" component={StackNavigator} />
          )
        ) : (
          <Stack.Screen name="Splash" component={SplashScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
