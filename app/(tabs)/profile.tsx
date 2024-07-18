import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, ScrollView, Image, TouchableOpacity } from 'react-native';

const App: React.FC = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [isBartering, setIsBartering] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.profileTitle}>My Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Profile name" />
      
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={() => setIsBuyer(true)} style={[styles.switchButton, isBuyer && styles.activeSwitch]}>
          <Text>Buyer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsBuyer(false)} style={[styles.switchButton, !isBuyer && styles.activeSwitch]}>
          <Text>Vendor</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Biography</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        multiline
      />

      <Text style={styles.sectionTitle}>Vendor Shop</Text>
      <TextInput style={styles.input} placeholder="Address for store location" />
      <TextInput style={styles.input} placeholder="Zip Code" />

      <Text style={styles.subSectionTitle}>Provided Produce</Text>
      <View style={styles.tagContainer}>
        <View style={styles.tag}>
          <Text>Lemon</Text>
          <TouchableOpacity style={styles.removeTag}>
            <Text style={styles.removeTagText}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.addTagButton}>
        <Text style={styles.addTagText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.subSectionTitle}>Times for Availability</Text>
      <View style={styles.availabilityContainer}>
        <View style={styles.dayTimeRow}>
          <Text style={styles.dayText}>Monday</Text>
          <TextInput style={styles.timeInput} placeholder="12:00 PM" />
          <Text style={styles.toText}>To</Text>
          <TextInput style={styles.timeInput} placeholder="8:00 PM" />
        </View>
        <View style={styles.dayTimeRow}>
          <Text style={styles.dayText}>Wednesday</Text>
          <TextInput style={styles.timeInput} placeholder="12:00 PM" />
          <Text style={styles.toText}>To</Text>
          <TextInput style={styles.timeInput} placeholder="8:00 PM" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Prices</Text>
      <View style={styles.tagContainer}>
        <View style={styles.priceTag}>
          <Text>Lemon</Text>
          <TextInput style={styles.priceInput} placeholder="$3.00" />
          <Text>for</Text>
          <TextInput style={styles.quantityInput} placeholder="5" />
          <Text>+</Text>
          <TextInput style={styles.priceInput} placeholder="$5.00" />
          <Text>for</Text>
          <TextInput style={styles.quantityInput} placeholder="10" />
        </View>
      </View>
      <TouchableOpacity style={styles.addTagButton}>
        <Text style={styles.addTagText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.subSectionTitle}>Other fruits?</Text>
      <TouchableOpacity style={styles.addTagButton}>
        <Text style={styles.addTagText}>+</Text>
      </TouchableOpacity>

      <View style={styles.barteringContainer}>
        <Text>Open to bartering?</Text>
        <Switch value={isBartering} onValueChange={setIsBartering} />
      </View>

      <Text style={styles.sectionTitle}>Photos</Text>
      <View style={styles.photosContainer}>
        <View style={styles.photoPlaceholder}>
          <Text>🖼️</Text>
        </View>
        <View style={styles.photoPlaceholder}>
          <Text>🖼️</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addPhotoButton}>
        <Text style={styles.addPhotoText}>+</Text>
      </TouchableOpacity>

      <View style={styles.navigation}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.activeNav}></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 8,
  },
  settingsText: {
    fontSize: 24,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
  },
  addButton: {
    marginLeft: 16,
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#ddd',
  },
  addButtonText: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  switchButton: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSwitch: {
    backgroundColor: '#ddd',
  },
  label: {
    marginBottom: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    marginRight: 8,
  },
  removeTag: {
    marginLeft: 8,
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 4,
  },
  removeTagText: {
    fontSize: 12,
  },
  addTagButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    alignItems: 'center',
  },
  addTagText: {
    fontSize: 16,
  },
  availabilityContainer: {
    marginBottom: 16,
  },
  dayTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayText: {
    flex: 1,
  },
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  toText: {
    marginHorizontal: 4,
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    marginBottom: 16,
  },
  priceInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
    width: 60,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
    width: 40,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  barteringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    alignItems: 'center',
  },
  addPhotoText: {
    fontSize: 24,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  activeNav: {
    fontWeight: 'bold',
  },
});

export default App;
