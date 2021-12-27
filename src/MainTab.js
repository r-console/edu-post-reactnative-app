import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ 
        backgroundColor: '#fff',
        borderTopWidth:1,
        borderColor:'#ddd',
    }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PostScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}