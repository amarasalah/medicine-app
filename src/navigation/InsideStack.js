// InsideStackNavigator.js
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const InsideStack = createStackNavigator();

export default function InsideStackNavigator() {
  return (
    <InsideStack.Navigator screenOptions={{headerShown: false}}>
      <InsideStack.Screen name="Home" component={Home} />
    </InsideStack.Navigator>
  );
}
