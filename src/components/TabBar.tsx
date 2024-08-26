import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faHome, faMugSaucer, faUser } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import profileScreen from '../screens/profileScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBell} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;