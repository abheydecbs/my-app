import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// ButtonComponent is a reusable custom button component
// Uses props to accept dynamic title and onPress functionality
// Demonstrates component reusability and custom styling
export default function ButtonComponent({ title, onPress }) {
  return (
    // Pressable component provides touch interaction
    <Pressable style={styles.button} onPress={onPress}>
      {/* Text component displays the button title */}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

// StyleSheet for consistent and performant styling
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',              // Center content horizontally
    justifyContent: 'center',          // Center content vertically
    paddingVertical: 12,               // Vertical padding
    paddingHorizontal: 32,             // Horizontal padding
    borderRadius: 50,                  // Rounded corners
    elevation: 3,                      // Android shadow
    backgroundColor: 'green',          // Green background color
    margin: 20,                        // Margin around button
  },
  text: {
    fontSize: 16,                      // Text size
    lineHeight: 21,                    // Line height for better readability
    fontWeight: 'bold',                // Bold font weight
    letterSpacing: 0.25,               // Letter spacing
    color: 'white',                    // White text color
  },
});