

import React, { useEffect, useState } from 'react';
import { store } from '../Store/store';
import { Connect, connect } from 'react-redux';
import {
    createPostAction,
    getPostsAction,
    deletePostAction,
} from '../Store/actions/PostActions';
import { useNavigate, Link } from 'react-router-dom';
const Header = () => {
    const header = document.querySelector('header');
    
    let pathname = window.location.pathname
    useEffect(()=>{
        
        console.log('ssssss',pathname)
    },[pathname])

    return (
        <>

           
            <div className="logo">Post </div>
            <nav className="nav">
                <>
                    <Link
                        to={{ pathname: `/posts/createpost` }}

                    >
                        {
 <button className="custom-button"  >
 Create
</button>
                        }
                       
                    </Link>
                </>
            </nav>
        </>

    );
};

export default Header;
