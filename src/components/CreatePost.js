import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPostAction } from '../Store/actions/PostActions';

export default function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    // function onCreatePost(e) {
    //     e.preventDefault();
    //     const postData = {
    //         title,
    //         description,
    //     };

    //     dispatch(createPostAction(postData, props.history));
    // }



    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        const postData = {
            title,
            body,
        };

        dispatch(createPostAction(postData));
        // Reset form fields after submission
        setTitle("");
        setBody("");
    };



    return (
        <div className="post-form-container">
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit} className="post-form">
                <input
                    type="text"

                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="post-form-input"
                />
                <textarea
                    placeholder="Content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="post-form-textarea"
                ></textarea>
                <div style={{display: 'flex',
  justifyContent: 'space-between'}}>
      <Link to={`/`}>
    <button  className="post-form-back">
                    Back
                </button>
                </Link>
                <button type="submit" className="post-form-button">
                    Submit
                </button>
                
                
                </div>
            </form>
        </div>
    );
}