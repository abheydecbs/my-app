import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// Import custom components to showcase different React Native concepts
import FirstComponent from '../components/FirstComponent';
import PropsComponent from '../components/PropsComponent';
import InputComponent from '../components/InputComponent';
import AssetComponent from '../components/AssetComponent';

// HomeScreen serves as a showcase for various React Native components
// Demonstrates component composition, props, state management, and styling
const HomeScreen = () => {
  return (
    // ScrollView allows scrolling when content exceeds screen height
    <ScrollView style={styles.container}>
      {/* Header section with welcome message */}
      <View style={styles.header}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Welcome! Here are all your components:</Text>
      </View>
      
      {/* FirstComponent - Demonstrates basic component structure and inline styling */}
      <View style={styles.componentContainer}>
        <FirstComponent />
      </View>
      
      {/* PropsComponent - Demonstrates how to pass and use props */}
      <View style={styles.componentContainer}>
        <PropsComponent name="Alexander" />
      </View>
      
      {/* InputComponent - Demonstrates state management and user input handling */}
      <View style={styles.componentContainer}>
        <InputComponent />
      </View>

      {/* AssetComponent - Demonstrates local asset handling and image display */}
      <View style={styles.componentContainer}>
        <AssetComponent source={require('../assets/favicon.png')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  componentContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
