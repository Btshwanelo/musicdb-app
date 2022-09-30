import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/search?q=';

const initialState = {
  artists: [],
  artistInfo: {},
  error: null,
  loading: false
};

export const getArtists = createAsyncThunk('artist/getArtists', async (query, thunkAPI) => {
  try {
    const resp = await axios(`/search?q=${query}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
  extraReducers: {
    [getArtists.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
      state.artists = [];
      state.artistInfo = {};
    },
    [getArtists.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.artists = action.payload.data;
      state.artistInfo = {};
      state.errorMessage = null;
    },
    [getArtists.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'Something went wrong';
      state.artists = [];
      state.artistInfo = {};
    }
  }
});

// console.log(initialState);

export const { clearCart } = artistSlice.actions;

export default artistSlice.reducer;
