import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import AppDetailsScreen from '../screens/StackScreens/AppDetailsScreen';
import UserProfileScreen from '../screens/StackScreens/UserProfileScreen';

// Create a stack navigator instance for nested navigation
const Stack = createStackNavigator();

// StackComponent demonstrates Stack Navigation in React Native
// Stack Navigation allows pushing and popping screens in a stack-like manner
// This creates a nested navigation system within the Tab Navigator
export default function StackComponent() {
  return (
    <Stack.Navigator initialRouteName="Details Screen">
      {/* Main details screen with navigation buttons */}
      <Stack.Screen name="Details Screen" component={DetailScreen} />
      {/* User profile screen with yellow border styling */}
      <Stack.Screen name="User Profile" component={UserProfileScreen} />
      {/* App details screen with red border styling */}
      <Stack.Screen name="App Details" component={AppDetailsScreen} />
    </Stack.Navigator>
  );
}