import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AppLogo from '../components/AppLogo';
import AppHeader from '../components/AppHeader';
import Separator from '../components/Separator';
import PrimaryButton from '../components/PrimaryButton';
import {CommonActions, useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  function doSignUp() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      }),
    );
  }

  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <AppLogo></AppLogo>
        <AppHeader headerName="Create an Account" />
      </View>
      <Separator spacing={20}></Separator>
      <TextInput
        style={styles.textInputFields}
        placeholder="Enter username"
        placeholderTextColor="#00000066" // Customize placeholder text color
        keyboardType="default"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <Separator spacing={16} />

      <TextInput
        style={styles.textInputFields}
        placeholder="Enter email"
        placeholderTextColor="#00000066" // Customize placeholder text color
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <Separator spacing={16} />
      <TextInput
        style={styles.textInputFields}
        placeholder="Enter mobile number"
        placeholderTextColor="#00000066" // Customize placeholder text color
        keyboardType="number-pad"
        onChangeText={text => setMobileNumber(text)}
        value={mobileNumber}
        autoCapitalize="none"
        maxLength={10}
      />
      <Separator spacing={16} />
      <TextInput
        style={styles.textInputFields}
        placeholder="Enter password"
        placeholderTextColor="#00000066" // Customize placeholder text color
        keyboardType="default"
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize="none"
        secureTextEntry
      />
      <PrimaryButton
        buttonText="Sign Up"
        marginTop={{marginTop: 36}}
        onPress={doSignUp}></PrimaryButton>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: '#000', fontWeight: '500', fontSize: 20}}>
          Already have an account?{' '}
        </Text>
        <Text
          style={{color: '#FD5D69', fontWeight: '500', fontSize: 20}}
          onPress={navigateToLogin}>
          Log In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textInputFields: {
    height: 48,
    marginHorizontal: 20,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#000', // Customize text color
    fontSize: 18, // Customize text size
  },
});
