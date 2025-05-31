import { useState, useEffect } from "react";
// import axios from "axios";

export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    })
    .finally(() => setLoading(false)); 
}, []);

  return { posts, loading };
}
