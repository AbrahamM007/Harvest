import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this library
import { router } from 'expo-router';

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
    name: "Izaac Marthell's Stand",
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
    name: "Kevin Hernandez's Stand",
    address: '1830 E 61st St',
    products: ['Lemon', 'Tomato'],
    freshnessRating: 3.0,
    profileImage: myImage,
  },
];

const VendorItem = ({ vendor }: { vendor: Vendor }) => {
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
          <View style={styles.ratingContainer}>
            <Icon name="leaf" size={14} color="#86D861" />
            <Text style={styles.vendorRating}>{vendor.freshnessRating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VendorsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    filterVendors(selectedFilter, text);
  };

  const handleFilter = (filter: string) => {
    setSelectedFilter(filter);
    filterVendors(filter, searchText);
  };

  const filterVendors = (filter: string, search: string) => {
    const newFilteredVendors = vendors.filter(vendor =>
      vendor.products.some(product =>
        product.toLowerCase().includes(search.toLowerCase())
      ) && (!filter || vendor.products.includes(filter))
    );
    setFilteredVendors(newFilteredVendors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vendors</Text>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Lemon')}>
          <Text style={styles.filterButtonText}>Lemon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Pomegranate')}>
          <Text style={styles.filterButtonText}>Pomegranate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Tomato')}>
          <Text style={styles.filterButtonText}>Tomato</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredVendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VendorItem vendor={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set background color to white
    padding: 16,
  },
  header: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#86D861',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1DD',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  filterButton: {
    backgroundColor: '#FFD000',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#FFF1DD',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  vendorContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF1DD',
    padding: 16,
    marginBottom: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
    
    
  },
  vendorDetails: {
    marginLeft: 16,
    flex: 1,
  },
  vendorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  vendorAddress: {
    fontSize: 14,
    color: '#777',
  },
  vendorProducts: {
    fontSize: 14,
    marginTop: 4,
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  vendorRating: {
    fontSize: 14,
    marginLeft: 4,
    color: '#86D861',
  },
});

export default VendorsScreen;
