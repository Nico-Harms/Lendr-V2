import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalUserData from "../components/LocalUserData";
import './compCss/Postcard.css';

export default function PostCard({ post }) {

  const userData = LocalUserData();
  console.log(userData);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`posts/${post.id}`);
  }

  return (
    <article className='postCard' onClick={handleClick}>
      <img className='kuffertImg' src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>Size: {post.size}</p>
      <p>Quality: {post.quality}</p>
      <p>Color: {post.color}</p>
      <p>Price: {post.price}</p>
      <p>Notice: {post.notice}</p>
      <p>Location: {userData.address}</p>
    </article>
  );
}