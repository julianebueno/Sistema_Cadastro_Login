import { BrowserRouter, Route, Routes } from "react-router-dom";

import Principal from "./pages/Principal/index.js";
import Cadastro from "./pages/Cadastro/index.js";
import Login from "./pages/Login/index.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
