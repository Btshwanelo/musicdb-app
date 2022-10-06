import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tracksError: null,
  tracksLoading: false,
  topTracks: []
};

/**
 * Get Top Tracks
 * @param {Number} artistId
 * @returns {String}
 */
export const getTopTracks = createAsyncThunk('artist/getTopTracks', async (artistId, thunkAPI) => {
  try {
    const resp = await axios(`/api/artist/tracks/${artistId}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const topTracksReducer = createSlice({
  name: 'top tracks',
  initialState,
  reducers: {
    clearTopTracks: (state) => {
      state.topTracks = [];
    }
  },
  extraReducers: {
    [getTopTracks.pending]: (state) => {
      state.tracksLoading = true;
      state.tracksError = null;
      state.topTracks = [];
    },
    [getTopTracks.rejected]: (state) => {
      state.tracksLoading = false;
      state.tracksError = 'Something went wrong';
      state.topTracks = [];
    },
    [getTopTracks.fulfilled]: (state, action) => {
      state.tracksError = null;
      state.tracksLoading = false;
      state.topTracks = action.payload.data;
    }
  }
});

export const { clearTopTracks } = topTracksReducer.actions;

export default topTracksReducer.reducer;
