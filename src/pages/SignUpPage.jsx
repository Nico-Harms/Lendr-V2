import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeSlash } from "@phosphor-icons/react";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const [eyeIcon, setEyeIcon] = useState(<EyeSlash size={32} />);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const { state } = location;

        if (state && state.email) {
            const { email } = state;
            setEmail(email);

            if (state.firstName) {
                const { firstName } = state;
                setFirstName(firstName);
            }

            if (state.lastName) {
                const { lastName } = state;
                setLastName(lastName);
            }
        }
    }, [location.state]);

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const firestore = getFirestore(app);
            const userDoc = await setDoc(doc(firestore, 'users', user.uid), {
                firstName,
                lastName,
                email,
                address,
                phoneNumber,
                birthday,
            });

            console.log('User created:', userDoc);

            // Pass the form data to SignupLocalStorage component and store it in local storage
            const formData = {
                email,
                firstName,
                lastName,
                address,
                phoneNumber,
                birthday,
            };
            sessionStorage.setItem('userData', JSON.stringify(formData));
            console.log(formData)

            navigate('/home');

        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeIcon(showPassword ? <EyeSlash size={32} /> : <Eye size={32} />);
    };

    return (
        <main className='signupMain'>
            <div>
                <h2>Tilmeld <span className="lendrHeading">Lendr</span></h2>
            </div>
            <form onSubmit={handleSignup}>
                <div className='inputWrapper'>
                    <label htmlFor="email">Email</label>
                    <input placeholder='Indtast email' className='inputField' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='inputWrapper'>
                    <label htmlFor="firstName">Fornavn</label>
                    <input placeholder='Indtast fornavn' className='inputField' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='inputWrapper'>
                    <label htmlFor="lastName">Efternavn</label>
                    <input placeholder='Indtast efternavn(e)' className='inputField' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='inputWrapper passwordWrapper'>
                    <label htmlFor="password">Adgangskode</label>
                    <input placeholder='Indtast adgangskode' className='inputField' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div onClick={togglePasswordVisibility}>{eyeIcon}</div>
                </div>
                <div className='inputWrapper'>
                    <label htmlFor="address">Adresse</label>
                    <input placeholder='Indtast adresse' className='inputField' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className='inputWrapper'>
                    <label htmlFor="phoneNumber">Telefonnummer</label>
                    <input placeholder='Indtast telefonnummer' className='inputField' type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className='inputWrapper'>
                    <label htmlFor="birthday">Fødselsdato</label>
                    <input placeholder='11-03-2000' className='inputField' type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>
                <div className='inputWrapper'>
                    <label htmlFor="gender">Køn</label>
                    <div className='selectGenderWrapper'>
                        <div>
                            <label className='genderLabel' htmlFor="man">Mand</label>
                            <input type="radio" name="gender" id="" />
                        </div>
                        <div>
                            <label className='genderLabel' htmlFor="woman">Kvinde</label>
                            <input type="radio" name="gender" id="" />
                        </div>
                        <div>
                            <label className='genderLabel' htmlFor="other">Andet</label>
                            <input type="radio" name="gender" id="" />
                        </div>
                    </div>
                </div>
                <button className='loginBtn soMeLogin' type="submit">Tilmeld</button>

                <p className='formerUser'>Har du allerede en bruger? <span>Log på</span></p>
            </form>
        </main>
    );
};

export default SignupPage;
