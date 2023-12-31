import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Liked from "./pages/Liked";
import Deals from "./pages/Deals";
import Profil from "./pages/Profil";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreatePostPage from "./pages/CreatePostPage";
import SpecificPost from "./pages/SpecificPost";
import ChooseCategory from "./pages/ChooseCategory";
import SendRequest from "./pages/SendRequest";
import AcceptedDeal from "./pages/AcceptedDeal";
import Request from "./pages/Request";


export default function App() {
    
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/aftaler" element={<Deals />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePostPage />} />
        <Route path="/home/posts/:postId" element={<SpecificPost />} />
        <Route path="liked/posts/:postId" element={<SpecificPost />} />
        <Route path="/sendrequest/:postId" element={<SendRequest />} />
        <Route path="/choosecategory" element={<ChooseCategory />} />
        <Route path="/accepteddeal" element={<AcceptedDeal />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </>
  );
}
