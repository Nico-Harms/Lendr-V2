//   Lavet af Nicolai  

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import GoogleIcon from '../assets/images/googleicon.svg';
import { useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig';



const GoogleSignInButton = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const firestore = getFirestore(app);
      const usersCollection = collection(firestore, 'users');

      try {
        const querySnapshot = await getDocs(usersCollection);

        const usersData = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          usersData.push(userData);
        });

        setUsers(usersData);

        console.log(usersData);

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      let firstName = '';
      let lastName = '';

      if (user.displayName) {
        const nameParts = user.displayName.split(' ');
        firstName = nameParts[0];
        lastName = nameParts.slice(1).join(' ');
      }

      const userRef = doc(firestore, 'users', user.uid);

      try {
        const userSnapshot = await getDoc(userRef);


        if (!userSnapshot.exists()) {
          navigate('/signup', {
            state: { email: user.email, firstName: firstName, lastName: lastName },
          });
        } else {

          const foundUser = users.find(existingUser => existingUser.email === user.email);


          if (foundUser) {
            // Store the user's data in local storage
            sessionStorage.setItem('userData', JSON.stringify(foundUser));
            console.log('User data stored in local storage:', foundUser);
          }
          navigate('/home');
        }
      } catch (error) {
        console.error('Error getting user snapshot:', error);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className='buttonWrapper'>
      <a className='soMeLogin' onClick={handleSignIn} href=" ">
        <img className='soMeIcon' src={GoogleIcon} alt="" />
        <p>Fortsæt med Google</p>
      </a>
    </div>
  );
};

export default GoogleSignInButton;
