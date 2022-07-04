import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://techcrunch.com/wp-json/wp/v2/posts";

const initialState = {
  posts: [],
  post: {},
  fetching: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(`${URL}?page=1&per_page=7`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.fetching = false;
        state.posts.push(action.payload);
        console.log(state.posts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const getPosts = (state) => state.posts.posts;
export const isFetching = (state) => state.posts.fetching;
export const hasError = (state) => state.posts.hasError;

export default postsSlice.reducer;
