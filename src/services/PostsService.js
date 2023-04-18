import axiosInstance from './AxiosInstance';

export function getPosts() {
    console.log('rrrrr')
    return axiosInstance.get(`?_start=0&_limit=5`);
}

export function createPost(postData) {
    return axiosInstance.post(`posts.json`, postData);
}

export function updatePost(post, postId) {
    return axiosInstance.put(`posts/${postId}.json`, post);
}

export function deletePost(postId) {
    return axiosInstance.delete(`posts/${postId}.json`);
}

export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
