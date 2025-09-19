import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COUNTRIES } from '../data/const';

// ArrayListScreen demonstrates the JavaScript array.map() method
// This is the traditional way to render lists in React/React Native
// Good for smaller lists, but FlatList is better for large datasets
export default function ArrayListScreen() {
  return (
    <View style={styles.container}>
      {/* Screen title explaining what this screen demonstrates */}
      <Text style={{ fontSize: 20, textAlign: 'center', padding: 40 }}>
        2 KvartFinale lande - Array Map
      </Text>
      
      {/* Container for the scrollable list */}
      <View
        style={{
          height: 150,                    // Fixed height for the container
          backgroundColor: 'lightgrey',   // Light gray background
          borderRadius: 10,               // Rounded corners
          width: '80%',                   // 80% of parent width
        }}
      >
        {/* ScrollView allows scrolling when content exceeds container height */}
        <ScrollView>
          {/* Using map() method to iterate over the COUNTRIES array */}
          {COUNTRIES.map((country, index) => {
            // map() calls this function for each item in the array
            // Returns a Text component for each country
            return (
              <Text key={index} style={{ fontSize: 15, textAlign: 'center', padding: 10 }}>
                {country} er et godt land!  {/* Display country name with Danish text */}
              </Text>
            );
          })}
        </ScrollView>
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
  },
});