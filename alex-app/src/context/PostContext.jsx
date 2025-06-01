import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostsContext = createContext();

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data))
      .finally(() => setLoading(false));
  }, []);

  const addPost = (post) => {
    setLoading(true);
    setPosts(prev => [post, ...prev]);
    setLoading(false);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, loading }}>
      {children}
    </PostsContext.Provider>
  );
}
