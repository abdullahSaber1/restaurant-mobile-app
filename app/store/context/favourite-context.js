import {createContext, useState} from 'react';

export const FavouriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavouriteContextProvider({children}) {
  const [favouriteMeals, setFavouroiteMeals] = useState([]);

  function addFavorite(mealId) {
    setFavouroiteMeals((currList) => [...currList, mealId]);
  }

  function removeFavorite(mealId) {
    setFavouroiteMeals((currList) => currList.filter((id) => id !== mealId));
  }

  const value = {
    ids: favouriteMeals,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
