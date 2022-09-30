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
      state.loading = true;
      state.error = null;
      state.artists = [];
      state.artistInfo = {};
    },
    [getArtists.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artists = action.payload.data;
      state.artistInfo = {};
    },
    [getArtists.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
      state.artistInfo = {};
    },
    [getArtistInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.artists = [];
      state.artistInfo = {};
    },
    [getArtistInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artistInfo = action.payload;
      state.artists = [];
    },
    [getArtistInfo.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
      state.artistInfo = {};
    },
    [getAlbums.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.albums = action.payload.data;
    },
    [getTopTracks.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.topTracks = action.payload.data;
    },
  }
});

export const { clearCart } = artistSlice.actions;

export default artistSlice.reducer;
