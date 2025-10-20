import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COFFEE_REGIONS } from '../data/const';
import { SectionHeader, ListItem, RatingDisplay } from '../components';
import { Colors, Typography, Shadows, Spacing, BorderRadius, CommonStyles } from '../GlobalStyles';

// OriginScreen demonstrates the JavaScript array.map() method with professional design
// This is the traditional way to render lists in React/React Native
// Good for smaller lists, but FlatList is better for large datasets
export default function OriginScreen() {
  
  // Professional coffee region item renderer
  const renderCoffeeRegionItem = (region, index) => {
    const qualities = [
      '☕ Fruity & Bright', '🍫 Rich & Bold', '🥜 Smooth & Balanced', 
      '🍯 Nutty & Sweet', '🌸 Floral & Complex', '🍫 Chocolatey & Deep'
    ];
    
    const rating = 4 + (Math.random() * 0.9);
    const altitude = 800 + Math.floor(Math.random() * 1500);
    
    const subtitle = `${qualities[index % qualities.length]} • ${altitude}m elevation`;
    
    return (
      <ListItem
        key={index}
        icon="leaf"
        title={region}
        subtitle={subtitle}
        rightContent={<RatingDisplay rating={rating} starSize={14} />}
        backgroundColor="#FFF8E1"
        style={styles.regionCard}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with SectionHeader component */}
      <SectionHeader 
        title="☕ Coffee Origins"
        subtitle="🌍 Discover the world's finest coffee regions"
        style={styles.header}
      />
      
      {/* Professional list container */}
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>🌱 Coffee Growing Regions</Text>
          <Text style={styles.itemCount}>{COFFEE_REGIONS.length} origins</Text>
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Using map() method to iterate over the COFFEE_REGIONS array */}
          {COFFEE_REGIONS.map((region, index) => renderCoffeeRegionItem(region, index))}
        </ScrollView>
      </View>
      
      {/* Professional footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ☕ Premium coffee beans from around the world 🌍
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
    paddingHorizontal: Spacing.lg,
  },
  header: {
    paddingVertical: Spacing.lg,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.background.paper,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    ...Shadows.medium,
    borderTopWidth: 3,
    borderTopColor: Colors.neutral.gray500,
  },
  listHeader: {
    ...CommonStyles.row,
    ...CommonStyles.spaceBetween,
    marginBottom: Spacing.md,
    paddingBottom: Spacing.sm + 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray100,
  },
  listTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
  },
  itemCount: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.neutral.gray500,
    fontWeight: Typography.fontWeights.medium,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: Spacing.xs,
  },
  regionCard: {
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary.main,
    marginHorizontal: 0,
    marginBottom: Spacing.sm + 4,
  },
  footer: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.gray100,
    marginTop: Spacing.md,
  },
  footerText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
    fontWeight: Typography.fontWeights.medium,
  },
});