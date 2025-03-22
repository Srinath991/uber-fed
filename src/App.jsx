import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptionSignup from "./pages/CaptainSignup";
import CaptionLogin from "./pages/CaptainLogin";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogOut from "./pages/UserLogOut";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectdWrapper";
import CaptainLogOut from "./pages/CaptainLogOut";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/captain/login" element={<CaptionLogin />} />
      <Route path="/captain/signup" element={<CaptionSignup />} />
      <Route
        path="captain/riding"
        element={
          <UserProtectedWrapper>
            <CaptainRiding />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/user/riding"
        element={
          <UserProtectedWrapper>
            <Riding />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/user/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
      <Route path="/user/logout" element={<UserLogOut />} />
      <Route path="/captain/logout" element={<CaptainLogOut />} />
      <Route
        path="/captain/home"
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }
      />
    </Routes>
  );
};

export default App;
