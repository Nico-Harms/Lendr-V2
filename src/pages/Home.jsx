// Lavet af Nicolai 

import LocalUserData from "../components/LocalUserData";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import Filter from "../components/Filter";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const userData = LocalUserData();

    useEffect(() => {
        async function getPosts() {
            const url = "https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            setPosts(postsArray);
        }
        getPosts();
    }, []);
    const handleSort = (option) => {
        setSortOption(option);
        const sortedPosts = [...posts];

        if (option === "lowestPrice") {
            sortedPosts.sort((a, b) => a.details.price - b.details.price);
        } else if (option === "highestPrice") {
            sortedPosts.sort((a, b) => b.details.price - a.details.price);
        } else if (option === "newestFirst") { // Change to "newestFirst"
            sortedPosts.sort((a, b) => b.details.timestamp - a.details.timestamp);
        } else if (option === "oldestFirst") {
        sortedPosts.sort((a, b) => a.details.timestamp - b.details.timestamp);
        }
        setPosts([...sortedPosts]); 
    }

    return (
        <main className="page">
            <Filter handleSort={handleSort} />
            <section className="grid-container postCardDisplaySection">
            <h2 style={{ fontSize: '2.2rem', textAlign: 'center' }} className="homeHeader">
  Opslag nær dig
</h2>
                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
            </section>
        </main>
    );
}
