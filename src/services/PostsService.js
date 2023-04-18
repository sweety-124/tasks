import axiosInstance from './AxiosInstance';

export function getPosts(page) {
    return axiosInstance.get(`/posts?_start=${(page * 5)}&_limit=5`);
}

export function createPost(postData) {
    return axiosInstance.post(`/posts`,postData);
}

export function updatePost(post, postId) {
    return axiosInstance.put(`posts/${postId}`, post);
}

export function deletePost(postId) {
    return axiosInstance.delete(`posts/${postId}`);
}
export function getPostById(postId) {
    return axiosInstance.get(`posts/${postId}`);
}
export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
