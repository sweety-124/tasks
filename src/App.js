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


function App() {
 
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
        <Route path='/posts' element={<ListingUI/>} />
        <Route path='/posts/createpost' element={<CreatePost/>} />

        
    </Routes>
   </BrowserRouter>
  
    </div>
  );
}

export default App;
