import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}

export default App;
