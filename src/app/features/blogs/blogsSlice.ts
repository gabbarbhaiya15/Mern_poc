import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

interface Blog {
  id: string;
  title: string;
  content: string;
}

interface BlogsState {
  blogs: Blog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: BlogsState = {
  blogs: [],
  status: 'idle',
};

export const fetchBlogs = createAsyncThunk<Blog[], void>(
  'blogs/fetchBlogs',
  async () => {
    const response = await axios.get('/api/blogs');
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogsSlice.reducer;
