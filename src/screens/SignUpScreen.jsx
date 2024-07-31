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
        <Text
          style={{
            marginVertical: 20,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 24,
          }}>
          Create an Account
        </Text>
      </View>
      <Separator spacing={20}></Separator>
      <TextInput
        style={styles.textInputFields}
        placeholder="Enter username"
        fontFamily="Poppins-regular"
        keyboardType="default"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <Separator spacing={16} />

      <TextInput
        style={styles.textInputFields}
        placeholder="Enter email"
        fontFamily="Poppins-regular"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <Separator spacing={16} />
      <TextInput
        style={styles.textInputFields}
        placeholder="Enter mobile number"
        fontFamily="Poppins-regular"
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
        fontFamily="Poppins-regular"
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
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 20}}>
          Already have an account?{' '}
        </Text>
        <Text
          style={{
            color: '#FD5D69',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          }}
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
    fontSize: 20, // Customize text size
    fontFamily: 'Poppins-regular',
  },
});
