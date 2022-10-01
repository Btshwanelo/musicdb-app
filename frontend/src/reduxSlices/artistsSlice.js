import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artists: [],
  error: null,
  loading: false,
  isArtistInfo: false
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

const artistsReducer = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    unmountArtist: (state) => {
      state.isArtistInfo = false;
    },
    mountArtist: (state) => {
      state.isArtistInfo = true;
    }
  },
  extraReducers: {
    [getArtists.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.artists = [];
    },
    [getArtists.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artists = action.payload.data;
    },
    [getArtists.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
    }
  }
});

export const { unmountArtist, mountArtist } = artistsReducer.actions;

export default artistsReducer.reducer;
