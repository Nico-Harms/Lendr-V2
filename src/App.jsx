import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Liked from "./pages/Liked";
import Aftaler from "./pages/Aftaler";
import Profil from "./pages/Profil";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreatePostPage from "./pages/CreatePostPage";
import SpecificPost from "./pages/SpecificPost";
import ChooseCategory from "./pages/ChooseCategory";
<<<<<<< Updated upstream
import SendRequest from "./pages/SendRequest";
=======
import AcceptedDeal from "./pages/AcceptedDeal";
>>>>>>> Stashed changes


export default function App() {
    
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/aftaler" element={<Aftaler />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePostPage />} />
        <Route path="/home/posts/:postId" element={<SpecificPost />} />
        <Route path="/sendrequest/:postId" element={<SendRequest />} />
        <Route path="/choosecategory" element={<ChooseCategory />} />
        <Route path="/accepteddeal" element={<AcceptedDeal />} />
      </Routes>
    </>
  );
}
