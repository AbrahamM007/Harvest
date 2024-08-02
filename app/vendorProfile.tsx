import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Divider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'; // Use this if you are using Expo
import { router } from 'expo-router';

const myimage = require('@/assets/images/images (1).jpeg');
const mimage = require('@/assets/images/images (2).jpeg');
const yimage = require('@/assets/images/images (3).jpeg');
const myimag = require('@/assets/images/images (9).jpeg');

const Profile = () => {
  const [avatarUri, setAvatarUri] = useState('https://example.com/avatar.jpg');
  const [name, setName] = useState('Edgar Ramos');
  const [address, setAddress] = useState('723 S Gerhart Ave, Cali');
  const [about, setAbout] = useState('My name is Edgar, I like lemons, sell me lemons please');
  const [photos, setPhotos] = useState([
    myimage,
    mimage,
    yimage,
    myimag,
  ]);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setAvatarUri(uri);
    }
  };

  const handleAddPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setPhotos([...photos, uri]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/')}>
          <Text style={styles.backText}> ← </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Issac's Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={handlePickImage}>
            <Avatar.Image
              size={100}
              source={{ uri: avatarUri }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionHeader}>Information</Text>
          <View style={styles.editableContainer}>
            <Text style={styles.label}>Display Name</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
              
            </View>
          </View>
          <View style={styles.editableContainer}>
            <Text style={styles.label}>Address</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
              />
              
            </View>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>About me</Text>
        <TextInput
          style={styles.input}
          value={about}
          onChangeText={setAbout}
          multiline
        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Shop Setup</Text>
        <Text style={styles.produceText}>Produce and Prices</Text>
        <View style={styles.produceItem}>
          <Text style={styles.produceItemText}>🍋 Lemons</Text>
          <Text style={styles.priceDetailText}>$3.00 for 6, $5.00 for 11</Text>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.produceText}>Availability</Text>
        <View style={styles.produceItem}>
          <Text style={styles.availabilityText}>Mondays: 12:00 PM to 7:00 PM</Text>
        </View>
        <View style={styles.produceItem}>
          <Text style={styles.availabilityText}>Wednesdays: 12:00 PM to 7:00 PM</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Photos</Text>
        <View style={styles.photoContainer}>
          {photos.map((photo, index) => (
            <View key={index} style={styles.photoWrapper}>
              <Image source={{ uri: photo }} style={styles.photo} />
              <IconButton icon="close" size={20} style={styles.photoIcon} iconColor="white" />
            </View>
          ))}
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop:30,
  },
  backText: {
    fontSize: 30,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginRight:135,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    borderRadius: 50,
    marginLeft: 50,
  },
  closeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#074100',
    borderRadius: 15,
  },
  infoContainer: {
    marginLeft: 50,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C6C00',
  },
  label: {
    fontSize: 16,
    color: '#0C6C00',
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: '#0C6C00',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    padding: 5,
    flex: 1,
  },
  editIcon: {
    marginLeft: 5,
  },
  divider: {
    marginVertical: 10,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  produceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C6C00',
    marginBottom: 8,
  },
  produceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  produceItemText: {
    fontSize: 16,
    color: '#000',
  },
  priceDetailText: {
    fontSize: 16,
    color: '#000',
  },
  availabilityText: {
    fontSize: 16,
    color: '#000',
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  photoIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#074100',
    borderRadius: 15,
  },
  addButton: {
    alignSelf: 'flex-start',
  },
});

export default Profile;
