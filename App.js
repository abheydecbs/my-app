import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Import all screen components for the tab navigator
import CoffeeShopsScreen from './screens/CoffeeShopsScreen';
import RoasteriesScreen from './screens/RoasteriesScreen';
import ReviewsScreen from './screens/ReviewsScreen';
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
    case 'Coffee Shops':
      iconName = focused ? 'cafe' : 'cafe-outline';
      break;
    case 'Roasteries':
      iconName = focused ? 'business' : 'business-outline';
      break;
    case 'Reviews':
      iconName = focused ? 'star' : 'star-outline';
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
        {/* Coffee Shops Tab - Discover local coffee shops with ratings and details */}
        <Tab.Screen 
          name="Coffee Shops" 
          component={CoffeeShopsScreen} 
          options={{
            tabBarLabel: 'Coffee Shops',
            headerTitle: 'Local Coffee Shops',
          }}
        />
        {/* Roasteries Tab - Find specialty coffee roasters in your area */}
        <Tab.Screen 
          name="Roasteries" 
          component={RoasteriesScreen} 
          options={{
            tabBarLabel: 'Roasteries',
            headerTitle: 'Coffee Roasteries',
          }}
        />
        {/* Reviews Tab - Read and write coffee shop reviews */}
        <Tab.Screen 
          name="Reviews" 
          component={ReviewsScreen} 
          options={{
            tabBarLabel: 'Reviews',
            headerTitle: 'Coffee Reviews',
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
