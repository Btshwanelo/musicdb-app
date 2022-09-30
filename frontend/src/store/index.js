import { configureStore } from '@reduxjs/toolkit';

import artistReducer from '../reduxSlices/artistSlice';

export const store = configureStore({
  reducer: { artists: artistReducer }
});
