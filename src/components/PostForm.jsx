import { useEffect, useState } from "react";
import "../components/compCss/Postform.css";
import { getDatabase, ref, push, set } from 'firebase/database';
import { Navigate, useNavigate } from "react-router-dom";
import mascot from "../assets/images/maskot-04.svg"
import plane from "../assets/images/planeChooseImg.svg"
import LocalUserData from "../components/LocalUserData";



export default function PostForm({ savePost, post }) {
    const userData = LocalUserData();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [size, setSize] = useState("");
    const [quality, setQuality] = useState("");
    const [color, setColor] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [price, setPrice] = useState("");
    const [notice, setNotice] = useState("");
    const [renterName, setRenterName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setImage(post.image);
            setPrice(post.price);
            setQuality(post.quality);
            setSize(post.size);
            setColor(post.color);
            setNotice(post.notice);
            setRenterName(post.renterName);
            setAddress(post.address);
        }
    }, [post]);

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file.size < 500000) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = event => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
            setErrorMessage("");
        } else {
            setErrorMessage("The image file must be below 0.5 MB");
        }
    }

    async function uploadImage() {
        const url = `https://firebasestorage.googleapis.com/v0/b/nico-test-589d5.appspot.com/o/${imageFile.name}`;
        const response = await fetch(url, {
            method: "POST",
            body: imageFile,
            headers: { "Content-Type": imageFile.type }
        });
        const data = await response.json();
        console.log(data);
        const imageUrl = `${url}?alt=media`;
        return imageUrl;
    }
    async function handleSubmit(event) {
        event.preventDefault();

        if (!title || !image || !price || !quality || !size || !color || !notice) {
            alert("Venligst udfyld alle felter");
            return;
        }

        const imageUrl = await uploadImage();
        const formData = {
            title: title,
            image: imageUrl,
            price: price,
            quality: quality,
            size: size,
            color: color,
            notice: notice,
        };

        const database = getDatabase();
        const postsRef = ref(database, 'posts');

        const newPostRef = push(postsRef);
        const postKey = newPostRef.key;

        const postData = {
            title: formData.title,
            image: formData.image,
            uid: "fTs84KRoYw5pRZEWCq2Z",
            renterName: userData.firstName,
            address: userData.address,
            details: {
                size: formData.size,
                quality: formData.quality,
                color: formData.color,
                price: formData.price,
                notice: formData.notice,
            },
        };

        set(newPostRef, postData);

        savePost(formData);

        // Display a success message
        alert('Opslag oprettet');
        navigate('/home');
    }

    return (
        <form className="postformWrapper" onSubmit={handleSubmit}>
            <h1 className="postformH1">Indtast Oplysninger</h1>
            <div className="test">
                <label className="postformLabel">
                    <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
                    <div className="image-preview" src={image} alt="Choose" onError={event => (event.target.src)} >
                        <img src={mascot} alt="Mascot" className="mascotChooseImg" />
                        <img src={plane} alt="plane" className="planeChooseImg" />
                        <p>Billede mangler</p>
                        <p>Klik her for at tilføje</p>
                    </div>
                </label>
                <div className="input-container">
                    <label className="postformLabel" htmlFor="brand">Mærke på kuffert</label>
                    <input name="brand" className="postformInput" type="text" value={title} placeholder="Indtast mærke på kuffert.." onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="input-container">
                    <label className="postformLabel" htmlFor="size">Størrelse</label>
                    <select className="postformSelect" name="size" value={size} onChange={e => setSize(e.target.value)}>
                        <option value="">Str (25L - 105L)</option>
                        <option value="25 L">25 L</option>
                        <option value="40 L">40 L</option>
                        <option value="70 L">70 L</option>
                        <option value="105 L">105 L</option>
                    </select>
                </div>
                <div className="input-container">
                    <label className="postformLabel" htmlFor="quality">Tilstand</label>
                    <select className="postformSelect" name="quality" value={quality} onChange={e => setQuality(e.target.value)}>
                        <option value="">Vælg tilstand</option>
                        <option value="Meget brugt">Meget brugt</option>
                        <option value="Brugt">Brugt</option>
                        <option value="Lidt brugt">Lidt brugt</option>
                        <option value="Som ny">Som ny</option>

                    </select>
                </div>

                <div className="color-wrapper">
                    <label className="color-label" htmlFor="colors">Farver </label>
                    <div className="color-container">
                        <div className="color-inputs">
                            <label className="color-box color-black">
                                <input type="radio" name="color" value="black" onChange={() => setColor("black")} checked={color === "black"} />
                            </label>


                            <label className="color-box color-white">
                                <input type="radio" name="color" value="white" onClick={() => setColor("white")} checked={color === "white"} />
                            </label>

                            <label className="color-box color-gray">
                                <input type="radio" name="color" value="gray" onClick={() => setColor("gray")} checked={color === "gray"} />
                            </label>

                            <label className="color-box color-red">
                                <input type="radio" name="color" value="red" onClick={() => setColor("red")} checked={color === "red"} />
                            </label>

                            <label className="color-box color-orange">
                                <input type="radio" name="color" value="orange" onClick={() => setColor("orange")} checked={color === "orange"} />
                            </label>

                            <label className="color-box color-yellow">
                                <input type="radio" name="color" value="yellow" onClick={() => setColor("yellow")} checked={color === "yellow"} />
                            </label>

                            <label className="color-box color-pink">
                                <input type="radio" name="color" value="pink" onClick={() => setColor("pink")} checked={color === "pink"} />
                            </label>

                            <label className="color-box color-cyan">
                                <input type="radio" name="color" value="cyan" onClick={() => setColor("cyan")} checked={color === "cyan"} />
                            </label>

                            <label className="color-box color-brown">
                                <input type="radio" name="color" value="brown" onClick={() => setColor("brown")} checked={color === "brown"} />
                            </label>

                            <label className="color-box color-blue">
                                <input type="radio" name="color" value="blue" onClick={() => setColor("blue")} checked={color === "blue"} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="input-container">
                    <label htmlFor="price">Lejepris pr. dag</label>
                    <input
                        name="price"
                        type="text"
                        value={price}  // Display the entered value
                        placeholder="Lejepris pr. dag i kr."
                        onChange={e => setPrice(e.target.value.replace(/\D/g, ''))}  // Remove non-numeric characters
                    />
                </div>

                <div className="input-notice">
                    <label htmlFor="notice">Bemærkning(er)</label>
                    <textarea name="notice" className="input-con postformInput" type="text" value={notice} placeholder="Eventuelle bemærkninger skrives her.." onChange={e => setNotice(e.target.value)} />
                </div>

                <div className="text-box">
                    <p className="text-h2">Udregning af depositum</p>
                    <p className="text-p">
                        Dit depositum bliver udregnet automatisk afhængigt af din lejepris, og dage det bliver udlejet -{" "}
                        <u> Klik her for at se mere</u>
                    </p>
                </div>
                <hr className="postformHr" />

                <div className="switchWrapper">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    <p>Accepter Handelsbetingleser</p>
                </div>

                <p className="text-error">{errorMessage}</p>
                <div className="botton-box">
                    <button className="postformButton" type="submit">Opret</button>
                </div>
            </div>
        </form>


    );
}
