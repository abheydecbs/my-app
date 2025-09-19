import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

export default function UserProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
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
    borderColor: 'yellow',
  },
});