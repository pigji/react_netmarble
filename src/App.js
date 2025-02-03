import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AllGames from "./pages/AllGames";
import Store from "./pages/Store";

import { createContext } from "react";

const DataContext = createContext();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allgames" element={<AllGames />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
export { DataContext };
