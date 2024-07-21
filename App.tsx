import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen></WelcomeScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default App;
