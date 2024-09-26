import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="/logo192.png" alt="Logo" className="logoHeader"/>
      <nav>
        <Link className="linkHeader" to="/">
          Principal
        </Link>
        <Link className="linkHeader" to="/cadastro">
          Cadastro
        </Link>
        <Link className="linkHeader" to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
