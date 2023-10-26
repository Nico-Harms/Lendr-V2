import React, { useState } from 'react';
import LoginSystem from "../components/LoginSystem";
import SignInWithGoogle from "../components/SignInWithGoogle";
import SignInWithFacebook from "../components/SignInWithFacebook";
import "../pages/pageCss/LoginPage.css";
import IntroVideo from "../assets/videos/introVid.mp4";

export default function LoginPage() {
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <main>
            {!videoEnded ? (
                <video
                    className="loginVid"
                    src={IntroVideo}
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <>
                    <div className="headingWrap">
                        <h2>Log på <span className="lendrHeading">Lendr</span></h2>
                    </div>
                    <div className="soMeLoginWrapper">
                        <SignInWithGoogle />
                        <SignInWithFacebook />
                    </div>
                    <hr className="loginpageHr" />
                    <LoginSystem />
                </>
            )}
        </main>
    );
}
