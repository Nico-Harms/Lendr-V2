import { UserCirclePlus, PencilSimpleLine, Eye, EyeSlash } from "@phosphor-icons/react";
import "../pages/pageCss/ProfilPage.css";
import { useState } from 'react';


export default function Profil() {

    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(<EyeSlash size={32} />);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeIcon(showPassword ? <EyeSlash size={32} /> : <Eye size={32} />);
      };

    return (
        <main>
            <div className="profileTop profile">
                <h2>Din Profil</h2>
                <UserCirclePlus size={100} weight="light" />
            </div>
            <div className="profileEdit">
                <PencilSimpleLine size={32} weight="light" />
                <p>Rediger Oplysninger</p>
            </div>
            <div className='inputWrapper'>
                <label>Navn</label>
                <input className='inputField'
                    required
                    type="text"
                    placeholder="Navn"
                />
            </div>
            <div className='inputWrapper'>
                <label>Efternavn(e)</label>
                <input className='inputField'
                    required
                    type="text"
                    placeholder="Efternavn(e)"
                />
            </div>
            <div className='inputWrapper'>
                <label>Email</label>
                <input className='inputField'
                    required
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className='inputWrapper'>
                <label>Telefonnummer</label>
                <input className='inputField'
                    required
                    type="number"
                    placeholder="+45 12 34 56 78"
                />
            </div>
            <div className='inputWrapper'>
                <label>Adresse</label>
                <input className='inputField'
                    required
                    type="text"
                    placeholder="Adressevej 47, 1111 Bynavn"
                />
            </div>
            <div className='inputWrapper'>
                <label htmlFor="birthday">Fødselsdato</label>
                <input placeholder='11-03-2000' className='inputField' type="date" />
            </div>
            <div className="profileEdit">
                <PencilSimpleLine size={32} weight="light" />
                <p>Rediger Adgangskode</p>
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
        </main>
    )
}