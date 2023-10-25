import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import "../pages/pageCss/SpecificPost.css";

export default function SpecificPost() {
    const { postId } = useParams(); // Get postId from the URL

    const [post, setPost] = useState(null);

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
        <div>
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <p>Størrelse: {post.details.size}</p>
            <p>Tilstand: {post.details.quality}</p>
            <p>Pris pr. dag: {post.details.price}</p>
            <p>Udlejer: {post.renterName}</p>
            {/* Other post details can be displayed here */}
        </div>
    );
}
