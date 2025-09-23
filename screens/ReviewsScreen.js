import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GET_REVIEWS_URL, COFFEE_SHOPS } from "../data/const";
import { Colors, Typography, Shadows } from "../GlobalStyles";

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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary.main} />
          <Text style={styles.loadingText}>Loading reviews...</Text>
        </View>
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
          const shopName = COFFEE_SHOPS[index % COFFEE_SHOPS.length];
          
          return (
            <View key={index} style={styles.reviewCard}>
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
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color={Colors.warning.main} />
                  <Text style={styles.ratingText}>{rating}</Text>
                </View>
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
            </View>
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
    padding: 16,
  },
  title: {
    ...Typography.h2,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.primary.main,
  },
  countSelector: {
    marginBottom: 20,
  },
  countLabel: {
    ...Typography.body2,
    color: Colors.text.primary,
    marginBottom: 8,
    fontWeight: '500',
  },
  countOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  countButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.background.paper,
    borderWidth: 1,
    borderColor: Colors.neutral.gray300,
  },
  countButtonActive: {
    backgroundColor: Colors.primary.main,
    borderColor: Colors.primary.main,
  },
  countButtonText: {
    ...Typography.body2,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  countButtonTextActive: {
    color: Colors.text.inverse,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  reviewCard: {
    backgroundColor: Colors.background.paper,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...Shadows.small,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerName: {
    ...Typography.body1,
    color: Colors.text.primary,
    fontWeight: '600',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    ...Typography.body2,
    color: Colors.text.primary,
    marginLeft: 4,
    fontWeight: '500',
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  shopText: {
    ...Typography.body2,
    color: Colors.primary.main,
    marginLeft: 6,
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginLeft: 6,
  },
});
