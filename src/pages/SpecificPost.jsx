import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import "../pages/pageCss/SpecificPost.css";
import { useNavigate } from 'react-router-dom';

export default function SpecificPost() {
  const { postId } = useParams(); // Get postId from the URL

  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/sendrequest/${postId}`);
  }

  useEffect(() => {
    async function getPost() {
      const url = `https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts/${postId}.json`;
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setPost({ id: postId, ...data });
      } else {
        setPost(null);
      }
    }
    getPost();
  }, [postId]);

  if (!post) {
    return <div>Post not found</div>;
  }


  return (
    <main>
      <div className="productpost">
        <img className="imgpost" src={post.image} alt="" />
        <h2 className="centered-h2">Kuffert Informationer</h2>

        <div className="producttext">
          <div className="column">
            <div className="row">
              <p>Størrelse:</p>
              <p>{post.details.size}</p>
            </div>
            <div className="row">
              <p>Tilstand:</p>
              <p>{post.details.quality}</p>
            </div>
            <div className="row">
              <p>Dagspris:</p>
              <p>{post.details.price}</p>
            </div>
            <div className="row">
              <p>Mærke:</p>
              <p>{post.title}</p>
            </div>
          </div>
        </div>
        <div>
          <p className='address'>{post.address}</p>
        </div>

      </div>
      <div className="renter">
        <p><span className="bold-text">Udlejer: </span></p>

        <p>{post.renterName}</p>
        <div className="star-icon">

        </div>
      </div>
      <button onClick={handleClick}>Vælg lejeperiode</button>
    </main>
  );
}