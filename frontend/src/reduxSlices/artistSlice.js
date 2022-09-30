import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/search?q=';

const initialState = {
  artists: [],
  artistInfo: {},
  error: null,
  loading: false,
  albums: [],
  topTracks: [],

};

export const getArtists = createAsyncThunk('artist/getArtists', async (query, thunkAPI) => {
  try {
    const resp = await axios(`/search?q=${query}`);
   // console.log(resp)
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getArtistInfo = createAsyncThunk('artist/getArtistInfo', async (artistId, thunkAPI) => {
  try {
    const resp = await axios(`/artist/${artistId}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getTopTracks = createAsyncThunk('artist/getTopTracks', async (artistId, thunkAPI) => {
  try {
    const resp = await axios(`/artist/${artistId}/top`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getAlbums = createAsyncThunk('artist/getAlbums', async (artistId, thunkAPI) => {
  try {
    const resp = await axios(`/artist/${artistId}/albums`);
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
    },
    [getArtistInfo.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
      state.artists = [];
      state.artistInfo = {};
    },
    [getArtistInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.artistInfo = action.payload;
      state.artists = [];
      state.errorMessage = null;
    },
    [getArtistInfo.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'Something went wrong';
      state.artists = [];
      state.artistInfo = {};
    },
    [getAlbums.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.albums = action.payload.data;
      state.errorMessage = null;
    },
    [getTopTracks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.topTracks = action.payload.data;
      state.errorMessage = null;
    },
  }
});

export const { clearCart } = artistSlice.actions;

export default artistSlice.reducer;
