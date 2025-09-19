import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState, useEffect } from 'react';
import { GET_USERS_URL } from '../data/const';

// FetchListScreen demonstrates API integration with React Native
// Shows how to fetch data from external APIs, manage loading states, and handle user input
export default function FetchListScreen() {
  // State variables using React hooks
  const [user, setUser] = useState([]);        // Stores the fetched user data
  const [msg, setMsg] = useState('');          // Stores status messages (loading, errors)
  const [amount, setAmount] = useState(2);     // Controls how many users to fetch

  // Async function to fetch user data from the API
  const loadUsers = async () => {
    try {
      setMsg('Loading...');                    // Show loading message
      // Fetch data from randomuser.me API with specified number of results
      const response = await fetch(GET_USERS_URL + amount);
      const data = await response.json();      // Parse JSON response
      setUser(data.results);                   // Store user data in state
      setMsg('');                              // Clear loading message
    } catch (error) {
      // Handle any errors during the fetch operation
      setMsg('Error loading users: ' + error.message);
    }
  };

  // useEffect hook runs side effects (like API calls)
  useEffect(() => {
    loadUsers();                               // Call loadUsers when component mounts
  }, [amount]);                                // Re-run when 'amount' changes

  // Conditional rendering: show main content if users are loaded, otherwise show loading
  return user.length > 0 ? (
    // TouchableWithoutFeedback allows dismissing keyboard when tapping outside input
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Screen title with dynamic user count */}
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 40 }}>
          3 Brugere i liste: {user.length} - Fetch Object list
        </Text>
        
        {/* TextInput for controlling the number of users to fetch */}
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
            width: '80%',
            borderRadius: 5,
          }}
          placeholder="Number of users"          // Placeholder text
          value={amount.toString()}              // Convert number to string for display
          onChangeText={(text) => setAmount(parseInt(text) || 2)} // Parse input and update state
          keyboardType="numeric"                 // Show numeric keyboard
        />
        
        {/* Container for the user list */}
        <View
          style={{
            height: 350,                         // Fixed height for scrollable area
            backgroundColor: 'lightgrey',        // Light gray background
            borderRadius: 10,                    // Rounded corners
            width: '80%',                        // 80% of parent width
          }}
        >
          {/* ScrollView for scrolling through user list */}
          <ScrollView>
            {/* Map through user array to render each user */}
            {user.map((person, index) => {
              return (
                <View key={index} style={{ padding: 10, alignItems: 'center' }}>
                  {/* User profile image from API */}
                  <Image
                    source={{ uri: person.picture.thumbnail }} // Remote image URL
                    style={{ width: 50, height: 50, borderRadius: 25 }} // Circular image
                  />
                  {/* User's full name */}
                  <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                    {person.name.first} {person.name.last}
                  </Text>
                  {/* User's email address */}
                  <Text style={{ fontSize: 12, color: 'gray' }}>
                    {person.email}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        
        {/* Display status messages (loading, errors) */}
        <Text>{msg ? msg : ''}</Text>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    // Loading state: shown when no users are loaded yet
    <View style={styles.container}>
      <Text>Loading...</Text>
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