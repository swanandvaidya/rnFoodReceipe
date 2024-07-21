import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const launcherImage = require('../assets/ic_launcher.png');

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={launcherImage} style={styles.launcherImage}></Image>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD5D69',
    justifyContent: 'center',
    alignItems: 'center',
  },
  launcherImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 14,
    marginVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
