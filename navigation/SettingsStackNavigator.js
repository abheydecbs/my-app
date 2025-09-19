import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import UserProfileScreen from '../screens/StackScreens/UserProfileScreen';
import AboutScreen from '../screens/StackScreens/AboutScreen';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// Create a stack navigator instance for Settings navigation
const Stack = createStackNavigator();

// SettingsStackNavigator demonstrates Stack Navigation in Settings with professional styling
// Stack Navigation allows pushing and popping screens in a stack-like manner
// This creates a nested navigation system within the Settings Tab Navigator
export default function SettingsStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Settings Screen"
      screenOptions={{
        // Professional header styling
        headerStyle: {
          backgroundColor: Colors.primary.main,
          ...Shadows.medium,
        },
        headerTintColor: Colors.text.inverse,
        headerTitleStyle: {
          fontSize: Typography.fontSizes.lg,
          fontWeight: Typography.fontWeights.semibold,
          color: Colors.text.inverse,
        },
        headerBackTitleVisible: false,
        headerShadowVisible: true,
      }}
    >
      {/* Main settings screen with navigation options */}
      <Stack.Screen 
        name="Settings Screen" 
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
        }}
      />
      {/* User profile screen accessible from settings */}
      <Stack.Screen 
        name="User Profile" 
        component={UserProfileScreen}
        options={{
          headerTitle: 'User Profile',
        }}
      />
      {/* About screen accessible from settings */}
      <Stack.Screen 
        name="About" 
        component={AboutScreen}
        options={{
          headerTitle: 'About App',
        }}
      />
    </Stack.Navigator>
  );
}