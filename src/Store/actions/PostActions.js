import {
    createPost,
    formatPosts,
    getPosts,
    deletePost,
    updatePost,
    getPostById
} from '../../services/PostsService';
import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_GET_POSTS,
    CONFIRMED_GET_POSTS_BY_ID
} from './PostTypes';

// export function deletePostAction(postId, history) {
//     return (dispatch, getState) => {
//         deletePost(postId).then((response) => {
//             dispatch(confirmedDeletePostAction(postId));
//             // history.push('/posts');
//         });
//     };
// }
export function deletePostAction(postId, history) {
    return (dispatch, getState) => {
        return deletePost(postId).then((response) => {
            dispatch(confirmedDeletePostAction(postId));
            return response;
        }).catch((error) => {
            console.log(error); // log any errors to the console
        });
    };
}

export function confirmedDeletePostAction(postId) {
    return {
        type: CONFIRMED_DELETE_POST_ACTION,
        payload: postId,
    };
}
export function confirmedGetPostActionById(postData) {
    return {
        type: CONFIRMED_GET_POSTS_BY_ID,
        payload: postData,
    };
}
// export function createPostAction(postData) {
   
//     return (dispatch, getState) => {
//         createPost(postData).then((response) => {
//             const singlePost = {
//                 ...postData,
             
//             };
//             dispatch(confirmedCreatePostAction(singlePost));
            
//         });
//     };
// }
export function createPostAction(postData) {
    return (dispatch, getState) => {
      // Return the Promise from the createPost function
      return createPost(postData).then((response) => {
        const singlePost = {
          ...postData,
        };
        dispatch(confirmedCreatePostAction(singlePost));
        // Return the response data
        return response;
      });
    };
  }

export function getPostsAction(page) {
    return(dispatch, getState) => {
        getPosts(page).then((response) => {
            let posts = formatPosts(response.data);
            console.log('sdddddddddddd',posts)
            return dispatch(confirmedGetPostsAction(posts));
        });
    };
}
export function getPostsActionById(id) {
    return (dispatch, getState) => {
        getPostById(id).then((response) => {
            dispatch(confirmedGetPostActionById(response.data));
        });
    };
}
export function confirmedCreatePostAction(singlePost) {
    return {
        type: CONFIRMED_CREATE_POST_ACTION,
        payload: singlePost,
    };
}

export function confirmedGetPostsAction(posts) {
    return {
        type: CONFIRMED_GET_POSTS,
        payload: posts,
    };
}

export function confirmedUpdatePostAction(post) {
    return {
        type: CONFIRMED_EDIT_POST_ACTION,
        payload: post,
    };
}
export function updatePostAction(post, id) {
    return (dispatch, getState) => {
      // Return the Promise from the updatePost function
      return updatePost(post, id).then((response) => {
        dispatch(confirmedUpdatePostAction(post));
        // Return the response data
        return response;
      });
    };
  }


