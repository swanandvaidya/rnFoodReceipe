import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppHeader = ({headerName}) => {
  return (
    <View>
      <Text style={[styles.headerText, styles.headerSpacing]}>
        {headerName}
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: '600',
  },
  headerSpacing: {
    marginVertical: 20,
  },
});
