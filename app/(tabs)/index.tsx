// Import React
import React from 'react';
// Import required components
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
// Import Map and Marker from react-native-maps
import MapView, { Marker } from 'react-native-maps';

import { router } from 'expo-router';

// Define the light mode map style
const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#e3e3e3' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#c5e1a5' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b8e23' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#e3e3e3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#e3e3e3' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9c9c9' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }],
  },
];

// Define coordinates for multiple markers
const markers = [
  { latitude: 34.0219, longitude: -118.4814, title: 'USC VPD Building', description: 'My Location' },
  { latitude: 34.0220, longitude: -118.4820, title: 'Alondras Shop', description: 'I Grow Carrots' },
  { latitude: 34.0225, longitude: -118.4805, title: 'Kevins Shop', description: 'I Grow Tomatoes' },
  // Add more markers as needed
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Map</Text>
      </View>
      <SafeAreaView style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.0219, // USC VPD Latitude
            longitude: -118.4814, // USC VPD Longitude
            latitudeDelta: 0.005, // Adjusted for 2x zoom
            longitudeDelta: 0.005, // Adjusted for 2x zoom
          }}
          customMapStyle={mapStyle}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
              onPress={() => router.navigate('/vendorProfile')}
              pinColor="red" // Set marker color to red
              image={require('../../assets/images/ping0.png')}
            />
          ))}
        </MapView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
    paddingTop: 80, // Adjust as needed
    paddingBottom: 30, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensure header is above the map
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#86D861', // Fully opaque text color
  },
  mapContainer: {
    flex: 1,
    marginTop: 0, // Remove margin to ensure full-screen map
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
