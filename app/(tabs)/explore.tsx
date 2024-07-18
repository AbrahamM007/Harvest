// VendorsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this library

type Vendor = {
  id: string;
  name: string;
  address: string;
  products: string[];
  freshnessRating: number;
  profileImage: string;
};

const vendors: Vendor[] = [
  {
    id: '1',
    name: "Izaac Nathanial Marthell's Stand",
    address: '1227 W 92st PL',
    products: ['Lemon'],
    freshnessRating: 4.5,
    profileImage: 'https://us-east.storage.cloudconvert.com/tasks/9997b00b-9901-491d-872f-e9be94410186/noprofile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240717%2Fva%2Fs3%2Faws4_request&X-Amz-Date=20240717T233801Z&X-Amz-Expires=86400&X-Amz-Signature=2d06b0cc5908f473054a0971478bac82e214e8bed56c715a186cc3a634ca38aa&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22noprofile.png%22&response-content-type=image%2Fpng&x-id=GetObject',
  },
  {
    id: '2',
    name: "Joel Chavez's Stand",
    address: '22st E 8th St',
    products: ['Lemon', 'Pomegranate'],
    freshnessRating: 4.5,
    profileImage: 'https://us-east.storage.cloudconvert.com/tasks/9997b00b-9901-491d-872f-e9be94410186/noprofile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240717%2Fva%2Fs3%2Faws4_request&X-Amz-Date=20240717T233801Z&X-Amz-Expires=86400&X-Amz-Signature=2d06b0cc5908f473054a0971478bac82e214e8bed56c715a186cc3a634ca38aa&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22noprofile.png%22&response-content-type=image%2Fpng&x-id=GetObject',
  },
  {
    id: '3',
    name: "Jayden Ortiz's Stand",
    address: '15791 Manzanita St',
    products: ['Lemon'],
    freshnessRating: 4.0,
    profileImage: 'https://us-east.storage.cloudconvert.com/tasks/9997b00b-9901-491d-872f-e9be94410186/noprofile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240717%2Fva%2Fs3%2Faws4_request&X-Amz-Date=20240717T233801Z&X-Amz-Expires=86400&X-Amz-Signature=2d06b0cc5908f473054a0971478bac82e214e8bed56c715a186cc3a634ca38aa&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22noprofile.png%22&response-content-type=image%2Fpng&x-id=GetObject',
  },
  {
    id: '4',
    name: "Andrea Sullivan's Stand",
    address: '725 S Newport Ave',
    products: ['Lemon'],
    freshnessRating: 4.0,
    profileImage: 'https://us-east.storage.cloudconvert.com/tasks/9997b00b-9901-491d-872f-e9be94410186/noprofile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240717%2Fva%2Fs3%2Faws4_request&X-Amz-Date=20240717T233801Z&X-Amz-Expires=86400&X-Amz-Signature=2d06b0cc5908f473054a0971478bac82e214e8bed56c715a186cc3a634ca38aa&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22noprofile.png%22&response-content-type=image%2Fpng&x-id=GetObject',
  },
  {
    id: '5',
    name: "Abraham Mora-Tadeo's Stand",
    address: '1246 S Spruce ST ',
    products: ['Dragon Fruit'],
    freshnessRating: 5.0,
    profileImage: 'https://us-east.storage.cloudconvert.com/tasks/9997b00b-9901-491d-872f-e9be94410186/noprofile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240717%2Fva%2Fs3%2Faws4_request&X-Amz-Date=20240717T233801Z&X-Amz-Expires=86400&X-Amz-Signature=2d06b0cc5908f473054a0971478bac82e214e8bed56c715a186cc3a634ca38aa&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22noprofile.png%22&response-content-type=image%2Fpng&x-id=GetObject',
  },
];

const VendorItem = ({ vendor }: { vendor: Vendor }) => {
  return (
    <View style={styles.vendorContainer}>
      <Image source={{ uri: vendor.profileImage }} style={styles.profileImage} />
      <View style={styles.vendorDetails}>
        <Text style={styles.vendorName}>{vendor.name}</Text>
        <Text style={styles.vendorAddress}>Located at {vendor.address}</Text>
        <Text style={styles.vendorProducts}>Selling: {vendor.products.join(', ')}</Text>
        <Text style={styles.vendorRating}>Freshness Rating: {vendor.freshnessRating}</Text>
      </View>
    </View>
  );
};

const VendorsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
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
    marginTop:20,

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
