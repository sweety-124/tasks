import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  updatePostAction,
} from "../Store/actions/PostActions";
import Alert from "./Alert";
export default function EditPost(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;
  useEffect(() => {
    setTitle(state.from.title);
    setBody(state.from.body);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const postData = {
      title,
      body,
    };
    dispatch(updatePostAction(postData, Number(state.from.id) + 1)).then(
      (response) => {
        // Log the response data
        // Update the component's state with the response data
        if (response.status == 200) {
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      }
    );
    // let response =dispatch(updatePostAction(postData,Number(state.from.id)+1))

    // Reset form fields after submission
  };

  return (
    <div className="post-form-container">
      {/* <h1>`Edit${Number(state.from.id)+1)}`</h1> */}
      <h1>{`Edit ${state.from.title}`}</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="post-form-input"
        />
        <textarea
          placeholder="Content"
          style={{ height: "143px" }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="post-form-textarea"
        ></textarea>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/`}>
            <button className="post-form-back">Back</button>
          </Link>
          <button type="submit" className="post-form-button">
            Submit
          </button>
        </div>
      </form>
      {showAlert && (
        <Alert
          type="success"
          message="Successfully Updated!"
          typeAction="edit"
        />
      )}
    </div>
  );
}
