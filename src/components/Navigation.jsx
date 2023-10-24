import { NavLink, useLocation } from "react-router-dom";
import './compCss/Navigation.css'
import { House, HeartStraight, BagSimple, UserCircle, Plus } from "@phosphor-icons/react";
import bagsSmall from '../assets/images/category-bags.svg'
import suitcasesSmall from '../assets/images/category-suitcases.svg'
import otherSmall from '../assets/images/category-other.svg'


// Kodet af Tobias
export default function Navigation() {

  const location = useLocation();
  const isNavLinkActive = (path) => location.pathname === path;

  const createPost = () => {
    const createBtn = document.querySelector('.createPost');
    const createPlus = document.querySelector('.createWrapper svg');
    const categories = document.querySelectorAll('.img-wrapper');
    const categoryWrapper = document.querySelector('.category-wrapper');

    createBtn.classList.toggle('creating');
    createPlus.classList.toggle('creating');
    categoryWrapper.classList.toggle('creating');
    categories.forEach(category => {
      category.classList.toggle('creating');
    })
  }


  return (
    <div className="navWrapper">
      <nav className="navbar">
        <NavLink to="/home" end> <House size={32} color={isNavLinkActive('/home') ? '#72ca81' : '#031926'} weight={isNavLinkActive('/home') ? 'fill' : 'light'} /> </NavLink>
        <NavLink to="/liked"> <HeartStraight size={32} color={isNavLinkActive('/liked') ? '#72ca81' : '#031926'} weight={isNavLinkActive('/liked') ? 'fill' : 'light'} /> </NavLink>
        <div className="createWrapper">
          <div className="createPost"> </div>
          <Plus onClick={createPost} size={30} weight="light" color="#fafaff" />
          <div className="category-wrapper">
    <NavLink to="/createpost" className="img-wrapper">
        <img src={bagsSmall} alt="#" />
        <p>Rygsække</p>
    </NavLink>
    <NavLink to="/createpost" className="img-wrapper">
        <img src={suitcasesSmall} alt="#" />
        <p>Kufferter</p>
    </NavLink>
    <NavLink to="/createpost" className="img-wrapper">
        <img src={otherSmall} alt="#" />
        <p>Tilbehør</p>
    </NavLink>
</div>
        </div>
        <NavLink to="/aftaler"> <BagSimple size={32} color={isNavLinkActive('/aftaler') ? '#72ca81' : '#031926'} weight={isNavLinkActive('/aftaler') ? 'fill' : 'light'} /> </NavLink>
        <NavLink to="/profil"> <UserCircle size={32} color={isNavLinkActive('/profil') ? '#72ca81' : '#031926'} weight={isNavLinkActive('/profil') ? 'fill' : 'light'} /> </NavLink>
      </nav>
    </div>
  )
}