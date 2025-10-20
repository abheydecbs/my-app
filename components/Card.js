import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Shadows, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';

/**
 * Reusable Card Component
 * A container component with consistent styling across the app
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display inside the card
 * @param {Object} props.style - Additional custom styles
 */
export default function Card({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...CommonStyles.card,
  },
});
