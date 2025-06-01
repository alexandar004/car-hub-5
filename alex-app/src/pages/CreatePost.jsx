import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createPost.module.css";

import usePosts from "../hooks/usePosts";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const { addPost, loading } = usePosts();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not found. Please log in.");
      return;
    }

    const newPost = {
      ...form,
      userId: user.id,
    };

    console.log("Creating post:", newPost);

    addPost(newPost)
    navigate("/posts");
  };

  if (loading) {
    return <div>loading...</div>
  }
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Create a Post</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Post Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Post Content"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className={styles.textarea}
            required
          />
          <button type="submit" className={styles.button}>
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
