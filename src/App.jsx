import Navigation from "./components/Navigation";
//import app css 
import './App.css'
//import route, routes
import { Route, Routes } from "react-router-dom";
//import pages
import Liked from "./pages/Liked";
import Aftaler from "./pages/Aftaler";
import Profil from "./pages/Profil";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Header from "./components/header";
import CreatePostPage from './pages/CreatePostPage';


export default function App() {

  return (
    <>
      <Header/>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/aftaler" element={<Aftaler />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePostPage />} />
        </Routes>
    </>
  );
}

