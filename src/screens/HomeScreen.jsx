import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../themes/color';
import AppHeader from '../components/AppHeader';
import CategoryItem from '../components/CategoryItem';
import RecipeItem from '../components/RecipeItem';

const HomeScreen = () => {
  const {container, scrollContainer, categoryHeader, recipeHeader} = Styles;

  return (
    <SafeAreaView style={container}>
      <AppHeader userName={'Hi Swanand'} />
      <ScrollView style={scrollContainer}>
        <View>
          <Text style={categoryHeader}>Categories</Text>
          <CategoryItem></CategoryItem>
        </View>
        <View>
          <Text style={recipeHeader}>Recipes</Text>
          <RecipeItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  categoryHeader: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  recipeHeader: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
  },
});
