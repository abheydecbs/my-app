import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Import all screen components for the tab navigator
import ArrayListScreen from './screens/ArrayListScreen';
import FetchListScreen from './screens/FetchListScreen';
import FlatListScreen from './screens/FlatListScreen';
import HomeScreen from './screens/HomeScreen';
import StackComponent from './components/StackComponent';
import SettingsScreen from './screens/SettingsScreen';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Main App component that sets up the entire navigation structure
export default function App() {
  return (
    // NavigationContainer wraps the entire app and manages navigation state
    <NavigationContainer>
      {/* Tab.Navigator creates a bottom tab bar with multiple screens */}
      <Tab.Navigator
        screenOptions={{
          // Styling for the tab bar
          tabBarActiveTintColor: '#2196F3', // Active tab color (blue)
          tabBarInactiveTintColor: 'gray',   // Inactive tab color
          headerStyle: {
            backgroundColor: '#2196F3',      // Header background color
          },
          headerTintColor: '#fff',           // Header text color (white)
          headerTitleStyle: {
            fontWeight: 'bold',              // Header title font weight
          },
        }}
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
        {/* Flat List Tab - Demonstrates FlatList component with static array data */}
        <Tab.Screen 
          name="Flat List" 
          component={FlatListScreen} 
          options={{
            tabBarLabel: 'Flat List',
            headerTitle: 'Flat List',
          }}
        />
        {/* Array List Tab - Shows array.map() method for rendering lists */}
        <Tab.Screen 
          name="Array List" 
          component={ArrayListScreen} 
          options={{
            tabBarLabel: 'Array List',
            headerTitle: 'Array List',
          }}
        />
        {/* Fetch List Tab - Demonstrates API calls and dynamic data fetching */}
        <Tab.Screen 
          name="Fetch List" 
          component={FetchListScreen} 
          options={{
            tabBarLabel: 'Fetch List',
            headerTitle: 'Fetch List',
          }}
        />
        {/* Details Tab - Contains Stack Navigator for nested navigation */}
        <Tab.Screen 
          name="Details" 
          component={StackComponent} 
          options={{
            tabBarLabel: 'Details',
            headerTitle: 'Details',
            headerShown: false, // Hide header since Stack Navigator has its own headers
          }}
        />
        {/* Settings Tab - Simple settings screen */}
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarLabel: 'Settings',
            headerTitle: 'Settings',
          }}
        />
      </Tab.Navigator>
      {/* Status bar styling for the entire app */}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
