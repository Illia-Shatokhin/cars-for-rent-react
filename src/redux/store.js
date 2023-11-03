import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './adverts/advertsSlice';

export const store = configureStore({
  reducer: { adverts: contactsReducer },
});
