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

const WelcomeScreen = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Food Recipe's</Text>
      <Image source={launcherImage} style={styles.launcherImage}></Image>

      <View style={styles.buttonLoginContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
          <Text style={styles.buttonLoginText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonSignUpContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonSignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    marginVertical: 40,
    fontFamily: 'Poppins-SemiBold',
  },
  launcherImage: {
    width: 200,
    height: 200,
  },
  buttonLoginContainer: {
    borderRadius: 12,
    backgroundColor: '#FD5D69',
    width: '80%',
    padding: 10,
    marginTop: 120,
  },
  buttonSignUpContainer: {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    width: '80%',
    padding: 10,
    marginTop: 30,
    borderColor: '#999999',
    borderWidth: 1,
  },
  buttonLoginText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
  },
  buttonSignUpText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
  },
});
