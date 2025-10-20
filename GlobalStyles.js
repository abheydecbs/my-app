import { StyleSheet } from 'react-native';

// Professional Color Palette - Coffee Shop Theme
const Colors = {
  // Primary Brand Colors - Coffee Browns
  primary: {
    main: '#6D4C41',            // Rich Coffee Brown
    dark: '#3E2723',            // Dark Espresso Brown
    light: '#D7CCC8',           // Light Coffee Cream
  },
  
  // Secondary Colors - Coffee Accents
  secondary: {
    main: '#FF8F00',            // Golden Coffee
    light: '#FFE0B2',           // Light Golden Cream
    dark: '#E65100',            // Dark Roasted Orange
  },
  
  // Background Colors - Coffee Shop Ambiance
  background: {
    default: '#F5F0E8',         // Warm Cream Background
    paper: '#FFFFFF',           // Pure White Surface
  },
  
  // Text Colors - Coffee Inspired
  text: {
    primary: '#3E2723',         // Dark Coffee Brown
    secondary: '#5D4037',       // Medium Coffee Brown
    inverse: '#FFFFFF',         // White Text
  },
  
  // Neutral Colors - Coffee Tones
  neutral: {
    gray100: '#EFEBE9',         // Light Coffee Cream
    gray200: '#D7CCC8',         // Coffee Cream
    gray300: '#BCAAA4',         // Medium Coffee
    gray400: '#A1887F',         // Coffee Brown
    gray500: '#8D6E63',         // Rich Coffee
    gray600: '#6D4C41',         // Dark Coffee
    gray700: '#5D4037',         // Espresso
  },
  
  // Status Colors - Coffee Shop Themed
  success: {
    main: '#6D4C41',            // Coffee Brown (for plants/origins)
    light: '#D7CCC8',           // Light Coffee
    dark: '#3E2723',            // Dark Coffee
  },
  warning: {
    main: '#FF8F00',            // Golden Coffee
    light: '#FFE0B2',           // Light Golden
    dark: '#E65100',            // Dark Golden
  },
  error: {
    main: '#D84315',            // Roasted Red
    light: '#FFCCBC',           // Light Roasted
    dark: '#BF360C',            // Dark Roasted
  },
  info: {
    main: '#6D4C41',            // Coffee Brown
    light: '#D7CCC8',           // Light Coffee
    dark: '#3E2723',            // Dark Coffee
  },
};

// Professional Typography Scale
const Typography = {
  // Font Sizes
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
  },
  
  // Font Weights
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line Heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Shadow Presets for Professional Depth
const Shadows = {
  small: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Spacing System
const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border Radius System
const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

// Reusable Component Styles
const CommonStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
  },
  
  scrollContent: {
    paddingBottom: Spacing.lg,
  },
  
  // Card Components
  card: {
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    ...Shadows.medium,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  
  // List Item
  listItem: {
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginVertical: Spacing.xs,
    marginHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadows.small,
  },
  
  // Buttons
  primaryButton: {
    backgroundColor: Colors.primary.main,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.small,
  },
  
  primaryButtonText: {
    color: Colors.text.inverse,
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.primary.main,
  },
  
  secondaryButtonText: {
    color: Colors.primary.main,
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.semibold,
  },
  
  // Input Fields
  input: {
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 4,
    fontSize: Typography.fontSizes.base,
    color: Colors.text.primary,
  },
  
  inputLabel: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  
  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  
  sectionTitle: {
    fontSize: Typography.fontSizes.xl,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
  },
  
  sectionDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    lineHeight: 22,
  },
  
  // Dividers
  divider: {
    height: 1,
    backgroundColor: Colors.neutral.gray200,
    marginVertical: Spacing.md,
  },
  
  // Loading & Error States
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.default,
  },
  
  loadingText: {
    marginTop: Spacing.md,
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
  },
  
  errorText: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.error.main,
    textAlign: 'center',
  },
  
  // Utility Classes
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  textCenter: {
    textAlign: 'center',
  },
});

// Export everything for use throughout the app
export { Colors, Typography, Shadows, Spacing, BorderRadius, CommonStyles };
export default CommonStyles;