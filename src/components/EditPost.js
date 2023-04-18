import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getPostsAction, getPostsActionById,updatePostAction } from '../Store/actions/PostActions';
import { store } from '../Store/store';
export default function EditPost(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [post, setPost] = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const { state } = location
    useEffect(() => {
        console.log('state',state.from.title);
        setTitle(state.from.title)
        setBody(state.from.body)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        const postData = {
            title,
            body
        };

        dispatch(updatePostAction(postData,state.from.id));
        // Reset form fields after submission
        setTitle("");
        setBody("");
    };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Handle form submission logic here
    //   console.log("Title:", title);
    //   console.log("Content:", body);
    //   const postData = {
    //     title,
    //     body,
    // };

    // dispatch(createPostAction(postData));
    //   // Reset form fields after submission
    //   setTitle("");
    //   setBody("");
    // };



    return (
        <div className="post-form-container">
            <h1>Edit Post</h1>
            <form className="post-form" onSubmit={handleSubmit}>
                <input
                    type="text"

                    placeholder="Title"
                    value={title}
                    defaultValue={state.from.title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="post-form-input"
                />
                <textarea
                    placeholder="Content"
                    defaultValue={state.from.body}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="post-form-textarea"
                ></textarea>
                <button type="submit" className="post-form-button">
                    Submit
                </button>
            </form>
        </div>
    );
}