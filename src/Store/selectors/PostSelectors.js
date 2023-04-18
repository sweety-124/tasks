import { createSelector } from 'reselect';

export const getPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

export const selectPost = () => createSelector([getPostById], (post) => post);

export const postSelector = (state)=> state.posts.posts
