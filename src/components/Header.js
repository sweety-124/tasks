import React, { useEffect } from "react";


import {Link } from "react-router-dom";
const Header = () => {

  return (
    <>
      <div className="logo">Post </div>
      <nav className="nav">
        <>
          <Link to={{ pathname: `/posts/createpost` }}>
            {<button className="custom-button">Create</button>}
          </Link>
        </>
      </nav>
    </>
  );
};

export default Header;
