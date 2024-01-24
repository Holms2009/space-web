import { configureStore } from '@reduxjs/toolkit';

import { plans } from './plans';
import { app } from './app';

export const store = configureStore({
  reducer: {
    app,
    plans,
  }
})