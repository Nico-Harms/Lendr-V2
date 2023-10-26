import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; // Import useParams

export default function SendRequest() {

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

        <main>Pik</main>
    )
}