import {useEffect} from 'react';
import MealList from '../component/MealList/MealList';
import {CATEGORIES, MEALS} from '../data/data';

function MealsOverViewScreen({route, navigation}) {
  const {categoryId} = route.params;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId);
    navigation.setOptions({title: categoryTitle.title});
  }, [navigation, categoryId]);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList items={displayedMeals} />;
}

export default MealsOverViewScreen;
