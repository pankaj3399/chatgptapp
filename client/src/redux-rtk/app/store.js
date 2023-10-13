import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceRed from '../features/auth/authSlice';
import chatSliceRed from '../features/chat/chatSlice';
import searchReducer from '../features/search/searchSlice'; // Import the searchSlice
import searchLibReducer from '../features/searchLib/searchLibSlice'; // Import the searchLibSlice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceRed,
    chat: chatSliceRed,
    search: searchReducer, 
    searchLib: searchLibReducer, 
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});

