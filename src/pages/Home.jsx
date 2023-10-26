import LocalUserData from "../components/LocalUserData";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import Filter from "../components/Filter";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const userData = LocalUserData();

    useEffect(() => {
        async function getPosts() {
            const url = "https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPosts(postsArray);
        }
        getPosts();
    }, []);

    return (
        
        <main className="page">
                        <Filter />

            <section className="grid-container postCardDisplaySection">

                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
            </section>
        </main>

    );
}