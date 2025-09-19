import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CARS } from '../data/const';

// FlatListScreen demonstrates the FlatList component
// FlatList is optimized for rendering large lists efficiently
// It only renders visible items and recycles components for better performance
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      {/* Screen title explaining what this screen demonstrates */}
      <Text style={{ fontSize: 20, textAlign: 'center', padding: 40 }}>
        1 Mine biler - Flatlist
      </Text>
      
      {/* Container for the FlatList with custom styling */}
      <View
        style={{
          height: 150,                    // Fixed height for the list container
          backgroundColor: 'lightgrey',   // Light gray background
          borderRadius: 10,               // Rounded corners
          width: '80%',                   // 80% of parent width
        }}
      >
        {/* FlatList component for efficient list rendering */}
        <FlatList
          data={CARS}                     // Array of data to render
          renderItem={({ item, index }) => {
            // Function that defines how each item should be rendered
            return (
              <Text style={{ fontSize: 15, textAlign: 'center', padding: 10 }}>
                {index + 1}: {item}       {/* Display index number and car name */}
              </Text>
            );
          }}
          keyExtractor={(item, index) => index.toString()} // Unique key for each item
        />
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