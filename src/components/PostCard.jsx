import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`posts/${post.id}`);
  }

  return (
    <article onClick={handleClick}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>Size: {post.size}</p>
      <p>Quality: {post.quality}</p>
      <p>Color: {post.color}</p>
      <p>Price: {post.price}</p>
      <p>Notice: {post.notice}</p>
    </article>
  );
}