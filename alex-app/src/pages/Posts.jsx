import usePosts from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import styles from './posts.module.css';

export default function Posts() {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.postsContainer}>
      {posts?.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
