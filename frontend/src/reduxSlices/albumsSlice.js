import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  albumsError: null,
  albumsLoading: false,
  albums: []
};

/**
 * Get Year
 * @param {String} date
 * @returns {String}
 */
export const getAlbums = createAsyncThunk('artist/getAlbums', async (artistId, thunkAPI) => {
  try {
    const resp = await axios(`/artist/${artistId}/albums`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const albumsReducer = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    clearAlbums: (state) => {
      state.albums = [];
    }
  },
  extraReducers: {
    [getAlbums.pending]: (state) => {
      state.albumsError = null;
      state.albumsLoading = true;
      state.albums = [];
    },
    [getAlbums.fulfilled]: (state, action) => {
      state.albumsError = null;
      state.albumsLoading = false;
      state.albums = action.payload.data;
    },
    [getAlbums.rejected]: (state) => {
      state.albumsError = 'Something went wrong';
      state.albumsLoading = false;
      state.albums = [];
    }
  }
});

export const { clearAlbums } = albumsReducer.actions;

export default albumsReducer.reducer;
