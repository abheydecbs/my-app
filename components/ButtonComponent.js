import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// Professional ButtonComponent with multiple variants and interactive states
// Supports primary, secondary, outline, and danger button styles
// Includes disabled state, loading state, and proper accessibility
export default function ButtonComponent({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  fullWidth = false 
}) {
  
  // Function to get button style based on variant and state
  const getButtonStyle = (pressed) => {
    const baseStyle = [styles.button];
    
    // Size variations
    if (size === 'small') baseStyle.push(styles.buttonSmall);
    if (size === 'large') baseStyle.push(styles.buttonLarge);
    if (fullWidth) baseStyle.push(styles.buttonFullWidth);
    
    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.buttonPrimary);
        if (pressed) baseStyle.push(styles.buttonPrimaryPressed);
        break;
      case 'secondary':
        baseStyle.push(styles.buttonSecondary);
        if (pressed) baseStyle.push(styles.buttonSecondaryPressed);
        break;
      case 'outline':
        baseStyle.push(styles.buttonOutline);
        if (pressed) baseStyle.push(styles.buttonOutlinePressed);
        break;
      case 'danger':
        baseStyle.push(styles.buttonDanger);
        if (pressed) baseStyle.push(styles.buttonDangerPressed);
        break;
    }
    
    // Disabled state
    if (disabled) {
      baseStyle.push(styles.buttonDisabled);
    }
    
    return baseStyle;
  };
  
  // Function to get text style based on variant and state
  const getTextStyle = () => {
    const baseStyle = [styles.text];
    
    // Size variations
    if (size === 'small') baseStyle.push(styles.textSmall);
    if (size === 'large') baseStyle.push(styles.textLarge);
    
    // Variant text colors
    switch (variant) {
      case 'primary':
      case 'danger':
        baseStyle.push(styles.textLight);
        break;
      case 'secondary':
        baseStyle.push(styles.textDark);
        break;
      case 'outline':
        baseStyle.push(styles.textPrimary);
        break;
    }
    
    // Disabled state
    if (disabled) {
      baseStyle.push(styles.textDisabled);
    }
    
    return baseStyle;
  };

  return (
    <Pressable 
      style={({ pressed }) => getButtonStyle(pressed)}
      onPress={disabled ? null : onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
}

// Professional StyleSheet with design system integration
const styles = StyleSheet.create({
  // Base button styles
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 8,
    ...Shadows.small,
  },
  
  // Size variations
  buttonSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonMedium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonLarge: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonFullWidth: {
    width: '100%',
  },
  
  // Primary variant (main brand color)
  buttonPrimary: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonPrimaryPressed: {
    backgroundColor: Colors.primary.dark,
    transform: [{ scale: 0.98 }],
  },
  
  // Secondary variant (neutral gray)
  buttonSecondary: {
    backgroundColor: Colors.neutral.gray100,
    borderWidth: 1,
    borderColor: Colors.neutral.gray300,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonSecondaryPressed: {
    backgroundColor: Colors.neutral.gray200,
    transform: [{ scale: 0.98 }],
  },
  
  // Outline variant (transparent with border)
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary.main,
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  buttonOutlinePressed: {
    backgroundColor: Colors.primary.light,
    transform: [{ scale: 0.98 }],
  },
  
  // Danger variant (for destructive actions)
  buttonDanger: {
    backgroundColor: Colors.error.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonDangerPressed: {
    backgroundColor: Colors.error.dark,
    transform: [{ scale: 0.98 }],
  },
  
  // Disabled state
  buttonDisabled: {
    backgroundColor: Colors.neutral.gray200,
    borderColor: Colors.neutral.gray200,
    elevation: 0,
    shadowOpacity: 0,
  },
  
  // Base text styles
  text: {
    fontWeight: Typography.fontWeights.semibold,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  
  // Text size variations
  textSmall: {
    fontSize: Typography.fontSizes.sm,
  },
  textMedium: {
    fontSize: Typography.fontSizes.base,
  },
  textLarge: {
    fontSize: Typography.fontSizes.lg,
  },
  
  // Text color variations
  textLight: {
    color: Colors.text.inverse,
  },
  textDark: {
    color: Colors.text.primary,
  },
  textPrimary: {
    color: Colors.primary.main,
  },
  textDisabled: {
    color: Colors.neutral.gray400,
  },
});