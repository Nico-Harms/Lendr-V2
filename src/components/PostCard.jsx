import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './compCss/Postcard.css';
import { HeartStraight, MapPin } from "@phosphor-icons/react";

  export default function PostCard({ post }) {
    const [isLiked, setIsLiked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      // Check if the post is already liked when the component mounts
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
      setIsLiked(likedPosts.some((likedPost) => likedPost.id === post.id));
    }, [post.id]);

    function handleClick() {
      navigate(`posts/${post.id}`);
    }

    function handleLike() {
      // Toggle the like state
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);

      // Retrieve liked posts from local storage or initialize an empty array
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];

      // Update liked posts based on the like state
      if (newLikedState) {
        const updatedLikedPosts = [...likedPosts, post];
        localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      } else {
        const updatedLikedPosts = likedPosts.filter((likedPost) => likedPost.id !== post.id);
        localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      }
    }

  return (
    <article className='postCard'>
      <img onClick={handleClick} className='kuffertImg' src={post.image} alt={post.title} />
      <div className='textInfoWrapper'>
        <div className='textInfo'>
          <h3>{post.title}</h3>
          <p>Størrelse: {post.details.size}</p>
          <p>Tilstand: {post.details.quality}</p>
          <p>Pris pr. dag: {post.details.price}</p>
        </div>
        <div className="iconwrapper">
          <div className='mapPinWrapper'>
            <MapPin className='postCardIcon' size={32} />
            <span>2 km</span>
          </div>
          <HeartStraight
            onClick={handleLike}
            className='postCardIcon'
            color={isLiked ? '#72ca81' : '#72ca81'}
            weight={isLiked ? 'fill' : 'light'}
            size={32}
          />
        </div>
      </div>
    </article>
  );
}
