import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AppLogo from '../components/AppLogo';
import AppHeader from '../components/AppHeader';
import Separator from '../components/Separator';
import PrimaryButton from '../components/PrimaryButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignup = () => {
    navigation.navigate('SignUpScreen');
  };

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
          Log In
        </Text>
      </View>

      <Text style={styles.inputTitleText}>Email</Text>
      <TextInput
        style={styles.textInputFields}
        placeholder="youremail@domain.com"
        fontFamily="Poppins-light"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <Separator spacing={16} />
      <Text style={styles.inputTitleText}>Password</Text>
      <TextInput
        style={styles.textInputFields}
        placeholder="your secret password"
        fontFamily="Poppins-light"
        keyboardType="email-address"
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize="none"
        secureTextEntry
      />
      <PrimaryButton
        buttonText="Log In"
        marginTop={{marginTop: 48}}></PrimaryButton>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 20}}>
          Don't have an account?{' '}
        </Text>
        <Text
          style={{
            color: '#FD5D69',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          }}
          onPress={navigateToSignup}>
          Sign up
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
  inputTitleText: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    fontFamily: 'Poppins-SemiBold',
  },
  textInputFields: {
    height: 56,
    marginHorizontal: 20,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#000', // Customize text color
    fontSize: 20, // Customize text size
  },
});
