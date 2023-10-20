import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function CreatePage() {
    const navigate = useNavigate();

    async function createPost() {


        const url = "https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        const response = await fetch(url, {
            method: "POST",
     

            // Fix at når man laver en post, bliver man navigeret tilbage til forsiden, eller for en alert message 
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Nyt opslag er lavet!: ", data);
          //  navigate("/");
        } else {
            console.log("Undskyld, noget gik ");
        }
    }

    return (
        <main className="page">
      
            <PostForm savePost={createPost} />
        </main>
    );
}