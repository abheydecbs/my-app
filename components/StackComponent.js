import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import AppDetailsScreen from '../screens/StackScreens/AppDetailsScreen';
import UserProfileScreen from '../screens/StackScreens/UserProfileScreen';

const Stack = createStackNavigator();

export default function StackComponent() {
  return (
    <Stack.Navigator initialRouteName="Details Screen">
      <Stack.Screen name="Details Screen" component={DetailScreen} />
      <Stack.Screen name="User Profile" component={UserProfileScreen} />
      <Stack.Screen name="App Details" component={AppDetailsScreen} />
    </Stack.Navigator>
  );
}