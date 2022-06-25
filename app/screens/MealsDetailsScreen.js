import {useContext, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/data';
import MealsDetails from '../component/MealDetails';
import List from '../component/List';
import Subtitle from '../component/Subtitle';
import IconButton from '../component/IconButton';
// import {FavouriteContext} from '../store/context/favourite-context';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favouriteSlice';

function MealsDetailsScreen({route, navigation}) {
  const {mealId} = route.params;
  const dispatch = useDispatch();
  const favouriteMeals = useSelector((state) => state.favouriteMeals.ids);

  const mealIsFav = favouriteMeals.includes(mealId);

  function favHandler() {
    if (mealIsFav) dispatch(removeFavorite({id: mealId}));
    else dispatch(addFavorite({id: mealId}));
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color={'white'}
          icon={mealIsFav ? 'star' : 'star-outline'}
          onPress={favHandler}
        />
      ),
    });
  }, [navigation, favHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        style={styles.detailsStyle}
        detailsTextStyle={styles.detailsTextStyle}
      />

      <Subtitle>ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: '#051360',
  },
  detailsTextStyle: {
    color: '#051360',
  },
});

export default MealsDetailsScreen;
