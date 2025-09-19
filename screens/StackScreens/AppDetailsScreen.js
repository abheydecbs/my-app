import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

export default function AppDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>App Details Screen</Text>
      <ButtonComponent onPress={() => navigation.goBack()} title="Go Back"/>
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
    borderWidth: 10,
    borderColor: 'red',
  },
});