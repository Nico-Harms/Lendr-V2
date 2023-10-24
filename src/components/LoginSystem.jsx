import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import './compCss/LoginSystem.css'
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { app } from '../firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';



const LoginSystem = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(<EyeSlash size={32} />);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    const autoLogin = () => {
      const userData = localStorage.getItem('userData');
      const checked = localStorage.getItem('checked');
  
      if (userData && checked === 'true') {
        navigate('/home');
      }
    }
    autoLogin();
  }, []);

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

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');

      // Check if the entered email matches any email in usersData
      const foundUser = users.find(user => user.email === email);

      if (foundUser) {
        // Store the user's data in local storage
        sessionStorage.setItem('userData', JSON.stringify(foundUser));
        console.log('User data stored in local storage:', foundUser);
      }

      navigate('/home');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError('Emails must contain a @ sign');
      } else {
        setError('Incorrect information');
      }
    }
  };


  const handleSignUp = () => {
    navigate('/signup');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(showPassword ? <EyeSlash size={32} /> : <Eye size={32} />);
  };

  const rememberMe = () => {
    const switchInput = document.querySelector('.switchInput');
    if (switchInput.checked) {
      localStorage.setItem('checked', true);
      console.log('checked');
    } else {
      switchInput.checked = false;
      localStorage.setItem('checked', false);
      console.log('unchecked');
    }
  }
  


  return (
    <>
      <div className='loginWrapper'>
        <div className='inputWrapper'>
          <label>Email eller brugernavn</label>
          <input className='inputField'
            required
            type="email"
            placeholder="Email eller brugernavn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='inputWrapper passwordWrapper'>
          <label>Adgangskode</label>
          <input className='inputField'
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={togglePasswordVisibility}>{eyeIcon}</div>
        </div>
        <div className="switchWrapper">
          <label className="switch">
            <input className='switchInput' type="checkbox" onChange={rememberMe} />
            <span className="slider"></span>
          </label>
          <p>Husk mig</p>
        </div>
      </div>

      <div className="btnWrapper">
        <div>
          <button className='soMeLogin loginBtn' onClick={handleLogin}>Login</button>
          <a>Glemt adgangskode?</a>
        </div>
        <div className='createUser'>
          <p>Har du ikke en bruger?</p>
          <a onClick={handleSignUp}>Tilmeld</a>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
}

export default LoginSystem;