import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artistError: null,
  artistLoading: false,
  artistInfo: []
};

/**
 * Get Year
 * @param {String} date
 * @returns {String}
 */
export const getArtistInfo = createAsyncThunk(
  'artist/getArtistInfo',
  async (artistId, thunkAPI) => {
    try {
      const resp = await axios(`/api/artist/${artistId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const artistInfoReducer = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    clearArtist: (state) => {
      state.albums = [];
    },
    unmountArtist: (state) => {
      state.isArtistInfo = false;
    },
    mountArtist: (state) => {
      state.isArtistInfo = true;
    }
  },
  extraReducers: {
    [getArtistInfo.pending]: (state) => {
      state.artistError = null;
      state.artistLoading = true;
      state.artistInfo = {};
    },
    [getArtistInfo.fulfilled]: (state, action) => {
      state.artistError = null;
      state.artistLoading = false;
      state.artistInfo = action.payload;
    },
    [getArtistInfo.rejected]: (state) => {
      state.artistError = 'Something went wrong';
      state.artistLoading = false;
      state.artistInfo = {};
    }
  }
});

export const { clearAlbums, unmountArtist, mountArtist } = artistInfoReducer.actions;

export default artistInfoReducer.reducer;
