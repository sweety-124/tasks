import "./App.css";
import ListingUI from "./components/ListingUI";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/editPost";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListingUI />} />
            <Route path="/posts/createpost" element={<CreatePost />} />
            <Route path="/posts/editPost" element={<EditPost />} />
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
        <header className="header">
          <Header />
        </header>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
