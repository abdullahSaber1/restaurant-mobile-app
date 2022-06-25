import {configureStore} from '@reduxjs/toolkit';
import favouriteReducer from './favouriteSlice';

const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReducer,
  },
});

export default store;
