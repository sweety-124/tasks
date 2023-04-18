import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_GET_POSTS,
    CREATE_POST_ACTION,
    CONFIRMED_GET_POSTS_BY_ID
} from '../actions/PostTypes';

const initialState = {
    posts: [],
    getPostById: {}
};

export default function PostsReducer(state = initialState, actions) {
    if (actions.type === CREATE_POST_ACTION) {
        const post = {
            id: Math.random(),
            title: 'Post Title 2asdasd',
            description: 'Sample Description 2asdasdas',
        };

        const posts = [...state.posts];
        posts.push(post);
        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_DELETE_POST_ACTION) {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload,
        );

        posts.splice(postIndex, 1);

        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_EDIT_POST_ACTION) {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload.id,
        );

        posts[postIndex] = actions.payload;
        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_CREATE_POST_ACTION) {
        let posts = [...state.posts];
        posts.push(actions.payload);

        return {
            ...state,
            posts,
        };
    }
    if (actions.type === CONFIRMED_GET_POSTS) {
        console.log('sweeeeeee',actions.payload)
        let posts = [...state.posts , ...actions.payload];
        return {
            ...state,
            posts:posts,
        };
    }
    if (actions.type === CONFIRMED_GET_POSTS_BY_ID) {
        console.log('different',actions,state)
        return {
            ...state,
            getPostById: actions.payload,
        };
    }
    return state;
}


