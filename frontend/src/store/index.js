import { configureStore } from '@reduxjs/toolkit';

import { albumsReducer, artistInfoReducer, artistsReducer, topTracksReducer } from '../reduxSlices';

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    artistInfo: artistInfoReducer,
    albums: albumsReducer,
    topTracks: topTracksReducer
  }
});
