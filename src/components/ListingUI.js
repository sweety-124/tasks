import React, { useEffect,useState } from 'react';
import { store } from '../Store/store';
import { Connect, connect } from 'react-redux';
import {
  createPostAction,
  getPostsAction,
  deletePostAction,
} from '../Store/actions/PostActions';
import Header from '../components/Header';
const ListingUI = () => {
  

  const [posts, setPost] = useState([]);

  useEffect(()=>{
    store.dispatch(getPostsAction())
   const listPosts = store.getState()
   setPost(listPosts.posts.posts)
    console.log('####################',listPosts)
  },[])
  const handleEdit=(id)=>{

  }
  const handleDelete=(id)=>{

  }
  return (
    <>
  
    <div className="container">
    {/* <header className="header">
    <Header/>
  </header>  */}
    <div className="list">
      {posts?.map(item => (
        <div className="item" key={item.id}>
          <h2 className="title">{item.title}</h2>
          <p className="description">{item.body}</p>
          <div className="icons">
          <span className="edit-icon" onClick={() => handleEdit(item.id)}>
           
          </span>
          <span className="close-icon" onClick={() => handleDelete(item.id)}>
         
          </span>
        </div>
        </div>
      ))}
    </div>
  </div>
    </>
   
  );
};

export default ListingUI;
