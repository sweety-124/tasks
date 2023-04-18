

import React, { useEffect,useState } from 'react';
import { store } from '../Store/store';
import { Connect, connect } from 'react-redux';
import {
  createPostAction,
  getPostsAction,
  deletePostAction,
} from '../Store/actions/PostActions';
import { useNavigate,Link } from 'react-router-dom';
const Header = () => {
  
//     const navigate = useNavigate();
//   const createPost=(id)=>{
//     navigate.push('/createpost');
  
  return (
    <>
  
  <h1>Posts</h1>
    <div className="logo">List </div>
    <nav className="nav">
    <>
    <Link
                                to={{ pathname: `/posts/createpost` }}
                                
                            >
                                <button className="custom-button"  >
      Create
    </button> 
                            </Link>
     </>
    </nav>
    </>
   
  );
};

export default Header;
