import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

const store = configureStore({
  reducer: {},
});

export default store;
