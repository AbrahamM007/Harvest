import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import {AirbnbRating, Rating} from 'react-native-ratings';

const IzaacProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/explore')}>
        <Text style={styles.backText}> ← </Text>
      </TouchableOpacity>
        <Text style={styles.headerText}>Izaac's Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Image source={require('../assets/images/emptyprofile.png')} style={styles.image} />
        </View>
        <Text style={styles.produceText}>Provided Produce</Text>
        <View style={styles.produceItem}>
          <View style={styles.produceIcon}><Text style={styles.iconText}>🍋</Text></View>
          <Text style={styles.produceItemText}>Lemon</Text>
        </View>
        <Text style={styles.locationText}>Store location</Text>
        <Text style={styles.addressText}>1227 W 92st PL, California 90022</Text>
        <View>
    

      <Rating 
      type='rocket' // heart, star, bell, rocket
        ratingCount={5}
        showRating={false}
        ratingTextColor="red"
        // readonly
        // showReadOnlyText={false}
        startingValue={5}
        onSwipeRating={rating => console.log(`Swiping: ${rating}`)}
      />
    </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Biography</Text>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Prices</Text>
        <View style={styles.priceItem}>
          <View style={styles.produceIcon}><Text style={styles.iconText}>🍋</Text></View>
          <Text style={styles.priceText}>Lemon</Text>
          <View style={styles.priceDetails}>
            <Text style={styles.priceDetailText}>$3.00 for 6</Text>
            <Text style={styles.priceDetailText}>$5.00 for 11</Text>
          </View>
        </View>
        <Text style={styles.barterText}>This Vendor is allowing bartering!</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Times of Availability</Text>
        <Text style={styles.availabilityText}>Monday 12:00 PM To 7:00 PM</Text>
        <Text style={styles.availabilityText}>Wednesday 12:00 PM To 8:00 PM</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Photos</Text>
        <View style={styles.photos}>
          <View style={styles.photoPlaceholder} />
          <View style={styles.photoPlaceholder} />
          <View style={styles.photoPlaceholder} />
          <View style={styles.photoPlaceholder} />
        </View>
        <TouchableOpacity onPress={() => router.navigate('/chatlist')} style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
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
    justifyContent:'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
    
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#CCCCCC',
    marginBottom: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  produceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  produceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  produceIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  produceItemText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000',
  },
  locationText: {
    fontSize: 16,
    marginVertical: 8,
    color: '#000',
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  leafIcons: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  leafIcon: {
    fontSize: 24,
    marginHorizontal: 4,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  bioText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  priceItem: {
    marginBottom: 8,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceDetailText: {
    fontSize: 16,
    color: '#000',
  },
  barterText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  availabilityText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
    textAlign: 'center',
  },
  photos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:50,
  },
  photoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#CCCCCC',
    borderRadius: 8,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 50,
  },
  vendorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  contactButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#000',
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 16,
    
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    fontSize: 16,
    color: '#000',
  },
  activeNavItem: {
    fontWeight: 'bold',
  },
});

export default IzaacProfile;
