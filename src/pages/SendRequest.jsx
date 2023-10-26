import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; // Import useParams
import { X, ArrowLeft } from "@phosphor-icons/react";
import "../pages/pageCss/SendRequest.css";

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

        <main className="sendRequestMain">
            <div className="sendRequestWrapper">
                <div className="arrowWrapper">
                    <ArrowLeft size={32} /><X size={32} />
                </div>
                <section className="rentPeriodWrapper">
                    <div className="periodInfo">
                        <h3>Lejeperiode</h3>
                        <input type="date" name="" id="" />
                        <p>Aktuel pris:</p> <span></span>
                        <p>Depositum:</p> <span></span>
                    </div>
                    <div className="rentPeriodImgWrapper"><img src={post.image} alt="" />
                    </div>
                </section>
                <section className="productInfoWrapper">
                    <h3>Produktinfo</h3>
                    <div className="productInfo">
                        <div>
                            <p>Str.</p>
                            <p>{post.details.size}</p>
                        </div>
                        <div>
                            <p>Mærke.</p>
                            <p>{post.title}</p>
                        </div>
                        <div>
                            <p>Tilstand</p>
                            <p>{post.details.quality}</p>
                        </div>
                        <div>
                            <div>Lokation</div>
                            <p>{post.address}</p>
                        </div>
                    </div>
                </section>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send anmodning</button>
            </div>
        </main >
    )
}