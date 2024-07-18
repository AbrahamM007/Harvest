import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PurchasesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Basket</Text>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText}>Hello Edgar!</Text>
        <Text style={styles.messageText}>Ready to Scan for your purchase?</Text>
      </View>
      <View style={styles.cameraContainer}>
        <View style={styles.camera}>
          <View style={styles.lens} />
        </View>
      </View>
      <View style={styles.createQrCode}>
        <Text style={styles.createQrCodeText}>Need to make a QR code for a sale?</Text>
        <View style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
  },
  message: {
    padding: 20,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  camera: {
    width: 200,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  lens: {
    width: 60,
    height: 40,
    backgroundColor: '#888',
    borderRadius: 10,
    position: 'absolute',
    top: 55,
    left: 70,
  },
  createQrCode: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  createQrCodeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PurchasesScreen;
