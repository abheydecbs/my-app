import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CARS } from '../data/const';
import { Colors, Typography, Shadows } from '../GlobalStyles';

// CarListScreen demonstrates the FlatList component with professional design
// FlatList is optimized for rendering large lists efficiently
// It only renders visible items and recycles components for better performance
export default function CarListScreen() {
  
  // Professional renderItem function with card design
  const renderCarItem = ({ item, index }) => {
    return (
      <View style={styles.carCard}>
        <View style={styles.carIndex}>
          <Text style={styles.indexText}>{index + 1}</Text>
        </View>
        <View style={styles.carContent}>
          <Text style={styles.carName}>{item}</Text>
          <Text style={styles.carSubtext}>Vehicle #{index + 1}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Professional header section */}
      <View style={styles.header}>
        <Text style={styles.title}>My Car Collection</Text>
        <Text style={styles.subtitle}>
          FlatList optimized rendering demonstration
        </Text>
      </View>
      
      {/* Professional list container with proper spacing */}
      <View style={styles.listContainer}>
        <FlatList
          data={CARS}
          renderItem={renderCarItem}
          keyExtractor={(item, index) => `car-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      
      {/* Professional footer with info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Total vehicles: {CARS.length}
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
  listContent: {
    paddingVertical: 8,
  },
  carCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.paper,
    borderRadius: 8,
    padding: 16,
    ...Shadows.small,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary.main,
  },
  carIndex: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  indexText: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.primary.main,
  },
  carContent: {
    flex: 1,
  },
  carName: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  carSubtext: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.secondary,
  },
  separator: {
    height: 12,
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