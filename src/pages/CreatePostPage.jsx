import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

export default function CreatePage() {
    const navigate = useNavigate();
    const [postCreated, setPostCreated] = useState(false);

    async function createPost() {
        const url = 'https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
        const response = await fetch(url, {
            method: 'POST',
            // ... other configurations
        });

        if (response.ok) {
            setPostCreated(true);
        } else {
            console.log('Undskyld, noget gik galt');
        }
    }

    const handleOkClick = () => {
        navigate('/');
    };

    return (
        <main className="page">
            {postCreated && (
                <div className="alert-message">
                    <p>Dit opslag er blevet oprettet</p>
                    <button onClick={handleOkClick}>Ok!</button>
                </div>
            )}
            {!postCreated && <PostForm savePost={createPost} />}
        </main>
    );
}
