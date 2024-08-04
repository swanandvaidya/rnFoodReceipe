import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categories} from '../Constants';
import {Colors} from '../themes/color';

const CategoryItem = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: Colors.primary,
    marginEnd: 12,
    marginVertical: 16,
    padding: 12,
    borderRadius: 10,
  },
  categoryText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    fontSize: 18,
  },
});
