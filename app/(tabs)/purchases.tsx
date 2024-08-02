import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera'; // Import BarCodeReadEvent type

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [qrValue, setQrValue] = useState('');
  const [scannedValue, setScannedValue] = useState<string | null>(null); // Explicitly define the type

  // Declare the type for the 'e' parameter
  const handleBarcodeRead = (e: BarCodeReadEvent) => {
    setScannedValue(e.data);
    setCurrentScreen('Receipt');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Receipt':
        return <ReceiptScreen />;
      case 'CreateReceipt':
        return <CreateReceiptScreen />;
      case 'SaleCode':
        return <SaleCodeScreen />;
      case 'Scanner':
        return <ScannerScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const HomeScreen = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Purchases</Text>
      <Text style={styles.subHeader}>Hello Edgar! Ready to Scan for your purchase?</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Scanner')}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Receipt')}>
        <Text style={styles.buttonText}>Create a sale QR?</Text>
      </TouchableOpacity>
    </View>
  );

  const ReceiptScreen = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Purchases</Text>
      <Text style={styles.subHeader}>Your Receipt</Text>
      <View style={styles.receipt}>
        {scannedValue ? (
          <Text style={styles.item}>Scanned: {scannedValue}</Text>
        ) : (
          <>
            <Text style={styles.item}>5 Lemons: $3</Text>
            <Text style={styles.item}>2 Lemons: + $1.50</Text>
            <Text style={styles.baseCost}>Base Cost $4.50</Text>
            <Text style={styles.item}>Sales Tax: + $0.43</Text>
            <Text style={styles.item}>App fee: + $0.45</Text>
            <Text style={styles.totalCost}>Total Cost $5.38</Text>
          </>
        )}
        <Text style={styles.subHeader}>Is this order Correct?</Text>
        <TouchableOpacity style={styles.smallButton} onPress={() => setCurrentScreen('CreateReceipt')}>
          <Text style={styles.smallButtonText}>Yes, Proceed to payout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => setCurrentScreen('Home')}>
          <Text style={styles.smallButtonText}>No, Return to Scanner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const CreateReceiptScreen = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Purchases</Text>
      <Text style={styles.subHeader}>Create Receipt</Text>
      <View style={styles.itemInput}>
        <Text style={styles.label}>Lemon</Text>
        <TextInput style={styles.input} value="$3.00" />
        <TextInput style={styles.input} value="5" />
      </View>
      <View style={styles.itemInput}>
        <Text style={styles.label}>Lemon</Text>
        <TextInput style={styles.input} value="$1.50" />
        <TextInput style={styles.input} value="2" />
      </View>
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        setQrValue('Sample Receipt Data');
        setCurrentScreen('SaleCode');
      }}>
        <Text style={styles.buttonText}>Create Sale QR</Text>
      </TouchableOpacity>
    </View>
  );

  const SaleCodeScreen = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Purchases</Text>
      <Text style={styles.subHeader}>Sale Code</Text>
      <QRCode
        value={qrValue || 'Sample Receipt Data'}
        size={150}
      />
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Home')}>
        <Text style={styles.buttonText}>Edit QR code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Home')}>
        <Text style={styles.buttonText}>Close QR code</Text>
      </TouchableOpacity>
    </View>
  );

  const ScannerScreen = () => (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={handleBarcodeRead}
        captureAudio={false}
      >
        <View style={styles.cameraOverlay}>
          <Text style={styles.header}>Scan a QR Code</Text>
        </View>
      </RNCamera>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Home')}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return renderScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0C6C00',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0C6C00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: '#074100',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  receipt: {
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  baseCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    width: 50,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  plusButton: {
    backgroundColor: '#0C6C00',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  plusButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default App;
