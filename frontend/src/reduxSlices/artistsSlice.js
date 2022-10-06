import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artists: [],
  prevPage: null,
  nextPage: null,
  error: null,
  loading: false,
  isArtistInfo: false
};

/**
 * Get Tracks
 * @param {String} query
 * @param {Number} indexId
 * @returns {Array}
 */
export const getArtists = createAsyncThunk(
  'artist/getArtists',
  async ({ query, indexId }, thunkAPI) => {
    try {
      const resp = await axios.post(`/api/artists/tracks`, { query: query, indexId: indexId });
      // console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const artistsReducer = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: {
    [getArtists.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getArtists.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artists = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getArtists.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    }
  }
});

export default artistsReducer.reducer;
