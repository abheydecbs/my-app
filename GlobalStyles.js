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
  
  // Legacy flat structure (for backwards compatibility)
  card: '#FFFFFF',              // Card Background
  border: '#EFEBE9',            // Light Coffee Border
  divider: '#D7CCC8',           // Coffee Cream Divider
  shadow: '#000000',            // Shadow Color
  textPrimary: '#3E2723',       // Dark Coffee Brown
  textSecondary: '#5D4037',     // Medium Coffee Brown
  textLight: '#8D6E63',         // Light Coffee Brown
  background: '#F5F0E8',        // Warm Cream
  surface: '#FFFFFF',           // Pure White
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
  
  // Headers (legacy support)
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    color: Colors.text.primary,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    color: Colors.text.primary,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: Colors.text.primary,
  },
  
  // Body Text (legacy support)
  body1: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    color: Colors.text.primary,
  },
  body2: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    color: Colors.text.secondary,
  },
  
  // Labels and Captions (legacy support)
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 16,
    color: Colors.text.secondary,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.text.secondary,
  },
};

// Shadow Presets for Professional Depth
const Shadows = {
  small: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Professional Global Styles
const GlobalStyles = StyleSheet.create({
  // Layout Containers
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  
  // Card Components
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    ...Shadows.medium,
  },
  
  cardHeader: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    marginBottom: 12,
  },
  
  // List Components
  listContainer: {
    backgroundColor: Colors.background,
    paddingVertical: 8,
  },
  
  listItem: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadows.small,
  },
  
  listItemContent: {
    flex: 1,
    paddingLeft: 12,
  },
  
  // Button Styles
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    ...Shadows.small,
  },
  
  primaryButtonPressed: {
    backgroundColor: Colors.primaryDark,
  },
  
  primaryButtonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  secondaryButton: {
    backgroundColor: Colors.surface,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
    ...Shadows.small,
  },
  
  secondaryButtonPressed: {
    backgroundColor: Colors.primaryLight,
  },
  
  secondaryButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  // Input Components
  inputContainer: {
    marginVertical: 8,
  },
  
  inputLabel: {
    ...Typography.label,
    marginBottom: 4,
  },
  
  textInput: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.textPrimary,
    ...Shadows.small,
  },
  
  textInputFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  
  // Image Components
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  
  // Navigation Styles
  headerStyle: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
    ...Shadows.medium,
  },
  
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.surface,
  },
  
  tabBarStyle: {
    backgroundColor: Colors.surface,
    borderTopWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 8,
    paddingTop: 8,
    height: 80,
    ...Shadows.large,
  },
  
  // Component Showcase (for HomeScreen)
  componentShowcase: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 4,
    ...Shadows.medium,
  },
  
  showcaseTitle: {
    ...Typography.h3,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.primary,
  },
  
  showcaseSubtitle: {
    ...Typography.body2,
    textAlign: 'center',
    marginBottom: 24,
  },
  
  // Loading and Status
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  
  loadingText: {
    ...Typography.body1,
    marginTop: 16,
    color: Colors.textSecondary,
  },
  
  // Utility Classes
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  spaceAround: {
    justifyContent: 'space-around',
  },
  
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  
  alignCenter: {
    alignItems: 'center',
  },
  
  alignStart: {
    alignItems: 'flex-start',
  },
  
  alignEnd: {
    alignItems: 'flex-end',
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  textLeft: {
    textAlign: 'left',
  },
  
  textRight: {
    textAlign: 'right',
  },
  
  // Margins and Padding
  margin8: { margin: 8 },
  margin16: { margin: 16 },
  margin24: { margin: 24 },
  
  padding8: { padding: 8 },
  padding16: { padding: 16 },
  padding24: { padding: 24 },
  
  marginTop8: { marginTop: 8 },
  marginTop16: { marginTop: 16 },
  marginTop24: { marginTop: 24 },
  
  marginBottom8: { marginBottom: 8 },
  marginBottom16: { marginBottom: 16 },
  marginBottom24: { marginBottom: 24 },
});

// Export everything for use throughout the app
export default GlobalStyles;
export { Colors, Typography, Shadows };