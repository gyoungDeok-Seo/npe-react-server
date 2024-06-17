import { createSlice } from "@reduxjs/toolkit";

const memberPosts = createSlice({
    name: "posts",
    initialState: { posts: [] },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { setPosts } = memberPosts.actions;

export default memberPosts;
