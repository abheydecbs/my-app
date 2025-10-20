import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, CommonStyles } from '../GlobalStyles';

/**
 * Reusable Rating Display Component
 * Shows star rating with optional numeric value
 * 
 * @param {Object} props
 * @param {number} props.rating - Rating value (0-5)
 * @param {boolean} props.showNumber - Whether to show numeric rating (default: true)
 * @param {number} props.starSize - Size of star icons (default: 16)
 * @param {Object} props.style - Additional custom styles
 */
export default function RatingDisplay({ 
  rating, 
  showNumber = true, 
  starSize = 16,
  style 
}) {
  // Ensure rating is a number
  const numericRating = typeof rating === 'string' ? parseFloat(rating) : rating;
  const safeRating = isNaN(numericRating) ? 0 : numericRating;
  
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;
  
  return (
    <View style={[styles.container, style]}>
      <Ionicons 
        name={fullStars >= 1 ? "star" : "star-outline"} 
        size={starSize} 
        color={Colors.warning.main} 
      />
      {showNumber && (
        <Text style={styles.ratingText}>{safeRating.toFixed(1)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.row,
  },
  ratingText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.primary,
    marginLeft: Spacing.xs,
  },
});
