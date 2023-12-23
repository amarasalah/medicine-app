import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './src/navigation/BottomTab';

const Stack = createStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {hideSplashScreen ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Splash" component={SplashScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
