import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  albumsError: null,
  prevPage: null,
  nextPage: null,
  albumsLoading: false,
  albums: []
};

/**
 * Get Albums
 ** @param {Number} artistId
 *  @param {Number} indexId
 * @returns {Array}
 */
export const getAlbums = createAsyncThunk(
  'artist/getAlbums',
  async ({ artistId, indexId }, thunkAPI) => {
    try {
      const resp = await axios.post(`/api/artist/albums/${artistId}`, {
        artistId: artistId,
        indexId: indexId
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

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
      state.prevPage = null;
      state.nextPage = null;
    },
    [getAlbums.fulfilled]: (state, action) => {
      state.albumsError = null;
      state.albumsLoading = false;
      state.albums = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getAlbums.rejected]: (state) => {
      state.albumsError = 'Something went wrong';
      state.albumsLoading = false;
      state.albums = [];
      state.prevPage = null;
      state.nextPage = null;
    }
  }
});

export const { clearAlbums } = albumsReducer.actions;

export default albumsReducer.reducer;
