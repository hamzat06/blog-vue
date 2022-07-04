import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './post-slice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})