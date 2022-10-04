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

/**
 * Get Year
 * @param {String} date
 * @returns {String}
 */
export const getAlbumsNext = createAsyncThunk('artist/getAlbumsNext', async (url, thunkAPI) => {
  const query = url.slice(22);
  try {
    const resp = await axios(`${query}`);
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

/**
 * Get Year
 * @param {String} date
 * @returns {String}
 */
export const getAlbumsPrev = createAsyncThunk('artist/getAlbumsPrev', async (url, thunkAPI) => {
  const query = url.slice(22);

  try {
    const resp = await axios(`${query}`);
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
    },
    [getAlbumsNext.pending]: (state) => {
      state.albumsError = null;
      state.albumsLoading = true;
      state.albums = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getAlbumsNext.fulfilled]: (state, action) => {
      state.albumsError = null;
      state.albumsLoading = false;
      state.albums = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getAlbumsNext.rejected]: (state) => {
      state.albumsError = 'Something went wrong';
      state.albumsLoading = false;
      state.albums = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getAlbumsPrev.pending]: (state) => {
      state.albumsError = null;
      state.albumsLoading = true;
      state.albums = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getAlbumsPrev.fulfilled]: (state, action) => {
      state.albumsError = null;
      state.albumsLoading = false;
      state.albums = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getAlbumsPrev.rejected]: (state) => {
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
