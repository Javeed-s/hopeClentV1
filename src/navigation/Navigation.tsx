import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default Navigation;