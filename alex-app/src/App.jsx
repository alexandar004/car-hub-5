import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostsProvider from "./context/PostContext";

function App() {
  return (
    <Router>
      <PostsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/register" element={<Register />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      </PostsProvider>
    </Router>
  );
}

export default App;
