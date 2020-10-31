import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userTypeReducer from '../modules/userType/userType.slice';
import { ReduxStoreRootTypes } from '../types/types';

const combinedReducers = combineReducers<ReduxStoreRootTypes>({
    userType: userTypeReducer
})

export const store = configureStore({
    reducer: combinedReducers
})