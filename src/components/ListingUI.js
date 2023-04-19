import React, { useEffect, useState } from "react";
import { store } from "../Store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsAction,
  deletePostAction,
} from "../Store/actions/PostActions";

import { Link } from "react-router-dom";
import { postSelector} from "../Store/selectors/PostSelectors";
import InfiniteScroll from "react-infinite-scroll-component";
import Alert from "./Alert";
const ListingUI = () => {
  const [hasMore, sethasMore] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  async function fetchData() {
    // You can use await here for asynchronous operations

    if (!isLoading) {
      setLoading(true);
      await store.dispatch(getPostsAction(page));
      setPage(page + 1);
      setLoading(false);
    }
  }
  useEffect(() => {
    // Call the fetchData function immediately
    fetchData();
  }, []);

  const listPosts = useSelector(postSelector);

  const handleDelete = (id) => {
    dispatch(deletePostAction(id)).then((response) => {
      if (response.status == 200) {
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    });
  };

  return (
    <>
      <div className="container">
        <InfiniteScroll
          dataLength={listPosts.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={isLoading && <h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          <div className="list">
            {listPosts?.map((item, index) => (
              <div className="item" key={index}>
                <h2 className="title">{item?.title}</h2>
                <p className="description">{item?.body}</p>
                <div className="icons">
                  <Link to={`/posts/editPost`} state={{ from: item }}>
                    <span className="edit-icon"></span>
                  </Link>

                  <span
                    className="close-icon"
                    onClick={() => handleDelete(item?.id)}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {showAlert && (
          <Alert
            type="success"
            message="Deleted Successfully!"
            typeAction="delete"
          />
        )}
      </div>
    </>
  );
};

export default ListingUI;
