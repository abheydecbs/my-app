import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Import all screen components for the tab navigator
import CarListScreen from './screens/CarListScreen';
import CountryListScreen from './screens/CountryListScreen';
import UserListScreen from './screens/UserListScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsStackNavigator from './navigation/SettingsStackNavigator';

// Import professional styling system
import { Colors, Typography, Shadows } from './GlobalStyles';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Professional navigation styling configuration
const getTabIcon = (routeName, focused, color, size) => {
  let iconName;
  
  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Car List':
      iconName = focused ? 'car-sport' : 'car-sport-outline';
      break;
    case 'Country List':
      iconName = focused ? 'map' : 'map-outline';
      break;
    case 'User List':
      iconName = focused ? 'people' : 'people-outline';
      break;
    case 'Settings':
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    default:
      iconName = 'help-circle-outline';
  }
  
  return <Ionicons name={iconName} size={size} color={color} />;
};

// Main App component that sets up the entire navigation structure
export default function App() {
  return (
    // NavigationContainer wraps the entire app and manages navigation state
    <NavigationContainer>
      {/* Tab.Navigator creates a bottom tab bar with multiple screens */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Professional tab icon configuration
          tabBarIcon: ({ focused, color, size }) => 
            getTabIcon(route.name, focused, color, size),
          
          // Professional tab bar styling
          tabBarActiveTintColor: Colors.primary.main,
          tabBarInactiveTintColor: Colors.neutral.gray500,
          tabBarLabelStyle: {
            fontSize: Typography.fontSizes.xs,
            fontWeight: Typography.fontWeights.medium,
            marginBottom: 4,
          },
          tabBarStyle: {
            backgroundColor: Colors.background.paper,
            borderTopColor: Colors.neutral.gray200,
            borderTopWidth: 1,
            height: 88,
            paddingTop: 8,
            paddingBottom: 34, // Safe area padding for newer devices
            ...Shadows.small,
          },
          
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
          headerShadowVisible: true,
        })}
      >
        {/* Home Tab - Shows a collection of custom React Native components */}
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            headerTitle: 'Home',
          }}
        />
        {/* Car List Tab - Demonstrates FlatList component with static array data */}
        <Tab.Screen 
          name="Car List" 
          component={CarListScreen} 
          options={{
            tabBarLabel: 'Car List',
            headerTitle: 'Car List',
          }}
        />
        {/* Country List Tab - Shows array.map() method for rendering lists */}
        <Tab.Screen 
          name="Country List" 
          component={CountryListScreen} 
          options={{
            tabBarLabel: 'Country List',
            headerTitle: 'Country List',
          }}
        />
        {/* User List Tab - Demonstrates API calls and dynamic data fetching */}
        <Tab.Screen 
          name="User List" 
          component={UserListScreen} 
          options={{
            tabBarLabel: 'User List',
            headerTitle: 'User List',
          }}
        />
        {/* Settings Tab - App settings with user profile navigation */}
        <Tab.Screen 
          name="Settings" 
          component={SettingsStackNavigator} 
          options={{
            tabBarLabel: 'Settings',
            headerTitle: 'Settings',
            headerShown: false, // Hide header since Stack Navigator has its own headers
          }}
        />
      </Tab.Navigator>
      {/* Status bar styling for the entire app */}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
