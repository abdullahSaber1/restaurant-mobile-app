import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../component/MealList/MealList';
import {MEALS} from '../data/data';
import {FavouriteContext} from '../store/context/favourite-context';

function FavuoriteScreen() {
  // const favouriteCtx = useContext(FavouriteContext);

  const favouriteMeals = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMealsList = MEALS.filter((meal) =>
    favouriteMeals.includes(meal.id)
  );

  if (favouriteMealsList.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          No favourite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList items={favouriteMealsList} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default FavuoriteScreen;
