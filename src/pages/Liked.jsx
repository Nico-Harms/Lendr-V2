// Lavet af Nicolai 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartStraight } from "@phosphor-icons/react";
import '../components/compCss/Postcard.css';
import sadMascot from "../assets/images/sleepymascot.svg"

export default function Liked() {
    const [likedPosts, setLikedPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve liked posts from local storage or initialize an empty array
        const storedLikedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
        setLikedPosts(storedLikedPosts);
    }, []);

    const handleUnlike = (postId) => {
        // Remove the post with the specified ID from likedPosts
        const updatedLikedPosts = likedPosts.filter((likedPost) => likedPost.id !== postId);
        setLikedPosts(updatedLikedPosts);

        // Update local storage
        localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
    };

    const handleNavigate = (postId) => {
        navigate(`posts/${postId}`);
    };

    return (
        <main className='page'>
            <div className='favoritTekst'><h1 className="likedPostHeader">Dine favoritter</h1>
                <HeartStraight className='postCardIcon'
                    color="#72ca81"
                    weight='fill'
                    size={32} />  </div>
            <section className="likedPostWrapper postCardDisplaySection">
                {likedPosts.length <= 0 ? (
                    <div className='noFavorites'>
                    <p>Du har ingen favoritter endnu</p>
                    <img src={sadMascot} alt="Sleepy Mascot" />
                    </div>
                    
                ) : (
                    likedPosts.map((likedPost) => (
                        <article className='postCard' key={likedPost.id}>
                            <img
                                onClick={() => handleNavigate(likedPost.id)}
                                className='kuffertImg'
                                src={likedPost.image}
                                alt={likedPost.title}
                            />
                            <div className='textInfoWrapper'>
                                <div className='textInfo'>
                                    <h3>{likedPost.title}</h3>
                                    {likedPost.details && (
                                        <>
                                            <p>Størrelse: {likedPost.details.size}</p>
                                            <p>Tilstand: {likedPost.details.quality}</p>
                                            <p>Pris pr. dag: {likedPost.details.price}</p>
                                        </>
                                    )}
                                </div>
                                <div className="iconwrapper">
                                    <HeartStraight
                                        onClick={() => handleUnlike(likedPost.id)}
                                        className='postCardIcon'
                                        color="#72ca81"
                                        weight='fill'
                                        size={32}
                                    />
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </section>
        </main>
    );
}
