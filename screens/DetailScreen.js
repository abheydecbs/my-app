import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const navController = (navigation, route) => {
    navigation.navigate(route);
}

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <ButtonComponent onPress={() => navController(navigation, 'User Profile')} title="User Profile"/>
      <ButtonComponent onPress={() => navController(navigation, 'App Details')} title="App Details"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff8dc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default DetailScreen;
