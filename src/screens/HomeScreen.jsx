import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../themes/color';
import HamburgerIcon from '../assets/svg/HamburgerIcon';
import AppHeader from '../components/AppHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <AppHeader userName={'Hi Swanand'} />
      <View style={{flex: 1, backgroundColor: Colors.lightBackground}}>
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
