// Lavet af Nicolai
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { FacebookAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import "../components/compCss/SignInSoMeButton.css";
import FacebookIcon from '../assets/images/facebookicon.svg';

const FacebookSignInButton = () => {
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag

    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({ auth_type: 'reauthenticate' });

    try {
      await signOut(auth);
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='buttonWrapper'>
      <a className='soMeLogin' onClick={handleSignIn} href=" ">
        <img className='soMeIcon' src={FacebookIcon} alt="" />
        <p>Fortsæt med Facebook</p>
      </a>
    </div>
  );
};

export default FacebookSignInButton;
