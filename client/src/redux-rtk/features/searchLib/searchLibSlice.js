import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchLibValue: '',
};

const searchLibSlice = createSlice({
  name: 'searchLib',
  // Set the initial state for this slice
  initialState,
  reducers: {
    // Define an action to set the search value
    setSearchLibValue: (state, action) => {
      state.searchLibValue = action.payload;
    },
  },
});

// Export the action creator
export const { setSearchLibValue } = searchLibSlice.actions;

// Create a selector function to retrieve the search value from the state
export const selectSearchLibValue = (state) => state.searchLib.searchLibValue;

// Export the reducer function
export default searchLibSlice.reducer;
