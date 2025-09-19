import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COUNTRIES } from '../data/const';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// CountryListScreen demonstrates the JavaScript array.map() method with professional design
// This is the traditional way to render lists in React/React Native
// Good for smaller lists, but FlatList is better for large datasets
export default function CountryListScreen() {
  
  // Professional country item renderer
  const renderCountryItem = (country, index) => {
    return (
      <View key={index} style={styles.countryCard}>
        <View style={styles.flagIcon}>
          <Ionicons 
            name="flag" 
            size={20} 
            color={Colors.primary.main} 
          />
        </View>
        <View style={styles.countryContent}>
          <Text style={styles.countryName}>{country}</Text>
          <Text style={styles.countryDescription}>
            A wonderful destination to explore
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons 
            name="star" 
            size={16} 
            color={Colors.warning.main} 
          />
          <Text style={styles.ratingText}>4.{Math.floor(Math.random() * 10)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Professional header section */}
      <View style={styles.header}>
        <Text style={styles.title}>World Destinations</Text>
        <Text style={styles.subtitle}>
          Array.map() method demonstration
        </Text>
      </View>
      
      {/* Professional list container */}
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Featured Countries</Text>
          <Text style={styles.itemCount}>{COUNTRIES.length} destinations</Text>
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Using map() method to iterate over the COUNTRIES array */}
          {COUNTRIES.map((country, index) => renderCountryItem(country, index))}
        </ScrollView>
      </View>
      
      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Rendered using JavaScript Array.map()
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    ...Shadows.medium,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray200,
  },
  listTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
  },
  itemCount: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    ...Shadows.small,
    borderLeftWidth: 3,
    borderLeftColor: Colors.success.main,
  },
  flagIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  countryContent: {
    flex: 1,
  },
  countryName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  countryDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.warning.light,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.warning.dark,
    marginLeft: 4,
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray200,
    marginTop: 16,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
});