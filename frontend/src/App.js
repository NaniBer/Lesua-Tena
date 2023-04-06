import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

const Home = React.lazy(() => import("./Pages/Home"));
const SignUp = React.lazy(() => import("./Pages/SignUp"));
const FamilyPlanning = React.lazy(() => import("./Pages/FamilyPlanning"));
const Signup = React.lazy(() => import("./Pages/SignUp"));
const Login = React.lazy(() => import("./Pages/Login"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planning" element={<FamilyPlanning />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
