import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapButton from './MapButton';  // Adjust the path as necessary

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
