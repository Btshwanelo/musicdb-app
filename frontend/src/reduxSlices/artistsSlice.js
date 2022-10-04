import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artists: [],
  prevPage: '',
  nextPage: '',
  error: null,
  loading: false,
  isArtistInfo: false
};

/**
 * Get Year
 * @param {String} date
 * @returns {String}
 */
export const getArtists = createAsyncThunk('artist/getArtists', async (query, thunkAPI) => {
  try {
    const resp = await axios(`/search?q=${query}`);
    // console.log(resp)
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
export const getNext = createAsyncThunk('artist/getNext', async (url, thunkAPI) => {
  const query = url.slice(22);
  console.log('query', query);
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
export const getPrev = createAsyncThunk('artist/getPrev', async (url, thunkAPI) => {
  const query = url.slice(22);

  try {
    const resp = await axios(`${query}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

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
    },
    [getNext.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getNext.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artists = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getNext.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getPrev.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    },
    [getPrev.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.artists = action.payload.data;
      state.prevPage = action.payload.prev ? action.payload.prev : null;
      state.nextPage = action.payload.next ? action.payload.next : null;
    },
    [getPrev.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
      state.artists = [];
      state.prevPage = null;
      state.nextPage = null;
    }
  }
});

export const {} = artistsReducer.actions;

export default artistsReducer.reducer;
