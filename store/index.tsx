import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const combineReducer = combineReducers({
  cart: cartSlice,
});

const store = configureStore({
  reducer: combineReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof combineReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;