import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; // Import useParams
import { X, ArrowLeft } from "@phosphor-icons/react";

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

        <main>
            <div className="arrowWrapper">
                <ArrowLeft size={32} /><X size={32} />
            </div>
            <section className="rentPeriod">
                <h3>Lejeperiode</h3>
                <input type="date" name="" id="" />
                <p>Aktuel pris:</p> <span></span>
                <p>Depositum:</p> <span></span>
            </section>
            
        </main>
    )
}