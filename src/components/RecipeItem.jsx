import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {categories, recipes} from '../Constants';
import {Colors} from '../themes/color';

const RecipeItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={recipes}
      renderItem={({item}) => (
        <View style={styles.recipeContainer}>
          <Image
            source={{
              uri: item.mealImage,
            }}
            height={100}
            width={120}
            style={{borderRadius: 10}}></Image>
          <Text style={styles.recipeText}>{item.mealName}</Text>
        </View>
      )}
    />
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  recipeContainer: {
    backgroundColor: Colors.white,
    marginEnd: 12,
    marginVertical: 16,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
  },
  recipeText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
});
