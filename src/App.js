import logo from './logo.svg';
import './App.css';
import ListingUI from './components/ListingUI';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useRoutes,
  Link,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react';
import CreatePost from './components/CreatePost';
import EditPost from './components/editPost';
function App() {
 
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
      <Route path="/">
        <Route  index element={<ListingUI/>} />
        <Route path='/posts/createpost' element={<CreatePost/>} />
        <Route path='/posts/editPost' element={<EditPost/>} />
      </Route>

        
    </Routes>
   </BrowserRouter>
  
    </div>
  );
}
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
