import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,useLocation } from 'react-router-dom';
import { getPostsAction,getPostsActionById} from '../Store/actions/PostActions';
import { store } from '../Store/store';
export default function EditPost(props) {
    const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const {state} = location
        useEffect(()=>{

            async function fetchDataById() {
              // You can use await here for asynchronous operations
               await store.dispatch(getPostsActionById(state?.from))
              const listPosts =  store.getState()
              if(listPosts.getPostById)
              {
                setPost(listPosts.getPostById)
              }
              console.log('list post',listPosts)
              // ... do something with the response
            }
          
            // Call the fetchData function immediately
            fetchDataById();
            
        
   
        //    setPost(listPosts.posts.posts)
          })
       
      
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
        <form className="post-form">
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
          <button type="submit" className="post-form-button">
            Submit
          </button>
        </form>
      </div>
          );
}