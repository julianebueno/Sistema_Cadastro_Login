import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="linkHeader" to="/">
        Principal
      </Link>
      <Link className="linkHeader" to="/cadastro">
        Cadastro
      </Link>
      <Link className="linkHeader" to="/login">
        Login
      </Link>
    </header>
  );
}

export default Header;
