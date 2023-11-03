import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const $instance = axios.create({
  baseURL: 'https://64cbcd252eafdcdc8519556d.mockapi.io/api',
});

export const requestAdvertsThunk = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/adverts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
