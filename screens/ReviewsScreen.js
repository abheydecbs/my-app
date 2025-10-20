import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GET_REVIEWS_URL, COFFEE_SHOPS } from "../data/const";
import { Colors, Typography, Spacing, BorderRadius, CommonStyles } from "../GlobalStyles";
import { LoadingState, Card, RatingDisplay } from "../components";

export default function ReviewsScreen() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewCount, setReviewCount] = useState(5);

  const countOptions = [3, 5, 10, 15, 20];

  const loadReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(GET_REVIEWS_URL + reviewCount);
      const data = await response.json();
      setReviews(data.results);
    } catch (error) {
      console.error('Fetch error:', error);
      // Keep static data if fetch fails
      const staticReviews = [
        { name: { first: "John", last: "Smith" }, location: { city: "San Francisco", country: "USA" }, picture: { medium: "https://randomuser.me/api/portraits/men/1.jpg" } },
        { name: { first: "Sarah", last: "Johnson" }, location: { city: "Portland", country: "USA" }, picture: { medium: "https://randomuser.me/api/portraits/women/2.jpg" } },
        { name: { first: "Mike", last: "Wilson" }, location: { city: "Chicago", country: "USA" }, picture: { medium: "https://randomuser.me/api/portraits/men/3.jpg" } },
        { name: { first: "Emma", last: "Brown" }, location: { city: "Philadelphia", country: "USA" }, picture: { medium: "https://randomuser.me/api/portraits/women/4.jpg" } },
        { name: { first: "David", last: "Lee" }, location: { city: "Durham", country: "USA" }, picture: { medium: "https://randomuser.me/api/portraits/men/5.jpg" } },
      ];
      setReviews(staticReviews.slice(0, reviewCount));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, [reviewCount]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>⭐ Coffee Reviews</Text>
        <LoadingState message="Loading reviews..." />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐ Coffee Reviews</Text>
      
      {/* Count Selector */}
      <View style={styles.countSelector}>
        <Text style={styles.countLabel}>Show reviews:</Text>
        <View style={styles.countOptions}>
          {countOptions.map((count) => (
            <TouchableOpacity
              key={count}
              style={[
                styles.countButton,
                reviewCount === count && styles.countButtonActive
              ]}
              onPress={() => setReviewCount(count)}
            >
              <Text style={[
                styles.countButtonText,
                reviewCount === count && styles.countButtonTextActive
              ]}>
                {count}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {reviews.map((person, index) => {
          const rating = (4 + Math.random()).toFixed(1);
          const shopName = COFFEE_SHOPS[index % COFFEE_SHOPS.length].name;
          
          return (
            <Card key={index} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.userInfo}>
                  <Image 
                    source={{ uri: person.picture?.medium || `https://randomuser.me/api/portraits/men/${index + 1}.jpg` }}
                    style={styles.userAvatar}
                  />
                  <Text style={styles.reviewerName}>
                    {person.name.first} {person.name.last}
                  </Text>
                </View>
                <RatingDisplay rating={rating} starSize={16} />
              </View>
              <View style={styles.shopContainer}>
                <Ionicons name="cafe" size={14} color={Colors.primary.main} />
                <Text style={styles.shopText}>{shopName}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={14} color={Colors.text.secondary} />
                <Text style={styles.locationText}>
                  {person.location.city}, {person.location.country}
                </Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.default,
    padding: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSizes['2xl'],
    fontWeight: Typography.fontWeights.bold,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    color: Colors.primary.main,
  },
  countSelector: {
    marginBottom: Spacing.lg,
  },
  countLabel: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
    fontWeight: Typography.fontWeights.medium,
  },
  countOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  countButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.paper,
    borderWidth: 1,
    borderColor: Colors.neutral.gray300,
  },
  countButtonActive: {
    backgroundColor: Colors.primary.main,
    borderColor: Colors.primary.main,
  },
  countButtonText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.text.primary,
    fontWeight: Typography.fontWeights.medium,
  },
  countButtonTextActive: {
    color: Colors.text.inverse,
  },
  scrollView: {
    flex: 1,
  },
  reviewCard: {
    padding: Spacing.md,
    marginBottom: Spacing.sm + 4,
  },
  reviewHeader: {
    ...CommonStyles.row,
    ...CommonStyles.spaceBetween,
    marginBottom: Spacing.xs,
  },
  userInfo: {
    ...CommonStyles.row,
    flex: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    marginRight: Spacing.sm + 4,
  },
  reviewerName: {
    fontSize: Typography.fontSizes.base,
    color: Colors.text.primary,
    fontWeight: Typography.fontWeights.semibold,
    flex: 1,
  },
  shopContainer: {
    ...CommonStyles.row,
    marginBottom: Spacing.xs - 2,
  },
  shopText: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.primary.main,
    marginLeft: Spacing.xs - 2,
    fontWeight: Typography.fontWeights.medium,
  },
  locationContainer: CommonStyles.row,
  locationText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.text.secondary,
    marginLeft: Spacing.xs - 2,
  },
});
