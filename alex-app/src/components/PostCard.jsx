import styles from './postCard.module.css';

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title} - {post.userId}</h2>
      <p>Content: {post.body}</p>
    </div>
  );
}
