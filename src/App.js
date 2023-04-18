import logo from './logo.svg';
import './App.css';
import ListingUI from './components/ListingUI';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useRoutes,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react';
import CreatePost from './components/CreatePost';
import EditPost from './components/editPost';
function App() {
 
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
        <Route path='/posts' element={<ListingUI/>} />
        <Route path='/posts/createpost' element={<CreatePost/>} />
        <Route path='/posts/editPost' element={<EditPost/>} />
        
    </Routes>
   </BrowserRouter>
  
    </div>
  );
}

export default App;
