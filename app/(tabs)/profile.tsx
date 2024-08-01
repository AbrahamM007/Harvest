import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Divider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'; // Use this if you are using Expo

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
      allowsEditing: true,
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
      <Text style={styles.header}>Your Profile</Text>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={handlePickImage}>
            <Avatar.Image
              size={100}
              source={{ uri: avatarUri }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <IconButton
            icon="camera"
            size={20}
            style={styles.closeIcon}
            iconColor="white"
            onPress={handlePickImage}
          />
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
              <IconButton icon="pencil" size={15} style={styles.editIcon} iconColor='#074100' />
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
              <IconButton icon="pencil" size={15} style={styles.editIcon} iconColor='#074100' />
            </View>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.contentContainer}>
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
          <Text style={styles.subHeader}>Produce and Prices</Text>
          <View style={styles.row}>
            <Text style={styles.label}>🍋 Lemons</Text>
            <Text style={styles.info}>$3.00 for 6, $5.00 for 11</Text>
            <IconButton icon="plus" size={20} style={styles.addIcon} iconColor="white" />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.subHeader}>Availability</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Mondays: 12:00 PM to 7:00 PM</Text>
            <IconButton icon="pencil" size={15} style={styles.editIcon} iconColor='#074100' />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Wednesdays: 12:00 PM to 7:00 PM</Text>
            <IconButton icon="pencil" size={15} style={styles.editIcon} iconColor='#074100' />
          </View>
          <IconButton icon="plus" size={20} style={styles.addButton} iconColor='#074100' />
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
            <IconButton icon="plus" size={20} style={styles.addButton} iconColor='#074100' onPress={handleAddPhoto} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#86D861',
    marginBottom: 60,
    marginTop: 80,
  },
  profileSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    borderRadius: 50,
    marginLeft: 40,
    marginRight: -40,
  },
  closeIcon: {
    position: 'absolute',
    bottom: 75,
    right: -40,
    backgroundColor: '#074100',
    borderRadius: 15,
  },
  infoContainer: {
    marginLeft: 100,
    justifyContent: 'center',


  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C6C00',
  },
  label: {
    fontSize: 18,
    color: '#0C6C00',
    alignItems: 'center',
    flex: 30,
    
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  contentContainer: {
    backgroundColor: '#FFF1DD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C6C00',
    marginTop: 10,
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    alignSelf: 'flex-start',
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
  editIcon: {
    marginLeft: 5,
  },
  addIcon: {
    backgroundColor: '#074100',
    borderRadius: 10,
  },
  divider: {
    marginVertical: 10,
  },
  editableContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#0C6C00',
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    padding: 5,
    width: '100%',
  },
});

export default Profile;
