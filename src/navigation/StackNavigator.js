// StackNavigator.js
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp.js';
import Login from '../screens/Auth/Login.js';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
