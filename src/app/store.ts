import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import blogsReducer from './features/blogs/blogsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
