import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import PropsComponent from './components/PropsComponent';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import AssetComponent from './components/AssetComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'lightcoral', alignItems: 'center', justifyContent: 'center', padding: 10, margin: 5}}>
            <FirstComponent />
      </View>
      <View style={{backgroundColor: 'lightgreen', alignItems: 'flex-start', justifyContent: 'center', padding: 10, margin: 5}}>
            <PropsComponent name="Alexander" />
      </View>
      <View style={{backgroundColor: 'lightyellow', alignItems: 'center', justifyContent: 'flex-start', padding: 10, margin: 5}}>
            <InputComponent />
      </View>
      <View style={{backgroundColor: 'lightpink', alignItems: 'flex-end', justifyContent: 'center', padding: 10, margin: 5}}>
            <ButtonComponent />
      </View>
      <View style={{backgroundColor: 'lightcyan', alignItems: 'center', justifyContent: 'flex-end', padding: 10, margin: 5}}>
            <AssetComponent source={require('./assets/favicon.png')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
