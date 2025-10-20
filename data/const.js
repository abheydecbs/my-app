// Data constants used throughout the coffee app

// Array of popular coffee shops - used to demonstrate FlatList component
// Shows how to work with static array data in React Native
// Now includes coordinates for map integration and ratings
export const COFFEE_SHOPS = [
  { name: "Starbucks", latitude: 55.6761, longitude: 12.5683, rating: 4.2 },
  { name: "Blue Bottle Coffee", latitude: 55.6811, longitude: 12.5754, rating: 4.5 },
  { name: "Intelligentsia", latitude: 55.6701, longitude: 12.5823, rating: 4.7 },
  { name: "Counter Culture Coffee", latitude: 55.6841, longitude: 12.5623, rating: 4.3 },
  { name: "Stumptown Coffee", latitude: 55.6721, longitude: 12.5903, rating: 4.6 },
  { name: "La Colombe", latitude: 55.6791, longitude: 12.5703, rating: 4.4 },
  { name: "Ritual Coffee", latitude: 55.6731, longitude: 12.5663, rating: 4.5 },
  { name: "Philz Coffee", latitude: 55.6851, longitude: 12.5803, rating: 4.6 },
  { name: "Joe Coffee", latitude: 55.6691, longitude: 12.5743, rating: 4.3 },
  { name: "Irving Farm", latitude: 55.6821, longitude: 12.5683, rating: 4.4 },
  { name: "Verve Coffee", latitude: 55.6751, longitude: 12.5883, rating: 4.7 },
  { name: "Coava Coffee", latitude: 55.6781, longitude: 12.5723, rating: 4.5 },
  { name: "Heart Coffee", latitude: 55.6711, longitude: 12.5843, rating: 4.6 },
  { name: "Onyx Coffee Lab", latitude: 55.6831, longitude: 12.5763, rating: 4.8 },
];

// Array of coffee roasting regions - used to demonstrate array.map() method
// Shows how to iterate over arrays and render components
export const COFFEE_REGIONS = ["Ethiopia", "Colombia", "Guatemala", "Jamaica", "Yemen", "Hawaii"];

// API endpoint for fetching coffee shop reviews (using randomuser as placeholder)
// Used with fetch() to demonstrate API integration and dynamic data loading
export const GET_REVIEWS_URL = "https://randomuser.me/api?results=";