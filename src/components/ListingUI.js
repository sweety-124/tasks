import React, { useEffect, useState } from 'react';
import { store } from '../Store/store';
import { Connect, connect, useSelector } from 'react-redux';
import {
  createPostAction,
  getPostsAction,
  deletePostAction,
} from '../Store/actions/PostActions';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';
import { postSelector, selectPost } from '../Store/selectors/PostSelectors';
import InfiniteScroll from 'react-infinite-scroll-component';
const ListingUI = () => {

  const [hasMore , sethasMore] = useState(true)
  
  const [isLoading , setLoading] = useState(false)

  const [page , setPage] = useState(0)
  

  async function fetchData() {
    // You can use await here for asynchronous operations
    console.log("NEXTTT ");
   
    if(!isLoading){
      setLoading(true)
      await store.dispatch(getPostsAction(page));
      setPage(page + 1);
      setLoading(false);
    }



  }
  useEffect(() => {
    // Call the fetchData function immediately
    fetchData();
  }, [])

  const listPosts = useSelector(postSelector)

  const handleDelete = (id) => {
    store.dispatch(deletePostAction(id))
  }

 
  return (
    <>
      {console.log(listPosts, "REDUCT")}

      <div className="container">

        <header className="header">
          <Header />
        </header>


        <InfiniteScroll
          dataLength={listPosts.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={isLoading && <h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          <div className="list">
            {listPosts?.map((item,index)=> (
              <div className="item" key={index}>
                <h2 className="title">{item?.title}</h2>
                <p className="description">{item?.body}</p>
                <div className="icons">
                  <Link to={`/posts/editPost`} state={{ from: item }}>
                    <span className="edit-icon">
                    </span>
                  </Link>

                  <span className="close-icon" onClick={() => handleDelete(item?.id)}>

                  </span>
                </div>
              </div>
            ))}
          </div>

        </InfiniteScroll>
      </div>
    </>

  );
};

export default ListingUI;
