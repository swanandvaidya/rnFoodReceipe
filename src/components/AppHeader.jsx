import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../themes/color';

const AppHeader = ({userName}) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/ic_app_logo.png')}
        style={{height: 36, width: 36}}></Image>
      <View style={{flex: 1}}>
        <Text style={[styles.headerText, {marginStart: 20}]}>{userName}</Text>
        <Text style={[styles.subtitle, {marginStart: 20}]}>
          What you are cooking today
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});
