import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

type AvailabilityDay = 'Monday' | 'Wednesday';

type Availability = {
  [key in AvailabilityDay]: { start: string; end: string };
};

const ProfileScreen = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [profileName, setProfileName] = useState('');
  const [biography, setBiography] = useState('');
  const [storeLocation, setStoreLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [availability, setAvailability] = useState<Availability>({
    Monday: { start: '12:00 PM', end: '8:00 PM' },
    Wednesday: { start: '12:00 PM', end: '8:00 PM' },
  });
  const [prices, setPrices] = useState({ lemon: { five: 3.00, ten: 5.00 } });
  const [openToBartering, setOpenToBartering] = useState(false);
  const [photos, setPhotos] = useState([null, null]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image style={styles.profileImage} source={require('../../assets/images/prilll.png')} />
        <TextInput
          style={styles.input}
          placeholder="Profile name"
          value={profileName}
          onChangeText={setProfileName}
        />
        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => setIsBuyer(true)} style={[styles.switchButton, isBuyer && styles.activeButton]}>
            <Text style={styles.switchText}>Buyer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsBuyer(false)} style={[styles.switchButton, !isBuyer && styles.activeButton]}>
            <Text style={styles.switchText}>Vendor</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textArea}
          placeholder="Biography"
          multiline
          value={biography}
          onChangeText={setBiography}
        />
      </View>

      {!isBuyer && (
        <View style={styles.vendorSection}>
          <TextInput
            style={styles.input}
            placeholder="Address for store location"
            value={storeLocation}
            onChangeText={setStoreLocation}
          />
          <TextInput
            style={styles.input}
            placeholder="Zip Code"
            value={zipCode}
            onChangeText={setZipCode}
          />
          <Text style={styles.sectionTitle}>Provided Produce</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Lemon</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>➕</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Times for Availability</Text>
          <View style={styles.availabilityContainer}>
            {Object.keys(availability).map(day => (
              <View key={day} style={styles.availabilityRow}>
                <Text style={styles.availabilityDay}>{day}</Text>
                <Text style={styles.availabilityTime}>
                  {availability[day as AvailabilityDay].start} To {availability[day as AvailabilityDay].end}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Monday</Text>
            <Text style={styles.tag}>Wednesday</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>➕</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Prices</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTag}>Lemon</Text>
            <Text style={styles.priceText}>$3.00 for 5</Text>
            <Text style={styles.priceText}>$5.00 for 10</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>➕</Text>
          </TouchableOpacity>
          
          <Text style={styles.sectionTitle}>Photos</Text>
          <View style={styles.photosContainer}>
            {photos.map((photo, index) => (
              <View key={index} style={styles.photoPlaceholder}>
                <TouchableOpacity>
                  <Text style={styles.photoText}>➕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:40,
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#ddd',
  },
  switchText: {
    fontWeight: 'bold',
  },
  vendorSection: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    width:18.5,
    height:18.5,
    alignItems:'center',
    justifyContent:'center',
  },
  availabilityContainer: {
    marginBottom: 10,
  },
  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  availabilityDay: {
    fontWeight: 'bold',
  },
  availabilityTime: {
    fontStyle: 'italic',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceTag: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  priceText: {
    marginRight: 10,
  },
  barterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  barterText: {
    marginRight: 10,
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    fontSize: 24,
  },
});

export default ProfileScreen;
