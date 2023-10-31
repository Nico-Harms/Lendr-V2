// Kodet af Tobias

import { UserCirclePlus, PencilSimpleLine, Eye, EyeSlash } from "@phosphor-icons/react";
import "../pages/pageCss/ProfilPage.css";
import { useState } from 'react';
import LocalUserData from "../components/LocalUserData";

export default function Profil() {
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(<EyeSlash size={32} />);
    const [password, setPassword] = useState('');
    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        birthday: '',
    };

    const [editedFirstName, setEditedFirstName] = useState(userData.firstName);
    const [editedLastName, setEditedLastName] = useState(userData.lastName);
    const [editedEmail, setEditedEmail] = useState(userData.email);
    const [editedPhoneNumber, setEditedPhoneNumber] = useState(userData.phoneNumber);
    const [editedAddress, setEditedAddress] = useState(userData.address);
    const [editedBirthday, setEditedBirthday] = useState(userData.birthday);
    // Add similar state variables for other fields as needed.


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeIcon(showPassword ? <EyeSlash size={32} /> : <Eye size={32} />);
    };

    const handleEditClick = () => {
        setEditMode(!editMode);
        // Store the current values for editing
        setEditedFirstName(userData.firstName);
        setEditedLastName(userData.lastName);
        setEditedEmail(userData.email);
        setEditedPhoneNumber(userData.phoneNumber);
        setEditedAddress(userData.address);
        setEditedBirthday(userData.birthday);
        // Set similar values for other fields.
    };

    const handleSaveClick = () => {
        // Save the new information to your data source (e.g., sessionStorage)
        // Update userData with the new values, then save it to sessionStorage
        userData.firstName = editedFirstName;
        userData.lastName = editedLastName;
        userData.email = editedEmail;
        userData.phoneNumber = editedPhoneNumber;
        userData.address = editedAddress;
        userData.birthday = editedBirthday;
        sessionStorage.setItem('userData', JSON.stringify(userData));
        setEditMode(false);
    };



    

    return (
        <main>
            <div className="profileTop profile">
                <h2>Din Profil</h2>
                <UserCirclePlus size={100} weight="light" />
            </div>
            <div className="profileEdit" onClick={handleEditClick}>
                <PencilSimpleLine size={32} weight="light" />
                <p>{editMode ? 'Annuller' : 'Rediger Oplysninger'}</p>
            </div>
            <div className='inputWrapper'>
                <label>Navn</label>
                <input
                    className='inputField'
                    required
                    type="text"
                    placeholder="Navn"
                    value={editMode ? editedFirstName : userData.firstName}
                    readOnly={!editMode}
                    onChange={(e) => setEditedFirstName(e.target.value)}
                />
            </div>
            <div className='inputWrapper'>
                <label>Efternavn(e)</label>
                <input 
                    className='inputField'
                    required
                    type="text"
                    placeholder="Efternavn(e)"
                    value={editMode ? editedLastName : userData.lastName}
                    readOnly={!editMode}
                    onChange={(e) => setEditedLastName(e.target.value)}
                />
            </div>
            <div className='inputWrapper'>
                <label>Email</label>
                <input 
                    className='inputField'
                    required
                    type="email"
                    placeholder="Email"
                    value={editMode ? editedEmail : userData.email}
                    readOnly={!editMode}
                    onChange={(e) => setEditedEmail(e.target.value)}
                />
            </div>
            <div className='inputWrapper'>
                <label>Telefonnummer</label>
                <input 
                    className='inputField'
                    required
                    type="number"
                    placeholder="+45 12 34 56 78"
                    value={editMode ? editedPhoneNumber : userData.phoneNumber}
                    readOnly={!editMode}
                    onChange={(e) => setEditedPhoneNumber(e.target.value)}
                />
            </div>
            <div className='inputWrapper'>
                <label>Adresse</label>
                <input 
                    className='inputField'
                    required
                    type="text"
                    placeholder="Adressevej 47, 1111 Bynavn"
                    value={editMode ? editedAddress : userData.address}
                    readOnly={!editMode}
                    onChange={(e) => setEditedAddress(e.target.value)}
                />
            </div>
            <div className='inputWrapper'>
                <label htmlFor="birthday">Fødselsdato</label>
                <input 
                    className='inputField' 
                    type="date" 
                    value={editMode ? editedBirthday : userData.birthday} 
                    readOnly={!editMode}
                    onChange={(e) => setEditedBirthday(e.target.value)}
                />
            </div>
            {editMode && (
                <button className="saveButton" onClick={handleSaveClick}>Gem Oplysninger</button>
            )}
            <div className="profileEdit">
                <PencilSimpleLine size={32} weight="light" />
                <p>Rediger Adgangskode</p>
            </div>
            <div className='inputWrapper passwordWrapper'>
                <label>Adgangskode</label>
                <input 
                    className='inputField'
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Adgangskode"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={togglePasswordVisibility}>{eyeIcon}</div>
            </div>
        </main>
    );
}
