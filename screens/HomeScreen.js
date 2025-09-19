import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FirstComponent from '../components/FirstComponent';
import PropsComponent from '../components/PropsComponent';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import AssetComponent from '../components/AssetComponent';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Welcome! Here are all your components:</Text>
      </View>
      
      <View style={styles.componentContainer}>
        <FirstComponent />
      </View>
      
      <View style={styles.componentContainer}>
        <PropsComponent name="Alexander" />
      </View>
      
      <View style={styles.componentContainer}>
        <InputComponent />
      </View>
      
      <View style={styles.componentContainer}>
        <ButtonComponent />
      </View>
      
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
