import { createSlice } from '@reduxjs/toolkit';
import { requestAdvertsThunk } from './advertsOperations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  adverts: null,
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(requestAdvertsThunk.pending, handlePending)
      .addCase(requestAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(requestAdvertsThunk.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
