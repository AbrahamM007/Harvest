import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this library
import { router } from 'expo-router';
// Import your navigation library
// import { useRouter } from 'your-navigation-library'; 

const myImage = require('@/assets/images/1717.png');

type Vendor = {
  id: string;
  name: string;
  address: string;
  products: string[];
  freshnessRating: number;
  profileImage: any;
};

const vendors: Vendor[] = [
  {
    id: '1',
    name: "Izaac Nathanial Marthell's Stand",
    address: '1227 W 92st PL',
    products: ['Lemon'],
    freshnessRating: 4.5,
    profileImage: myImage,
  },
  {
    id: '2',
    name: "Joel Chavez's Stand",
    address: '22st E 8th St',
    products: ['Lemon', 'Pomegranate'],
    freshnessRating: 4.5,
    profileImage: myImage,
  },
  {
    id: '3',
    name: "Jayden Ortiz's Stand",
    address: '15791 Manzanita St',
    products: ['Lemon'],
    freshnessRating: 4.0,
    profileImage: myImage,
  },
  {
    id: '4',
    name: "Andrea Sullivan's Stand",
    address: '725 S Newport Ave',
    products: ['Lemon'],
    freshnessRating: 4.0,
    profileImage: myImage,
  },
  {
    id: '5',
    name: "Abraham Mora-Tadeo's Stand",
    address: '1246 S Spruce ST ',
    products: ['Dragon Fruit'],
    freshnessRating: 5.0,
    profileImage: myImage,
  },
];

const VendorItem = ({ vendor }: { vendor: Vendor }) => {
  // Uncomment and use your navigation hook if needed
  // const router = useRouter();

  return (
    <TouchableOpacity
      
       onPress={() => router.navigate('/Vendorlistprofile')}
    >
      <View style={styles.vendorContainer}>
        <Image source={vendor.profileImage} style={styles.profileImage} />
        <View style={styles.vendorDetails}>
          <Text style={styles.vendorName}>{vendor.name}</Text>
          <Text style={styles.vendorAddress}>Located at {vendor.address}</Text>
          <Text style={styles.vendorProducts}>Selling: {vendor.products.join(', ')}</Text>
          <Text style={styles.vendorRating}>Freshness Rating: {vendor.freshnessRating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VendorsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vendors</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#000" />
        <TextInput style={styles.searchInput} placeholder=" Vendor Shops" />
        <TouchableOpacity>
          <Icon name="close" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={vendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VendorItem vendor={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  vendorContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginTop: 20,
  },
  vendorDetails: {
    marginLeft: 16,
    flex: 1,
  },
  vendorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vendorAddress: {
    fontSize: 14,
    color: '#777',
  },
  vendorProducts: {
    fontSize: 14,
    marginTop: 4,
  },
  vendorRating: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default VendorsScreen;
