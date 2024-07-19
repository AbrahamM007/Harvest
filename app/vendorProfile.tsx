import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.navigate('/')}>
        <Text style={styles.backText}> ← </Text>
      </TouchableOpacity>
        <Text style={styles.headerText}>Alondras's Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.produceText}>Provided Produce</Text>
        <Text style={styles.produceItem}>🍋 Lemon</Text>
        <View style={styles.storeLocation}>
          <Text style={styles.locationTitle}>Store location</Text>
          <Text style={styles.locationText}>1227 W 92st PL, California 90022</Text>
        </View>
      </View>
      <View style={styles.biographyContainer}>
        <Text style={styles.sectionTitle}>Biography</Text>
        <Text style={styles.biographyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.pricesContainer}>
        <Text style={styles.sectionTitle}>Prices</Text>
        <Text style={styles.priceText}>🍋 Lemon</Text>
        <Text style={styles.priceDetail}>$3.00 for 6</Text>
        <Text style={styles.priceDetail}>$5.00 for 11</Text>
        <Text style={styles.barterText}>This Vendor is allowing bartering!</Text>
      </View>
      <View style={styles.availabilityContainer}>
        <Text style={styles.sectionTitle}>Times of Availability</Text>
        <Text style={styles.availabilityText}>Monday 12:00 PM To 7:00 PM</Text>
        <Text style={styles.availabilityText}>Wednesday 12:00 PM To 8:00 PM</Text>
      </View>
      <View style={styles.photosContainer}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photosRow}>
          <View style={styles.photo} />
          <View style={styles.photo} />
        </View>
        <View style={styles.photosRow}>
          <View style={styles.photo} />
          <View style={styles.photo} />
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Contact?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backText: {
    fontSize: 30,
    marginTop:30,
    marginRight: 300,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 160,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 90,
  },
  produceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  produceItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  storeLocation: {
    marginTop: 10,
    alignItems: 'center',
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
    textAlign: 'center',
  },
  biographyContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    alignItems:'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems:'center',
  },
  biographyText: {
    fontSize: 16,
    lineHeight: 24,
  },
  pricesContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    alignItems:'center',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceDetail: {
    fontSize: 16,
    marginVertical: 5,
  },
  barterText: {
    fontSize: 16,
    marginTop: 10,
    color: '#4CAF50',
  },
  availabilityContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  availabilityText: {
    fontSize: 16,
    marginVertical: 5,
  },
  photosContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  photosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
  },
  contactContainer: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  contactText: {
    color: 'white',
    fontSize: 18,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ProfileScreen;
