import {createSlice} from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {ids: []},
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
      //   state.ids.slice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const {addFavorite, removeFavorite} = favouriteSlice.actions;

export default favouriteSlice.reducer;
