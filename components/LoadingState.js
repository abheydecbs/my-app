import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors, Typography, Spacing, CommonStyles } from '../GlobalStyles';

/**
 * Reusable Loading State Component
 * Consistent loading indicator with optional message
 * 
 * @param {Object} props
 * @param {string} props.message - Optional loading message (default: "Loading...")
 * @param {string} props.color - Spinner color (default: primary.main)
 * @param {string} props.size - Spinner size "small" or "large" (default: "large")
 */
export default function LoadingState({ 
  message = "Loading...", 
  color = Colors.primary.main,
  size = "large" 
}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.centerContainer,
  },
  text: {
    ...CommonStyles.loadingText,
  },
});
